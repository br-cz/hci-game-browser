var actionGames = JSON.parse(localStorage.getItem('actionDB'));
var adventureGames = JSON.parse(localStorage.getItem('adventureDB'));

for (var i = 0; i < actionGames.length; i++) {
  createContainer(actionGames[i], '#action-container');
}

for (var i = 0; i < adventureGames.length; i++) {
  createContainer(adventureGames[i], '#adventure-container');
}

function createContainer(game, container) {
  const stackedCard = '<div data-stacked-card="4" class="stacked-card">';
  const image = '<div class="image">';
  const imageSrc = '<img src="' + game.image + ' " alt="image" />';
  const divEnd = '</div>';
  const detail = '<div class="detail">';
  const h3Title = '<h3>' + game.title + '</h3>';
  const next = '<div class="next">';
  const iClass = '<i class="fas fa-arrow-right"></i>';

  document.querySelector(container).innerHTML +=
    stackedCard +
    image +
    imageSrc +
    divEnd +
    detail +
    h3Title +
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
