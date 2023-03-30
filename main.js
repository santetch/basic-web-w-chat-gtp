// Header
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("change");
  menu.classList.toggle("show");
});

// Section Carousel

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = document.querySelectorAll('.carousel-item');
const slideInterval = 3000; // slide duration in ms

let currentIndex = 0;
let slideTimer;

function showCurrentItem() {
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.remove('active');
    carouselItems[i].classList.remove('prev');
    carouselItems[i].classList.remove('next');
  }

  let current = carouselItems[currentIndex];
  let prev = carouselItems[currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1];
  let next = carouselItems[currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1];

  current.classList.add('active');
  prev.classList.add('prev');
  next.classList.add('next');
}

function startSlideTimer() {
  slideTimer = setInterval(() => {
    if (currentIndex === carouselItems.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    showCurrentItem();
  }, slideInterval);
}

function stopSlideTimer() {
  clearInterval(slideTimer);

  setTimeout(() => {startSlideTimer()}, 3000)
}

prevButton.addEventListener('click', () => {
  stopSlideTimer();
  if (currentIndex === 0) {
    currentIndex = carouselItems.length - 1;
  } else {
    currentIndex--;
  }
  showCurrentItem();
});

nextButton.addEventListener('click', () => {
  stopSlideTimer();
  if (currentIndex === carouselItems.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showCurrentItem();
});

startSlideTimer();
