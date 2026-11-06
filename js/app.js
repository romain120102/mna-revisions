(function () {
  var app = document.getElementById('app');
  var KEY = 'mna_v1';
  var store = load();
  var S = null; // état du test affiché à l'écran (entraînement ou examen)
  var EF = { c: 'all', st: 'all' }; // filtres de la page « Mes erreurs »

  function load() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
    s = s || {};
    s.read = s.read || {}; s.stat = s.stat || {}; s.wrong = s.wrong || {}; s.fails = s.fails || {};
    s.cur = s.cur || { train: null, exam: null };
    // anciens examens (avant l'historique) : on les garde, sans détail des erreurs
    if (!s.hist) s.hist = (s.exams || []).map(function (e, k) { return { id: 'old' + k, type: 'exam', d: e.d, s: e.s, t: e.t, sec: e.sec, wrong: null }; });
    // anciennes erreurs en attente : comptées au moins une fois
    Object.keys(s.wrong).forEach(function (id) { if (!s.fails[id]) s.fails[id] = 1; });
    return s;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function C(id) { return MNA.courses[id]; }
  function allQs(ids) { var r = []; (ids || MNA.order).forEach(function (id) { r = r.concat(C(id).qs); }); return r; }
  function qById(id) { var p = String(id).split('-'), c = C(p[0]); return c ? c.qs[+p[1]] : null; }
  function pct(cid) {
    var qs = C(cid).qs, seen = 0, ok = 0;
    qs.forEach(function (q) { var s = store.stat[q.id]; if (s) { seen++; if (s.last) ok++; } });
    return { seen: seen, ok: ok, total: qs.length };
  }
  function record(q, good) {
    var s = store.stat[q.id] || {};
    s.last = good ? 1 : 0; store.stat[q.id] = s;
    if (good) delete store.wrong[q.id]; else { store.wrong[q.id] = 1; store.fails[q.id] = (store.fails[q.id] || 0) + 1; }
    save();
  }
  function everWrong() { return Object.keys(store.fails).filter(function (id) { return store.fails[id] > 0 && qById(id); }); }
  function fmt(sec) { var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
  function now() { return new Date().toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }

  /* ---------- Test en cours : sauvegarde / reprise ---------- */
  function elapsed() { return (S.el || 0) + (S.t0 ? Date.now() - S.t0 : 0); }
  function pause() { if (S && S.mode === 'exam' && S.t0) { S.el = elapsed(); S.t0 = null; } }
  function persist() {
    if (!S || S.done) return;
    if (S.mode === 'exam') { S.el = elapsed(); if (S.t0) S.t0 = Date.now(); }
    store.cur[S.mode] = {
      mode: S.mode, title: S.title || '', i: S.i, el: S.el || 0, start: S.start,
      items: S.items.map(function (x) { return { id: x.q.id, perm: x.perm, pick: x.pick }; })
    };
    save();
  }
  function restore(o) {
    if (!o) return null;
    var items = o.items.filter(function (x) { return qById(x.id); }).map(function (x) { return { q: qById(x.id), perm: x.perm, pick: x.pick }; });
    if (!items.length) return null;
    return {
      mode: o.mode, title: o.title, items: items, i: Math.min(o.i || 0, items.length - 1), el: o.el || 0, start: o.start,
      good: items.filter(function (x) { return x.pick === x.q.a; }).length, submitted: false, confirm: false, t0: null
    };
  }
  function bannerHtml(mode) {
    var c = store.cur[mode]; if (!c) return '';
    var n = c.items.length, ans = c.items.filter(function (x) { return x.pick !== null; }).length;
    var lbl = mode === 'exam' ? 'Examen blanc' : (c.title || 'Entraînement');
    return '<div class="box tip"><b>▶ ' + esc(lbl) + ' en cours</b> — ' + ans + ' / ' + n + ' répondues' + (mode === 'exam' ? ' · temps ' + fmt(Math.floor((c.el || 0) / 1000)) : '') +
      '<div class="row"><a class="btn small" href="#/resume/' + mode + '">Reprendre</a><button class="btn gray small" data-abandon="' + mode + '">Abandonner</button></div></div>';
  }
  function bindBanners() {
    app.querySelectorAll('[data-abandon]').forEach(function (b) {
      b.onclick = function () {
        if (!confirm('Abandonner ce test en cours ? Il ne sera pas ajouté à l\'historique.')) return;
        store.cur[b.dataset.abandon] = null; save(); route();
      };
    });
  }
  function startExamClock() {
    clearInterval(route.t);
    route.t = setInterval(function () { var el = document.getElementById('tm'); if (el && S) el.textContent = fmt(Math.floor(elapsed() / 1000)); }, 1000);
  }
  function leave() { // on quitte l'écran d'un test : on le met de côté
    if (S && !S.done) { pause(); persist(); }
    S = null;
  }
  window.addEventListener('pagehide', function () { if (S && !S.done) { pause(); persist(); } });
  window.addEventListener('pageshow', function () { if (S && S.mode === 'exam' && !S.done && !S.t0) S.t0 = Date.now(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden && S && !S.done) persist(); });

  /* ---------- Routeur ---------- */
  function route() {
    clearInterval(route.t);
    leave();
    var h = location.hash.replace(/^#\/?/, '').split('/');
    var page = h[0] || 'home';
    document.querySelectorAll('[data-nav]').forEach(function (a) { a.classList.toggle('on', a.dataset.nav === (page === 'fiche' ? 'fiches' : page === 'resume' ? h[1] : page)); });
    window.scrollTo(0, 0);
    if (page === 'home') home();
    else if (page === 'fiches') fiches();
    else if (page === 'fiche') fiche(h[1]);
    else if (page === 'train') trainSetup(h[1]);
    else if (page === 'exam') examSetup();
    else if (page === 'errors') errorsPage();
    else if (page === 'history') historyPage();
    else if (page === 'resume') { if (h[1] === 'exam') resumeExam(); else resumeTrain(); }
    else home();
  }
  window.addEventListener('hashchange', route);

  /* ---------- Accueil ---------- */
  function home() {
    var h = '<h1>M&amp;A – Révisions</h1><p class="lead">Fiches pour comprendre, entraînement avec correction détaillée, examen blanc de 40 QCM.</p>';
    h += bannerHtml('train') + bannerHtml('exam');
    h += '<div class="box know"><b>Comment s\'y prendre (conseil)</b><ol><li>Lis la <b>fiche</b> d\'un cours (20–30 min). Tout ce qui est en rouge est à savoir ; le gris est du détail.</li><li>Fais l\'<b>entraînement</b> sur ce cours : à chaque réponse tu vois pourquoi c\'est juste ou faux.</li><li>Quand les 5 cours sont faits, passe l\'<b>examen blanc</b> (40 questions, une seule bonne réponse, sans aide) puis revois tes <b>erreurs</b>.</li></ol></div>';
    h += '<div class="grid">';
    MNA.order.forEach(function (id) {
      var c = C(id), p = pct(id), w = p.seen ? Math.round(100 * p.ok / p.seen) : 0;
      h += '<div class="card"><h3>' + esc(c.titre) + '</h3><div class="meta">' + esc(c.sous) + '</div>' +
        '<div class="meta">' + (store.read[id] ? '✅ Fiche lue' : '📖 Fiche à lire') + ' · ' + p.total + ' questions</div>' +
        '<div class="bar"><i style="width:' + (p.seen ? 100 * p.ok / p.total : 0) + '%"></i></div>' +
        '<div class="meta">' + (p.seen ? p.ok + ' bonnes sur ' + p.seen + ' vues (' + w + ' %)' : 'Pas encore entraîné') + '</div>' +
        '<div class="row"><a class="btn small" href="#/fiche/' + id + '">Lire la fiche</a><a class="btn small sec" href="#/train/' + id + '">S\'entraîner</a></div></div>';
    });
    h += '</div>';
    h += '<div class="row"><a class="btn" href="#/exam">Examen blanc (40 questions)</a><a class="btn sec" href="#/train">Entraînement personnalisé</a><a class="btn gray" href="#/errors">Mes erreurs (' + everWrong().length + ')</a><a class="btn gray" href="#/history">Historique (' + store.hist.length + ')</a></div>';
    if (store.hist.length) {
      h += '<h2>Mes derniers tests</h2>' + histTable(store.hist.slice(-6).reverse()) + '<p><a href="#/history">Voir tout l\'historique et mes erreurs →</a></p>';
    }
    app.innerHTML = h;
    bindBanners();
  }
  function histTable(list) {
    return '<div class="tblwrap"><table><tr><th>Date</th><th>Test</th><th>Score</th><th>Temps</th></tr>' +
      list.map(function (e) { return '<tr><td>' + esc(e.d) + '</td><td>' + (e.type === 'exam' ? 'Examen blanc' : esc(e.title || 'Entraînement')) + '</td><td><b>' + e.s + ' / ' + e.t + '</b></td><td>' + (e.sec ? fmt(e.sec) : '–') + '</td></tr>'; }).join('') + '</table></div>';
  }

  /* ---------- Fiches ---------- */
  function fiches() {
    var h = '<h1>Fiches de cours</h1><p class="lead">Une fiche par cours. Lis-les dans l\'ordre : elles se construisent les unes sur les autres.</p><div class="grid">';
    MNA.order.forEach(function (id) {
      var c = C(id);
      h += '<div class="card"><h3>' + esc(c.titre) + '</h3><p class="meta">' + esc(c.sous) + '</p><p>' + esc(c.resume) + '</p><div class="row"><a class="btn small" href="#/fiche/' + id + '">Ouvrir ' + (store.read[id] ? '✅' : '') + '</a></div></div>';
    });
    app.innerHTML = h + '</div>';
  }
  function fiche(id) {
    var c = C(id); if (!c) return fiches();
    var i = MNA.order.indexOf(id), prev = MNA.order[i - 1], next = MNA.order[i + 1];
    var toc = '<div class="toc"><b>Sommaire</b><ol>' + c.sections.map(function (s, k) { return '<li><a href="#/fiche/' + id + '" data-go="s' + k + '">' + esc(s.t) + '</a></li>'; }).join('') + '</ol></div>';
    var h = '<h1>' + esc(c.titre) + '</h1><p class="lead">' + esc(c.sous) + '</p>' +
      '<div class="legend"><span><span class="badge b-must">MUST KNOW</span>tombe très probablement</span><span><span class="badge b-know">UNDERSTAND</span>logique du cours</span><span><span class="badge b-detail">DETAIL</span>culture, ne pas apprendre par cœur</span></div>' + toc;
    c.sections.forEach(function (s, k) { h += '<section id="s' + k + '"><h2>' + esc(s.t) + '</h2>' + s.h + '</section>'; });
    h += '<h2>À retenir en 1 minute</h2><div class="box must">' + c.retenir + '</div>';
    h += '<div class="row"><button class="btn" id="markread">' + (store.read[id] ? '✅ Fiche lue (clique pour annuler)' : 'Marquer comme lue') + '</button><a class="btn sec" href="#/train/' + id + '">S\'entraîner sur ce cours (' + c.qs.length + ' questions)</a></div>' +
      '<div class="row">' + (prev ? '<a class="btn gray small" href="#/fiche/' + prev + '">← ' + esc(C(prev).titre) + '</a>' : '') + (next ? '<a class="btn gray small" href="#/fiche/' + next + '">' + esc(C(next).titre) + ' →</a>' : '') + '</div>';
    app.innerHTML = h;
    document.getElementById('markread').onclick = function () { store.read[id] = !store.read[id]; save(); fiche(id); };
    app.querySelectorAll('[data-go]').forEach(function (a) { a.onclick = function (e) { e.preventDefault(); document.getElementById(a.dataset.go).scrollIntoView(); }; });
  }

  /* ---------- Entraînement ---------- */
  function trainSetup(pre) {
    var h = '<h1>Entraînement</h1><p class="lead">Après chaque réponse, tu vois immédiatement pourquoi elle est juste ou fausse (et pourquoi les autres sont fausses).</p>' + bannerHtml('train') + '<div class="card"><b>Cours :</b>';
    MNA.order.forEach(function (id) {
      h += '<label class="chk"><input type="checkbox" class="cc" value="' + id + '"' + ((!pre || pre === id) ? ' checked' : '') + '> ' + esc(C(id).titre) + ' <span class="meta">(' + C(id).qs.length + ' q.)</span></label>';
    });
    h += '<p><b>Nombre de questions :</b> <select id="nq"><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="999" selected>Toutes</option></select></p>' +
      '<label class="chk"><input type="checkbox" id="onlynew"> Privilégier les questions jamais vues ou ratées</label>' +
      '<div class="row"><button class="btn" id="go">Commencer</button></div></div>';
    app.innerHTML = h;
    bindBanners();
    if (pre === 'all') document.querySelectorAll('.cc').forEach(function (x) { x.checked = true; });
    document.getElementById('go').onclick = function () {
      var ids = Array.prototype.map.call(document.querySelectorAll('.cc:checked'), function (x) { return x.value; });
      if (!ids.length) return;
      var qs = allQs(ids), n = +document.getElementById('nq').value;
      if (document.getElementById('onlynew').checked) {
        var pri = qs.filter(function (q) { var s = store.stat[q.id]; return !s || !s.last; });
        var rest = qs.filter(function (q) { var s = store.stat[q.id]; return s && s.last; });
        qs = shuffle(pri).concat(shuffle(rest));
        qs = qs.slice(0, n); qs = shuffle(qs);
      } else qs = shuffle(qs).slice(0, n);
      startTrain(qs, 'Entraînement');
    };
  }
  function prep(q) { var perm = shuffle([0, 1, 2, 3]); return { q: q, perm: perm, pick: null }; }
  function startTrain(qs, title) {
    if (!qs.length) { app.innerHTML = '<h1>' + title + '</h1><div class="box tip">Aucune question à afficher.</div>'; return; }
    if (store.cur.train && !confirm('Tu as déjà un entraînement en cours. Le remplacer par celui-ci ? (l\'ancien sera abandonné)')) return;
    S = { mode: 'train', title: title, items: qs.map(prep), i: 0, good: 0, start: Date.now() };
    renderTrain();
  }
  function resumeTrain() {
    S = restore(store.cur.train);
    if (!S) { store.cur.train = null; save(); return trainSetup(); }
    renderTrain();
  }
  function optsHtml(it, reveal, pick) {
    var L = 'ABCD', h = '';
    it.perm.forEach(function (orig, k) {
      var cls = 'opt';
      if (reveal) { if (orig === it.q.a) cls += ' ok'; else if (orig === pick) cls += ' ko'; }
      else if (orig === pick) cls += ' sel';
      h += '<button class="' + cls + '" data-k="' + k + '"' + (reveal ? ' disabled' : '') + '><span class="l">' + L[k] + '</span><span>' + esc(it.q.o[orig]) + '</span></button>';
      if (reveal) {
        var good = orig === it.q.a;
        h += '<div class="why ' + (good ? 'ok' : 'ko') + '">' + (good ? '✔ ' : '✘ ') + esc(it.q.w[orig]) + '</div>';
      }
    });
    return h;
  }
  function renderTrain() {
    persist();
    var it = S.items[S.i], done = it.pick !== null, q = it.q;
    var h = '<div class="qhead"><span>' + esc(S.title) + ' · Question ' + (S.i + 1) + ' / ' + S.items.length + '</span><span>' + esc(C(q.c).titre) + ' · score ' + S.good + '</span></div>' +
      '<div class="bar"><i style="width:' + (100 * S.i / S.items.length) + '%"></i></div>' +
      '<div class="qwrap"><div class="qtext">' + esc(q.q) + '</div><div id="opts">' + optsHtml(it, done, it.pick) + '</div>';
    if (done) {
      var good = it.pick === q.a;
      h += '<div class="verdict ' + (good ? 'ok' : 'ko') + '">' + (good ? '✅ Bonne réponse !' : '❌ Raté — la bonne réponse est en vert.') + '</div>' +
        '<div class="row"><button class="btn" id="nx">' + (S.i + 1 < S.items.length ? 'Question suivante →' : 'Voir le résultat') + '</button></div>';
    }
    h += '</div><p class="meta">Ton test est sauvegardé : tu peux quitter et le reprendre depuis l\'accueil.</p>';
    app.innerHTML = h;
    if (!done) {
      app.querySelectorAll('.opt').forEach(function (b) {
        b.onclick = function () {
          var orig = it.perm[+b.dataset.k]; it.pick = orig;
          var good = orig === q.a; if (good) S.good++;
          record(q, good); renderTrain();
        };
      });
    } else {
      document.getElementById('nx').onclick = function () { if (S.i + 1 < S.items.length) { S.i++; renderTrain(); } else trainEnd(); };
    }
  }
  function wrongList(items) { return items.filter(function (x) { return x.pick !== x.q.a; }).map(function (x) { return { id: x.q.id, perm: x.perm, pick: x.pick }; }); }
  function trainEnd() {
    S.done = true;
    var n = S.items.length, wr = S.items.filter(function (x) { return x.pick !== x.q.a; });
    store.hist.push({ id: 'h' + Date.now(), type: 'train', title: S.title, d: now(), s: S.good, t: n, sec: null, wrong: wrongList(S.items) });
    store.cur.train = null; save();
    var h = '<h1>Résultat</h1><div class="card"><div class="score">' + S.good + ' / ' + n + '</div><p>' + Math.round(100 * S.good / n) + ' % de réussite. Ajouté à ton historique.</p></div>';
    if (wr.length) {
      h += '<h2>Questions à revoir</h2>';
      wr.forEach(function (x) { h += reviewBlock(x); });
    } else h += '<div class="box ex">Sans-faute, bravo !</div>';
    h += '<div class="row"><a class="btn" href="#/train">Refaire une série</a><a class="btn sec" href="#/">Accueil</a><a class="btn gray" href="#/history">Historique</a></div>';
    app.innerHTML = h;
    window.scrollTo(0, 0);
  }
  function reviewBlock(x) {
    return '<div class="qwrap"><div class="qhead"><span>' + esc(C(x.q.c).titre) + '</span><span>' + (x.pick === null ? 'Sans réponse' : 'Ta réponse : ' + esc(x.q.o[x.pick])) + '</span></div><div class="qtext">' + esc(x.q.q) + '</div>' + optsHtml(x, true, x.pick) + '</div>';
  }

  /* ---------- Mes erreurs (toutes les questions où j'ai eu tort) ---------- */
  function errorsPage() {
    var ids = everWrong();
    var h = '<h1>Mes erreurs</h1><p class="lead">Toutes les questions où tu as eu tort, examens blancs et entraînements confondus. Une question reste ici même quand tu la réussis ensuite (elle est alors marquée « réussie depuis »).</p>';
    if (!ids.length) { app.innerHTML = h + '<div class="box ex">Aucune erreur pour l\'instant. Fais un entraînement ou un examen blanc : les questions où tu te trompes apparaissent ici.</div>'; return; }
    h += '<div class="card"><div class="row"><label>Cours : <select id="fc"><option value="all">Tous les cours</option>' +
      MNA.order.map(function (id) { return '<option value="' + id + '"' + (EF.c === id ? ' selected' : '') + '>' + esc(C(id).titre) + '</option>'; }).join('') + '</select></label>' +
      '<label>Afficher : <select id="fs"><option value="all"' + (EF.st === 'all' ? ' selected' : '') + '>Toutes mes erreurs</option><option value="still"' + (EF.st === 'still' ? ' selected' : '') + '>Encore ratées (dernière réponse fausse)</option><option value="fixed"' + (EF.st === 'fixed' ? ' selected' : '') + '>Réussies depuis</option></select></label></div>' +
      '<div class="row"><span id="cnt" class="meta"></span><button class="btn" id="go">Refaire ces questions</button></div></div><div id="el"></div>';
    app.innerHTML = h;
    function list() {
      return ids.filter(function (id) {
        var q = qById(id), last = store.stat[id] && store.stat[id].last;
        if (EF.c !== 'all' && q.c !== EF.c) return false;
        if (EF.st === 'still' && last) return false;
        if (EF.st === 'fixed' && !last) return false;
        return true;
      }).sort(function (a, b) { return store.fails[b] - store.fails[a]; });
    }
    function draw() {
      var l = list(), b = '';
      document.getElementById('cnt').textContent = l.length + ' question(s)';
      document.getElementById('go').disabled = !l.length;
      if (!l.length) b = '<div class="box tip">Aucune question avec ce filtre.</div>';
      l.forEach(function (id) {
        var q = qById(id), last = store.stat[id] && store.stat[id].last, n = store.fails[id];
        b += '<div class="qwrap"><div class="qhead"><span>' + esc(C(q.c).titre) + '</span><span>Ratée ' + n + ' fois · ' + (last ? '✅ réussie depuis' : '❌ encore ratée') + '</span></div><div class="qtext">' + esc(q.q) + '</div>' + optsHtml({ q: q, perm: [0, 1, 2, 3] }, true, null) + '</div>';
      });
      document.getElementById('el').innerHTML = b;
    }
    document.getElementById('fc').onchange = function () { EF.c = this.value; draw(); };
    document.getElementById('fs').onchange = function () { EF.st = this.value; draw(); };
    document.getElementById('go').onclick = function () { startTrain(shuffle(list().map(qById)), 'Mes erreurs'); };
    draw();
  }

  /* ---------- Historique ---------- */
  function historyPage() {
    var h = '<h1>Historique</h1><p class="lead">Tous tes tests (entraînements et examens blancs), du plus récent au plus ancien, avec les questions que tu as ratées.</p>';
    if (!store.hist.length) { app.innerHTML = h + '<div class="box tip">Pas encore de test terminé.</div>'; return; }
    store.hist.map(function (e, k) { return { e: e, k: k }; }).reverse().forEach(function (o) {
      var e = o.e, n = e.wrong ? e.wrong.filter(function (w) { return qById(w.id); }).length : null;
      h += '<div class="card" style="margin-bottom:12px"><div class="qhead"><span><b>' + (e.type === 'exam' ? 'Examen blanc' : esc(e.title || 'Entraînement')) + '</b> · ' + esc(e.d) + '</span><span><b>' + e.s + ' / ' + e.t + '</b> (' + Math.round(100 * e.s / e.t) + ' %)' + (e.sec ? ' · ' + fmt(e.sec) : '') + '</span></div>';
      if (n === null) h += '<p class="meta">Détail des erreurs non disponible (test fait avant l\'historique).</p>';
      else if (!n) h += '<p>✅ Sans-faute.</p>';
      else h += '<div class="row"><button class="btn small sec" data-h="' + o.k + '">Voir les ' + n + ' erreur(s)</button></div><div id="hd' + o.k + '"></div>';
      h += '</div>';
    });
    app.innerHTML = h;
    app.querySelectorAll('[data-h]').forEach(function (b) {
      b.onclick = function () {
        var box = document.getElementById('hd' + b.dataset.h);
        if (box.innerHTML) { box.innerHTML = ''; return; }
        var e = store.hist[+b.dataset.h];
        box.innerHTML = e.wrong.filter(function (w) { return qById(w.id); }).map(function (w) { return reviewBlock({ q: qById(w.id), perm: w.perm, pick: w.pick }); }).join('');
      };
    });
  }

  /* ---------- Examen blanc ---------- */
  var W = { c1: 6, c2: 8, c3: 9, c4: 9, c5: 8 };
  function examSetup() {
    var h = '<h1>Examen blanc</h1>' + bannerHtml('exam') + '<div class="card"><p><b>40 questions, une seule bonne réponse chacune</b>, comme à l\'examen. Aucune correction pendant l\'épreuve ; tout est corrigé à la fin. Le chronomètre sert juste à te situer (compte ~1 min par question).</p>' +
      '<p class="meta">Répartition : ' + MNA.order.map(function (id) { return esc(C(id).titre.split(' – ')[0]) + ' : ' + (W[id] || 8); }).join(' · ') + '</p>' +
      '<div class="row"><button class="btn" id="go">Lancer l\'examen</button></div></div>';
    app.innerHTML = h;
    bindBanners();
    document.getElementById('go').onclick = function () {
      if (store.cur.exam && !confirm('Tu as déjà un examen blanc en cours. Le remplacer par un nouveau ? (l\'ancien sera abandonné)')) return;
      var qs = [];
      MNA.order.forEach(function (id) { qs = qs.concat(shuffle(C(id).qs).slice(0, W[id] || 8)); });
      if (qs.length < 40) { var rest = shuffle(allQs().filter(function (q) { return qs.indexOf(q) < 0; })); qs = qs.concat(rest.slice(0, 40 - qs.length)); }
      S = { mode: 'exam', title: 'Examen blanc', items: shuffle(qs).slice(0, 40).map(prep), i: 0, el: 0, t0: Date.now(), start: Date.now(), submitted: false, confirm: false };
      renderExam(); startExamClock();
    };
  }
  function resumeExam() {
    S = restore(store.cur.exam);
    if (!S) { store.cur.exam = null; save(); return examSetup(); }
    S.t0 = Date.now();
    renderExam(); startExamClock();
  }
  function renderExam() {
    persist();
    var it = S.items[S.i], L = 'ABCD';
    var answered = S.items.filter(function (x) { return x.pick !== null; }).length;
    var h = '<div class="qhead"><span>Examen blanc · Question ' + (S.i + 1) + ' / ' + S.items.length + '</span><span>Répondues : ' + answered + ' / ' + S.items.length + ' · <span class="timer" id="tm">' + fmt(Math.floor(elapsed() / 1000)) + '</span></span></div>' +
      '<div class="qwrap"><div class="qtext">' + esc(it.q.q) + '</div>';
    it.perm.forEach(function (orig, k) {
      h += '<button class="opt' + (it.pick === orig ? ' sel' : '') + '" data-k="' + k + '"><span class="l">' + L[k] + '</span><span>' + esc(it.q.o[orig]) + '</span></button>';
    });
    h += '<div class="row"><button class="btn gray" id="pv"' + (S.i ? '' : ' disabled') + '>← Précédente</button><button class="btn gray" id="nx"' + (S.i + 1 < S.items.length ? '' : ' disabled') + '>Suivante →</button></div></div>';
    h += '<div class="grid-nav">' + S.items.map(function (x, k) { return '<button class="' + (x.pick !== null ? 'done ' : '') + (k === S.i ? 'cur' : '') + '" data-g="' + k + '">' + (k + 1) + '</button>'; }).join('') + '</div>';
    if (!S.confirm) h += '<div class="row"><button class="btn" id="sub">Terminer et corriger</button></div>';
    else h += '<div class="box tip"><b>Terminer l\'examen ?</b> Il te reste ' + (S.items.length - answered) + ' question(s) sans réponse.<div class="row"><button class="btn" id="yes">Oui, corriger</button><button class="btn gray" id="no">Continuer</button></div></div>';
    h += '<p class="meta">Ton examen est sauvegardé : tu peux quitter et le reprendre depuis l\'accueil (le chrono se met en pause).</p>';
    app.innerHTML = h;
    app.querySelectorAll('.opt').forEach(function (b) { b.onclick = function () { it.pick = it.perm[+b.dataset.k]; renderExam(); }; });
    app.querySelectorAll('[data-g]').forEach(function (b) { b.onclick = function () { S.i = +b.dataset.g; renderExam(); }; });
    var pv = document.getElementById('pv'), nx = document.getElementById('nx');
    if (pv) pv.onclick = function () { S.i--; renderExam(); };
    if (nx) nx.onclick = function () { S.i++; renderExam(); };
    var sub = document.getElementById('sub'); if (sub) sub.onclick = function () { S.confirm = true; renderExam(); };
    var no = document.getElementById('no'); if (no) no.onclick = function () { S.confirm = false; renderExam(); };
    var yes = document.getElementById('yes'); if (yes) yes.onclick = examEnd;
  }
  function examEnd() {
    clearInterval(route.t);
    var sec = Math.floor(elapsed() / 1000), good = 0, per = {};
    S.done = true;
    S.items.forEach(function (x) {
      var ok = x.pick === x.q.a; if (ok) good++;
      per[x.q.c] = per[x.q.c] || { ok: 0, n: 0 }; per[x.q.c].n++; if (ok) per[x.q.c].ok++;
      record(x.q, ok);
    });
    store.hist.push({ id: 'h' + Date.now(), type: 'exam', title: 'Examen blanc', d: now(), s: good, t: S.items.length, sec: sec, wrong: wrongList(S.items) });
    store.cur.exam = null; save();
    var h = '<h1>Résultat de l\'examen blanc</h1><div class="card"><div class="score">' + good + ' / ' + S.items.length + '</div><p>' + Math.round(100 * good / S.items.length) + ' % · temps : ' + fmt(sec) + '. Ajouté à ton historique.</p>' +
      '<div class="tblwrap"><table><tr><th>Cours</th><th>Score</th></tr>' + MNA.order.map(function (id) { var p = per[id]; return p ? '<tr><td>' + esc(C(id).titre) + '</td><td>' + p.ok + ' / ' + p.n + '</td></tr>' : ''; }).join('') + '</table></div></div>';
    var wr = S.items.filter(function (x) { return x.pick !== x.q.a; });
    if (wr.length) { h += '<h2>Correction des ' + wr.length + ' question(s) ratée(s)</h2>'; wr.forEach(function (x) { h += reviewBlock(x); }); }
    h += '<div class="row"><a class="btn" href="#/exam">Nouvel examen</a><a class="btn sec" href="#/">Accueil</a><a class="btn gray" href="#/history">Historique</a></div>';
    app.innerHTML = h; window.scrollTo(0, 0);
  }

  route();
})();
