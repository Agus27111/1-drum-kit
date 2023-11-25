// ini untuk handle SOUND nya
//buat fungsi playsound
window.addEventListener("keydown", playSound);

//buat fungsi playSound
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //jika audio tidak ada

  audio.currentTime = 0; //reset waktu audio
  audio.play();

  //ini untuk handle CSS nya
  key.classList.add("playing");
}

//ini fungsi untuk CSS
function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  key.target.classList.remove("playing");
}

key.addEventListener("transitionend", removeTransition);

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
