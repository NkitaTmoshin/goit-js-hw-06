"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galeryEl = document.querySelector(".gallery");

const elemImgEl = images
  .map(
    (image) =>
      `<li><img class="picture" 
      src=${image.url} 
      width = '150' 
      height = '150' 
      alt='${image.alt}'>
      </img></li>`
  )
  .join("");

galeryEl.insertAdjacentHTML("beforeend", elemImgEl);

galeryEl.style.display = "flex";
galeryEl.style.flexWrap = "column-reverse";
galeryEl.style.listStyle = "none";
galeryEl.style.gap = "15px";
galeryEl.style.justifyContent = "center";
