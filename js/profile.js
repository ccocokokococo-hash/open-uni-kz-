document.addEventListener("DOMContentLoaded", () => {
  const favBox = document.getElementById("favoriteProfessions");
  const quizBox = document.getElementById("savedQuizResult");
  if (!favBox || !quizBox) return;

  const favs = JSON.parse(localStorage.getItem("openuni_favorites") || "[]");
  const result = JSON.parse(localStorage.getItem("openuni_quiz_result") || "null");

  if (!favs.length) {
    favBox.innerHTML = `<p class="empty">Әзірге сақталған мамандық жоқ.</p>`;
  } else {
    favBox.innerHTML = `
      <div class="meta">
        ${favs.map(x => `<span class="pill">${x}</span>`).join("")}
      </div>
    `;
  }

  if (!result) {
    quizBox.innerHTML = `<p class="empty">Тест нәтижесі әлі сақталмаған.</p>`;
  } else {
    quizBox.innerHTML = `
      <h3>${result.title}</h3>
      <p style="color:var(--muted)">${result.description}</p>
      <div class="meta" style="margin-top:12px">
        ${result.professions.map(x => `<span class="pill">${x}</span>`).join("")}
      </div>
    `;
  }
});
