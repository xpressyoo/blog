$(function(){

if ( $('#blog-index').length ){ $('#xcf').css('display','none'); }

$('#openf').on('click', function(){

$('#featured').fadeIn('slow').addClass('go');

});

$('#closef').on('click', function(){

$('#featured').fadeOut('slow').empty();

});

//////////Youtube

var video = document.getElementById('vide0');
if( video == undefined ){
var id = 'Xqw4wo8vdY8';
}
else{
var id = video.getAttribute('data-id');
}

$.ajax({
type: 'GET',
url: 'http://gdata.youtube.com/feeds/api/videos/' + id + '?&v=2&alt=jsonc',
dataType: 'jsonp',
success: function(yt)
{

var title0 = yt.data.title.split(' ').splice(0,3).join(' ');
var title = yt.data.title;
var play = 0;

$("#track").append(title0);

$("#vide0").append('<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/' + id + '?showinfo=0&theme=dark&autoplay=' + play + '" frameborder="0" allowfullscreen></iframe><h4>Track of the Month : <a href="http://youtu.be/' + id + '" target="_blank" title="Watch it on Youtube">' + title + '</a></h4>');


}});//#Youtube

});
