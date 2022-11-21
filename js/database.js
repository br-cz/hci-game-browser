function setDb() {
  const actionDB = [
    {
      title: 'A Plague Tale: Innocence',
      publisher: 'Focus Home Interactive',
      genre: 'Action',
      description:
        'The udder is a single thicc mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/plaguetale.jpeg',
      ratings: 69,
      price: 80,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Battlerite',
      publisher: 'Stunlock Studios',
      genre: 'Action',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/battlerite.png',
      ratings: 73,
      price: 85,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: 1,
      isPinned: false,
    },
    {
      title: 'BlazBlue: Cross Tag Battle',
      publisher: 'Arc System Works',
      genre: 'Action',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/blazblue.jpg',
      ratings: 55,
      price: 90,
      sale: 75,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: 2,
      isPinned: false,
    },
    {
      title: 'Dead by Daylight',
      publisher: 'Starbreeze Studios',
      genre: 'Action',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/deadbydaylight.jpeg',
      ratings: 80,
      price: 70,
      sale: 25,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Dishonored®: Death of the Outsider™',
      publisher: 'Bethesda Softworks',
      genre: 'Action',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/dishonoreddeathoutsider.jpg',
      ratings: 98,
      price: 40,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const adventureDB = [
    {
      title: 'EARTH DEFENSE FORCE 5',
      publisher: 'D3 PUBLISHER',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/earthdefence5.jpg',
      ratings: 38,
      price: 60,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Factorio',
      publisher: 'Wube Software',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/factorio.jpg',
      ratings: 58,
      price: 40,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Friday the 13th: The Game',
      publisher: 'Gun Media',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/friday13thgame.jpeg',
      ratings: 92,
      price: 40,
      sale: 50,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: 3,
      isPinned: true,
    },
    {
      title: 'GUILTY GEAR Xrd -REVELATOR-',
      publisher: 'Arc System Works',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/guiltygearxrd.jpg',
      ratings: 57,
      price: 75,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: 4,
      isPinned: false,
    },
    {
      title: 'HITMAN™',
      publisher: 'IO Interactive A/S',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/hitman.jpg',
      ratings: 70,
      price: 75,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const familyDB = [
    {
      title: 'HITMAN™2',
      publisher: 'Warner Bros Interactive Entertainment',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/hitman2.jpg',
      ratings: 95,
      price: 60,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Injustice™ 2',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/injustice2.jpg',
      ratings: 64,
      price: 80,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Killing Floor 2',
      publisher: 'Tripwire Interactive',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/killingfloor2.jpg',
      ratings: 57,
      price: 80,
      sale: 50,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Mortal Kombat 11',
      publisher: 'Warner Bros Interactive Entertainment',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/mortalkombat11.jpg',
      ratings: 78,
      price: 80,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Portal™',
      publisher: 'Valve',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/portal.jpg',
      ratings: 52,
      price: 50,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: true,
    },
  ];

  const shooterDB = [
    {
      title: 'RAD',
      publisher: 'BANDAI NAMCO Entertainment America Inc.',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/rad.jpg',
      ratings: 53,
      price: 65,
      sale: 50,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Star Wars: Battlefront 2 (Classic, 2005)',
      publisher: 'Disney Interactive',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/starwarsbf2.png',
      ratings: 50,
      price: 30,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'The Surge 2',
      publisher: 'Focus Home Interactive',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/surge2.jpg',
      ratings: 67,
      price: 50,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: true,
    },
    {
      title: 'WARRIORS OROCHI 4',
      publisher: 'KOEI TECMO GAMES CO., LTD.',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/warriorsorochi4.png',
      ratings: 63,
      price: 50,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Assassin’s Creed® III Remastered',
      publisher: 'Ubisoft',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/assassinscreed3.jpg',
      ratings: 31,
      price: 50,
      sale: 50,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const rpgDB = [
    {
      title: "Black Future '88",
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/blackfuture88.jpg',
      ratings: 50,
      price: 45,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Assassin’s Creed® IV Black Flag™',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/assassinscreed4.jpg',
      ratings: 78,
      price: 80,
      sale: 75,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Assassin’s Creed® Odyssey',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/assassinscreedodyssey.jpg',
      ratings: 96,
      price: 50,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Assassin’s Creed® Origins',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/assassinscreedorigins1.jpg',
      ratings: 100,
      price: 75,
      sale: 50,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Assassin’s Creed® Origins',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/assassinscreedorigins2.jpg',
      ratings: 56,
      price: 70,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const strategyDB = [
    {
      title: 'Assassin’s Creed® Unity',
      publisher: 'Ubisoft',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/assassinscreedunity.jpg',
      ratings: 96,
      price: 35,
      sale: 25,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Assassin’s Creed®: Syndicate',
      publisher: 'Ubisoft',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/assassinscreedsyndicate.jpg',
      ratings: 64,
      price: 65,
      sale: 75,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Chess',
      publisher: 'Ubisoft',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/chess.jpg',
      ratings: 37,
      price: 75,
      sale: 25,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Batman™: Arkham Asylum Game of the Year Edition',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/batmanarkhamasylum.jpg',
      ratings: 44,
      price: 45,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Batman™: Arkham City - Game of the Year Edition',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/batmanarkhamcity.jpg',
      ratings: 75,
      price: 90,
      sale: 50,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const sportsDB = [
    {
      title: 'Batman™: Arkham Knight',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/batmanarkhamknight.jpg',
      ratings: 33,
      price: 35,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Batman™: Arkham Origins',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/batmanarkhamorigins.jpg',
      ratings: 81,
      price: 55,
      sale: 50,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'For Honor™',
      publisher: 'Ubisoft',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/forhonor1.jpg',
      ratings: 52,
      price: 30,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'For Honor™',
      publisher: 'Ubisoft',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/forhonor2.jpg',
      ratings: 33,
      price: 70,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Generation Zero',
      publisher: 'Avalanche Studios Stockholm',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/generationzero.jpg',
      ratings: 77,
      price: 30,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const racingDB = [
    {
      title: 'Mad Max',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/madmax.jpg',
      ratings: 70,
      price: 60,
      sale: 25,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: 5,
      isPinned: false,
    },
    {
      title: 'Mafia III',
      publisher: '2K Games',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/mafia3.jpg',
      ratings: 81,
      price: 50,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Sekiro™: Shadows Die Twice',
      publisher: 'Activision, Inc',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/sekiro.jpg',
      ratings: 95,
      price: 65,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Shenmue III',
      publisher: 'Deep Silver',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/shenmue3.jpg',
      ratings: 54,
      price: 75,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Sniper Elite 3',
      publisher: 'Rebellion',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/sniperelite3.jpg',
      ratings: 67,
      price: 70,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const fightingDB = [
    {
      title: 'Sniper Elite 4',
      publisher: 'Rebellion',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/sniperelite4.jpg',
      ratings: 41,
      price: 85,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: 6,
      isPinned: false,
    },
    {
      title: 'Sonic Forces',
      publisher: 'SEGA',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/sonicforces.jpg',
      ratings: 35,
      price: 65,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Strange Brigade',
      publisher: 'Rebellion',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/strangebrigade.jpg',
      ratings: 57,
      price: 45,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'The Evil Within 2',
      publisher: 'Bethesda Softworks',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/evilwithin2.jpg',
      ratings: 39,
      price: 55,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Tom Clancy’s Ghost Recon Breakpoint',
      publisher: 'Ubisoft',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/ghostreconbreakpoint.jpg',
      ratings: 86,
      price: 70,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];

  const simulatorDB = [
    {
      title: "Tom Clancy's Ghost Recon® Wildlands",
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/ghostreconwildlands1.jpg',
      ratings: 94,
      price: 75,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: 7,
      isPinned: false,
    },
    {
      title: "Tom Clancy's Ghost Recon® Wildlands",
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/ghostreconwildlands2.jpg',
      ratings: 57,
      price: 55,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Watch_Dogs® 2',
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/watchdogs2.jpg',
      ratings: 41,
      price: 90,
      sale: 0,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: 8,
      isPinned: false,
    },
    {
      title: 'Watch_Dogs™',
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/watchdogs.jpg',
      ratings: 82,
      price: 75,
      sale: 0,
      owned: true,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
    {
      title: 'Clicker Heroes 2',
      publisher: 'Playsaurus',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/clickerheroes2.jpg',
      ratings: 71,
      price: 60,
      sale: 50,
      owned: false,
      wishlist: false,
      cart: false,
      playedRank: -1,
      isPinned: false,
    },
  ];
  //Creates an "xDB" item in localStorage containing the games of x genre.
  //We utilize localStorage because this allows the team global access and control to the game database
  //in a simple and easy manner.
  if (JSON.parse(localStorage.getItem('actionDB')) == null) {
    localStorage.setItem('actionDB', JSON.stringify(actionDB));
  }
  if (JSON.parse(localStorage.getItem('adventureDB')) == null) {
    localStorage.setItem('adventureDB', JSON.stringify(adventureDB));
  }
  if (JSON.parse(localStorage.getItem('familyDB')) == null) {
    localStorage.setItem('familyDB', JSON.stringify(familyDB));
  }
  if (JSON.parse(localStorage.getItem('shooterDB')) == null) {
    localStorage.setItem('shooterDB', JSON.stringify(shooterDB));
  }
  if (JSON.parse(localStorage.getItem('rpgDB')) == null) {
    localStorage.setItem('rpgDB', JSON.stringify(rpgDB));
  }
  if (JSON.parse(localStorage.getItem('strategyDB')) == null) {
    localStorage.setItem('strategyDB', JSON.stringify(strategyDB));
  }
  if (JSON.parse(localStorage.getItem('sportsDB')) == null) {
    localStorage.setItem('sportsDB', JSON.stringify(sportsDB));
  }
  if (JSON.parse(localStorage.getItem('racingDB')) == null) {
    localStorage.setItem('racingDB', JSON.stringify(racingDB));
  }
  if (JSON.parse(localStorage.getItem('fightingDB')) == null) {
    localStorage.setItem('fightingDB', JSON.stringify(fightingDB));
  }
  if (JSON.parse(localStorage.getItem('simulatorDB')) == null) {
    localStorage.setItem('simulatorDB', JSON.stringify(simulatorDB));
  }
}
//clearDB(); //comment back in and refresh the library page to restart database
setDb();

function clearDB() {
  localStorage.setItem('actionDB', null);
  localStorage.setItem('adventureDB', null);
  localStorage.setItem('familyDB', null);
  localStorage.setItem('shooterDB', null);
  localStorage.setItem('rpgDB', null);
  localStorage.setItem('strategyDB', null);
  localStorage.setItem('sportsDB', null);
  localStorage.setItem('racingDB', null);
  localStorage.setItem('fightingDB', null);
  localStorage.setItem('simulatorDB', null);
}
