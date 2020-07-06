var detailSwiper = new Swiper('.swiper-container', {
  speed: 800,
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); 