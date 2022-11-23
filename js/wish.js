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

function loadWish()
{
    console.log("Loading wish");
}