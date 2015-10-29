//step 1

$(document).ready(function () {
  $('.box').on('click', function () {
    $(this).addClass(color);
  });

  //step2

  $('.box').on('dblclick', function () {
    $(this).removeClass(colors);
  });

  $('#reset').on('click', function () {
    $('.box').removeClass('blue green red yellow white');
  });

  var color = 'white';
  var colors = 'blue green red yellow white';
  $('#red').on('click', function () {
    color = 'red';
  });

  $('#green').on('click', function () {
    color = 'green';
  });

  $('#blue').on('click', function () {
    color = 'blue';
  });

  $('#yellow').on('click', function () {
    color = 'yellow';
  });

  $('#white').on('click', function () {
    color = 'white';
  });
});

//step3