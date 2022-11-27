var overlay = document.getElementById('payGameOverlay');

function openStoreGame(title) {
  var currentGame = findGame(title);
  //console.log(title);
  /*
  for (var i = 0; i < games.length; i++) {
    for (var j = 0; j < games[i].length; j++) {
      if (games[i][j].title.replaceAll("'", "") === title) {
        currentGame = games[i][j];
        break;
      }
    }
    if (currentGame != 10) {
      break;
    }
  }
  */
  //console.log(currentGame);

  overlay.className = 'container-popup .is-visible';
  setTimeout(function () {
    overlay.className = 'container-popup';
  }, 5);

  const gameTitle =
    '<div id="overlay_title_pay">' +
    '<h1>' +
    currentGame.title +
    '</h1>' +
    '</div>';

  const gameImage =
    '<div class="overlayImageWrapper">' +
    '<img src="' +
    currentGame.image +
    '" class="d-block w-100"/>' +
    '</div>';

  passTitle = currentGame.title.replaceAll("'", '');

  const buttonRow =
    '<div id="buttonRowOuter">' +
    '<div class="buttonRowInner"><button class="playGameButton" onclick="purchaseSinglePrompt(\'' +
    passTitle +
    '\')">PURCHASE</button></div>' +
    '</div>';

  const gameDescription =
    '<textarea class="scrollabletextbox_pay" name="description" readonly>' +
    'Description:\n\n' +
    currentGame.description +
    '</textarea>';

  salePrice = (1 - currentGame.sale / 100) * currentGame.price;
  var priceRow;

  if (!currentGame.cart) {
    console.log(passTitle);
    priceRow =
      '<div id="buttonRowOuterPrice">' +
      '<div class="buttonRowPayOverlay"><button class="addCartWishlist" onclick="addToCart(\'' +
      passTitle +
      "');openStoreGame('" +
      passTitle +
      '\')")>Add to Cart</button></div>' +
      '<div class="gamePrice">Price: $' +
      salePrice.toFixed(2) +
      '</div>';
  } else {
    priceRow =
      '<div id="buttonRowOuterPrice">' +
      '<div class="buttonRowPayOverlay"><button class="addCartWishlist" onclick="removeFromCart(\'' +
      passTitle +
      "');openStoreGame('" +
      passTitle +
      '\')")>Remove from Cart</button></div>' +
      '<div class="gamePrice">Price: $' +
      salePrice.toFixed(2) +
      '</div>';
  }

  var wishlistButton;

  if (!currentGame.wishlist) {
    priceRow +=
      '<div class="buttonRowPayOverlay"><button class="addCartWishlist" onclick="addToWish(\'' +
      passTitle +
      "');openStoreGame('" +
      passTitle +
      '\')">Add to Wishlist</button></div>' +
      '</div>';
  } else {
    priceRow +=
      '<div class="buttonRowPayOverlay"><button class="addCartWishlist" onclick="removeFromWish(\'' +
      passTitle +
      "');openStoreGame('" +
      passTitle +
      '\')">Remove from Wishlist</button></div>' +
      '</div>';
  }

  var inCart = '';

  if (currentGame.cart) {
    inCart = '<i class="fa-solid fa-cart-shopping"></i></button></div>';
  } else {
    inCart = '<i class="fa-solid fa-cart-shopping"></i></button></div>';
  }

  document.querySelector('.popup').innerHTML =
    '<div id="overlay_exit_button" onclick="closeOverlay()">' +
    '<button class="buttonCircle">x</button> </div> </div>' +
    inCart +
    gameTitle +
    gameImage +
    priceRow +
    gameDescription +
    buttonRow;
  // buttonRow +
  // gameDescription;

  window.onclick = function (event) {
    if (event.target == overlay) {
      overlay.className = 'container-popup is-hidden is-visuallyHidden';
    }
  };
}

function closeOverlay() {
  overlay.className = 'container-popup is-hidden is-visuallyHidden';
}
