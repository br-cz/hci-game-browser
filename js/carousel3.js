var multipleCardCarousel = document.querySelector(
  '#carouselExampleControlsThree'
);
if (window.matchMedia('(min-width: 768px)').matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  var cardWidthThree = $('.carousel-item').width();
  // var cardWidthTwo = $('.card').width();
  var carouselWidthThree =
    ($('#carouselExampleControlsTwo .carousel-inner')[0].childElementCount -
      4) *
    cardWidthThree;
  // var carouselWidthTwo = $('#carouselExampleControlsTwo .carousel-inner')[0]
  //   .scrollWidth;
  var scrollPositionThree = 0;
  const movement = 600;

  // console.log(cardWidthThree);
  // console.log(carouselWidthThree);

  $('#carouselExampleControlsThree .carousel-control-next').on(
    'click',
    function () {
      if (scrollPositionThree < carouselWidthTwo + cardWidthThree) {
        scrollPositionThree += cardWidthThree * 1.04;
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
      // console.log('cond', carouselWidthThree - cardWidthThree * 5);
    }
  );
  $('#carouselExampleControlsThree .carousel-control-prev').on(
    'click',
    function () {
      if (scrollPositionThree > 0) {
        scrollPositionThree -= cardWidthThree;
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
