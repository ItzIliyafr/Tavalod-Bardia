document.getElementById('chest').addEventListener('click', function() {
  document.getElementById('chest').classList.add('hidden');
  document.getElementById('letter').classList.remove('hidden');
});

document.getElementById('letter').addEventListener('click', function() {
  document.getElementById('letter').classList.add('hidden');
  document.getElementById('invite').classList.remove('hidden');
  document.getElementById('music').play();

  // Balloons effect (using confetti)
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
