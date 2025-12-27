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
