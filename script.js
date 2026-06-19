/* ============================================================
   Happy Birthday • interaksi
   Atur semua isi di CONFIG ini lalu simpan.
   ============================================================ */
const CONFIG = {
  name: "Aldo Rifa'i💚",
  letterName: "Aldo 💚",
  dateLabel: "25 JUNI 2009",
  stamp: "25 Juni 2009",
  // kode rahasia (jumlah angka = jumlah titik di layar = 6). clue: tanggal spesial
  password: "231222",

  // ---------- surat ----------
  letter: [
    "selamat ulang tahun, sayang 💚",
    "HEY MOKONDO! IT'S YOUR BIRTHDAY! happy birthday to youuu!!, sayanggkuhh, cintahkuu, semestakuh, planet²kuh hehe. hari ini hari kamu sayangg, dan aku mau kamu tau seberapa besar aku sayang dan cinta sama kamu. on your special day, i love you now, and always will. ternyata ga kerasa yaa kitaa udaah hampir 4 tahunn sama sama! 4 tahunn kitaa merayakann barengg dann memperbaikii hubungan terus meneruss, and hopefully it will always be like that, it will never leave my life again cintakuuh",
    "you are the one i care about most, lebih dari apa pun. kamu itu berharga banget buat aku. i can't even find the right words to explain how much you mean to me. rasanya tu, kalau pakai kata-kata malah ga cukup. kadang cinta itu terlalu besar buat dijelasin, tapi selalu bisa dirasain dan kamu pasti bisa ngerasain itu dari aku.",
    "aku akan jadi seseorang yang selalu bangga sama kamu sayangg, sama perjalanan kamu, sama semuaa yang kamuu lakuinn, aku akan selaluu support keinginan kamuu, hobi kamuu, dan hal hal lain yg kamuu lagii tekuninn. aku akan selalu disini nemenin kamuu, percayalah itu, kalo kamu butuhin orang buat hal 'apapun' kabarin aku okayy? aku akan selaluu ada buat kamuu dimanapun dan kapanpunn, i will always endeavour for that. makasii sudaah menemanii aku darii 2022 sayangg, kitaa lanjut ke tahunn tahun berikutnyaa sampee selamanya yaa bububb? kitaa selalu rayakann ulang tahunn kitaa berduaa, akuu happy bisaa bareng kamuu selama inii, kitaa harus buktiin ke semuaa orang di dunia inii kaloo kita bisa lewati badai badai yang akan datang.",
    "terimakasii sudaa mauu berubahh, terimakasii udaah beranii buatt memperbaiki, terimakasii udahh bertahann, terimakasi udaah always sayangg sama akuu dann nemenin akuu kapanpunn. akuu bahagia banget dan bersyukur punya kamu! ternyataa kesempatan yangg aku kasii ke kamuu sangatt digunakann dengann baikk sama kamuu, i'm proud! i love you, always every day, every hour, minute, and second. my love grows and increases every day, i will always love you my love. sekali lagi, happy birthday sayangg, you should be happy on a day that is full of happiness my love. i love u so much cintakuu duniakuu, and mokyondo kuh😋",

  ],
  letterSign: "",

  // ---------- photo memories (pakai foto1..foto6 yang ada) ----------
  photos: [
    { img: "foto2.jpeg", cap: "" },
    { img: "foto3.jpeg", cap: "" },
    { img: "foto4.jpeg", cap: "" },
    { img: "foto1.jpeg", cap: "" },
  ],

  // ---------- timeline ----------
  timeline: [
    { icon: "✨", tag: "Awal mula", title: "Pertama Kali Kita Bertemu", text: "ponpes ar raudah jadi saksi betapa indahnya kamu dari kejauhan sayangg, betapa jatuhnya aku ke dalam cinta yang kamu berikan waktu itu, cinta polos dan tulus yang aku berikan buat kamu, kode-kode kecil yang berharga ga akan aku lupain, perasaan deg-degan yang gak akan aku lupain juga, dan kamu selalu indah di mataku meski tatapan kita terhalang layar hp sekarang (eak)" },
  ],

  // ---------- traits ----------
  traits: [
    { icon: "🪨", text: "kepala batu" },
    { icon: "😤", text: "ngeselin banget, aku ga suka pas candaan kamu udah bikin aku nangis" },
    { icon: "🥺", text: "cemburuan + posesif banget HUAAA tapi suka mendem" },
    { icon: "🙄", text: "susah dibujuk" },
    { icon: "🥰", text: "comel" },
    { icon: "😒", text: "ga punya cerita kehidupan 😒" },
    { icon: "💚", text: "selalu sayang akuu" },
    { icon: "😋", text: "ga pandai jadi mokondo" },
  ],

  // ---------- playlist ----------
  songs: [
  ],

  // ---------- jar notes ----------
  jarNotes: [
    "perbanyak ibadah!! SOLAT SANA, DOA SUPAYA JEBOL NTAR, and dipermudahkan segala urusan",
    "lebih disiplin waktuu ya sayang",
    "JANGAN CUAI",
    "cukur kumis!",
    "lebih dewasa yaa sayang, biar bisa bimbing aku lebih baik lagi",
    "kalo ada apa², atau aku ada salah, just say it, bilang aja yaa, biar aku tauu",
    "HAPUS SILENT TREATMENT!!",
    "jangan comel comel",
    "nak duet🫴🏻",
  ],

  // ---------- final wish ----------
  wish: "Selamat ulang tahun, {name}. Semoga hari-harimu selalu dipenuhi dengan cinta, kasih sayang, kebahagiaan dan semua hal indah yang pantas kamu dapatkan. Aku bersyukur setiap hari bisa mengenalmu, Tuhan memberkatimu dan aku mencintaimu.",
};

