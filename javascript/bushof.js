const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(n);
}

// Attach event listeners to the previous and next arrow buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', function (event) {
  event.preventDefault();
  changeSlide(-1);
});

nextBtn.addEventListener('click', function (event) {
  event.preventDefault();
  changeSlide(1);
});




var imageCount = 22; // Start the count from 22
var targetCount = 64; // Target count

while (imageCount <= targetCount) {
  var item = document.createElement("div");
  item.classList.add("item");

  var img = document.createElement("img");
  img.src = "content/Geschichte-und-Zukunft-des-Aachener-Bushofs-cen" + imageCount + ".jpg";

  item.appendChild(img);
  document.querySelector(".carousel .carousel-items").appendChild(item);

  imageCount++;
}



let carousel = document.querySelector('.carousel');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let item = document.querySelector('.item');
(function () {
   right.addEventListener('click', function (e) {
      carousel.scrollLeft += item.clientWidth;
   });
   left.addEventListener('click', function () {
      carousel.scrollLeft -= item.clientWidth;
   });
