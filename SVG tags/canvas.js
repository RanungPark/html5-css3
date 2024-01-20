$(document).ready(function() {

  function randomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.round(Math.random() * 15)];
      }
      return color;
  }

  var canvas = document.getElementById('map_image');
  var paper = Raphael(canvas, 500, 716);

  $.each(koreaMapPathData, function(index, item) {
      var path = paper.path(item['d']);

      path.attr('stroke', item['stroke']);

      if (item['fill'] != 'none') {
          path.attr('fill', randomColor());
      }
  });
});