var bannerSwiper = new Swiper('#banner_swiper', {
  speed: 800,
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true,
  effect: 'fade',
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var flashsale_swiper = new Swiper('#flashsale_swiper', {
  autoplay: true,
  slidesPerView: 4,
  spaceBetween: 15,
  navigation: {
    nextEl: '.my-button-next',
    prevEl: '.my-button-prev',
    disabledClass: 'my-button-disabled',
  },
});
