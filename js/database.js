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
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: 1,
      pinned: false,
    },
    {
      title: 'Battlerite',
      publisher: 'Stunlock Studios',
      genre: 'Action',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 73,
      price: 85,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
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
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: 2,
      pinned: false,
    },
    {
      title: 'Dead by Daylight',
      publisher: 'Starbreeze Studios',
      genre: 'Action',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 80,
      price: 70,
      sale: 25,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Dishonored®: Death of the Outsider™',
      publisher: 'Bethesda Softworks',
      genre: 'Action',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 98,
      price: 40,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const adventureDB = [
    {
      title: 'EARTH DEFENSE FORCE 5',
      publisher: 'D3 PUBLISHER',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 38,
      price: 60,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Factorio',
      publisher: 'Wube Software',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 58,
      price: 40,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Friday the 13th: The Game',
      publisher: 'Gun Media',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 92,
      price: 40,
      sale: 50,
      owned: 'TRUE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'GUILTY GEAR Xrd -REVELATOR-',
      publisher: 'Arc System Works',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 57,
      price: 75,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'HITMAN™',
      publisher: 'IO Interactive A/S',
      genre: 'Adventure',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 70,
      price: 75,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const familyDB = [
    {
      title: 'HITMAN™2',
      publisher: 'Warner Bros Interactive Entertainment',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 95,
      price: 60,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Injustice™ 2',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 64,
      price: 80,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Killing Floor 2',
      publisher: 'Tripwire Interactive',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 57,
      price: 80,
      sale: 50,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Mortal Kombat 11',
      publisher: 'Warner Bros Interactive Entertainment',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 78,
      price: 80,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Portal™',
      publisher: 'Valve',
      genre: 'Family',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 52,
      price: 50,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const shooterDB = [
    {
      title: 'RAD',
      publisher: 'BANDAI NAMCO Entertainment America Inc.',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 53,
      price: 65,
      sale: 50,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Star Wars: Battlefront 2 (Classic, 2005)',
      publisher: 'Disney Interactive',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 50,
      price: 30,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'The Surge 2',
      publisher: 'Focus Home Interactive',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 67,
      price: 50,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'WARRIORS OROCHI 4',
      publisher: 'KOEI TECMO GAMES CO., LTD.',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 63,
      price: 50,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Assassin’s Creed® III Remastered',
      publisher: 'Ubisoft',
      genre: 'Shooter',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 31,
      price: 50,
      sale: 50,
      owned: 'TRUE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const rpgDB = [
    {
      title: "Black Future '88",
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 50,
      price: 45,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Assassin’s Creed® IV Black Flag™',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 78,
      price: 80,
      sale: 75,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Assassin’s Creed® Odyssey',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 96,
      price: 50,
      sale: 0,
      owned: 'TRUE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Assassin’s Creed® Origins',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 100,
      price: 75,
      sale: 50,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Assassin’s Creed® Origins',
      publisher: 'Ubisoft',
      genre: 'RPG',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 56,
      price: 70,
      sale: 0,
      owned: 'TRUE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const strategyDB = [
    {
      title: 'Assassin’s Creed® Unity',
      publisher: 'Ubisoft',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 96,
      price: 35,
      sale: 25,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Assassin’s Creed®: Syndicate',
      publisher: 'Ubisoft',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 64,
      price: 65,
      sale: 75,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Chess',
      publisher: 'Ubisoft',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 37,
      price: 75,
      sale: 25,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Batman™: Arkham Asylum Game of the Year Edition',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 44,
      price: 45,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Batman™: Arkham City - Game of the Year Edition',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Strategy',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 75,
      price: 90,
      sale: 50,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const sportsDB = [
    {
      title: 'Batman™: Arkham Knight',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 33,
      price: 35,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Batman™: Arkham Origins',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 81,
      price: 55,
      sale: 50,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'For Honor™',
      publisher: 'Ubisoft',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 52,
      price: 30,
      sale: 0,
      owned: 'TRUE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'For Honor™',
      publisher: 'Ubisoft',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 33,
      price: 70,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Generation Zero',
      publisher: 'Avalanche Studios Stockholm',
      genre: 'Sports',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 77,
      price: 30,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const racingDB = [
    {
      title: 'Mad Max',
      publisher: 'Warner Bros. Interactive Entertainment',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 70,
      price: 60,
      sale: 25,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Mafia III',
      publisher: '2K Games',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 81,
      price: 50,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Sekiro™: Shadows Die Twice',
      publisher: 'Activision, Inc',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 95,
      price: 65,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Shenmue III',
      publisher: 'Deep Silver',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 54,
      price: 75,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Sniper Elite 3',
      publisher: 'Rebellion',
      genre: 'Racing',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 67,
      price: 70,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const fightingDB = [
    {
      title: 'Sniper Elite 4',
      publisher: 'Rebellion',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 41,
      price: 85,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Sonic Forces',
      publisher: 'SEGA',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 35,
      price: 65,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Strange Brigade',
      publisher: 'Rebellion',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 57,
      price: 45,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'The Evil Within 2',
      publisher: 'Bethesda Softworks',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 39,
      price: 55,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Tom Clancy’s Ghost Recon Breakpoint',
      publisher: 'Ubisoft',
      genre: 'Fighting',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 86,
      price: 70,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  const simulatorDB = [
    {
      title: "Tom Clancy's Ghost Recon® Wildlands",
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 94,
      price: 75,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: "Tom Clancy's Ghost Recon® Wildlands",
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 57,
      price: 55,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Watch_Dogs® 2',
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 41,
      price: 90,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Watch_Dogs™',
      publisher: 'Ubisoft',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 82,
      price: 75,
      sale: 0,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
    {
      title: 'Clicker Heroes 2',
      publisher: 'Playsaurus',
      genre: 'Simulator',
      description:
        'The udder is a single mass hanging beneath the animal, consisting of pairs of mammary glands with protruding teats. In cattle and camels, there are normally two pairs, in sheep, goats and deer, there is one pair, and in some animals, there are many pairs.',
      image: './images/image.jpg',
      ratings: 71,
      price: 60,
      sale: 50,
      owned: 'FALSE',
      wishlist: false,
      cart: false,
      playedRank: -1,
      pinned: false,
    },
  ];

  //Creates an "xDB" item in localStorage containing the games of x genre.
  //We utilize localStorage because this allows the team global access and control to the game database
  //in a simple and easy manner.
  localStorage.setItem('actionDB', JSON.stringify(actionDB));
  localStorage.setItem('adventureDB', JSON.stringify(adventureDB));
  localStorage.setItem('familyDB', JSON.stringify(familyDB));
  localStorage.setItem('shooterDB', JSON.stringify(shooterDB));
  localStorage.setItem('rpgDB', JSON.stringify(rpgDB));
  localStorage.setItem('strategyDB', JSON.stringify(strategyDB));
  localStorage.setItem('sportsDB', JSON.stringify(sportsDB));
  localStorage.setItem('racingDB', JSON.stringify(racingDB));
  localStorage.setItem('fightingDB', JSON.stringify(fightingDB));
  localStorage.setItem('simulatorDB', JSON.stringify(simulatorDB));
}
setDb();
