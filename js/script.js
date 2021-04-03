$(document).ready(function () {

	var HeaderTop = $('.main').offset().top;

	$('.our-story').css('marginTop', $('header').innerHeight() + 'px');
	
	$(window).resize(function () {
		HeaderTop = $('.main').offset().top;
		if ($(window).width() > 860) {
			$('.footer__item-body').removeAttr('style');
		} else if ($(window).width() > 550) {
			$('.header__menu').removeAttr('style');
		}
	})
	$('.footer__title').click(function () {
		if ($(window).width() < 550){
			$(this).toggleClass('rotate');
			$(this).toggleClass('rotate2')
			$(this).next().slideToggle(500);
		}
	})

	let placeholder = $('.newsletter__input').attr("placeholder");

	$('.newsletter__input').focusin(function () {
		$(this).attr("placeholder", " ");
	})
	$('.newsletter__input').focusout(function () {
		$(this).attr("placeholder", placeholder);
	})


	$('.fullpage').fullpage({
		scrollOverflow: true,
		anchors: ['intro','main'],
		afterLoad: function (origin, destination, direction) {
			if (destination.index == 1){
				$('.header').css({ opacity: '1', visibility: 'visible' });
			}
		},
		onLeave: function (origin, destination, direction) {
			if (destination.index == 0) {
				$('.header').removeAttr('style')
			}
		},
	});

	$('.newsletter__button').click(function () {
		event.preventDefault();
		if ((/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test($('.newsletter__input').val())) {
			console.log('отправка');
		} else {
			$('.newsletter__input').css('box-shadow', '0px 0px 10px red');
			$('.newsletter__body').addClass('error');
		}
	})

	$('.newsletter__input').keyup(function () {
		if (event.which !== 13) {
			$('.newsletter__body').removeClass('error');
			$('.newsletter__input').removeAttr('style');
		} else {
			$('.newsletter__button').click();
		}
	})

})



$('.checkbox3').click(function () {
	$('body').toggleClass('lock');
	$('.header__menu').slideToggle(500);
})

