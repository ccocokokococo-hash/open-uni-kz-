document.addEventListener("DOMContentLoaded", () => {
  const uniList = document.getElementById("universityList");
  const mapEl = document.getElementById("map");
  if (!uniList || !mapEl) return;

  const search = document.getElementById("searchUniversity");
  const filterType = document.getElementById("filterUniversityType");

  function renderUniversities() {
    const q = (search.value || "").toLowerCase().trim();
    const type = filterType.value;

    const filtered = universities.filter(u => {
      const text = `${u.name} ${u.city} ${u.country}`.toLowerCase();
      const okQ = !q || text.includes(q);
      const okT = !type || u.type === type;
      return okQ && okT;
    });

    uniList.innerHTML = filtered.map((u, index) => `
      <div class="card reveal">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <h3 style="margin:0 0 8px">${u.name}</h3>
            <p>${u.city}, ${u.country}</p>
          </div>
          <div class="rank">${index + 1}</div>
        </div>
        <div class="meta">
          <span class="pill">${u.type}</span>
          <span class="pill">${u.rank}</span>
          <span class="pill">Грант: ${u.grant}</span>
        </div>
        <p style="margin-top:12px"><strong>Оқу ақысы:</strong> ${u.tuition}</p>
        <p><strong>Талаптар:</strong> ${u.requirements}</p>
      </div>
    `).join("");

    initReveal();

    if (window.uniMarkersLayer) {
      window.uniMarkersLayer.clearLayers();
    } else {
      window.uniMarkersLayer = L.layerGroup().addTo(window.uniMap);
    }

    filtered.forEach(u => {
      const marker = L.marker([u.lat, u.lng]).bindPopup(`
        <strong>${u.name}</strong><br>
        ${u.city}, ${u.country}<br>
        ${u.rank}<br>
        Оқу ақысы: ${u.tuition}
      `);
      window.uniMarkersLayer.addLayer(marker);
    });

    if (filtered.length) {
      const bounds = L.latLngBounds(filtered.map(u => [u.lat, u.lng]));
      window.uniMap.fitBounds(bounds, {padding:[30,30]});
    }
  }

  window.uniMap = L.map("map", {scrollWheelZoom:true}).setView([48.0, 67.0], 3);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:'&copy; OpenStreetMap contributors'
  }).addTo(window.uniMap);

  search.addEventListener("input", renderUniversities);
  filterType.addEventListener("change", renderUniversities);

  renderUniversities();
});
