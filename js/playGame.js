var newRecent = [];
function playGame(title) {
  window.event.stopPropagation();
  var playGame = findGame(title);
  //console.log(playGame);
  
  for(let i = 0; i < games.length; i++)
  {
    for(let j = 0; j < games[i].length; j++)
    {
      //console.log(games[i][j].playedRank);
      playRank = games[i][j].playedRank
      if(playGame.playedRank == -1)
      {
        if(playRank == 8)
        {
          //console.log(games[i][j]);
          changeValue(games[i][j].title.replaceAll("'",""), 'playedRank', -1);
          console.log(findGame(games[i][j].title.replaceAll("'","")));

        }
        else if(playRank > -1 && playRank < 8)
        {
          //console.log(games[i][j]);
          changeValue(games[i][j].title.replaceAll("'",""), 'playedRank', playRank + 1);
          console.log(findGame(games[i][j].title.replaceAll("'","")));
        }
      }
      else
      {
        if(playRank > -1 && playRank < playGame.playedRank)
        {
          //console.log(games[i][j]);
          changeValue(games[i][j].title.replaceAll("'",""), 'playedRank', playRank + 1);
          console.log(findGame(games[i][j].title.replaceAll("'","")));
        }
      }
    }
  }
  
  
  //console.log(playGame);
  changeValue(title, 'playedRank', 0);
  alert('Now launching ' + playGame.title + ' in a different window');
  window.location.reload();
  //   console.log(recent[8]);
  //   console.log(recent[7]);
  //   console.log(recent[6]);
  //   console.log(recent[5]);
  //   console.log(recent[4]);
  //   console.log(recent[3]);
  //   console.log(recent[2]);
  //   console.log(recent[1]);
  //   console.log(recent[0]);
  //   var currentGame = 10;

  /*
  for (var j = 0; j < actionGames.length; j++) {
    if (actionGames[j].title.replaceAll("'","") === title) {
      currentGame = actionGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      actionGames[j] = currentGame;
      localStorage.setItem('actionDB', JSON.stringify(actionGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < adventureGames.length; j++) {
    if (adventureGames[j].title.replaceAll("'","") === title) {
      currentGame = adventureGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      adventureGames[j] = currentGame;
      localStorage.setItem('adventureDB', JSON.stringify(adventureGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < familyGames.length; j++) {
    if (familyGames[j].title.replaceAll("'","") === title) {
      currentGame = familyGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      familyGames[j] = currentGame;
      localStorage.setItem('familyDB', JSON.stringify(familyGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < shooterGames.length; j++) {
    if (shooterGames[j].title.replaceAll("'","") === title) {
      currentGame = shooterGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      shooterGames[j] = currentGame;
      localStorage.setItem('shooterDB', JSON.stringify(shooterGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < rpgGames.length; j++) {
    if (rpgGames[j].title.replaceAll("'","") === title) {
      currentGame = rpgGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      rpgGames[j] = currentGame;
      localStorage.setItem('rpgDB', JSON.stringify(rpgGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < strategyGames.length; j++) {
    if (strategyGames[j].title.replaceAll("'","") === title) {
      currentGame = strategyGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      strategyGames[j] = currentGame;
      localStorage.setItem('strategyDB', JSON.stringify(strategyGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < sportsGames.length; j++) {
    if (sportsGames[j].title.replaceAll("'","") === title) {
      currentGame = sportsGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      sportsGames[j] = currentGame;
      localStorage.setItem('sportsDB', JSON.stringify(sportsGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < racingGames.length; j++) {
    if (racingGames[j].title.replaceAll("'","") === title) {
      currentGame = racingGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      racingGames[j] = currentGame;
      localStorage.setItem('racingDB', JSON.stringify(racingGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < fightingGames.length; j++) {
    if (fightingGames[j].title.replaceAll("'","") === title) {
      currentGame = fightingGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      fightingGames[j] = currentGame;
      localStorage.setItem('fightingDB', JSON.stringify(fightingGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < simulatorGames.length; j++) {
    if (simulatorGames[j].title.replaceAll("'","") === title) {
      currentGame = simulatorGames[j];
      currentGame.playedRank = 0;

      newRecent.push(currentGame);

      simulatorGames[j] = currentGame;
      localStorage.setItem('simulatorDB', JSON.stringify(simulatorGames));
      arrangeRecent(inRecent(title));
      alert('Now launching game in a different window');
      window.location.reload();

      return;
    }
  }
  */
}

