const quizQuestions = [
  {
    text:"Саған көбірек ұнайтыны қайсы?",
    options:[
      {label:"Адамдарға көмектесу",type:"medicine"},
      {label:"Компьютермен жұмыс істеу",type:"it"},
      {label:"Идея ойлап табу, визуал жасау",type:"design"},
      {label:"Түсіндіру, үйрету",type:"education"}
    ]
  },
  {
    text:"Қай пән саған жақынырақ?",
    options:[
      {label:"Биология",type:"medicine"},
      {label:"Математика",type:"it"},
      {label:"Шығармашылық/сурет",type:"design"},
      {label:"Қазақ тілі/тарих",type:"education"}
    ]
  },
  {
    text:"Қандай ортада өзіңді елестетесің?",
    options:[
      {label:"Клиника, зертхана",type:"medicine"},
      {label:"Ноутбук, технологиялық команда",type:"it"},
      {label:"Студия, креатив кеңістік",type:"design"},
      {label:"Мектеп, оқу орталығы",type:"education"}
    ]
  },
  {
    text:"Қай дағдың күшті деп ойлайсың?",
    options:[
      {label:"Қамқорлық пен жауапкершілік",type:"medicine"},
      {label:"Логика",type:"it"},
      {label:"Эстетика мен талғам",type:"design"},
      {label:"Түсіндіру және сабыр",type:"education"}
    ]
  },
  {
    text:"Жұмыс стилі бойынша не ұнайды?",
    options:[
      {label:"Адаммен тікелей жұмыс",type:"medicine"},
      {label:"Жүйе, код, анализ",type:"it"},
      {label:"Креатив жоба",type:"design"},
      {label:"Сабақ және бағдар беру",type:"education"}
    ]
  },
  {
    text:"Нәтижеден не күтесің?",
    options:[
      {label:"Адам өміріне нақты пайда",type:"medicine"},
      {label:"Технологиялық өнім жасау",type:"it"},
      {label:"Әдемі әрі ыңғайлы дүние жасау",type:"design"},
      {label:"Біреудің өсуіне үлес қосу",type:"education"}
    ]
  },
  {
    text:"Қай сөз саған көбірек сәйкес?",
    options:[
      {label:"Эмпатия",type:"medicine"},
      {label:"Алгоритм",type:"it"},
      {label:"Креатив",type:"design"},
      {label:"Тәлімгерлік",type:"education"}
    ]
  },
  {
    text:"Қай формат саған ұнайды?",
    options:[
      {label:"Клиникалық/ғылыми",type:"medicine"},
      {label:"Техникалық",type:"it"},
      {label:"Визуалды",type:"design"},
      {label:"Гуманитарлық",type:"education"}
    ]
  },
  {
    text:"Қиын мәселені қалай шешкен ұнайды?",
    options:[
      {label:"Себебін тауып, емдеу",type:"medicine"},
      {label:"Бөліп алып, логикамен шешу",type:"it"},
      {label:"Жаңа тәсіл ойлап табу",type:"design"},
      {label:"Түсіндіріп, жүйелеу",type:"education"}
    ]
  },
  {
    text:"Болашақта не маңыздырақ?",
    options:[
      {label:"Пайдалы маман болу",type:"medicine"},
      {label:"Жоғары технологияда болу",type:"it"},
      {label:"Өз идеямды жасау",type:"design"},
      {label:"Білім беру арқылы әсер ету",type:"education"}
    ]
  },
  {
    text:"Қандай контентті жиі қарайсың?",
    options:[
      {label:"Медицина, психология",type:"medicine"},
      {label:"Tech, gadgets, coding",type:"it"},
      {label:"Дизайн, fashion, branding",type:"design"},
      {label:"Білім, self-development",type:"education"}
    ]
  },
  {
    text:"Саған ең жақын финал қандай?",
    options:[
      {label:"Дәрігер / психолог / фармацевт",type:"medicine"},
      {label:"Бағдарламашы / analyst / cybersecurity",type:"it"},
      {label:"UX/UI / graphic / media",type:"design"},
      {label:"Мұғалім / mentor / pedagogy",type:"education"}
    ]
  }
];

