(function () {
  var app = document.getElementById('app');
  var KEY = 'mna_v1';
  var store = load();
  var S = null; // état de la session de questions en cours

  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (s) return s; } catch (e) {}
    return { read: {}, stat: {}, wrong: {}, exams: [] };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function C(id) { return MNA.courses[id]; }
  function allQs(ids) { var r = []; (ids || MNA.order).forEach(function (id) { r = r.concat(C(id).qs); }); return r; }
  function qById(id) { var c = id.split('-')[0]; return C(c).qs[+id.split('-')[1]]; }
  function pct(cid) {
    var qs = C(cid).qs, seen = 0, ok = 0;
    qs.forEach(function (q) { var s = store.stat[q.id]; if (s) { seen++; if (s.last) ok++; } });
    return { seen: seen, ok: ok, total: qs.length };
  }
  function record(q, good) {
    var s = store.stat[q.id] || {};
    s.last = good ? 1 : 0; store.stat[q.id] = s;
    if (good) delete store.wrong[q.id]; else store.wrong[q.id] = 1;
    save();
  }
  function nWrong() { return Object.keys(store.wrong).filter(function (id) { return qById(id); }).length; }
  function fmt(sec) { var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }

  /* ---------- Routeur ---------- */
  function route() {
    clearInterval(route.t);
    var h = location.hash.replace(/^#\/?/, '').split('/');
    var page = h[0] || 'home';
    document.querySelectorAll('[data-nav]').forEach(function (a) { a.classList.toggle('on', a.dataset.nav === (page === 'fiche' ? 'fiches' : page)); });
    window.scrollTo(0, 0);
    if (page === 'home') home();
    else if (page === 'fiches') fiches();
    else if (page === 'fiche') fiche(h[1]);
    else if (page === 'train') trainSetup(h[1]);
    else if (page === 'exam') examSetup();
    else if (page === 'errors') errorsPage();
    else home();
  }
  window.addEventListener('hashchange', route);

  /* ---------- Accueil ---------- */
  function home() {
    var h = '<h1>M&amp;A – Révisions</h1><p class="lead">Fiches pour comprendre, entraînement avec correction détaillée, examen blanc de 40 QCM.</p>';
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
    h += '<div class="row"><a class="btn" href="#/exam">Examen blanc (40 questions)</a><a class="btn sec" href="#/train">Entraînement personnalisé</a><a class="btn gray" href="#/errors">Mes erreurs (' + nWrong() + ')</a></div>';
    if (store.exams.length) {
      h += '<h2>Mes examens blancs</h2><div class="tblwrap"><table><tr><th>Date</th><th>Score</th><th>Temps</th></tr>' +
        store.exams.slice(-8).reverse().map(function (e) { return '<tr><td>' + esc(e.d) + '</td><td><b>' + e.s + ' / ' + e.t + '</b></td><td>' + fmt(e.sec) + '</td></tr>'; }).join('') + '</table></div>';
    }
    app.innerHTML = h;
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
      '<div class="legend"><span><span class="badge b-must">À SAVOIR</span>tombe très probablement</span><span><span class="badge b-know">À COMPRENDRE</span>logique du cours</span><span><span class="badge b-detail">DÉTAIL</span>culture, ne pas apprendre par cœur</span></div>' + toc;
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
    var h = '<h1>Entraînement</h1><p class="lead">Après chaque réponse, tu vois immédiatement pourquoi elle est juste ou fausse (et pourquoi les autres sont fausses).</p><div class="card"><b>Cours :</b>';
    MNA.order.forEach(function (id) {
      h += '<label class="chk"><input type="checkbox" class="cc" value="' + id + '"' + ((!pre || pre === id) ? ' checked' : '') + '> ' + esc(C(id).titre) + ' <span class="meta">(' + C(id).qs.length + ' q.)</span></label>';
    });
    h += '<p><b>Nombre de questions :</b> <select id="nq"><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="999" selected>Toutes</option></select></p>' +
      '<label class="chk"><input type="checkbox" id="onlynew"> Privilégier les questions jamais vues ou ratées</label>' +
      '<div class="row"><button class="btn" id="go">Commencer</button></div></div>';
    app.innerHTML = h;
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
    S = { mode: 'train', title: title, items: qs.map(prep), i: 0, good: 0 };
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
    var it = S.items[S.i], done = it.pick !== null, q = it.q;
    var h = '<div class="qhead"><span>' + S.title + ' · Question ' + (S.i + 1) + ' / ' + S.items.length + '</span><span>' + esc(C(q.c).titre) + ' · score ' + S.good + '</span></div>' +
      '<div class="bar"><i style="width:' + (100 * S.i / S.items.length) + '%"></i></div>' +
      '<div class="qwrap"><div class="qtext">' + esc(q.q) + '</div><div id="opts">' + optsHtml(it, done, it.pick) + '</div>';
    if (done) {
      var good = it.pick === q.a;
      h += '<div class="verdict ' + (good ? 'ok' : 'ko') + '">' + (good ? '✅ Bonne réponse !' : '❌ Raté — la bonne réponse est en vert.') + '</div>' +
        '<div class="row"><button class="btn" id="nx">' + (S.i + 1 < S.items.length ? 'Question suivante →' : 'Voir le résultat') + '</button></div>';
    }
    h += '</div>';
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
  function trainEnd() {
    var n = S.items.length, wr = S.items.filter(function (x) { return x.pick !== x.q.a; });
    var h = '<h1>Résultat</h1><div class="card"><div class="score">' + S.good + ' / ' + n + '</div><p>' + Math.round(100 * S.good / n) + ' % de réussite.</p></div>';
    if (wr.length) {
      h += '<h2>Questions à revoir</h2>';
      wr.forEach(function (x) { h += reviewBlock(x); });
    } else h += '<div class="box ex">Sans-faute, bravo !</div>';
    h += '<div class="row"><a class="btn" href="#/train">Refaire une série</a><a class="btn sec" href="#/">Accueil</a></div>';
    app.innerHTML = h;
  }
  function reviewBlock(x) {
    return '<div class="qwrap"><div class="qhead"><span>' + esc(C(x.q.c).titre) + '</span><span>' + (x.pick === null ? 'Sans réponse' : 'Ta réponse : ' + esc(x.q.o[x.pick])) + '</span></div><div class="qtext">' + esc(x.q.q) + '</div>' + optsHtml(x, true, x.pick) + '</div>';
  }

  /* ---------- Mes erreurs ---------- */
  function errorsPage() {
    var ids = Object.keys(store.wrong).filter(function (id) { return qById(id); });
    var h = '<h1>Mes erreurs</h1>';
    if (!ids.length) { app.innerHTML = h + '<div class="box ex">Aucune erreur en attente. Fais un entraînement ou un examen blanc : les questions ratées s\'ajoutent ici automatiquement, et disparaissent quand tu les réussis.</div>'; return; }
    h += '<p class="lead">' + ids.length + ' question(s) ratée(s). Une bonne réponse la retire de la liste.</p><div class="row"><button class="btn" id="go">Les refaire</button><button class="btn gray small" id="clr">Vider la liste</button></div>';
    app.innerHTML = h;
    document.getElementById('go').onclick = function () { startTrain(shuffle(ids.map(qById)), 'Mes erreurs'); };
    document.getElementById('clr').onclick = function () { store.wrong = {}; save(); errorsPage(); };
  }

  /* ---------- Examen blanc ---------- */
  var W = { c1: 6, c2: 8, c3: 9, c4: 9, c5: 8 };
  function examSetup() {
    var h = '<h1>Examen blanc</h1><div class="card"><p><b>40 questions, une seule bonne réponse chacune</b>, comme à l\'examen. Aucune correction pendant l\'épreuve ; tout est corrigé à la fin. Le chronomètre sert juste à te situer (compte ~1 min par question).</p>' +
      '<p class="meta">Répartition : ' + MNA.order.map(function (id) { return esc(C(id).titre.split(' – ')[0]) + ' : ' + (W[id] || 8); }).join(' · ') + '</p>' +
      '<div class="row"><button class="btn" id="go">Lancer l\'examen</button></div></div>';
    app.innerHTML = h;
    document.getElementById('go').onclick = function () {
      var qs = [];
      MNA.order.forEach(function (id) { qs = qs.concat(shuffle(C(id).qs).slice(0, W[id] || 8)); });
      if (qs.length < 40) { var rest = shuffle(allQs().filter(function (q) { return qs.indexOf(q) < 0; })); qs = qs.concat(rest.slice(0, 40 - qs.length)); }
      S = { mode: 'exam', items: shuffle(qs).slice(0, 40).map(prep), i: 0, t0: Date.now(), submitted: false, confirm: false };
      renderExam();
      route.t = setInterval(function () { var el = document.getElementById('tm'); if (el) el.textContent = fmt(Math.floor((Date.now() - S.t0) / 1000)); }, 1000);
    };
  }
  function renderExam() {
    var it = S.items[S.i], L = 'ABCD';
    var answered = S.items.filter(function (x) { return x.pick !== null; }).length;
    var h = '<div class="qhead"><span>Examen blanc · Question ' + (S.i + 1) + ' / ' + S.items.length + '</span><span>Répondues : ' + answered + ' / ' + S.items.length + ' · <span class="timer" id="tm">' + fmt(Math.floor((Date.now() - S.t0) / 1000)) + '</span></span></div>' +
      '<div class="qwrap"><div class="qtext">' + esc(it.q.q) + '</div>';
    it.perm.forEach(function (orig, k) {
      h += '<button class="opt' + (it.pick === orig ? ' sel' : '') + '" data-k="' + k + '"><span class="l">' + L[k] + '</span><span>' + esc(it.q.o[orig]) + '</span></button>';
    });
    h += '<div class="row"><button class="btn gray" id="pv"' + (S.i ? '' : ' disabled') + '>← Précédente</button><button class="btn gray" id="nx"' + (S.i + 1 < S.items.length ? '' : ' disabled') + '>Suivante →</button></div></div>';
    h += '<div class="grid-nav">' + S.items.map(function (x, k) { return '<button class="' + (x.pick !== null ? 'done ' : '') + (k === S.i ? 'cur' : '') + '" data-g="' + k + '">' + (k + 1) + '</button>'; }).join('') + '</div>';
    if (!S.confirm) h += '<div class="row"><button class="btn" id="sub">Terminer et corriger</button></div>';
    else h += '<div class="box tip"><b>Terminer l\'examen ?</b> Il te reste ' + (S.items.length - answered) + ' question(s) sans réponse.<div class="row"><button class="btn" id="yes">Oui, corriger</button><button class="btn gray" id="no">Continuer</button></div></div>';
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
    var sec = Math.floor((Date.now() - S.t0) / 1000), good = 0, per = {};
    S.items.forEach(function (x) {
      var ok = x.pick === x.q.a; if (ok) good++;
      per[x.q.c] = per[x.q.c] || { ok: 0, n: 0 }; per[x.q.c].n++; if (ok) per[x.q.c].ok++;
      if (x.pick !== null || !ok) record(x.q, ok);
    });
    store.exams.push({ d: new Date().toLocaleDateString('fr-FR'), s: good, t: S.items.length, sec: sec }); save();
    var h = '<h1>Résultat de l\'examen blanc</h1><div class="card"><div class="score">' + good + ' / ' + S.items.length + '</div><p>' + Math.round(100 * good / S.items.length) + ' % · temps : ' + fmt(sec) + '</p>' +
      '<div class="tblwrap"><table><tr><th>Cours</th><th>Score</th></tr>' + MNA.order.map(function (id) { var p = per[id]; return p ? '<tr><td>' + esc(C(id).titre) + '</td><td>' + p.ok + ' / ' + p.n + '</td></tr>' : ''; }).join('') + '</table></div></div>';
    var wr = S.items.filter(function (x) { return x.pick !== x.q.a; });
    if (wr.length) { h += '<h2>Correction des ' + wr.length + ' question(s) ratée(s)</h2>'; wr.forEach(function (x) { h += reviewBlock(x); }); }
    h += '<div class="row"><a class="btn" href="#/exam">Nouvel examen</a><a class="btn sec" href="#/">Accueil</a></div>';
    app.innerHTML = h; window.scrollTo(0, 0);
  }

  route();
})();
