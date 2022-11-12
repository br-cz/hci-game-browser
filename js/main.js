//This is for our stacked carousel item, please don't touch lol
(function () {
  var rotate, timeline;

  rotate = function () {
    return $('#adventure-card:first-child')
      .fadeOut(400, 'swing', function () {
        return $('#adventure-card:first-child').appendTo('#adventure').hide();
      })
      .fadeIn(400, 'swing');
  };

  $('.adventure-next').click(function () {
    return rotate();
  });

  fantasyRotate = function () {
    return $('#fantasy-card:first-child')
      .fadeOut(400, 'swing', function () {
        return $('#fantasy-card:first-child').appendTo('#fantasy').hide();
      })
      .fadeIn(400, 'swing');
  };

  $('.fantasy-next').click(function () {
    return fantasyRotate();
  });
}.call(this));
