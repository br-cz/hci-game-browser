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
var notifTime;
function addToCart(gameTitle)
{
  /*
  if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    */
   //console.log(window.event);
  window.event.stopPropagation();
  //console.log("inside addToCart");
  var currCartItem = findGame(gameTitle);
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
  /*
  setTimeout(function()
  { 
    notifText.className = "notification";
    console.log("Closing notif " + number++);
  }, 3000);
  */
  clearTimeout(notifTime);
  notifTime = setTimeout(clearNotif, 3500)
  loadCart();
}

function clearNotif()
{
  var notifText = document.getElementById('notif-text');
  notifText.className = "notification";
}

function removeFromCart(gameTitle)
{
  window.event.stopPropagation();
  var notifText = document.getElementById('notif-text');
  notifText.innerHTML = findGame(gameTitle).title + " was removed from the cart";
  notifText.className = "notification show-notif";
  clearTimeout(notifTime);
  notifTime = setTimeout(clearNotif, 3500);
  changeValue(gameTitle, 'cart', false);
  loadCart();
}

function purchaseSinglePrompt(gameTitle)
{
  var currGame = findGame(gameTitle);
  var passTitle = '\'' + currGame.title.replaceAll("'","") + '\'';
  var prompt = document.getElementById('prompt-text');
  prompt.className = 'prompt show-prompt'
  prompt.innerHTML = '';
  const promptClass = '<div class="prompt" id="prompt-text">';
  const promptText = '<div id="prompt-text">Are you sure you want to purchase ' + currGame.title + '?</div>';
  const btnClass = '<div class="purchase-btns">';
  const confirmClass = '<div class="confirm-purchase">';
  const confirmBtn = '<a href="#" class="btn confirm-btn" id="confirm-purchase" onclick="purchaseSingle(' + passTitle + ')"><i class="fa-solid fa-check"></i></a>';
  const declineClass = '<div class="decline-purchase">';
  const declineBtn = '<a href="#" class="btn decline-btn" id="confirm-purchase" onclick="closePrompt()"><i class="fa-solid fa-x"></i></a>';
  const divEnd = '</div>';

  prompt.innerHTML = 
                     promptText +
                     btnClass + 
                     confirmClass +
                     confirmBtn +
                     divEnd +
                     declineClass +
                     declineBtn +
                     divEnd +
                     divEnd;
}

/*
<div class="prompt" id="notif-text">
  <div id="prompt-text">
    Are you sure want to purchase Dishonored
  </div>
  <div class="purchase-btns">
    <div class="confirm-purchase">
      <a href="#" class="btn btn-primary" id="confirm-purchase">
        <i class="fa-solid fa-check"></i>
      </a>
    </div>
    <div class="decline-purchase">
      <a href="#" class="btn btn-primary" id="confirm-purchase">
        <i class="fa-solid fa-x"></i>
      </a>
    </div>
  </div>
</div>
*/

function purchaseSingle(gameTitle)
{
  var currGame = findGame(gameTitle);
  changeValue(gameTitle, 'cart', false);
  changeValue(gameTitle, 'owned', true);
  changeValue(gameTitle, 'wishlist', false);
  window.location.reload();
  //window.alert("Successfully purchased " + currGame.title);
}

function purchaseCartPrompt()
{
  var prompt = document.getElementById('prompt-text');
  prompt.className = 'prompt show-prompt'
  prompt.innerHTML = '';
  const promptText = '<div id="prompt-text">Are you sure you want to purchase all items in the cart?</div>';
  const btnClass = '<div class="purchase-btns">';
  const confirmClass = '<div class="confirm-purchase">';
  const confirmBtn = '<a href="#" class="btn confirm-btn" id="confirm-purchase" onclick="purchaseCart()"><i class="fa-solid fa-check"></i></a>';
  const declineClass = '<div class="decline-purchase">';
  const declineBtn = '<a class="btn decline-btn" id="confirm-purchase" onclick="closePrompt()"><i class="fa-solid fa-x"></i></a>'
  const divEnd = '</div>'

  prompt.innerHTML = 
                     promptText +
                     btnClass + 
                     confirmClass +
                     confirmBtn +
                     divEnd +
                     declineClass +
                     declineBtn +
                     divEnd +
                     divEnd;
}

