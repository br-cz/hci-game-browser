var currCategory = [];

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

const games = [
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

(function () {
  $('#store-all').click(function () {
    manageClicked('#store-all');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var i = 0; i < games.length; i++) {
      const category = games[i];
      // console.log(category);

      for (var j = 0; j < category.length; j++) {
        //console.log(category[j]);
        //console.log(!category[j].owned);
        if (!category[j].owned) {
          //console.log('enter');
          currCategory.push(category[j]);
        }
      }
    }

    loadGames();
  });
}.call(this));

(function () {
  $('#store-action').click(function () {
    const category = actionGames;

    manageClicked('#store-action');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-adventure').click(function () {
    const category = adventureGames;

    manageClicked('#store-adventure');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-family').click(function () {
    const category = familyGames;

    manageClicked('#store-family');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-shooter').click(function () {
    const category = shooterGames;

    manageClicked('#store-shooter');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-rpg').click(function () {
    const category = rpgGames;

    manageClicked('#store-rpg');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-strategy').click(function () {
    const category = strategyGames;

    manageClicked('#store-strategy');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-sports').click(function () {
    const category = sportsGames;

    manageClicked('#store-sports');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-racing').click(function () {
    const category = racingGames;

    manageClicked('#store-racing');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-fighting').click(function () {
    const category = fightingGames;

    manageClicked('#store-fighting');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));
(function () {
  $('#store-simulator').click(function () {
    const category = simulatorGames;

    manageClicked('#store-simulator');

    currCategory = [];
    document.querySelector('.gallery').innerHTML = '';

    for (var j = 0; j < category.length; j++) {
      if (!category[j].owned) {
        currCategory.push(category[j]);
      }
    }
    loadGames();
  });
}.call(this));

function loadGames() {
  for (var i = 0; i < currCategory.length; i++) {
    title = currCategory[i].title;
    image = currCategory[i].image;
    price = currCategory[i].price;
    sale = currCategory[i].sale;

    //console.log(passTitle);
    const passTitle = "'" + title.replaceAll("'") + "'";
    const card =
      '<div class="card" onclick="openStoreGame(' + passTitle + ')">';
    //const card = '<div class="card" onclick="addToCart(\'' + passTitle +'\')">'; //for testing cart function

    const imgWrapper = '<div class="img-wrapper">';
    const imgSrc = '<img src="' + image + '" class="d-block w-100"/>';
    const divEnd = '</div>';
    const cardBody = '<div class="card-body">';
    const cardTitle = '<h5 class="card-title">' + title + '</h5>';
    cardPrice = '';
    //Adrian: I don't know how to format this better
    if (sale > 0) {
      salePrice = ((100 - sale) / 100) * price;
      cardPrice =
        '<p class="card-price-number card-price"><s>$' +
        price.toFixed(2) +
        '</s> -' +
        sale +
        '%</p>' +
        '<p class="card-sale-price card-price">$' +
        salePrice.toFixed(2) +
        '</p>';
    } else {
      cardPrice =
        '<p class="card-price-number card-price">$' + price.toFixed(2) + '</p>';
    }
    const aBtn =
      '<a href="#" class="btn btn-success" onclick="addToCart(' +
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
      cardPrice +
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

function sortBySale() {
  /*
  currCategory.sort(compareName);
  currCategory.sort(comparePrice);
  currCategory.sort(compareSale); 
  currCategory.sort(compareRatings);
  */
  currCategory.sort(compareSale);
  document.querySelector('.gallery').innerHTML = '';
  loadGames();
}

function sortByName() {
  /*
  currCategory.sort(compareName);
  currCategory.sort(comparePrice);
  currCategory.sort(compareSale); 
  currCategory.sort(compareRatings);
  */
  currCategory.sort(compareName);
  document.querySelector('.gallery').innerHTML = '';
  loadGames();
}

function sortByPrice() {
  /*
  currCategory.sort(compareName);
  currCategory.sort(comparePrice);
  currCategory.sort(compareSale); 
  currCategory.sort(compareRatings);
  */
  currCategory.sort(comparePrice);
  document.querySelector('.gallery').innerHTML = '';
  loadGames();
}

function sortByRatings() {
  /*
  currCategory.sort(compareName);
  currCategory.sort(comparePrice);
  currCategory.sort(compareSale); 
  */
  currCategory.sort(compareRatings);
  document.querySelector('.gallery').innerHTML = '';
  loadGames();
}

function compareName(a, b) {
  return a.title.localeCompare(b.title);
}

function comparePrice(a, b) {
  salePriceA = (1 - a.sale / 100) * a.price;
  salePriceB = (1 - b.sale / 100) * b.price;
  if (salePriceA < salePriceB) {
    return -1;
  } else if (salePriceA > salePriceB) {
    return 1;
  } else {
    return 0;
  }
}

function compareSale(a, b) {
  if (a.sale > b.sale) {
    return -1;
  } else if (a.sale < b.sale) {
    return 1;
  } else {
    return comparePrice(a, b);
  }
}

function compareRatings(a, b) {
  if (a.ratings > b.ratings) {
    return -1;
  } else if (a.ratings < b.ratings) {
    return 1;
  } else {
    return 0;
  }
}
function manageClicked(currentBtnID) {
  btnIDs = [
    '#store-all',
    '#store-action',
    '#store-adventure',
    '#store-family',
    '#store-shooter',
    '#store-rpg',
    '#store-strategy',
    '#store-sports',
    '#store-racing',
    '#store-fighting',
    '#store-simulator',
  ];

  for (var i = 0; i < btnIDs.length; i++) {
    if (btnIDs[i] === currentBtnID) {
      btnIDs.splice(i, 1); //remove 1 item
      break;
    }
  }

  for (var i = 0; i < btnIDs.length; i++) {
    $(btnIDs[i]).removeClass('clicked');
  }

  $(currentBtnID).addClass('clicked');
}