/* ============================================================
   apply text content
   ============================================================ */
const $ = (id) => document.getElementById(id);
$("heroName").textContent = "selamat ulang tahun sayangg";
if ($("letterName")) $("letterName").textContent = CONFIG.letterName || CONFIG.name;
$("heroDate").innerHTML = `${CONFIG.dateLabel} &nbsp;·&nbsp; SELAMAT ULANG TAHUN SAYANGG`;
$("letterStamp").textContent = CONFIG.stamp;
$("wishText").textContent = CONFIG.wish.replace(/\{name\}/g, CONFIG.name);

$("letterBody").innerHTML =
  CONFIG.letter.map((p) => `<p>${p}</p>`).join("") +
  `<p class="sign">${CONFIG.letterSign}</p>`;

$("polaroids").innerHTML = CONFIG.photos
  .map((p, i) => {
    const r = (i % 2 ? 1 : -1) * (2 + (i % 3));
    return `<figure class="pola" data-i="${i}" style="--r:${r}deg">
      <span class="pic" style="background-image:url('${p.img}')"></span>
      <figcaption class="cap">${p.cap}</figcaption>
    </figure>`;
  })
  .join("");

const _tl = $("timelineList");
if (_tl) _tl.innerHTML = CONFIG.timeline
  .map(
    (t) => `<div class="tl-card">
      <span class="tl-icon">${t.icon}</span>
      <p class="tl-tag">${t.tag}</p>
      <h3 class="tl-title">${t.title}</h3>
      <p class="tl-text">${t.text}</p>
    </div>`
  )
  .join("");

const _traits = $("traitsList");
if (_traits) _traits.innerHTML = CONFIG.traits
  .map(
    (t) => `<div class="tl-card">
      <span class="tl-icon">${t.icon}</span>
      <p class="tl-text">${t.text}</p>
    </div>`
  )
  .join("");

/* ============================================================
   LOADER -> LOCK
   ============================================================ */
const loader = $("loader");
const lock = $("lock");
setTimeout(() => {
  loader.classList.add("fade");
  lock.classList.remove("hidden");
}, 2200);

/* ============================================================
   PASSWORD
   ============================================================ */
const pinDots = $("pinDots");
const keypad = $("keypad");
let pin = "";

