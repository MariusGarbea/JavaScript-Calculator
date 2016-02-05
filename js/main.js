$(document).ready(function() {
  $(".titlu").animate({
    opacity: "1"
  }, 1000).animate({
    fontSize: "60px"
  }, 1000).animate({
    fontSize: "40px"
  });

  var x, value = '';

  $('.ecran').html('Welcome!');
  $(".button").click(function() {
    x = $(this).attr("id");
    if (x != '=' && x != 'CE' && x != 'AC' && x != '√' && value.length <= 10)
      value += x;
    if (x == '√'){
      value = Math.sqrt(value).toPrecision(10);
      value = parseFloat(value);
    }
    if (x == 'AC')
      value = '';
    if (x == 'CE')
      value = value.slice(0, value.length - 1);
    if (x == '=')
      value = eval(value).toPrecision(10).replace(/\.?0+$/, "");
    $(".ecran").html(value);
    if (x == '=' || x == '√')
      value = '';
  });
});
