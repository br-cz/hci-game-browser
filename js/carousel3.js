var multipleCardCarousel = document.querySelector(
  '#carouselExampleControlsThree'
);
if (window.matchMedia('(min-width: 768px)').matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  var carouselWidthThree = $('#carouselExampleControlsThree .carousel-inner')[0]
    .scrollWidth;
  //   var cardWidth = $('.carousel-item').width();
  var cardWidth = $('.card').width();
  var scrollPositionThree = 0;
  const movement = 600;

  // console.log(cardWidth);
  // console.log(carouselWidthThree);

  $('#carouselExampleControlsThree .carousel-control-next').on(
    'click',
    function () {
      if (scrollPositionThree < carouselWidthTwo - cardWidth * 5) {
        scrollPositionThree += cardWidth * 1.04;
        $('#carouselExampleControlsThree .carousel-inner').animate(
          { scrollLeft: scrollPositionThree },
          movement
        );
      } else {
        scrollPositionThree = 0;
        $('#carouselExampleControlsThree .carousel-inner').animate(
          { scrollLeft: scrollPositionThree },
          movement
        );
      }
      // console.log('scroll poss:', scrollPositionThree);
      // console.log('cond', carouselWidthThree - cardWidth * 5);
    }
  );
  $('#carouselExampleControlsThree .carousel-control-prev').on(
    'click',
    function () {
      if (scrollPositionThree > 0) {
        scrollPositionThree -= cardWidth;
        $('#carouselExampleControlsThree .carousel-inner').animate(
          { scrollLeft: scrollPositionThree },
          movement
        );
      }
    }
  );
} else {
  $(multipleCardCarousel).addClass('slide');
}
