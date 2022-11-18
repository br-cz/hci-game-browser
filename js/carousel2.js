var multipleCardCarousel = document.querySelector(
  '#carouselExampleControlsTwo'
);
if (window.matchMedia('(min-width: 768px)').matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  var carouselWidthTwo = $('#carouselExampleControlsTwo .carousel-inner')[0]
    .scrollWidth;
  //   var cardWidth = $('.carousel-item').width();
  var cardWidth = $('.card').width();
  var scrollPositionTwo = 0;
  const movement = 600;

  // console.log(cardWidth);
  // console.log(carouselWidthTwo);

  $('#carouselExampleControlsTwo .carousel-control-next').on(
    'click',
    function () {
      if (scrollPositionTwo < carouselWidthTwo - cardWidth * 5) {
        scrollPositionTwo += cardWidth * 1.04;
        $('#carouselExampleControlsTwo .carousel-inner').animate(
          { scrollLeft: scrollPositionTwo },
          movement
        );
      } else {
        scrollPositionTwo = 0;
        $('#carouselExampleControlsTwo .carousel-inner').animate(
          { scrollLeft: scrollPositionTwo },
          movement
        );
      }
      // console.log('scroll poss:', scrollPositionTwo);
      // console.log('cond', carouselWidthTwo - cardWidth * 5);
    }
  );
  $('#carouselExampleControlsTwo .carousel-control-prev').on(
    'click',
    function () {
      if (scrollPositionTwo > 0) {
        scrollPositionTwo -= cardWidth;
        $('#carouselExampleControlsTwo .carousel-inner').animate(
          { scrollLeft: scrollPositionTwo },
          movement
        );
      }
    }
  );
} else {
  $(multipleCardCarousel).addClass('slide');
}
