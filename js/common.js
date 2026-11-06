// Données communes : chaque cours s'enregistre ici avec sa fiche et ses questions.
window.MNA = { courses: {}, order: [] };
MNA.add = function (id, course) {
  course.id = id;
  course.qs.forEach(function (q, i) { q.id = id + '-' + i; q.c = id; });
  MNA.courses[id] = course;
  MNA.order.push(id);
};
// Q(question, [4 réponses], index de la bonne, [4 explications])
// L'explication de la bonne réponse dit pourquoi elle est juste ; les autres disent pourquoi elles sont fausses.
function Q(q, o, a, w) { return { q: q, o: o, a: a, w: w }; }
