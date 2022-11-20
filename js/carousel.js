var multipleCardCarousel = document.querySelector(
  '#carouselExampleControlsOne'
);
if (window.matchMedia('(min-width: 768px)').matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var cardWidthOne = $('.carousel-item').width();
  var carouselWidthOne =
    ($('#carouselExampleControlsOne .carousel-inner')[0].childElementCount -
      4) *
    cardWidthOne;

  var scrollPositionOne = 0;
  const movement = 600;

  // console.log('card width one', cardWidthOne);
  // console.log('carousel width one', carouselWidthOne);
  // console.log(carouselWidthOne - cardWidthOne);

  // console.log($('#carouselExampleControlsOne .carousel-inner')[0]);

  $('#carouselExampleControlsOne .carousel-control-next').on(
    'click',
    function () {
      if (scrollPositionOne < carouselWidthOne) {
        scrollPositionOne += cardWidthOne;
        $('#carouselExampleControlsOne .carousel-inner').animate(
          { scrollLeft: scrollPositionOne },
          movement
        );
      } else {
        scrollPositionOne = 0;
        $('#carouselExampleControlsOne .carousel-inner').animate(
          { scrollLeft: scrollPositionOne },
          movement
        );
      }
      console.log('scroll poss:', scrollPositionOne);
      console.log('cond', carouselWidthOne);
    }
  );
  $('#carouselExampleControlsOne .carousel-control-prev').on(
    'click',
    function () {
      if (scrollPositionOne > 0) {
        scrollPositionOne -= cardWidthOne;
        $('#carouselExampleControlsOne .carousel-inner').animate(
          { scrollLeft: scrollPositionOne },
          movement
        );
      }
    }
  );
} else {
  $(multipleCardCarousel).addClass('slide');
}
