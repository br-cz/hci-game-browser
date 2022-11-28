// var actionGames = JSON.parse(localStorage.getItem('actionDB'));
// var adventureGames = JSON.parse(localStorage.getItem('adventureDB'));
console.log(games[0].length);
for (var i = 0; i < games.length; i++) {
  for (var j = 0; j < games[i].length; j++) {
    if (games[i][j].owned) {
      createContainer(games[i][j], '#all-container');
      //console.log(games[i][j].title);
    }
  }
}

/*
for (var i = 0; i < actionGames.length; i++) {
  createContainer(actionGames[i], '#action-container');

}
*/

containerTags = [
  '#action-container',
  '#adventure-container',
  '#family-container',
  '#shooter-container',
  '#rpg-container',
  '#strategy-container',
  '#sports-container',
  '#racing-container',
  '#fighting-container',
  '#simulator-container',
];

for (var i = 0; i < games.length; i++) {
  for (var j = 0; j < games[i].length; j++) {
    if (games[i][j].owned) {
      createContainer(games[i][j], containerTags[i]);
    }
  }
}

function createContainer(game, container) {
  const passTitle = "'" + game.title.replaceAll("'","") + "'";

  const stackedCard =
    '<div data-stacked-card="1" class="stacked-card" onclick="openBoughtGame(' +
    passTitle +
    ')">';
  const image = '<div class="image">';
  const imageSrc = '<img src="' + game.image + ' " alt="image" />';
  const divEnd = '</div>';
  const detail = '<div class="detail">';
  const h3Title = '<h3>' + game.title + '</h3>';
  const next =
    '<div class="next" onclick="event.cancelBubble=true;if(event.stopPropagation) event.stopPropagation();return false;">';
  const iClass = '<i class="fas fa-arrow-up"></i>';
  const aBtn =
    '<a href="#" class="btn btn-primary" onclick="playGame(' +
    passTitle +
    ')">';
  const iPlayClass = '<i class="fa-solid fa-play"></i>';
  const aEND = '</a>';

  document.querySelector(container).innerHTML +=
    stackedCard +
    image +
    imageSrc +
    divEnd +
    detail +
    h3Title +
    aBtn +
    iPlayClass +
    aEND +
    divEnd +
    next +
    iClass +
    divEnd +
    divEnd;

  // !!EXAMPLE LAYOUT!!!
  //   <div data-stacked-card="4" class="stacked-card">
  //   <div class="image">
  //     <img src="images/bg-1.jpg" alt="image" />
  //   </div>
  //   <div class="detail">
  //     <h3>Similan</h3>
  //     <p>Similan Island tropical beach view point sea</p>
  //   </div>
  //   <div class="next">
  //     <i class="fas fa-arrow-right"></i>
  //   </div>
  // </div>
}
