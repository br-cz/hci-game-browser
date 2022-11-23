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

function addToWish (gameTitle)
{
    //console.log("Adding" + gameTitle + " to wishlist");
    var currWishItem = findGame(gameTitle)
    if(!currWishItem.wishlist)
    {
        changeValue(gameTitle, 'wishlist', true);
        window.alert(currWishItem.title + " has been added to the wishlist");
    }
    else
    {
        window.alert(currWishItem.title + " is already in the wishlist");
    }
}

function removeFromWish(gameTitle)
{
    changeValue(gameTitle, 'wishlist', false);
    loadWish();
}


function loadWish()
{
    //console.log("Loading wish");
    //var wishTotal = 0;
    document.querySelector('.wish-items').innerHTML = "";
    for(let i = 0; i < allGamesCart.length; i++)
    {
        for(let j = 0; j < allGamesCart[i].length; j++)
        {
            //console.log(allGamesCart[i][j].title);
            var currGame = findGame(allGamesCart[i][j].title); 
            if(currGame.wishlist)
            {
                var salePrice = (1 - (currGame.sale/100)) * currGame.price;
                //wishTotal += salePrice;

                var cartItemClass = '<div class="wish-item">'; 
                var cartItemTitleClass = '<div class="wish-item-title">' + currGame.title + '</div>';
                var cartItemPriceClass = '<div class="wish-item-price">';
                var cartItemPrice;  
                var removeButton = '<a href="#" class="btn btn-success" onclick="addToCart(\'' + currGame.title.replaceAll("'","") + '\')"><i class="fa-solid fa-cart-shopping"></i></a>' + '<a href="#" class="btn btn-primary" onclick="removeFromWish(\'' + currGame.title.replaceAll("'","") + '\')"><i class="fa-solid fa-xmark"></i></a>';
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
            }
        }
    }
}
