import "./assets/modulepreload-polyfill-3cfb730f.js";
const e = document.getElementById("hero"),
  s = new Image();
s.onload = function () {
  (e.style.backgroundImage = "url(../website/assets/images/hero_c.png)"),
    e.classList.add("loaded");
};
s.src = "../website/assets/images/hero_c.png";
