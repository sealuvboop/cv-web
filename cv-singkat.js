function initContact() {
  const emailEl = document.getElementById("cv-email");
  const waEl = document.getElementById("cv-wa");

  if (emailEl) emailEl.textContent = CONFIG.email;

  if (waEl) {
    waEl.textContent = CONFIG.whatsapp;
  }
}

function initPhoto() {
  const img = document.getElementById("cv-photo");
  if (!img) return;

  img.addEventListener("error", () => {
    img.src = CONFIG.fotoFallback;
  });
  img.src = CONFIG.foto;
}

function initPrint() {
  document.getElementById("btn-print")?.addEventListener("click", () => {
    window.print();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPhoto();
  initContact();
  initPrint();
});