function renderPin() {
  pinDots.querySelectorAll("span").forEach((d, i) => d.classList.toggle("filled", i < pin.length));
}
keypad.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  if (btn.dataset.key === "del") pin = pin.slice(0, -1);
  else if (pin.length < CONFIG.password.length) pin += btn.dataset.key;
  renderPin();
  if (pin.length === CONFIG.password.length) setTimeout(checkPin, 160);
});
function checkPin() {
  if (pin === CONFIG.password) {
    lock.classList.add("hidden");
    showGift();
  } else {
    pinDots.classList.add("shake");
    setTimeout(() => { pinDots.classList.remove("shake"); pin = ""; renderPin(); }, 500);
  }
}

/* ============================================================
   GIFT OPENING
   ============================================================ */
const gift = $("gift");
const giftbox = $("giftbox");
const main = $("main");

function showGift() {
  gift.classList.remove("hidden");
  giftbox.classList.add("shake-it");
}
giftbox.addEventListener("click", () => {
  if (giftbox.classList.contains("open")) return;
  giftbox.classList.remove("shake-it");
  giftbox.classList.add("open");
  burstPetals(40);
  tryPlayMusic();

  const giftPhoto = $("giftPhoto");
  if (giftPhoto) {
    // ada reveal foto + topi -> tampilkan, lalu tunggu tombol "open me"
    setTimeout(() => {
      giftbox.classList.add("hidden");
      const lbl = document.querySelector(".gift-label"); if (lbl) lbl.classList.add("hidden");
      const tap = document.querySelector(".gift-tap"); if (tap) tap.classList.add("hidden");
      giftPhoto.classList.remove("hidden");
      burstPetals(30);
    }, 1100);
  } else {
    // tanpa reveal -> langsung ke konten
    setTimeout(goToMain, 1200);
  }
});

function goToMain() {
  const distScreen = $("distScreen");
  if (distScreen && !distScreen.classList.contains("shown")) {
    // tampilkan layar jarak dulu
    gift.classList.add("hidden");
    distScreen.classList.remove("hidden");
    distScreen.classList.add("shown");
    return;
  }
  // lanjut ke konten utama
  gift.classList.add("hidden");
  if (distScreen) distScreen.classList.add("hidden");
  main.classList.remove("hidden");
  initReveal();
  window.scrollTo(0, 0);
}

/* tombol "next" di layar jarak */
const distNext = $("distNext");
if (distNext) distNext.addEventListener("click", () => {
  $("distScreen").classList.add("hidden");
  main.classList.remove("hidden");
  initReveal();
  window.scrollTo(0, 0);
});

/* tombol "open me" -> lanjut ke konten (kalau ada) */
const openMeBtn = $("openMeBtn");
if (openMeBtn) openMeBtn.addEventListener("click", goToMain);

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
    { threshold: 0.18 }
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

/* ============================================================
   PHOTO LIGHTBOX
   ============================================================ */
