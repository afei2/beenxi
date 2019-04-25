 var mySwiper = new Swiper('.swiper_01', {
    // navigation: {
    //   nextEl: '.swiper_01 .swiper-button-next',
    //   prevEl: '.swiper_01 .swiper-button-prev',
    // },
    autoplay:{delay:1},//自动滚动
    loop:true,//循环
    speed:5000,//滚动速度
    slidesPerView : 2.4,//slide可见数量
    spaceBetween : 10//slide之间的距离（单位px）

  });

var mySwiper = new Swiper('.swiper_02',{
  navigation: {
    nextEl: '.swiper_02 .swiper-button-next',
    prevEl: '.swiper_02 .swiper-button-prev',
    disabledClass: 'my-button-disabled',
  },
})
var mySwiper = new Swiper('.swiper_03', {
// navigation: {
//   nextEl: '.swiper_01 .swiper-button-next',
//   prevEl: '.swiper_01 .swiper-button-prev',
// },
autoplay:{delay:1},//自动滚动
loop:true,//循环
speed:5000,//滚动速度
slidesPerView : 2.4,//slide可见数量
spaceBetween : 10//slide之间的距离（单位px）

});

var mySwiper = new Swiper('.swiper_04',{
  pagination :{
    el: '.swiper_04 .swiper-pagination',
    clickable :true,
  }
});
