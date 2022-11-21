let cartTitles = [];

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

const allGamesCart = [
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

function addToCart(gameTitle)
{
  cartTitles.push(gameTitle);
  changeValue(gameTitle, 'cart', true);
}

function cartPurchase()
{
  for(let i = 0; i < cartTitles.length; i++)
  {
    changeValue(cartTitles[i], 'cart', false);
    changeValue(cartTitles[i], 'owned', true);
  }
  cartTitles = [];
  window.location.reload();
  //storeReloadDatabase();
}

function loadCart()
{

}