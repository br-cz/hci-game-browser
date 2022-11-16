var multipleCardCarousel = document.querySelector(
  '#carouselExampleControlsOne'
);
if (window.matchMedia('(min-width: 768px)').matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  var carouselWidthOne = $('.carousel-inner')[0].scrollWidth;
  //   var cardWidth = $('.carousel-item').width();
  var cardWidth = $('.card').width();
  var scrollPositionOne = 0;
  const movement = 600;

  // console.log(cardWidth);
  // console.log(carouselWidthOne);

  $('#carouselExampleControlsOne .carousel-control-next').on(
    'click',
    function () {
      if (scrollPositionOne < carouselWidthOne - cardWidth * 5) {
        scrollPositionOne += cardWidth * 1.04;
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
      // console.log('scroll poss:', scrollPositionOne);
      // console.log('cond', carouselWidthOne - cardWidth * 5);
    }
  );
  $('#carouselExampleControlsOne .carousel-control-prev').on(
    'click',
    function () {
      if (scrollPositionOne > 0) {
        scrollPositionOne -= cardWidth;
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
