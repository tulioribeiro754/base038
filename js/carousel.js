let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active-slide"));
  slides[index].classList.add("active-slide");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

if (slides.length > 0) {
  showSlide(slideIndex);
  setInterval(nextSlide, 10000);
}

window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
