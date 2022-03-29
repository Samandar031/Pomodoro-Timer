"use strict";

let startBtnOne = document.querySelector(".timer_btn");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let short = document.querySelector(".short_break");
let long = document.querySelector(".long_break");

let container = document.querySelector(".container");
let timerBox = document.querySelector(".timer_box");

startBtnOne.addEventListener("click", function () {
  min.textContent = 24;
  sec.textContent = 59;
  let t = setInterval(function () {
    sec.textContent--;
    console.log(`${min.textContent}:${sec.textContent}`);
    if (sec.textContent == 0) {
      sec.textContent = 60;
      min.textContent--;
    } else if (min.textContent == -1) {
      min.textContent = "00";
      sec.textContent = "00";

      clearInterval(t);
    } else if (min.textContent == 0 && sec.textContent == 0) {
      min.textContent = 2;
      sec.textContent = 60;
    }
  }, 1000);
});

short.addEventListener("click", function () {
  min.textContent = 5;
  sec.textContent = "00";
  short.style.backgroundColor = "var(--backP)";
});