function closePrompt()
{
  document.getElementById('prompt-text').className = 'prompt';
}

function purchaseCart()
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
  //window.alert("Successfully purchased all cart Items");
}

function loadCart()
{
  var cartTotal = 0;
  var cartItems = [];
  document.querySelector('.cart-items').innerHTML = "";
  for(let i = 0; i < allGamesCart.length; i++)
  {
    for(let j = 0; j < allGamesCart[i].length; j++)
    {
      //console.log(allGamesCart[i][j].title);
      var currGame = findGame(allGamesCart[i][j].title); 
      
      if(currGame.cart)
      {
        cartItems.push(currGame);
        /*
        var salePrice = (1 - (currGame.sale/100)) * currGame.price;
        cartTotal += salePrice;

        var cartItemClass = '<div class="cart-item">'; 
        var cartItemTitleClass = '<div class="cart-item-title">' + currGame.title + '</div>';
        var cartItemPriceClass = '<div class="cart-item-price">';
        var cartItemPrice;  
        var removeButton = '<a class="btn decline-btn" onclick="removeFromCart(\'' + currGame.title.replaceAll("'","") + '\')"><i class="fa-solid fa-xmark"></i></a>';
        var divEnd = '</div>';
        var libLine = '<div class="cart-line-wrapper"><div class="cart-line"></div></div>';
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
        divEnd +
        libLine;
        */
      }
    }
  }
  //console.log(cartItems);
  for(let i = 0; i < cartItems.length; i++)
  {
    var salePrice = (1 - (cartItems[i].sale/100)) * cartItems[i].price;
    cartTotal += salePrice;
    let passTitle = '\'' + cartItems[i].title + '\'';
    var cartItemClass = '<div class="cart-item" onclick="openStoreGame(' + passTitle + ')">'; 
    var cartItemTitleClass = '<div class="cart-item-title">' + cartItems[i].title + '</div>';
    var cartItemPriceClass = '<div class="cart-item-price">';
    var cartItemPrice;  
    var removeButton = '<a class="btn decline-btn" onclick="removeFromCart(\'' + cartItems[i].title.replaceAll("'","") + '\')"><i class="fa-solid fa-xmark"></i></a>';
    if(cartItems[i].sale > 0)
    {
      cartItemPrice = '<span><s>$' + cartItems[i].price.toFixed(2) + '</s> -' + cartItems[i].sale + '%</span> '
      + '<span class="cart-discounted-price">$' + salePrice.toFixed(2) + '  </span>';
    }
    else
    {
      cartItemPrice = '$' + cartItems[i].price.toFixed(2) + '  ';
    }
    var libLine = '<div class="cart-line-wrapper"><div class="cart-line"></div></div>';
    if(i == cartItems.length -1)
    {
      libLine = '';
    }
    var divEnd = '</div>';

    document.querySelector('.cart-items').innerHTML += cartItemClass +
                                                       cartItemTitleClass +
                                                       cartItemPriceClass +
                                                       cartItemPrice +
                                                       removeButton +
                                                       divEnd +
                                                       divEnd +
                                                       libLine;
  }

  document.querySelector('.cart-total').innerHTML = '';
  document.querySelector('.cart-total').innerHTML = 'Total: $' + cartTotal.toFixed(2);
  var cartAmount = document.getElementById('cart-amount');
  cartAmount.innerHTML = cartItems.length;
    //console.log(wishItems.length);
    if(cartItems.length == 0)
    {
      cartAmount.className = 'cart-num';
    }
    else
    {
      cartAmount.className = 'cart-num cart-num-show';
    }
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

loadCart();