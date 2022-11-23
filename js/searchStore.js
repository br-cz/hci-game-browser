var searchResults = [];

var actionGames = JSON.parse(localStorage.getItem('actionDB'));
var adventureGames = JSON.parse(localStorage.getItem('adventureDB'));
var familyGames = JSON.parse(localStorage.getItem('familyDB'));
var shooterGames = JSON.parse(localStorage.getItem('shooterDB'));
var rpgGames = JSON.parse(localStorage.getItem('rpgDB'));
var strategyGames = JSON.parse(localStorage.getItem('strategyDB'));
var sportsGames = JSON.parse(localStorage.getItem('sportsDB'));
var racingGames = JSON.parse(localStorage.getItem('racingDB'));
var fightingGames = JSON.parse(localStorage.getItem('fightingDB'));
var simulatorGames = JSON.parse(localStorage.getItem('simulatorDB'));

const allGames = [
  actionGames,
  adventureGames,
  familyGames,
  shooterGames,
  rpgGames,
  strategyGames,
  sportsGames,
  racingGames,
  fightingGames,
  simulatorGames,
];

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', (event) => {
  localStorage.setItem('search', searchInput.value);

  //reset prev search results
  document.querySelector('.gallery').innerHTML = '';
  document.querySelector('#carouselExampleControlsOne').innerHTML = '';

  const carTwo = document.querySelector('#carouselExampleControlsTwo');
  if (carTwo) {
    carTwo.innerHTML = '';
  }
  const carThree = document.querySelector('#carouselExampleControlsThree');
  if (carThree) {
    carThree.innerHTML = '';
  }
  const pin = document.querySelector('#Pinned');
  if (pin) {
    pin.innerHTML = '';
  }

  const cate = document.querySelector('#Categories');
  if (cate) {
    cate.innerHTML = '';
  }

  const lib = document.getElementById('lib');
  if (lib) {
    lib.classList.remove('active');
  }
  const sto = document.getElementById('sto');
  if (sto) {
    sto.classList.remove('active');
  }
  searchResults = [];

  // Get the search terms from the input field
  var inputValue = localStorage.getItem('search');
  // console.log(inputValue);

  document.getElementById('top').innerHTML =
    'Search results for "' + inputValue + '"';
  document.getElementById('top').innerHTML +=
    '<br><a href="index.html" class="btn btn-light btn-lg" id="store-sports">Back to Library</a>';

  // Tokenize the search terms and remove empty spaces
  var tokens = inputValue
    .toLowerCase()
    .split(' ')
    .filter(function (token) {
      return token.trim() !== '';
    });
  if (tokens.length) {
    //  Create a regular expression of all the search terms
    var inputValueRegex = new RegExp(tokens.join('|'), 'gim');

    for (var i = 0; i < allGames.length; i++) {
      const category = allGames[i];

      for (var j = 0; j < category.length; j++) {
        if (
          !category[j].owned &&
          category[j].title.match(inputValueRegex) &&
          notDuplicate(category[j].title)
        ) {
          searchResults.push(category[j]);
        }
      }
    }
  }

  //loadSearches();
  event.preventDefault();
});

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    localStorage.setItem('search', searchInput.value);

    //reset prev search results
    document.querySelector('.gallery').innerHTML = '';
    document.querySelector('#carouselExampleControlsOne').innerHTML = '';

    const carTwo = document.querySelector('#carouselExampleControlsTwo');
    if (carTwo) {
      carTwo.innerHTML = '';
    }
    const carThree = document.querySelector('#carouselExampleControlsThree');
    if (carThree) {
      carThree.innerHTML = '';
    }
    const pin = document.querySelector('#Pinned');
    if (pin) {
      pin.innerHTML = '';
    }

    const cate = document.querySelector('#Categories');
    if (cate) {
      cate.innerHTML = '';
    }

    const lib = document.getElementById('lib');
    if (lib) {
      lib.classList.remove('active');
    }
    const sto = document.getElementById('sto');
    if (sto) {
      sto.classList.remove('active');
    }

    searchResults = [];

    // Get the search terms from the input field
    var inputValue = localStorage.getItem('search');
    // console.log(inputValue);

    document.getElementById('top').innerHTML =
      'Search results for "' + inputValue + '"';
    document.getElementById('top').innerHTML +=
      '<br><a class="btn btn-light btn-lg" id="store-sports" onclick="window.location.reload()">Back</a>';

    // Tokenize the search terms and remove empty spaces
    var tokens = inputValue
      .toLowerCase()
      .split(' ')
      .filter(function (token) {
        return token.trim() !== '';
      });
    if (tokens.length) {
      //  Create a regular expression of all the search terms
      var inputValueRegex = new RegExp(tokens.join('|'), 'gim');

      for (var i = 0; i < allGames.length; i++) {
        const category = allGames[i];

        for (var j = 0; j < category.length; j++) {
          if (
            !category[j].owned &&
            category[j].title.match(inputValueRegex) &&
            notDuplicate(category[j].title)
          ) {
            searchResults.push(category[j]);
          }
        }
      }
    }

    loadSearches();
    event.preventDefault();
  }
});

function loadSearches() {
  for (var i = 0; i < searchResults.length; i++) {
    console.log(searchResults[i]);
    title = searchResults[i].title;
    image = searchResults[i].image;
    const passTitle = "'" + title.replaceAll("'") + "'";
    const card =
      '<div class="card" onclick="openStoreGame(' + passTitle + ')">';
    const imgWrapper = '<div class="img-wrapper">';
    const imgSrc = '<img src="' + image + '" class="d-block w-100"/>';
    const divEnd = '</div>';
    const cardBody = '<div class="card-body">';
    const cardTitle = '<h5 class="card-title">' + title + '</h5>';
    const aBtn =
      '<a href="#" class="btn btn-success" onclick="playGame(' +
      passTitle +
      ')">';
    const iClass = '<i class="fa-solid fa-cart-shopping"></i>';
    const aEND = '</a>';
    document.querySelector('.gallery').innerHTML +=
      card +
      imgWrapper +
      imgSrc +
      divEnd +
      cardBody +
      cardTitle +
      aBtn +
      iClass +
      aEND +
      divEnd +
      divEnd;

    // document.querySelector('.gallery').innerHTML += '<p>peepee</p>';

    // EXAMPLE LAYOUT WE CREATE ABOVE
    // <div class="card">
    //   <div class="img-wrapper">
    //     <img src="./images/bg-1.jpg" class="d-block w-100" alt="..." />
    //   </div>
    //   <div class="card-body">
    //     <h5 class="card-title">Game 3</h5>
    //     <a href="#" class="btn btn-primary">
    //       <i class="fa-solid fa-play"></i>
    //     </a>
    //   </div>
    // </div>;
  }
}

function notDuplicate(name) {
  for (var i = 0; i < searchResults.length; i++) {
    if (searchResults[i] === name) {
      return false;
    }
  }
  return true;
}
