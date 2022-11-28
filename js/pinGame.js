function pinGame(title) {
  //pin or unpin selected game
  var currentGame = 10;

  for (var j = 0; j < actionGames.length; j++) {
    if (actionGames[j].title.replaceAll("'","") === title) {
      currentGame = actionGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      actionGames[j] = currentGame;
      localStorage.setItem('actionDB', JSON.stringify(actionGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < adventureGames.length; j++) {
    if (adventureGames[j].title.replaceAll("'","") === title) {
      currentGame = adventureGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      adventureGames[j] = currentGame;
      localStorage.setItem('adventureDB', JSON.stringify(adventureGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < familyGames.length; j++) {
    if (familyGames[j].title.replaceAll("'","") === title) {
      currentGame = familyGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      familyGames[j] = currentGame;
      localStorage.setItem('familyDB', JSON.stringify(familyGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < shooterGames.length; j++) {
    if (shooterGames[j].title.replaceAll("'","") === title) {
      currentGame = shooterGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      shooterGames[j] = currentGame;
      localStorage.setItem('shooterDB', JSON.stringify(shooterGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < rpgGames.length; j++) {
    if (rpgGames[j].title.replaceAll("'","") === title) {
      currentGame = rpgGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      rpgGames[j] = currentGame;
      localStorage.setItem('rpgDB', JSON.stringify(rpgGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < strategyGames.length; j++) {
    if (strategyGames[j].title.replaceAll("'","") === title) {
      currentGame = strategyGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      strategyGames[j] = currentGame;
      localStorage.setItem('strategyDB', JSON.stringify(strategyGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < sportsGames.length; j++) {
    if (sportsGames[j].title.replaceAll("'","") === title) {
      currentGame = sportsGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      sportsGames[j] = currentGame;
      localStorage.setItem('sportsDB', JSON.stringify(sportsGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < racingGames.length; j++) {
    if (racingGames[j].title.replaceAll("'","") === title) {
      currentGame = racingGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      racingGames[j] = currentGame;
      localStorage.setItem('racingDB', JSON.stringify(racingGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < fightingGames.length; j++) {
    if (fightingGames[j].title.replaceAll("'","") === title) {
      currentGame = fightingGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      fightingGames[j] = currentGame;
      localStorage.setItem('fightingDB', JSON.stringify(fightingGames));
      window.location.reload();

      return;
    }
  }

  for (var j = 0; j < simulatorGames.length; j++) {
    if (simulatorGames[j].title.replaceAll("'","") === title) {
      currentGame = simulatorGames[j];
      currentGame.isPinned = !currentGame.isPinned;
      simulatorGames[j] = currentGame;
      localStorage.setItem('simulatorDB', JSON.stringify(simulatorGames));
      window.location.reload();

      return;
    }
  }
}
