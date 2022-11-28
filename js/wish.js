var wishModal = document.getElementById('wish-page');
var wishBtn = document.getElementById('wish-btn');
var wishClose = document.getElementById('wish-close-btn');

wishBtn.onclick = function () {
    loadWish();
    wishModal.className = 'wish-modal is-visuallyHidden';
    setTimeout(function () {
            wishModal.className = 'wish-modal';
    }, 5);
};

wishClose.onclick = function () {
    wishModal.className = 'wish-modal is-hidden is-visuallyHidden';
};
  
window.onclick = function (event) {
    if(event.target == wishModal)
    {
        wishModal.className = 'wish-modal is-hidden';
    }
};
var notifTime;
function addToWish (gameTitle)
{
    //console.log("Adding" + gameTitle + " to wishlist");
    var currWishItem = findGame(gameTitle)
    var notifText = document.getElementById('notif-text');// = "";
    notifText.innerHTML = "";
    if(!currWishItem.wishlist)
    {
        changeValue(gameTitle, 'wishlist', true);
        //window.alert(currWishItem.title + " has been added to the wishlist");
        notifText.innerHTML = currWishItem.title + " has been added to the wishlist";
    }
    else
    {
        //window.alert(currWishItem.title + " is already in the wishlist");
        notifText.innerHTML = currWishItem.title + " is already in the wishlist";
    }
    clearNotif();
    setTimeout(function()
    { 
        notifText.className = "notification show-notif";
    }, 0);
    clearTimeout(notifTime);
    notifTime = setTimeout(clearNotif, 3000)
    loadWish();
}

function removeFromWish(gameTitle)
{
    window.event.stopPropagation();
    var notifText = document.getElementById('notif-text');
    notifText.innerHTML = findGame(gameTitle).title + " was removed from the wishlist";
    clearNotif();
    setTimeout(function()
    { 
        notifText.className = "notification show-notif";
    }, 0);
    clearTimeout(notifTime);
    notifTime = setTimeout(clearNotif, 3000)
    changeValue(gameTitle, 'wishlist', false);
    loadWish();
}


function loadWish()
{
    //console.log("Loading wish");
    //var wishTotal = 0;
    var wishItems = [];
    document.querySelector('.wish-items').innerHTML = "";
    for(let i = 0; i < allGamesCart.length; i++)
    {
        for(let j = 0; j < allGamesCart[i].length; j++)
        {
            //console.log(allGamesCart[i][j].title);
            var currGame = findGame(allGamesCart[i][j].title); 
            if(currGame.wishlist)
            {
                wishItems.push(currGame);
                /*
                var salePrice = (1 - (currGame.sale/100)) * currGame.price;
                //wishTotal += salePrice;

                var cartItemClass = '<div class="wish-item">'; 
                var cartItemTitleClass = '<div class="wish-item-title">' + currGame.title + '</div>';
                var cartItemPriceClass = '<div class="wish-item-price">';
                var cartItemPrice;  
                var removeButton = '<a class="btn confirm-btn" onclick="addToCart(\'' + currGame.title.replaceAll("'","") + '\')"><i class="fa-solid fa-cart-shopping"></i></a>' + '<a href="#" class="btn decline-btn" onclick="removeFromWish(\'' + currGame.title.replaceAll("'","") + '\')"><i class="fa-solid fa-xmark"></i></a>';
                var divEnd = '</div>';
                if(currGame.sale > 0)
                {
                cartItemPrice = '<span><s>$' + currGame.price.toFixed(2) + '</s> -' + currGame.sale + '%</span> '
                + '<span class="wish-discounted-price">$' + salePrice.toFixed(2) + '  </span>';
                }
                else
                {
                cartItemPrice = '$' + currGame.price.toFixed(2) + '  ';
                }
                document.querySelector('.wish-items').innerHTML +=
                    cartItemClass +
                    cartItemTitleClass +
                    cartItemPriceClass +
                    cartItemPrice +
                    removeButton +
                    divEnd +
                    divEnd;
                    */
            }
        }
    }
    for(let i = 0; i < wishItems.length; i++)
    {
        var salePrice = (1 - (wishItems[i].sale/100)) * wishItems[i].price;
        //wishTotal += salePrice;
        let passTitle = '\'' + wishItems[i].title + '\'';
        var cartItemClass = '<div class="wish-item" onclick="openStoreGame(' + passTitle + ')">'; 
        var cartItemTitleClass = '<div class="wish-item-title">' + wishItems[i].title + '</div>';
        var cartItemPriceClass = '<div class="wish-item-price">';
        var cartItemPrice;  
        var removeButton = '<a class="btn confirm-btn" onclick="addToCart(\'' + wishItems[i].title.replaceAll("'","") + '\')"><i class="fa-solid fa-cart-shopping"></i></a>' + '<a href="#" class="btn decline-btn" onclick="removeFromWish(\'' + wishItems[i].title.replaceAll("'","") + '\')"><i class="fa-solid fa-xmark"></i></a>';
        
        if(wishItems[i].sale > 0)
        {
        cartItemPrice = '<span><s>$' + wishItems[i].price.toFixed(2) + '</s> -' + wishItems[i].sale + '%</span> '
        + '<span class="wish-discounted-price">$' + salePrice.toFixed(2) + '  </span>';
        }
        else
        {
        cartItemPrice = '$' + wishItems[i].price.toFixed(2) + '  ';
        }
        var libLine = '<div class="wish-line-wrapper"><div class="wish-line"></div></div>';
        if(i == wishItems.length - 1)
        {
            libLine = '';
        }
        var divEnd = '</div>';
        document.querySelector('.wish-items').innerHTML +=  cartItemClass +
                                                            cartItemTitleClass +
                                                            cartItemPriceClass +
                                                            cartItemPrice +
                                                            removeButton +
                                                            divEnd +
                                                            divEnd +
                                                            libLine;
    }
    var wishAmount = document.getElementById('wish-amount');
    wishAmount.innerHTML = wishItems.length;
    //console.log(wishItems.length);
    if(wishItems.length == 0)
    {
        wishAmount.className = 'wish-num';
    }
    else
    {
        wishAmount.className = 'wish-num wish-num-show';
    }
}

loadWish();
