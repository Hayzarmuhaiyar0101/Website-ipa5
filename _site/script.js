const photoUrls = [
  "Foto Bukber/Bukber1.jpg",
  "Foto Bukber/Bukber2.jpg",
  "Foto Bukber/Bukber3.jpg",
  "Foto Bukber/Bukber4.jpg",
  "Foto Perpisahan/Perpisahan3.jpg",
  "Kegiatan/Nari.jpg",
  // Tambahkan semua link foto kenangan kamu di sini
];

const photoRow = document.getElementById("photoRow");

photoUrls.forEach((url) => {
  const card = document.createElement("div");
  card.className = "photo-card";
  card.innerHTML = `<img src="${url}" alt="Kenangan SMA">`;
  photoRow.appendChild(card);
});

const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggle-music");

// Atur volume musik awal
music.volume = 0.5;

// Tombol Play/Pause
toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play(); // Memulai musik
    toggleBtn.textContent = "🔊"; // Ubah ikon tombol
  } else {
    music.pause(); // Menghentikan musik
    toggleBtn.textContent = "🔇"; // Ubah ikon tombol
  }
});

alert("Selamat datang di halaman kenangan SMA! Nikmati musik dan foto-foto kenangan kita bersama.");