const quizResults = {
  medicine:{
    title:"Саған медицина және адамға бағытталған салалар жақын 🩺",
    description:"Сенде эмпатия, жауапкершілік және адамдарға нақты көмектесуге ұмтылыс бар. Саған дәрігер, фармацевт, психолог, ветеринар сияқты мамандықтар сәйкес келуі мүмкін.",
    professions:["Дәрігер","Фармацевт","Психолог","Ветеринар"],
    universities:["Астана медицина университеті","ҚазҰМУ","Қарағанды медицина университеті"]
  },
  it:{
    title:"Саған IT және аналитикалық бағыттар жақын 💻",
    description:"Сен логикамен ойлауға, жүйе құруға және технологиямен жұмыс істеуге бейімсің. Саған бағдарламашы, data analyst, cybersecurity сияқты мамандықтар сай.",
    professions:["Бағдарламашы","Data Analyst","Киберқауіпсіздік маманы","Өнім менеджері"],
    universities:["Astana IT University","Nazarbayev University","IITU","Satbayev University"]
  },
  design:{
    title:"Саған дизайн және креатив бағыттары жақын 🎨",
    description:"Сен визуал, эстетика және жаңа идея жасауға бейімсің. Саған UX/UI дизайнер, графикалық дизайнер, гейм-дизайнер, медиа-продюсер ұнауы мүмкін.",
    professions:["UX/UI дизайнер","Графикалық дизайнер","Гейм-дизайнер","Медиа-продюсер"],
    universities:["IITU","Turan University","SDU University","Қазақ ұлттық өнер университеті"]
  },
  education:{
    title:"Саған білім беру және гуманитарлық бағыт жақын 📚",
    description:"Сенде түсіндіру, бағыт беру және адамдардың өсуіне ықпал ету қабілеті бар. Саған мұғалім, педагог, тіл маманы, тәлімгер бағыттары сай келеді.",
    professions:["Мұғалім","Аудармашы","Психолог","Халықаралық қатынастар маманы"],
    universities:["Абай атындағы ҚазҰПУ","Қазақ ұлттық қыздар педагогикалық университеті","ЕҰУ","ҚазҰУ"]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("quizContainer");
  const form = document.getElementById("quizForm");
  const progress = document.getElementById("progressBar");
  const submitBtn = document.getElementById("submitQuiz");
  const resultBox = document.getElementById("quizResultBox");

  if (!wrap || !form || !progress || !submitBtn || !resultBox) {
    console.error("Quiz elements not found");
    return;
  }

  form.innerHTML = quizQuestions.map((q, i) => `
    <section class="q-card reveal">
      <h3 class="q-title">${i + 1}. ${q.text}</h3>
      <div class="options">
        ${q.options.map((opt) => `
          <label class="option">
            <input type="radio" name="q${i}" value="${opt.type}">
            <span>${opt.label}</span>
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");

  const inputs = form.querySelectorAll("input[type='radio']");

  function updateProgress() {
    let answered = 0;
    quizQuestions.forEach((_, i) => {
      if (form.querySelector(`input[name="q${i}"]:checked`)) answered++;
    });
    progress.style.width = `${(answered / quizQuestions.length) * 100}%`;
  }

  inputs.forEach(input => input.addEventListener("change", updateProgress));

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const scores = {medicine:0,it:0,design:0,education:0};
    let answered = 0;

    quizQuestions.forEach((_, i) => {
      const checked = form.querySelector(`input[name="q${i}"]:checked`);
      if (checked) {
        answered++;
        scores[checked.value]++;
      }
    });

    if (answered < quizQuestions.length) {
      alert("Барлық сұраққа жауап бер.");
      return;
    }

    let bestType = "education";
    let bestScore = -1;

    Object.entries(scores).forEach(([key, value]) => {
      if (value > bestScore) {
        bestScore = value;
        bestType = key;
      }
    });

    const result = quizResults[bestType];
    localStorage.setItem("openuni_quiz_result", JSON.stringify(result));

    resultBox.innerHTML = `
      <div class="result-card">
        <h2>${result.title}</h2>
        <p style="color:var(--muted)">${result.description}</p>
        <div class="grid grid-2" style="margin-top:16px">
          <div class="card">
            <h3>Ұсынылатын мамандықтар</h3>
            <div class="meta">
              ${result.professions.map(x => `<span class="pill">${x}</span>`).join("")}
            </div>
          </div>
          <div class="card">
            <h3>Ұсынылатын университеттер</h3>
            <div class="meta">
              ${result.universities.map(x => `<span class="pill">${x}</span>`).join("")}
            </div>
          </div>
        </div>
        <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
          <a class="btn btn-primary" href="professions.html">Мамандықтарды көру</a>
          <a class="btn btn-secondary" href="profile.html">Профильге сақтау</a>
        </div>
      </div>
    `;

    resultBox.scrollIntoView({behavior:"smooth", block:"start"});
  });

  updateProgress();
});
