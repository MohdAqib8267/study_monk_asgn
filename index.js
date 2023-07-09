const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevIcon = document.querySelector('.prev-icon');
const nextIcon = document.querySelector('.next-icon');


let sliding = false;

prevIcon.addEventListener('click', () => {
  if (sliding) return;
  sliding = true;

  const currentSlide = slides.querySelector('img:first-child');
  const prevSlide = currentSlide.previousElementSibling || slides.lastElementChild;

  slides.prepend(prevSlide);
  slides.style.transition = 'none';
  slides.style.transform = `translateX(-${currentSlide.offsetWidth}px`;

  setTimeout(() => {
    slides.style.transition = 'transform 1s ease';
    slides.style.transform = 'translateX(0)';
    sliding = false;
  }, 100);
});

nextIcon.addEventListener('click', () => {
  if (sliding) return;
  sliding = true;

  const currentSlide = slides.querySelector('img:first-child');
  const nextSlide = currentSlide.nextElementSibling || slides.firstElementChild;

  slides.style.transform = `translateX(-${nextSlide.offsetWidth}px)`;
  slides.style.transition = 'transform 1s ease';

  setTimeout(() => {
    slides.appendChild(currentSlide);
    slides.style.transition = '';
    slides.style.transform = 'translateX(0)';
    sliding = false;
  }, 1000);
});




window.addEventListener('DOMContentLoaded', () => {
  const benefitBoxes = document.querySelectorAll('.benefit-box');
  benefitBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add('animate');
    }, 500 * (index + 1));
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const submitInput = document.querySelector('.button.input-box input[type="submit"]');

  submitInput.addEventListener('click', function () {
      console.log("Submit");
  });
});