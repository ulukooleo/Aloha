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
  var gifs = data.data;
  var numberOfGifs = gifs.length;
  if (numberOfGifs === 0) {
    alert('No gifs for you');
  } else {
    var randomIndex = Math.floor(Math.random() * numberOfGifs);
  }
  image_url = data.data[randomIndex].images.fixed_width.url;
  $('#thegif img').attr('src', image_url);
}
