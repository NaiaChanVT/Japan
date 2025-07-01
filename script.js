
const itinerary = [
  {
    title: "Día 1: 到着とドトンボリ散策",
    items: [
      "Check-in en tu alojamiento",
      "Paseo por Dotonbori",
      "Cena con takoyaki o ramen Ichiran",
      "Fotos con el cartel Glico"
    ]
  },
  {
    title: "Día 2: 城とアートの美",
    items: [
      "Visita al Castillo de Osaka",
      "Picnic o paseo por el parque del castillo",
      "Museo de Arte de Nakanoshima",
      "Té y pastel en un café bonito"
    ]
  },
  {
    title: "Día 3: レトロゲームの日 🎮",
    items: [
      "Super Potato (videojuegos antiguos)",
      "Tiendas de figuras y ropa 90s en Den Den Town",
      "Fotos en purikura vintage",
      "Cena estilo Showa"
    ]
  },
  {
    title: "Día 4: 平和な神社巡り",
    items: [
      "Santuario Sumiyoshi Taisha",
      "Fotos y paseo en tranvía retro",
      "Atardecer en parque Sakuranomiya",
      "Ramen en izakaya tranquilo"
    ]
  },
  {
    title: "Día 5: 奈良の日帰り旅行",
    items: [
      "Ciervos en el parque de Nara",
      "Templo Tōdai-ji y Buda gigante",
      "Té matcha en casa tradicional",
      "Regreso a Osaka por la tarde"
    ]
  },
  {
    title: "Día 6: 遊園地またはリラックス",
    items: [
      "Opción A: Universal Studios Japan",
      "Opción B: Día aesthetic en cafés y tiendas retro",
      "Cena con vista en Umeda o zona chill"
    ]
  },
  {
    title: "Día 7: 思い出とお別れ",
    items: [
      "Compra de recuerdos retro",
      "Fotos en callejones bonitos",
      "Última comida reconfortante",
      "Preparación para el vuelo"
    ]
  }
];

const main = document.getElementById("itinerary");

itinerary.forEach(day => {
  const section = document.createElement("section");
  section.className = "day";
  section.innerHTML = `<h2>${day.title}</h2><ul>${day.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  main.appendChild(section);
});

// Animación scroll reveal
const reveal = () => {
  const elements = document.querySelectorAll(".day");
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Modo noche
document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Contador regresivo a diciembre 2026
const countdown = document.getElementById("countdown");
function updateCountdown() {
  const eventDate = new Date("2026-12-01T00:00:00");
  const now = new Date();
  const diff = eventDate - now;
  if (diff <= 0) {
    countdown.textContent = "¡Ya estás en Osaka!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.textContent = `⏳ Faltan ${days} días para tu viaje`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Música de fondo
const music = document.getElementById("bg-music");
const volume = document.getElementById("volume");
volume.addEventListener("input", () => {
  music.volume = volume.value;
});
function toggleMute() {
  music.muted = !music.muted;
}
music.volume = 0.5;
music.play();
