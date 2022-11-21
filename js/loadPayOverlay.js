//This just uses action games at the moment, change to all games later

var games = JSON.parse(localStorage.getItem('actionDB'));

var currentGame = games[0];

title = currentGame.title;
image = currentGame.image;
description = currentGame.description;
ratings = currentGame.ratings;

const exitButtonId = '<div id="overlay_exit_button">';
const exitButton = '<button class="buttonCircle">x</button>';

const gameTitle = '<div id="overlay_title">' +
                    '<h1>' + title + '</h1>' + 
                    '</div>';

const gameImage = '<div class="overlayImageWrapper">' +
                    '<img src="' + image + '" class="d-block w-100"/>' +
                    '</div>';

const payButton = '<div id="buttonPay">' +
                '<div><button class="payButton" >PURCHASE</button></div>' +
                '</div>';

const gameDescription = '<textarea class="scrollabletextbox" name="description" readonly>' + "Description:\n\n" +
                        description +
                        '</textarea>';

document.querySelector('.popup').innerHTML +=
    gameTitle + 
    gameImage +
    gameDescription;