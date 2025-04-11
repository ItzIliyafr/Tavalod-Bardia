document.getElementById('chest').addEventListener('click', function() {
  document.getElementById('chest').classList.add('hidden');
  document.getElementById('letter').classList.remove('hidden');
  // لرزش نامه
  document.getElementById('letter').classList.add('shake');
  
  // پخش موسیقی
  document.getElementById('music').play();
});

document.getElementById('letter').addEventListener('click', function() {
  document.getElementById('letter').classList.add('hidden');
  
  // پس از 2 ثانیه، دعوت نامه نمایش داده می‌شود
  setTimeout(function() {
    document.getElementById('invite').classList.remove('hidden');
  }, 2000); // 2 ثانیه تأخیر
  
  // افکت بادکنک‌ها (کنفتی)
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
