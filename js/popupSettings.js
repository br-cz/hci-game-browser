// Get the modal
var modalSettings = document.getElementById('settingsModal');

// Get the main container and the body
// var body = document.getElementsByTagName('body');
// var container = document.getElementById('myContainer');
// Get the open button
var btnOpenSettings = document.getElementById('settingsBtn');
// Get the close button
var btnCloseSettings = document.getElementById('closeSettingsModal');
// Open the modal
btnOpenSettings.onclick = function () {
  console.log('click settings');
  modalSettings.className = 'Modal is-visuallyHidden';
  setTimeout(function () {
    // container.className = 'MainContainer is-blurred';
    modalSettings.className = 'Modal';
  }, 5);
  //   container.parentElement.className = 'ModalOpen';
};
// Close the modal
btnCloseSettings.onclick = function () {
  console.log('close');
  modalSettings.className = 'Modal is-hidden is-visuallyHidden';
  //   body.className = '';
  //   container.className = 'MainContainer';
  //   container.parentElement.className = '';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalSettings) {
    modalSettings.className = 'Modal is-hidden';
    // body.className = '';
    // container.className = 'MainContainer';
    // container.parentElement.className = '';
  }
};

var radioOne = document.getElementById('btnradio1');
var radioTwo = document.getElementById('btnradio2');
var radioThree = document.getElementById('btnradio3');
var settingsP = document.getElementById('settings-paragraph');

radioOne.onclick = function () {
  settingsP.innerHTML =
    'Hi there, unfortunately changing settings is a premium exclusive.' +
    'You can already buy games for free so why not purchase? I heard ' +
    'Radio 2 contains a free premium membership code :)';
};

radioTwo.onclick = function () {
  settingsP.innerHTML =
    'Hi there, unfortunately we moved the free membership to radio 3 :(';
};

radioThree.onclick = function () {
  settingsP.innerHTML =
    'Lol did you actually believe we are giving away premium for free? Hehe loser';
};
