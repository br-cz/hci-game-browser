const recent = [];
var recentLength = 0;

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

for (var i = 0; i < games.length; i++) {
  const category = games[i];

  for (var j = 0; j < category.length; j++) {
    rank = category[j].playedRank;
    //console.log(category[j]);
    if (rank != -1 && category[j].owned) {
      recent[rank] = category[j];
      recentLength++;
    }
  }
}

for (var i = 0; i < recent.length; i++) {
  if (recent[i]) {
    title = recent[i].title;
    image = recent[i].image;
    const carouselItem = '<div class="carousel-item">';
    const passTitle = "'" + title.replaceAll("'") + "'";
    const card = '<div class="card" onclick="openBoughtGame('+ passTitle  +')">';
    const imgWrapper = '<div class="img-wrapper">';
    const imgSrc = '<img src="' + image + '" class="d-block w-100"/>';
    const divEnd = '</div>';
    const cardBody = '<div class="card-body">';
    const cardTitle = '<h5 class="card-title">' + title + '</h5>';
    const aBtn = '<a href="#" class="btn btn-primary">';
    const iClass = '<i class="fa-solid fa-play"></i>';
    const aEND = '</a>';
    document.querySelector('.carousel-inner').innerHTML +=
      carouselItem +
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
      divEnd +
      divEnd;

    // EXAMPLE LAYOUT WE CREATE ABOVE
    //   <div class="carousel-item">
    //   <div class="card">
    //     <div class="img-wrapper">
    //       <img src="./images/bg-1.jpg" class="d-block w-100" alt="..." />
    //     </div>
    //     <div class="card-body">
    //       <h5 class="card-title">Game 3</h5>
    //       <a href="#" class="btn btn-primary"
    //         ><i class="fa-solid fa-play"></i
    //       ></a>
    //     </div>
    //   </div>
    // </div>
  }
}
