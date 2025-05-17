var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const sobre = document.getElementById("sobre");

  window.addEventListener("scroll", () => {
    const limite = sobre.offsetTop + sobre.offsetHeight;

    if (window.scrollY > limite) {
      navbar.classList.add("oculto");
    } else {
      navbar.classList.remove("oculto");
    }
  });
});