const targetDate = new Date("Feb 21, 2030 12:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);

  document.getElementById("timer").innerHTML =
    `${days} Hari ${hours} Jam ${minutes} Menit`;
}, 1000);

// Petals falling
const petalsContainer = document.getElementById('petals');
const totalPetals = 30; // bisa ubah jumlah bunga

for (let i = 0; i < totalPetals; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Random posisi horizontal
  petal.style.left = Math.random() * window.innerWidth + 'px';

  // Random ukuran
  const size = 10 + Math.random() * 20; // 10px - 30px
  petal.style.width = size + 'px';
  petal.style.height = size + 'px';

  // Random durasi jatuh
  petal.style.animationDuration = (5 + Math.random() * 5) + 's';

  // Random delay supaya jatuh tidak serempak
  petal.style.animationDelay = Math.random() * 5 + 's';

  petalsContainer.appendChild(petal);
}
