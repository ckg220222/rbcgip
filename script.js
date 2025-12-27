// Countdown
const targetDate = new Date("Feb 21, 2030 12:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance / (1000*60*60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  document.getElementById("timer").innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit`;
}, 1000);

// Scroll-to-play Music
const music = document.getElementById('weddingMusic');
let musicPlayed = false;
window.addEventListener('scroll', () => {
  if (!musicPlayed) {
    music.play().catch(err => console.log('Browser memblokir autoplay:', err));
    musicPlayed = true;
  }
});

// Bunga jatuh
const petalsContainer = document.getElementById('petals');
const totalPetals = 30;
for (let i=0;i<totalPetals;i++){
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random()*window.innerWidth + 'px';
  const size = 10 + Math.random()*20;
  petal.style.width = size + 'px';
  petal.style.height = size + 'px';
  petal.style.animationDuration = (5+Math.random()*5)+'s';
  petal.style.animationDelay = Math.random()*5+'s';
  petalsContainer.appendChild(petal);
}

const music = document.getElementById('weddingMusic');
const button = document.getElementById('playMusic');

button.addEventListener('click', () => {
  // Putar musik
  music.play().catch(err => console.log(err));

  // Scroll halaman sedikit ke bawah
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: 'smooth'
  });

  // Sembunyikan tombol setelah ditekan
  button.style.display = 'none';
});
