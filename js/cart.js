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

var cartModal = document.getElementById('cart-page');
var cartBtn = document.getElementById('cart-btn');
var cartClose = document.getElementById('cart-close-btn');

cartBtn.onclick = function () {
  loadCart();
  cartModal.className = 'cart-modal is-visuallyHidden';
  setTimeout(function () {
    // container.className = 'MainContainer is-blurred';
    cartModal.className = 'cart-modal';
  }, 5);
  //   container.parentElement.className = 'ModalOpen';
};

cartClose.onclick = function () {
  cartModal.className = 'cart-modal is-hidden is-visuallyHidden';
};

window.onclick = function (event) {
  console.log("clicking on window");
  if(event.target == cartModal)
  {
    cartModal.className = 'cart-modal is-hidden';
  }
};

/*
updateCart()
{

}
*/

function addToCart(gameTitle)
{
  //console.log("inside addToCart");
  currCartItem = findGame(gameTitle);
  //cartTitles.push(gameTitle);
  var notifText = document.getElementById('notif-text');// = "";
  notifText.innerHTML = "";
  if(!currCartItem.cart)
  {
    changeValue(gameTitle, 'cart', true);
    //window.alert(currCartItem.title + " was added to the cart.");
    notifText.innerHTML = currCartItem.title + " was added to the cart.";
  }
  else
  {
    //window.alert(currCartItem.title + " is already in the cart.");
    notifText.innerHTML = currCartItem.title + " is already in the cart.";
  }
  notifText.className = "notification show-notif";
  setTimeout(function(){ notifText.className = "notification"}, 3000);
}

function removeFromCart(gameTitle)
{
  changeValue(gameTitle, 'cart', false);
  loadCart();
}

function purchaseSingle(gameTitle)
{
  let currGame = findGame(gameTitle);
  if(window.confirm("Proceeding with purchase of " + currGame.title))
  {
    changeValue(gameTitle, 'cart', false);
    changeValue(gameTitle, 'owned', true);
    changeValue(gameTitle, 'wishlist', false);
    window.location.reload();
    window.alert("Successfully purchased " + currGame.title);
  }
}

function purchaseCart()
{
  if(window.confirm("Proceeding with purchase of all Cart items"))
  {
    for(let i = 0; i < allGamesCart.length; i++)
  {
    //console.log(allGamesCart[i][0]);
    for(let j = 0; j < allGamesCart[i].length; j++)
    {
      //console.log(allGamesCart[i][j].cart);
      //console.log(findGame(allGamesCart[i][j].title).cart)
      if(findGame(allGamesCart[i][j].title).cart)
      {
        //console.log(allGamesCart[i][j].title);
        changeValue(allGamesCart[i][j].title.replaceAll("'",""), 'cart', false);
        changeValue(allGamesCart[i][j].title.replaceAll("'",""), 'owned', true);
        changeValue(allGamesCart[i][j].title.replaceAll("'",""), 'wishlist', false);
      }
    }
  }
  window.location.reload();
  window.alert("Successfully purchased all cart Items");
  }
}

function loadCart()
{
  console.log("Loading cart");
  var cartTotal = 0;
  document.querySelector('.cart-items').innerHTML = "";
  for(let i = 0; i < allGamesCart.length; i++)
  {
    for(let j = 0; j < allGamesCart[i].length; j++)
    {
      //console.log(allGamesCart[i][j].title);
      var currGame = findGame(allGamesCart[i][j].title); 
      if(currGame.cart)
      {
        var salePrice = (1 - (currGame.sale/100)) * currGame.price;
        cartTotal += salePrice;

        var cartItemClass = '<div class="cart-item">'; 
        var cartItemTitleClass = '<div class="cart-item-title">' + currGame.title + '</div>';
        var cartItemPriceClass = '<div class="cart-item-price">';
        var cartItemPrice;  
        var removeButton = '<a href="#" class="btn btn-primary" onclick="removeFromCart(\'' + currGame.title.replaceAll("'","") + '\')"><i class="fa-solid fa-xmark"></i></a>';
        var divEnd = '</div>';
        if(currGame.sale > 0)
        {
          cartItemPrice = '<span><s>$' + currGame.price.toFixed(2) + '</s> -' + currGame.sale + '%</span> '
          + '<span class="cart-discounted-price">$' + salePrice.toFixed(2) + '  </span>';
        }
        else
        {
          cartItemPrice = '$' + currGame.price.toFixed(2) + '  ';
        }
        document.querySelector('.cart-items').innerHTML +=
        cartItemClass +
        cartItemTitleClass +
        cartItemPriceClass +
        cartItemPrice +
        removeButton +
        divEnd +
        divEnd;
      }
    }
  }

  document.querySelector('.cart-total').innerHTML = '';
  document.querySelector('.cart-total').innerHTML = 'Total: $' + cartTotal.toFixed(2);
  
  /*
  <div class="cart-item"> 
    <div class="cart-item-title">Apple</div>
    <div class="cart-item-price">
      <span><s>$100.00</s> -25%</span>
      <span class="cart-discounted-price">$75.00</span>
      <a href="#" class="btn btn-primary">
        <i class="fa-solid fa-xmark"></i>
      </a>
    </div>
  </div>
  */
}