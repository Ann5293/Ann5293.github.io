//Audio play & Volumn set 
//if sound permission is allow then will autoplay audio when browser open, else will only autoplay when navigate to links
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.play();
    audio.volume = 0.2;
  });