const lightbox = $("lightbox");
const lbImg = $("lbImg");
const lbCap = $("lbCap");
$("polaroids").addEventListener("click", (e) => {
  const pola = e.target.closest(".pola");
  if (!pola) return;
  const p = CONFIG.photos[+pola.dataset.i];
  lbImg.src = p.img;
  lbCap.textContent = p.cap;
  lightbox.classList.remove("hidden");
});
function closeLightbox() { lightbox.classList.add("hidden"); }
$("lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

/* ============================================================
   DIGITAL BOUQUET
   ============================================================ */
const flowerMsg = $("flowerMsg");
document.querySelectorAll(".flower").forEach((f) => {
  f.addEventListener("click", () => {
    flowerMsg.style.opacity = "0";
    setTimeout(() => {
      flowerMsg.textContent = f.dataset.msg;
      flowerMsg.style.opacity = "1";
    }, 200);
    burstPetals(8, f);
  });
});

/* ============================================================
   PLAYLIST
   ============================================================ */
const bgm = $("bgm");
const mpToggle = $("mpToggle");
const mpIco = mpToggle ? mpToggle.querySelector(".mp-ico") : null;

function setMpPlaying(on) {
  if (mpIco) mpIco.textContent = on ? "⏸" : "▶";
  if (mpToggle) mpToggle.classList.toggle("spin", on);
}
function setMediaSession(title, artist) {
  if (!("mediaSession" in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: title || "pilihan hati ku",
    artist: artist || "lavina",
  });
}
function tryPlayMusic() {
  bgm.volume = 0.5;
  setMediaSession("pilihan hati ku", "lavina");
  bgm.play().then(() => setMpPlaying(true)).catch(() => setMpPlaying(false));
}

if (mpToggle) {
  mpToggle.addEventListener("click", () => {
    if (bgm.paused) bgm.play().then(() => setMpPlaying(true)).catch(() => {});
    else { bgm.pause(); setMpPlaying(false); }
  });
}
bgm.addEventListener("play", () => setMpPlaying(true));
bgm.addEventListener("pause", () => setMpPlaying(false));

/* ---------- backsound mulai sejak interaksi pertama (masukin PIN) ---------- */
let musicStarted = false;
function startMusicOnce() {
  if (musicStarted) return;
  musicStarted = true;
  tryPlayMusic();
}
window.addEventListener("load", () => {
  bgm.volume = 0.5;
  setMediaSession("pilihan hati ku", "lavina");
  bgm.play().then(() => { musicStarted = true; setMpPlaying(true); }).catch(() => {});
});
["pointerdown", "touchstart", "keydown", "click"].forEach((ev) =>
  document.addEventListener(ev, startMusicOnce, { passive: true })
);

/* ============================================================
   SHAKE THE JAR
   ============================================================ */
const jar = $("jar");
const shakeBtn = $("shakeBtn");
const jarNote = $("jarNote");
let lastNote = -1;
shakeBtn.addEventListener("click", () => {
  jar.classList.add("shaking");
  jarNote.classList.remove("show");
  shakeBtn.disabled = true;
  setTimeout(() => {
    jar.classList.remove("shaking");
    let i;
    do { i = Math.floor(Math.random() * CONFIG.jarNotes.length); }
    while (i === lastNote && CONFIG.jarNotes.length > 1);
    lastNote = i;
    jarNote.textContent = "🫙 " + CONFIG.jarNotes[i];
    jarNote.classList.add("show");
    burstPetals(10);
    shakeBtn.disabled = false;
  }, 900);
});

/* ============================================================
   CELEBRATE MODAL
   ============================================================ */
const hbdModal = $("hbdModal");
$("celebrateBtn").addEventListener("click", () => {
  hbdModal.classList.remove("hidden");
  modalFlowerBurst();
  burstPetals(60);
});
$("closeModal").addEventListener("click", () => hbdModal.classList.add("hidden"));

/* ============================================================
   FLOWER PETALS
   ============================================================ */
const petals = $("petals");
const PETALS = ["🌸", "🌷", "🌼", "🌻", "🌹", "💮", "🏵️"];

function spawnPetal(x) {
  const p = document.createElement("span");
  p.className = "petal";
  p.textContent = PETALS[(Math.random() * PETALS.length) | 0];
  p.style.left = (x != null ? x : Math.random() * 100) + "%";
  p.style.fontSize = 14 + Math.random() * 18 + "px";
  p.style.animationDuration = 5 + Math.random() * 5 + "s";
  petals.appendChild(p);
  setTimeout(() => p.remove(), 11000);
}
function burstPetals(count, fromEl) {
  let x = null;
  if (fromEl) {
    const r = fromEl.getBoundingClientRect();
    x = ((r.left + r.width / 2) / window.innerWidth) * 100;
  }
  for (let i = 0; i < count; i++) setTimeout(() => spawnPetal(x), i * 40);
}
/* ambient */
setInterval(() => spawnPetal(), 1400);
spawnPetal();

/* modal flower burst */
function modalFlowerBurst() {
  const wrap = $("modalFlowers");
  wrap.innerHTML = "";
  for (let i = 0; i < 26; i++) {
    const f = document.createElement("span");
    f.textContent = PETALS[(Math.random() * PETALS.length) | 0];
    f.style.position = "absolute";
    f.style.left = Math.random() * 100 + "%";
    f.style.top = "-30px";
    f.style.fontSize = 16 + Math.random() * 16 + "px";
    f.style.animation = `fall ${4 + Math.random() * 4}s linear forwards`;
    f.style.animationDelay = Math.random() * 1.5 + "s";
    wrap.appendChild(f);
  }
}

/* music toggle via floating not needed; play starts on gift open */
