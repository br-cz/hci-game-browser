var multipleCardCarousel = document.querySelector(
  '#carouselExampleControlsTwo'
);
if (window.matchMedia('(min-width: 768px)').matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  var cardWidthTwo = $('.carousel-item').width();
  // var cardWidthTwo = $('.card').width();
  var carouselWidthTwo =
    ($('#carouselExampleControlsTwo .carousel-inner')[0].childElementCount -
      4) *
    cardWidthTwo;
  // var carouselWidthTwo = $('#carouselExampleControlsTwo .carousel-inner')[0]
  //   .scrollWidth;
  var scrollPositionTwo = 0;
  const movement = 600;

  console.log('card width two', cardWidthTwo);
  console.log('carousel width two', carouselWidthTwo);

  $('#carouselExampleControlsTwo .carousel-control-next').on(
    'click',
    function () {
      if (scrollPositionTwo < carouselWidthTwo) {
        scrollPositionTwo += cardWidthTwo;
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
      console.log('scroll poss:', scrollPositionTwo);
      console.log('cond', carouselWidthTwo);
    }
  );
  $('#carouselExampleControlsTwo .carousel-control-prev').on(
    'click',
    function () {
      if (scrollPositionTwo > 0) {
        scrollPositionTwo -= cardWidthTwo;
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
