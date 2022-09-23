"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elementsEl = ingredients.map((ingredients) => {
  const newLiEl = document.createElement("li");
  newLiEl.classList.add("item");
  newLiEl.textContent = ingredients;
  return newLiEl;
});

ingredientsEl.append(...elementsEl);
