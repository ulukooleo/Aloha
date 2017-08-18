$(document).ready(setUp);

function setUp() {
  $('nav span').click(loadGif);
  $('nav li').click(loadGif);
}

function loadGif() {
  var search = $(this).attr('search') || $(this).text();
  $.get('http://api.giphy.com/v1/gifs/search', {
      q: search,
      api_key: 'dc6zaTOxFJmzC'
    },
    showGif
  );
  var id = $(this).attr('id');
  var imageSection = $('#images');
  imageSection.empty();
  if (id && imageUrls[id]) {
    for (var url of imageUrls[id]) {
      imageSection.append('<img src="/images/' + url + '" width=300><br>')
    }
  }
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

var imageUrls = {
  messi: [
    'Soccer/Messi_Stats.png',
    'Soccer/Messi_Stats1.jpg',
    'Soccer/Messi1.jpg',
    'Soccer/Messi2.jpg',
  ],
  neymar: [
    'Soccer/Neymar_Stats.jpg',
    'Soccer/Neymar3.jpg',
    'Soccer/Neymar1.jpg',
    'Soccer/Neymar2.jpg',
  ],
  ronaldo: [
    'Soccer/ronaldo_Stats.jpg'
  ],
  djoko: [
    'Tennis/Novak_Djokovic.jpg',
    'Tennis/Djokovic_Stats.jpeg',
    'Tennis/Novak_Djokovic2.jpg',
    'Tennis/Novak_Djokovic3.jpg',
  ],
  curry: [
    'Basketball/Curry_Stats.jpg',
    'Basketball/Stephen_Curry1.jpg',
    'Basketball/Stephen_Curry2.jpg',
    'Basketball/Stephen_Curry3.jpg',
  ]
}
