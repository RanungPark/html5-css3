$(document).ready(function () {
  for (var i = 0; i < 200; i++) {
    var output = '';
    output += 'rotateY(' + i * 20 + 'deg)';
    output += 'translateY(' + i * 5 + 'px)';
    output += 'translateZ(' + 310 + 'px)';

    var isMouseDone = false;
    var originalPosition = {
      x: 0,
      y: 0
    };
    var originalRotation = {
      x: 0,
      y: 0,
      z: 0
    };
    var originalScale = 1.0;

    var createGalleryPosition = function () {
      var output = '';
      output += 'translateY(' + originalPosition.y + 'px) ';
      output += 'rotateY(' + originalRotation.y + 'deg) ';
      return output;
    };

    var createViewportPosition = function () {
      var output = '';
      output += 'rotateX(-10deg)';
      output += 'scaleX(' + originalScale + ') ';
      output += 'scaleY(' + originalScale + ') ';
      return output;
    };

    $('<div></div>').addClass('image').css({
      'width': 100,
      'height': 60,
      'transform': output
    }).appendTo('#image_gallery');

  }

  $(window).on({
    mousedown: function (event) {
      isMouseDown = true;

      originalPosition.x = event.screenX;

      event.preventDefault();
    },
    mouseup: function (event) {
      isMouseDown = false;

      event.preventDefault();
    },
    mousemove: function (event) {
      if (isMouseDown) {
        distance = event.screenX - originalPosition.x;
        originalRotation.y += distance;
        originalPosition.y += distance / 3;

        $('#image_gallery').css('transform', createGalleryPosition());
        $('#viewport').css('transform', createViewportPosition());

        originalPosition.x = event.screenX;
      }
      event.preventDefault();
    },
    mousewheel: function (event) {
      var changeScale = originalScale + event.originalEvent.wheelDeltaY / 1000;

      if (changeScale > 0) {
        originalScale = changeScale;

        $('#image_gallery').css('transform', createGalleryPosition());
        $('#viewport').css('transform', createViewportPosition());

        event.preventDefault();
      }
    }
  });
});