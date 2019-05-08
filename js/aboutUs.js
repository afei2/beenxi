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
  autoplay:true,
  pagination :{
    el: '.swiper_04 .swiper-pagination',
    clickable :true,

  }
});


$(".scroll ul li").click(function(){
  $(this).addClass("open")
  $(this).siblings().removeClass("open");
})
$(".xym").click(function(){
  $("html,body").animate({scrollTop: $(".content_01").offset().top}, 1000);
  $(".scroll").removeClass("fixed")
})
$(".akl").click(function(){
  $("html,body").animate({scrollTop: $(".content_03box").offset().top}, 1000);
  $(".scroll").addClass("fixed")
})
$(".bex").click(function(){
  $("html,body").animate({scrollTop: $(".content_04box").offset().top}, 1000);
  $(".scroll").addClass("fixed")
})

var a = $(".scroll").offset().top;
$(window).scroll(function () {
    if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
        $(".scroll").removeClass("fixed")
    } else {
        $(".scroll").addClass("fixed")
    }
});
