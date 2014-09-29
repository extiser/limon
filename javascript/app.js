$(document).ready(function() {
	$('.main-menu__container > li').click(function() {
		$('.main-menu__container > li').removeClass('-active');
		$(this).addClass('-active');

		if ($(this).children("ul").is("ul") == false) {
			$(".main-menu").animate({"marginBottom": "15px"}, 400);
		} else {
			$(".main-menu").animate({"marginBottom": "70px"}, 400);
		}
	});
	var find = $("body").find('.main-menu__container > li.-active');
	if ($(find).children("ul").is("ul") == true) {
		$(".main-menu").animate({"marginBottom": "70px"}, 400);
	} else {
		$(".main-menu").animate({"marginBottom": "15px"}, 400);
	}

	$(".header__top--web, .header__top--wap, .header__top--stat").click(function() {
		$(".header__top--web, .header__top--wap, .header__top--stat").removeClass("-active");
		$(this).addClass("-active");
	});
});