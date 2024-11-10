ScrollReveal().reveal(".grid-wrapper > div", {
    delay: 200,
    distance: "50px",
    interval: 100,
    origin: "bottom",
    scale: 0.9,
    reset: true 
});

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('#imageCardCarousel');
  const items = carousel.querySelectorAll('.carousel-item');

  carousel.addEventListener('slide.bs.carousel', function () {
    items.forEach(item => {
      item.style.transition = 'transform 1.5s ease-in-out'; 
    });
  });
});

AOS.init({
    duration: 1000, 
    easing: 'ease',
});