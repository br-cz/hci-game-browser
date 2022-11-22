// Get the modal
var modal = document.getElementById('myModal');
var cartModal = document.getElementById('cart-page');

// Get the main container and the body
// var body = document.getElementsByTagName('body');
// var container = document.getElementById('myContainer');
// Get the open button
var btnOpen = document.getElementById('myBtn');
var cartBtn = document.getElementById('cart-btn');
// Get the close button
var btnClose = document.getElementById('closeModal');
// Open the modal
btnOpen.onclick = function () {
  modal.className = 'Modal is-visuallyHidden';
  setTimeout(function () {
    // container.className = 'MainContainer is-blurred';
    modal.className = 'Modal';
  }, 5);
  //   container.parentElement.className = 'ModalOpen';
};
// Close the modal
btnClose.onclick = function () {
  modal.className = 'Modal is-hidden is-visuallyHidden';
  //   body.className = '';
  //   container.className = 'MainContainer';
  //   container.parentElement.className = '';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  console.log("clicking on window");
  if (event.target == modal) {
    modal.className = 'Modal is-hidden';
    // body.className = '';
    // container.className = 'MainContainer';
    // container.parentElement.className = '';
  }
  else if(event.target == cartModal)
  {
    cartModal.className = 'cart-modal is-hidden';
  }
};


cartBtn.onclick = function () {
  loadCart();
  cartModal.className = 'cart-modal is-visuallyHidden';
  setTimeout(function () {
    // container.className = 'MainContainer is-blurred';
    cartModal.className = 'cart-modal';
  }, 5);
  //   container.parentElement.className = 'ModalOpen';
};
