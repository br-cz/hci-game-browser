
 var overlay = document.getElementById('playGameOverlay');


function openBoughtGame(title) {
    var currentGame = 10;
    console.log(title)
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

    overlay.className = 'container-popup .is-visible';
    setTimeout(function () {
        overlay.className = 'container-popup';
    }, 5)


    const gameTitle = '<div id="overlay_title">' +
                        '<h1>' + currentGame.title + '</h1>' + 
                        '</div>';

    const gameImage = '<div class="overlayImageWrapper">' +
                        '<img src="' + currentGame.image + '" class="d-block w-100"/>' +
                        '</div>';

    const buttonRow = '<div id="buttonRowOuter">' +
                    '<div class="buttonRowInner"><button class="playSettingsButton" >Settings</button></div>' +
                    '<div class="buttonRowInner"><button class="playGameButton" >PLAY</button></div>' +
                    '</div>';

    const gameDescription = '<textarea class="scrollabletextbox" name="description" readonly>' + "Description:\n\n" +
                            currentGame.description +
                            '</textarea>';

    document.querySelector('.popup').innerHTML =
        '<div id="overlay_exit_button" onclick="closeOverlay()">' +
        '<button class="buttonCircle">x</button> </div> </div>' + 
        '<div class="overlay_pin_button" onclick="pinGame()">' +
        '<button class="buttonPin">' +
        '<i class="fa-solid fa-map-pin"></i></button></div>' +
        gameTitle + 
        gameImage +
        buttonRow +
        gameDescription;

    window.onclick = function (event) {
        if (event.target == overlay) {
            overlay.className = 'container-popup is-hidden is-visuallyHidden';
        }
    }
}


function closeOverlay() {
    overlay.className = 'container-popup is-hidden is-visuallyHidden';
}






