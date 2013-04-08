$(function() {
    // Feeds Algo
    var coo = $("#life li").size();
    for (var i = 0; i < coo; i++) {
        var alife = 'http://' + window.location.host + $('#life li:eq(' + i + ') a').attr('href') + '/';
        if (alife === document.URL) {
            $('#life li:eq(' + i + ')').removeClass('p0').addClass('seld');
        }
    }
    // Color Randomizer
    /*var array = ["a", "b", "c"];
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    	}
    return array[0];
	}
    $('.page-header h1').addClass(shuffleArray(array));*/
    //
    if ($('#blog-index').length) {
        $('#xcf').css('display', 'none');
    }
    $('#openf').on('click', function() {
        $('#featured').fadeIn('slow').addClass('go');
    });
    $('#closef').on('click', function() {
        $('#featured').fadeOut('slow');
    });
    //////////Youtube
    var id;
    var video = document.getElementById('vide0');
    if (video === undefined) {
        id = 'Xqw4wo8vdY8';
        nb = '3';
    } else {
        id = video.getAttribute('data-id');
        nb = video.getAttribute('data-nb');
    }
    $.ajax({
        type: 'GET',
        url: 'http://gdata.youtube.com/feeds/api/videos/' + id + '?&v=2&alt=jsonc',
        dataType: 'jsonp',
        success: function(yt) {
            var title0 = yt.data.title.split(' ').splice(0, nb).join(' ').replace(/[`~!@#$%\^&*()_|+\=?;:,.<>\{\}\[\]\\\/]/gi, '');
            var title = yt.data.title;
            var play = 0;
            $("#track").append(title0);
            $("#vide0").append('<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/' + id + '?showinfo=0&theme=dark&autoplay=' + play + '" frameborder="0" allowfullscreen></iframe><h4>Track of the Month : <a href="http://youtu.be/' + id + '" target="_blank" title="Watch it on Youtube">' + title + '</a></h4>');
        }
    }); //#Youtube
});
