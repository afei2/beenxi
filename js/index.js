$(function(){
    $('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4'],
	});
});

var mySwiper1 = new Swiper('.main_1',{
	autoplay: true,//可选选项，自动滑动
	pagination :{
	    el: '.main_1 .swiper-pagination',
	    clickable :true,
	  }
})
var mySwiper2 = new Swiper('.main_2',{
	autoplay: true,//可选选项，自动滑动
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