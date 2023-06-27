const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));

let currentIndex = 0;
const itemWidth = carouselContainer.clientWidth / 3; // Adjust this value based on the number of items in the carousel

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

nextButton.addEventListener('click', () => {
  const numItems = carouselContainer.children.length;
  currentIndex = Math.min(currentIndex + 1, numItems - 3);
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});
