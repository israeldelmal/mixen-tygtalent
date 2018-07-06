// Menú
$(window).scroll(function() {
	if ($(window).width() > 1030) {
		if ($(this).scrollTop() > 0) {
			$('nav').css({
				'background-color': 'rgba(228, 21, 27, 0.95)',
				'height': '100px'
			});
		} else {
			$('nav').css({
				'background-color': 'transparent',
				'height': '120px'
			});
		}
	}
});

// Menú Adaptable
$('body > button').on('click', function(event) {
	event.preventDefault();
	$('body > nav').toggleClass('active-menu');
	$(this).find('span').toggleClass('active-button');
});

// Navegación
$('.item-menu').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');
	if ($(window).width() > 1030) {
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top - 100
		}, 1000);
	} else if ($(window).width() < 1030) {
		$('body > nav').toggleClass('active-menu');
		$('body > button > span').toggleClass('active-button');
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top
		}, 1000);
	}
});

$('.item-menu-resp').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');
	$('body, html').stop(true, true).animate({
		scrollTop: $(Item).offset().top
	}, 1000);
});

// Formulario
$('#FormContact').on('submit', function(event) {
	event.preventDefault();
});