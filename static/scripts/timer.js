setTimeout(function() {

  var time = 60;
  var initialOffset = '440';
  var i = 1

  $('.gameplay').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

  var interval = setInterval(function() {
      $('h2').text(i);
      if (i == time) {
        clearInterval(interval);
        return;
      }
      $('.gameplay').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
      i++;
  }, 1000);

}, 0)