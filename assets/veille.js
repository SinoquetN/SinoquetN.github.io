(function () {
  "use strict";
  var articles = Array.isArray(window.VEILLE_ARTICLES) ? window.VEILLE_ARTICLES.slice() : [];
  var box = document.getElementById("articles");
  if (!box) { return; }

  function frDate(iso) {
    var p = String(iso).split("-");
    return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : String(iso);
  }
  function safeUrl(u) {
    return /^https?:\/\//i.test(String(u)) ? String(u) : null;
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text) { n.textContent = text; }
    return n;
  }
  function link(text, url) {
    var a = document.createElement("a");
    a.textContent = text;
    var u = safeUrl(url);
    if (u) { a.href = u; a.rel = "noopener"; a.target = "_blank"; }
    return a;
  }

  articles.sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });

  articles.forEach(function (a) {
    var card = el("article", "card");
    var h = el("h3");
    h.appendChild(link(a.titre || "Article", a.url));
    card.appendChild(h);
    card.appendChild(el("span", "meta", frDate(a.date) + " · " + (a.source || "")));
    card.appendChild(el("p", null, a.resume || ""));
    var why = el("p");
    why.appendChild(el("strong", null, "Intérêt : "));
    why.appendChild(document.createTextNode(a.interet || ""));
    card.appendChild(why);
    if (a.noteTexte) {
      var note = el("p");
      note.appendChild(a.noteUrl ? link(a.noteTexte, a.noteUrl) : document.createTextNode(a.noteTexte));
      card.appendChild(note);
    }
    box.appendChild(card);
  });

  var maj = document.getElementById("maj");
  if (maj && articles.length) {
    maj.textContent = "Dernier article ajouté : " + frDate(articles[0].date) + ".";
  }
})();
