//buat fungsi playsound
window.addEventListener("keydown", playSound);

//buat fungsi playSound
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //jika audio tidak ada

  audio.currentTime = 0; //reset waktu audio
  audio.play();
}
