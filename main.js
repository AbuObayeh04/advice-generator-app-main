"use strict";

const adviceId = document.getElementById("advice-id");
const adviceP = document.getElementById("advice-body");
const btn = document.getElementById("btn");

if (window.innerWidth <= 450) {
  document.querySelector(".divider").src = "images/pattern-divider-mobile.svg";
} else {
  document.querySelector(".divider").src = "images/pattern-divider-desktop.svg";
}

let fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      adviceId.innerText = data.slip["id"];
      adviceP.innerText = data.slip["advice"];
    })
    .catch((err) => {
      console.error(err);
    });
};

fetchAdvice();

btn.addEventListener("click", fetchAdvice);
