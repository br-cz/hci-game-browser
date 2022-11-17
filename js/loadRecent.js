const recent = [];

var actionGames = JSON.parse(localStorage.getItem('actionDB'));

for (var i = 0; i < actionGames.length; i++) {
  rank = actionGames[i].playedRank;
  if (rank != -1) {
    recent[rank] = actionGames[i];
  }
}

for (var i = 0; i < recent.length; i++) {
  if (recent[i]) {
    title = recent[i].title;
    image = recent[i].image;
    const carouselItem = '<div class="carousel-item">';
    const card = '<div class="card">';
    const imgWrapper = '<div class="img-wrapper">';
    const imgSrc = '<img src="' + image + '" class="d-block w-100"/>';
    const divEnd = '</div>';
    const cardBody = '<div class="card-body">';
    const cardTitle = '<h5 class="card-title">' + title + '</h5>';
    const aBtn = '<a href="#" class="btn btn-primary">';
    const iClass = '<i class="fa-solid fa-play"></i>';
    const aEND = '</a>';
    document.querySelector('.carousel-inner').innerHTML +=
      carouselItem +
      card +
      imgWrapper +
      imgSrc +
      divEnd +
      cardBody +
      cardTitle +
      aBtn +
      iClass +
      aEND +
      divEnd +
      divEnd +
      divEnd;
    // document.querySelector('.carousel-inner').innerHTML += 'poopoo';
  }
}
