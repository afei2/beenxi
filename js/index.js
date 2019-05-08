$(function(){
    $('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4'],
		scrollOverflowReset: true,
		scrollOverflow: true,
		slidesPerView: 'auto',
	});
});

// $(function(){
//     $('.main').slimScroll({
// 				height: '970px',
// 				start: $('.main'),
// 				allowPageScroll: true,
// 		});
		
// });


// var mySwiper1 = new Swiper('.main_1',{
// 	autoplay: true,//可选选项，自动滑动
// 	loop : true,
// 	pagination :{
// 	    el: '.main_1 .swiper-pagination',
// 	    clickable :true,
// 	  }
// })
var mySwiper2 = new Swiper('.main_2',{
	autoplay: true,//可选选项，自动滑动
	loop : true,
	pagination :{
	    el: '.main_2 .swiper-pagination',
	    clickable :true,
	  }
})
var mySwiper3 = new Swiper('.main_3',{
	autoplay: true,//可选选项，自动滑动
	pagination :{
	    el: '.main_3 .swiper-pagination',
	    clickable :true,
	  }
})





 var app = new Vue({
	el: "#app",
    data: {
		cur:0 //默认选中第一个tab
	}
});   

$('.xiny').click(function () {
	$('.xiny div').fadeToggle();
	$(".xiny b").fadeToggle();
	$(this).siblings().children("div").fadeOut();
	$(this).siblings().children("b").fadeIn();
})
$('.OETE').click(function () {
	$('.OETE div').fadeToggle();
	$(".OETE b").fadeToggle();
	$(this).siblings().children("div").fadeOut();
	$(this).siblings().children("b").fadeIn();
})
$('.Paerata').click(function () {
	$('.Paerata div').fadeToggle();
	$(".Paerata b").fadeToggle();
	$(this).siblings().children("div").fadeOut();
	$(this).siblings().children("b").fadeIn();
})