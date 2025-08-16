/*Image Slider Controls */
const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imageDescription = document.querySelector(".image-description");

let currentIndex = 0;
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateImageDescription();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateImageDescription();
}

function updateImageDescription() {
  const altText = images[currentIndex].getAttribute("alt");
  imageDescription.textContent = altText;
}

prevBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
});

nextBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  nextSlide();
});

updateImageDescription();
