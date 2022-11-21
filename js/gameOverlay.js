function loadBoughtOverlay(title) {
  var currentGame = 10;
  for (var i = 0; i < games.length; i++) {
    for (var j = 0; j < games[i].length; j++) {
      if (games[i][j].title.replaceAll("'") === title) {
        currentGame = games[i][j];
        break;
      }
    }
    if (currentGame != 10) {
      break;
    }
  }
  console.log(currentGame);

  // <div class="popup-card">
  //   <img src="./images/averagehcistudent.jpeg" alt="Chad" style="width: 100%" />
  //   <h2>Average HCI Student</h2>
  //   <p class="popup-title">CEO & Founder, Udder Group</p>
  //   <p>University of Manitoba</p>
  //   <button
  //     type="button"
  //     class="btn btn-outline-danger"
  //     onclick="alert('Not allowed to log out >:)')"
  //   >
  //     Logout
  //   </button>
  // </div>;

  const img =
    '<img src="./images/averagehcistudent.jpeg" alt="Chad" style="width: 100%" />';
  const h2 = '<h2>' + currentGame.title + '</h2>';
  const p = '<p class="popup-title">' + currentGame.description + '</p>';
  const log =
    '<button type="button" class="btn btn-outline-danger" onclick="alert("Not allowed to log out >:)")">Logout</button>';
  document.querySelector('.popup-card').innerHTML = img + h2 + p + log;
  // Get the modal
  var modal = document.getElementById('boughtGameOverlay');

  // Get the close button
  var btnClose = document.getElementById('closeModal');
  // Open the modal

  modal.className = 'Modal is-visuallyHidden';
  setTimeout(function () {
    modal.className = 'Modal';
  }, 5);

  // Close the modal
  btnClose.onclick = function () {
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
}
