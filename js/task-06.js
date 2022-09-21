"use strict";

const inputnameEl = document.querySelector("#validation-input");
const validLength = parseInt(inputnameEl.getAttribute("data-length"));

inputnameEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === validLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
});
