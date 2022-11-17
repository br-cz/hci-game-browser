const pinned = [];

var actionGames = JSON.parse(localStorage.getItem('actionDB'));

for (var i = 0; i < actionGames.length; i++) {
  if (actionGames[i].isPinned) {
    pinned.push(actionGames[i]);
  }
}

for (var i = 0; i < pinned.length; i++) {
  if (pinned[i]) {
    title = pinned[i].title;
    image = pinned[i].image;
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
    document.querySelector(
      '#carouselExampleControlsTwo .carousel-inner'
    ).innerHTML +=
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

    // EXAMPLE LAYOUT WE CREATE ABOVE
    //   <div class="carousel-item">
    //   <div class="card">
    //     <div class="img-wrapper">
    //       <img src="./images/bg-1.jpg" class="d-block w-100" alt="..." />
    //     </div>
    //     <div class="card-body">
    //       <h5 class="card-title">Game 3</h5>
    //       <a href="#" class="btn btn-primary"
    //         ><i class="fa-solid fa-play"></i
    //       ></a>
    //     </div>
    //   </div>
    // </div>
  }
}
