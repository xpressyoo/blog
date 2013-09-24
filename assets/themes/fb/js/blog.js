$(function() {
    // Feeds Algo
    var coo = $("#life li").size();
    for (var i = 0; i < coo; i++) {
        var alife = 'http://' + window.location.host + $('#life li:eq(' + i + ') a').attr('href') + '/';
        if (alife === document.URL) {
            $('#life li:eq(' + i + ')').removeClass('p0').addClass('seld');
        }
    }

    if ($('#blog-index').length) {
        $('#xcf').css('display', 'none');
    }

	$('#connect-a').on('click', function() {
		$(this).addClass('nonei');
		$('#connect-b').removeClass('nonei');
		$('#subscribe').fadeIn('slow').removeClass('nonei');
	});

	$('#connect-b').on('click', function() {
		$(this).addClass('nonei');
		$('#connect-a').removeClass('nonei');
		$('#subscribe').fadeOut('slow').addClass('nonei');
	});

});
