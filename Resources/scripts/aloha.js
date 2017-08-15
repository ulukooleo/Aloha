$(document).ready(setUp);

function setUp() {
  $('nav span').click(loadGif);
}

function loadGif() {
  console.log('I should load a gif for ' + $(this).text());
}
