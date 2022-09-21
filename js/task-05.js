"use strict";

const textInput = document.querySelector("#name-input");
console.log(textInput);

const output = document.querySelector("#name-output");
console.log(output);

textInput.addEventListener("input", (event) => {
  output.textContent = event.target.value;

  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
});
