$(document).ready(function(){
  $(".design1, .design2").click(function(){
    $(".design1, .design2").toggle();

  });
  $(".development1, .development2").click(function(){
    $(".development1, .development2").toggle();
  });
  $(".product1, .product2").click(function(){
    $(".product1, .product2").toggle();

  });

});

$(document).ready(function() {
  $('.projo').hide();
  $('.image').animate({
      opacity:1
      
  });

  $('.image').each(function(){
    $('.image').hover(function() {
      $(this).stop().animate({opacity:.4},200),
      $('.projo').toggle();
        

  }, function() {
      $(this).stop().animate({opacity:1},500)
      
  });
  });

});

