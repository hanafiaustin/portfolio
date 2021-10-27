$('.page-scroll').on('click', function (e) {
	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	},1250, 'easeInOutExpo')
	e.preventDefault()
})

$(window).on('load', function () {
	$('.pKiri').addClass('pMuncul')
	$('.pKanan').addClass('pMuncul')
})

$(window).scroll(function () {
	var wScroll = $(this).scrollTop()

	$('.jumbotron img').css({
		'transform': 'translate(0, '+ wScroll/5 +'%)'
	})

	$('.jumbotron h1').css({
		'transform': 'translate(0, '+ wScroll/1 +'%)'
	})

	$('.jumbotron p').css({
		'transform': 'translate(0, '+ wScroll/1.2 +'%)'
	})

	if (wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .thumbnail').each(function (i) {
			setTimeout(function () {
				$('.portfolio .thumbnail').eq(i).addClass('muncul')
			},3000 * (i+1) )
		})
	}
})