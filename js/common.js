
$(".nav ol li").click(function () {
	$('.nav ol li div').stop().slideToggle();
	$(this).addClass("open");
	$(this).siblings('.nav ol li').removeClass("open");
})
$(".navb").click(function () {
	$(".nav").show()
})
$(".nav b").click(function () {
	$(".nav").hide()
})
$(".to-top").click(function () {
        $('html , body').animate({scrollTop: 0}, 'slow');
  });