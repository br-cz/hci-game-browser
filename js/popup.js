// Get the modal
var modal = document.getElementById('userModal');

// Get the main container and the body
// var body = document.getElementsByTagName('body');
// var container = document.getElementById('myContainer');
// Get the open button
var btnOpen = document.getElementById('userBtn');
// Get the close button
var btnClose = document.getElementById('closeUserModal');

// Open the modal
btnOpen.onclick = function () {
  console.log('click profile');
  modal.className = 'Modal is-visuallyHidden';
  setTimeout(function () {
    // container.className = 'MainContainer is-blurred';
    modal.className = 'Modal';
  }, 5);
  //   container.parentElement.className = 'ModalOpen';
};
// Close the modal
btnClose.onclick = function () {
  console.log('close');
  modal.className = 'Modal is-hidden is-visuallyHidden';
  //   body.className = '';
  //   container.className = 'MainContainer';
  //   container.parentElement.className = '';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.className = 'Modal is-hidden';
    // body.className = '';
    // container.className = 'MainContainer';
    // container.parentElement.className = '';
  }
};
