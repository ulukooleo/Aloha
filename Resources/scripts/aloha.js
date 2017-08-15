$(document).ready(setUp);

function setUp() {
  $('nav span').click(loadGif);
}

function loadGif() {
  var search = $(this).text();
  $.get('http://api.giphy.com/v1/gifs/search', {
      q: search,
      api_key: 'dc6zaTOxFJmzC'
    },
    showGif
 )
}

function showGif(data) {
  image_url = data.data[0].images.fixed_width.url;
  $('#thegif img').attr('src', image_url);
}
