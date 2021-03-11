let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;
document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });
function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }
  slides[slidePosition].classList.add("carousel__item--visible");
}
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

// changecolor o day .

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const img = document.querySelector("#img-color");
//bắt sự kiện click
color1.addEventListener("click", function () {
  img.src = "./images/choose1.jpg";
  autoplay = true;
  loop = true;
});
color2.addEventListener("click", function () {
  img.src = "./images/choose2.jpg";
  autoplay = true;
  loop = true;
});
color3.addEventListener("click", function () {
  img.src = "./images/choose3.jpg";
  autoplay = true;
  loop = true;
});
color4.addEventListener("click", function () {
  img.src = "./images/choose4.jpg";
  autoplay = true;
  loop = true;
});
color5.addEventListener("click", function () {
  img.src = "./images/choose5.jpg";
  autoplay = true;
  loop = true;
});
