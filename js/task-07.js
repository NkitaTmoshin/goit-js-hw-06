"use strict";

const input = document.querySelector("input");
const spanEl = document.querySelector("span");

input.addEventListener("input", (event) => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
