(function () {
  var rotate, timeline;

  rotate = function () {
    return $('#action-container .stacked-card:first-child')
      .fadeOut(400, 'swing', function () {
        return $('#action-container .stacked-card:first-child')
          .appendTo('#action-container')
          .hide();
      })
      .fadeIn(400, 'swing');
  };

  $('#action-container .next').click(function () {
    return rotate();
  });
}.call(this));

(function () {
  var rotate, timeline;

  rotate = function () {
    return $('#adventure-container .stacked-card:first-child')
      .fadeOut(400, 'swing', function () {
        return $('#adventure-container .stacked-card:first-child')
          .appendTo('#adventure-container')
          .hide();
      })
      .fadeIn(400, 'swing');
  };

  $('#adventure-container .next').click(function () {
    return rotate();
  });
}.call(this));
