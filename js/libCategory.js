var libModal = document.getElementById('lib-page');
var libTitle = document.getElementById('lib-title-text');
var libClose = document.getElementById('lib-close-btn');
var libOpen = document.getElementById('lib-open-btn');
console.log(libTitle.innerHTML);
function openLibList(categoryName)
{
    loadLibList(categoryName);
    libModal.className = 'lib-modal';
    setTimeout(function () {
            libModal.className = 'lib-modal lib-show';
    }, 5);
}

function closeLibList()
{
    //console.log(libModal.className);
    libModal.className = 'lib-modal is-hidden is-visuallyHidden';
    //console.log(libModal.className);
}

function loadLibList(categoryName)
{   
    var categoryItems = [];
    if(categoryName === 'all')
    {
        libTitle.innerHTML = "All Games";
        //console.log(libTitle.innerHTML);
        //document.getElementById('.lib-title-text').innerHTML = "All Games";
        for(let i = 0; i < games.length; i++)
        {
            //console.log(libTitle.innerHTML);
            //console.log(games[i]);
            for(let j = 0; j < games[i].length; j++)
            {
                if(games[i][j].owned)
                {
                    categoryItems.push(games[i][j]);
                }
            }
        }
    }
    else if(categoryName === 'action')
    {
        libTitle.innerHTML = "Action Games";
        for(let i = 0; i < games[0].length; i++)
        {
            if(games[0][i].owned)
            {
                categoryItems.push(games[0][i]);
            }
        }
    }
    else if(categoryName === 'adventure')
    {
        libTitle.innerHTML = "Adventure Games";
        for(let i = 0; i < games[1].length; i++)
        {
            if(games[1][i].owned)
            {
                categoryItems.push(games[1][i]);
            }
        }
    }
    else if(categoryName === 'family')
    {
        libTitle.innerHTML = "Family Games";
        for(let i = 0; i < games[2].length; i++)
        {
            if(games[2][i].owned)
            {
                categoryItems.push(games[2][i]);
            }
        }
    }
    else if(categoryName === 'shooter')
    {
        libTitle.innerHTML = "Shooter Games";
        for(let i = 0; i < games[3].length; i++)
        {
            if(games[3][i].owned)
            {
                categoryItems.push(games[3][i]);
            }
        }
    }
    else if(categoryName === 'rpg')
    {
        libTitle.innerHTML = "RPG Games";
        for(let i = 0; i < games[4].length; i++)
        {
            if(games[4][i].owned)
            {
                categoryItems.push(games[4][i]);
            }
        }
    }
    else if(categoryName === 'strategy')
    {
        libTitle.innerHTML = "Strategy Games";
        for(let i = 0; i < games[5].length; i++)
        {
            if(games[5][i].owned)
            {
                categoryItems.push(games[5][i]);
            }
        }
    }
    else if(categoryName === 'sports')
    {
        libTitle.innerHTML = "Sports Games";
        for(let i = 0; i < games[6].length; i++)
        {
            if(games[6][i].owned)
            {
                categoryItems.push(games[6][i]);
            }
        }
    }
    else if(categoryName === 'racing')
    {
        libTitle.innerHTML = "Racing Games";
        for(let i = 0; i < games[7].length; i++)
        {
            if(games[7][i].owned)
            {
                categoryItems.push(games[7][i]);
            }
        }
    }
    else if(categoryName === 'fighting')
    {
        libTitle.innerHTML = "Fighting Games";
        for(let i = 0; i < games[8].length; i++)
        {
            if(games[8][i].owned)
            {
                categoryItems.push(games[8][i]);
            }
        }
    }
    else if(categoryName === 'simulator')
    {
        libTitle.innerHTML = "Simulator Games";
        for(let i = 0; i < games[9].length; i++)
        {
            if(games[9][i].owned)
            {
                categoryItems.push(games[9][i]);
            }
        }
    }
    //console.log(categoryItems);
    document.querySelector('.lib-items').innerHTML = "";
    for(let i = 0; i < categoryItems.length; i++)
    {   
        let passTitle = '\'' + categoryItems[i].title + '\'';
        const libItem = '<div class="lib-item" onclick="openBoughtGame(' + passTitle + ')">';
        const libItemTitle = '<div class="lib-item-title">'+ categoryItems[i].title + '</div>'
        const libItemPlay = '<div class="lib-item-play">';
        const playButton = '<a class="btn btn-primary" onclick="playGame(' + passTitle + ')"><i class="fa-solid fa-play"></i></a>';
        const divEnd = '</div>';
        var libLine = '<div class="lib-line-wrapper"><div class="lib-line"></div></div>'
        if(i == categoryItems.length - 1)
        {
            libLine = '';
        }
        document.querySelector('.lib-items').innerHTML += libItem +
                                                          libItemTitle +
                                                          libItemPlay +
                                                          playButton +
                                                          divEnd +
                                                          divEnd +
                                                          libLine;
    }
    //console.log(document.querySelector('.lib-items').innerHTML);
    //document.querySelector('.lib-items').innerHTML = "";
    //document.querySelector('.lib-items').innerHTML = "BLEH";
}