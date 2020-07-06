var mySwiper = new Swiper('.swiper-container', {
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