function arrangeRecent(maxIndex) {
  console.log('arrange');
  // newRecent.push('game');
  console.log(recent);
  /*
  console.log(recent[7]);
  console.log(recent[6]);
  console.log(recent[5]);
  console.log(recent[4]);
  console.log(recent[3]);
  console.log(recent[2]);
  console.log(recent[1]);
  console.log(recent[0]);
  */

  for (var i = 0; i < maxIndex; i++) {
    // console.log('enter');
    currGame = recent[i];

    currGame.playedRank += 1;

    if (currGame.playedRank > 10) {
      currGame.playedRank = -1;
    }

    console.log(currGame);

    newRecent.push(currGame);

    for (var j = 0; j < actionGames.length; j++) {
      if (
        actionGames[j].title.replaceAll("'","") === currGame.title.replaceAll("'","")
      ) {
        actionGames[j] = currGame;
        localStorage.setItem('actionDB', JSON.stringify(actionGames));
        break;
      }
    }

    for (var j = 0; j < adventureGames.length; j++) {
      if (
        adventureGames[j].title.replaceAll("'","") ===
        currGame.title.replaceAll("'","")
      ) {
        adventureGames[j] = currGame;
        localStorage.setItem('adventureDB', JSON.stringify(adventureGames));
        break;
      }
    }

    for (var j = 0; j < familyGames.length; j++) {
      if (
        familyGames[j].title.replaceAll("'","") === currGame.title.replaceAll("'","")
      ) {
        familyGames[j] = currGame;
        localStorage.setItem('familyDB', JSON.stringify(familyGames));
        break;
      }
    }

    for (var j = 0; j < shooterGames.length; j++) {
      if (
        shooterGames[j].title.replaceAll("'","") === currGame.title.replaceAll("'","")
      ) {
        shooterGames[j] = currGame;
        localStorage.setItem('shooterDB', JSON.stringify(shooterGames));
        break;
      }
    }

    for (var j = 0; j < rpgGames.length; j++) {
      if (
        rpgGames[j].title.replaceAll("'","") === currGame.title.replaceAll("'","")
      ) {
        rpgGames[j] = currGame;
        localStorage.setItem('rpgDB', JSON.stringify(rpgGames));
        break;
      }
    }

    for (var j = 0; j < strategyGames.length; j++) {
      if (
        strategyGames[j].title.replaceAll("'","") === currGame.title.replaceAll("'","")
      ) {
        strategyGames[j] = strategyGames;
        localStorage.setItem('strategyDB', JSON.stringify(strategyGames));
        break;
      }
    }

    for (var j = 0; j < sportsGames.length; j++) {
      if (
        sportsGames[j].title.replaceAll("'","") === currGame.title.replaceAll("'","")
      ) {
        sportsGames[j] = currGame;
        localStorage.setItem('sportsDB', JSON.stringify(sportsGames));
        break;
      }
    }

    for (var j = 0; j < racingGames.length; j++) {
      if (
        racingGames[j].title.replaceAll("'","") === currGame.title.replaceAll("'","")
      ) {
        racingGames[j] = currGame;
        localStorage.setItem('racingDB', JSON.stringify(racingGames));
        break;
      }
    }

    for (var j = 0; j < fightingGames.length; j++) {
      if (
        fightingGames[j].title.replaceAll("'","") ===
        currGame.title.replaceAll("'","")
      ) {
        fightingGames[j] = currGame;
        localStorage.setItem('fightingDB', JSON.stringify(fightingGames));
        break;
      }
    }

    for (var j = 0; j < simulatorGames.length; j++) {
      if (
        simulatorGames[j].title.replaceAll("'","") ===
        currGame.title.replaceAll("'","")
      ) {
        simulatorGames[j] = currGame;
        localStorage.setItem('simulatorDB', JSON.stringify(simulatorGames));
        break;
      }
    }
  }

  console.log(newRecent);
  newRecent = [];
}

function inRecent(title) {
  
  for (var i = 0; i < recent.length; i++) {
    if (recent[i].title.replaceAll("'","") === title) {
      return i;
    }
  }

  return recent.length;
  
}
