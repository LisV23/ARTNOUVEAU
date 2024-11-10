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

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      });
  });
});

AOS.init({
    duration: 1000, 
    easing: 'ease',
});