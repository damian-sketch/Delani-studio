$(document).ready(function(){
  $(".design").click(function(){
  $(".design1").hide();
  $(".design2").show();

  $("p").click(function(){
    $(".design2").hide();
    $(".design1").show();
  })
  
 
  });
});