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
 )
}

//Data




//Soccer!!!!!!!!!!!!!!!!

//Messi
var messi = {
  name: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for Spanish
club FC Barcelona and the Argentina national team. ',
  bio: '',
  born: new Date(1987, 6, 24),
  birthplace: 'Rosario, Argentina',
  heightInches: 67,
  salary: {amount: 40000000, currency: 'EUR'},
  positions: ['Forward', 'Winger'],
  teams: [],
}


Born: June 24, 1987 (age 30), 
Height: 5′ 7″
Weight: 148 lbs (67 kg)
Spouse: Antonella Roccuzzo (m. 2017)
Salary: 40 million EUR (2016)
Current teams: FC Barcelona, Argentina
Positions: Forward, Winger
Shirt Number: #10
Children: Thiago Messi, Mateo Messi
Nationality: Argentine

//Cristiano
Cristiano Ronaldo dos Santos Aveiro GOIH, ComM is a Portuguese professional footballer who plays 
as a forward for Spanish club Real Madrid and the Portugal national team.

Born: February 5, 1985 (age 32), Hospital Dr. Nélio Mendonça, Funchal, Portugal
Height: 6′ 1″
Salary: 32 million EUR (2016)
Current teams: Real Madrid, Portugal
Positions: Forward, Attacking Midfielder (Left) 
Shirt Number: #7
Children: Cristiano Ronaldo Jr., Eva Maria Dos Santos, Mateo Ronaldo
Nationality: Portuguese
Did you know: Cristiano Ronaldo is the fourth-most expensive Association Football transfer 
(€94 M, from Manchester United to Real Madrid in 2009). 

//Neymar
Neymar da Silva Santos Júnior, commonly known as Neymar or Neymar Jr., is a Brazilian professional 
footballer who plays as a forward for French club Paris Saint-Germain and the Brazil national team.

Born: February 5, 1992 (age 25), Mogi das Cruzes, São Paulo, Brazil
Height: 5′ 9″
Weight: 68kg
Full name: Neymar da Silva Santos Júnior
Salary: 9.18 million EUR (2016)
Current teams: PSG, Brazil
Shirt Number: #10
Nationality: Brazilian
Did you know: Neymar is the most expensive Association Football transfer 
(€222 M, from Barcelona to Paris Saint-Germain in 2017).



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
