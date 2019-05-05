//侧导航，点击其他地方DIV消失
var nav = $(".nav");
$(function() {
    $(".navb").click(function(event) {
        // showDiv();//调用显示DIV方法
        $(nav).toggle();
        $(document).one("click",
        function() { //对document绑定一个影藏Div方法
            $(nav).hide();
        });
 
        event.stopPropagation(); //阻止事件向上冒泡
    });
    $(nav).click(function(event) {
 
        event.stopPropagation(); //阻止事件向上冒泡
    });
});　　　　
function showDiv() {
    $(nav).fadeIn();
}

$(".nav ol li h6").on("click",function(){
    $(this).siblings(".cf").slideToggle()
    $(this).children('i').toggleClass("open");
    $(this).parent().siblings("li").children(".cf").slideUp().siblings("h6").children("i").removeClass("open")

})


// 点击回到顶部
$(".to-top").click(function () {
    $('html , body').animate({scrollTop: 0}, 'slow');
});
$(window).scroll(function(){
	//获取距离浏览器顶部距离并赋值th
	var th = $(window).scrollTop();
	//用if判断，距离顶部大于数值
	if(th>1500){
		$(".to-top").show();
	}else {
		$(".to-top").hide();
	}
});



var galleryThumbs = new Swiper('.swiper_4 .gallery-thumbs', {
    speed: 800,
    spaceBetween: 10,
    slidesPerView: 4,
    direction: 'vertical',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    mousewheel: true,
});
var galleryTop = new Swiper('.swiper_4 .gallery-top', {
	direction: 'vertical',
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper_4 .swiper-button-next',
        prevEl: '.gallery-top .swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});





