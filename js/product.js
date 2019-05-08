var thumbsSwiper = new Swiper('.swiper_01 #thumbs',{
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,//防止不可点击
})
var gallerySwiper = new Swiper('.swiper_01 #gallery',{
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper,
  }
})
$("#thumbs .swiper-slide").click(function () {
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
})
var app = new Vue({
  el: "#app",
  data: {
    cur:0 //默认选中第一个tab
  }
});    