document.getElementById('chest').addEventListener('click', function() {
  // پنهان کردن جعبه
  document.getElementById('chest').classList.add('hidden');
  // نمایش نامه
  document.getElementById('letter').classList.remove('hidden');
  // تغییر متن دستورالعمل به "حالا لطفا روی نامه کلیک کنید تا کارتتون رو بگیرید"
  document.querySelector('.instruction').innerText = "حالا لطفا روی نامه کلیک کنید تا کارتتون رو بگیرید";
});

document.getElementById('letter').addEventListener('click', function() {
  // پنهان کردن نامه
  document.getElementById('letter').classList.add('hidden');
  // نمایش دعوت‌نامه
  document.getElementById('invite').classList.remove('hidden');
  // پخش موسیقی تولد
  document.getElementById('music').play();

  // اثر بادکنک‌ها (با استفاده از confetti)
  if (window.confetti) {
    for (let i = 0; i < 5; i++) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
});
