function setActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const onScroll = () => {
    items.forEach(item => {
      const top = item.getBoundingClientRect().top;
      if (top < window.innerHeight - 70) item.classList.add("show");
    });
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
}

function getFavorites() {
  return JSON.parse(localStorage.getItem("openuni_favorites") || "[]");
}

function setFavorites(favs) {
  localStorage.setItem("openuni_favorites", JSON.stringify(favs));
}

function toggleFavorite(name) {
  const favs = getFavorites();
  const exists = favs.includes(name);
  const next = exists ? favs.filter(x => x !== name) : [...favs, name];
  setFavorites(next);
  return !exists;
}

function buildProfessionsCatalog() {
  const list = document.getElementById("professionList");
  if (!list) return;

  const search = document.getElementById("searchProfession");
  const category = document.getElementById("filterCategory");
  const subject = document.getElementById("filterSubject");

  const allSubjects = [...new Set(professions.flatMap(p => p.subjects))];
  allSubjects.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    subject.appendChild(opt);
  });

  function render() {
    const q = (search.value || "").toLowerCase().trim();
    const cat = category.value;
    const subj = subject.value;
    const favs = getFavorites();

    const filtered = professions.filter(p => {
      const text = `${p.name} ${p.category} ${p.desc} ${p.subjects.join(" ")}`.toLowerCase();
      const okQ = !q || text.includes(q);
      const okC = !cat || p.category === cat;
      const okS = !subj || p.subjects.includes(subj);
      return okQ && okC && okS;
    });

    list.innerHTML = "";
    if (!filtered.length) {
      list.innerHTML = `<div class="card"><h3>Ештеңе табылмады</h3><p>Іздеуді немесе фильтрді өзгертіп көр.</p></div>`;
      return;
    }

    filtered.forEach(p => {
      const isFav = favs.includes(p.name);
      const card = document.createElement("div");
      card.className = "card prof-card reveal";
      card.innerHTML = `
        <button class="favorite-btn ${isFav ? "active" : ""}" title="Сақтау">${isFav ? "❤️" : "🤍"}</button>
        <div class="icon">${p.icon}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="meta">
          <span class="pill">${p.category}</span>
          ${p.subjects.map(s => `<span class="pill">${s}</span>`).join("")}
        </div>
        <div class="salary">💰 ${p.salary}</div>
        <div class="actions">
          <button class="btn btn-primary details-btn">Толығырақ</button>
        </div>
      `;
      card.querySelector(".favorite-btn").addEventListener("click", e => {
        e.stopPropagation();
        const active = toggleFavorite(p.name);
        e.currentTarget.classList.toggle("active", active);
        e.currentTarget.textContent = active ? "❤️" : "🤍";
      });
      card.querySelector(".details-btn").addEventListener("click", () => openProfessionModal(p));
      list.appendChild(card);
    });
    initReveal();
  }

  search.addEventListener("input", render);
  category.addEventListener("change", render);
  subject.addEventListener("change", render);
  render();
}

function openProfessionModal(p) {
  const modal = document.getElementById("professionModal");
  const body = document.getElementById("professionModalBody");
  body.innerHTML = `
    <h2>${p.icon} ${p.name}</h2>
    <p style="color:var(--muted);margin-bottom:16px">${p.desc}</p>
    <div class="modal-grid">
      <div class="card">
        <h3>Негізгі ақпарат</h3>
        <p><strong>Санат:</strong> ${p.category}</p>
        <p><strong>Орташа жалақы:</strong> ${p.salary}</p>
        <p><strong>Қажет пәндер:</strong> ${p.subjects.join(", ")}</p>
      </div>
      <div class="card">
        <h3>Бір күндік өмірі</h3>
        <p>${p.day}</p>
      </div>
      <div class="card">
        <h3>Артықшылықтары</h3>
        <ul class="list">${p.pros.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="card">
        <h3>Кемшіліктері</h3>
        <ul class="list">${p.cons.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="card" style="grid-column:1/-1">
        <h3>Қай университеттерде оқуға болады</h3>
        <div class="meta">${p.universities.map(x => `<span class="pill">${x}</span>`).join("")}</div>
      </div>
    </div>
  `;
  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("professionModal")?.classList.remove("show");
}

function buildCourses() {
  const wrap = document.getElementById("courseList");
  if (!wrap) return;
  wrap.innerHTML = courses.map(c => `
    <div class="card course-card reveal">
      <div class="icon">📚</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="meta"><span class="pill">${c.category}</span></div>
      <a class="btn btn-primary" href="${c.link}" target="_blank" rel="noopener">Курсқа өту</a>
    </div>
  `).join("");
  initReveal();
}

function buildCommunity() {
  const wrap = document.getElementById("communityList");
  if (!wrap) return;
  wrap.innerHTML = forumPosts.map(post => `
    <article class="post reveal">
      <div class="post-head">
        <strong>${post.title}</strong>
        <span class="badge">${post.tag}</span>
      </div>
      <p style="color:var(--muted);margin:0 0 12px">Автор: ${post.author}</p>
      <p style="margin:0;color:var(--text)">${post.text}</p>
    </article>
  `).join("");
  initReveal();
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initReveal();
  buildProfessionsCatalog();
  buildCourses();
  buildCommunity();

  document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
  document.getElementById("professionModal")?.addEventListener("click", e => {
    if (e.target.id === "professionModal") closeModal();
  });

  document.getElementById("heroQuickSearchBtn")?.addEventListener("click", () => {
    const q = document.getElementById("heroQuickSearchInput").value.trim();
    location.href = `professions.html?q=${encodeURIComponent(q)}`;
  });
});
