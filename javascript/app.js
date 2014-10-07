$(document).ready(function() {
	$('.main-menu__container > li').click(function() {

		$(this).addClass('-active').siblings().removeClass('-active');

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

	$('#tabs ul').on('click', 'li:not(.tabs__container--item-current)', function() {
		$(this).addClass('tabs__container--item-current').siblings().removeClass('tabs__container--item-current')
		.parents('div.tabs').find('div.tabs__box').eq($(this).index())
		.addClass('tabs__box-visible').siblings('div.tabs__box').removeClass('tabs__box-visible');  
	});

	$('.top-site__filter div a').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
});