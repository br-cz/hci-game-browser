//Example file using the localStorage db
function testDB() {
  //Check if the current db exists
  if (localStorage.getItem('actionDB') !== null) {
    //We are doing JSON.parse because getItem returns the stringified json db
    //This retrieves the actionDB
    var actionGames = JSON.parse(localStorage.getItem('actionDB'));

    //This finds the first element with a div tag in HTML document and adds to its inner html with the ith game title as well as a line break
    for (let i = 0; i < 5; i++) {
      document.querySelector('div').innerHTML += actionGames[i].title + '<br>';
    }

    //This justs adds another line break so we can see the changes in the next loop
    document.querySelector('div').innerHTML += '<br>';

    for (let i = 0; i < 5; i++) {
      //This adds the ith number to the ith game in the action database
      actionGames[i].title += ' ' + i;

      //This finds the first element with a div tag in HTML document and adds to its inner html with the ith game title as well as a line break
      document.querySelector('div').innerHTML += actionGames[i].title + '<br>';
    }

    //This justs adds another line break so we can see the changes in the next loop
    document.querySelector('div').innerHTML += '<br>';

    //This updates the actionDB by once again stringifying the now modified actionDB
    localStorage.setItem('actionDB', JSON.stringify(actionGames));

    //We retrieve the now modified actionDB
    var actionGames2 = JSON.parse(localStorage.getItem('actionDB'));

    //This should show that the game titles have been modified
    for (let i = 0; i < 5; i++) {
      document.querySelector('div').innerHTML += actionGames2[i].title + '<br>';
    }
  } else {
    console.log('empty');
  }
}
testDB();
