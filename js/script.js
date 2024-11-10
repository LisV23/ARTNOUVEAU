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
        item.style.transition = 'transform 1.5s ease-in-out'; // Ajusta la duración y tipo de transición
      });
    });

    // const navLinks = document.querySelectorAll('a[href^="#"]');
  
    // navLinks.forEach(link => {
    //   link.addEventListener("click", function(event) {
    //     // Prevenir el comportamiento por defecto (el salto inmediato)
    //     event.preventDefault();
  
    //     // Selecciona el destino (la sección correspondiente) usando el atributo href del enlace
    //     const targetSection = document.querySelector(this.getAttribute("href"));
  
    //     // Desplazamiento suave hacia la sección
    //     targetSection.scrollIntoView({
    //       behavior: "smooth",
    //       block: 'start'
    //     });
    //   });
    // });

});


// document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         target.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     });
// });

AOS.init({
    duration: 1000, // Duración de la animación en ms
    easing: 'ease', // Efecto de la animación
});