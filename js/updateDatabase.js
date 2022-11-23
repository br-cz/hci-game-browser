var actionGames = JSON.parse(localStorage.getItem('actionDB'));
var adventureGames = JSON.parse(localStorage.getItem('adventureDB'));
var familyGames = JSON.parse(localStorage.getItem('familyDB'));
var shooterGames = JSON.parse(localStorage.getItem('shooterDB'));
var rpgGames = JSON.parse(localStorage.getItem('rpgDB'));
var strategyGames = JSON.parse(localStorage.getItem('strategyDB'));
var sportsGames = JSON.parse(localStorage.getItem('sportsDB'));
var racingGames = JSON.parse(localStorage.getItem('racingDB'));
var fightingGames = JSON.parse(localStorage.getItem('fightingDB'));
var simulatorGames = JSON.parse(localStorage.getItem('simulatorDB'));

const allGamesUpdate = [
  actionGames,
  adventureGames,
  familyGames,
  shooterGames,
  rpgGames,
  strategyGames,
  sportsGames,
  racingGames,
  fightingGames,
  simulatorGames,
];

const categoryNames = [
    'actionDB',
    'adventureDB',
    'familyDB',
    'shooterDB',
    'rpgDB',
    'strategyDB',
    'sportsDB',
    'racingDB',
    'fightingDB',
    'simulatorDB',
];

//Give the title of a game, the name of the value you want to change, and what you want that value to be, it'll then update that for the localstorage
function changeValue(gameTitle, valueName, newValue)
{
    for(let i = 0; i < allGamesUpdate.length; i++)
    {
        
        let valueChanged = false;
        for(let j = 0; j < allGamesUpdate[i].length; j++)
        {
            titleComparison = allGamesUpdate[i][j].title.replaceAll("'","")
            if(gameTitle.replaceAll("'","").localeCompare(titleComparison) == 0)
            {
                allGamesUpdate[i][j][valueName] = newValue;
                valueChanged = true;
            }
        }
        if(valueChanged)
        {
            //console.log("Before updating: ");
            //console.log(JSON.parse(localStorage.getItem(categoryNames[i])));
            localStorage.setItem(categoryNames[i], JSON.stringify(allGamesUpdate[i]));

            //console.log("After updating: ");
            //console.log(JSON.parse(localStorage.getItem(categoryNames[i])));
        }
    }
}

function findGame(gameTitle)
{
    for(let i = 0; i < allGamesUpdate.length; i++)
    {
        for(let j = 0; j < allGamesUpdate[i].length; j++)
        {
            titleComparison = allGamesUpdate[i][j].title.replaceAll("'","")
            if(gameTitle.replaceAll("'","").localeCompare(titleComparison) == 0)
            {
                //console.log(allGamesUpdate[i][j]);
                return allGamesUpdate[i][j];
            }
        }
    }
}

//for testing html onclick
function testClick(test)
{
    console.log(test);
}