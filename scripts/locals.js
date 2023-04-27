$(function(){

    $(".village-angra, .village-talude, .village-videira").hide();

    // Show villages from Condado Novo by default
    $(".village-novo").show();


    $("#angra").click(function() {
        $(".village-angra").show();
        $(".village-novo, .village-talude, .village-videira").hide();
      });
    
      $("#novo").click(function() {
        $(".village-novo").show();
        $(".village-angra, .village-talude, .village-videira").hide();
      });
    
      $("#talude").click(function() {
        $(".village-talude").show();
        $(".village-angra, .village-novo, .village-videira").hide();
      });
    
      $("#videira").click(function() {
        $(".village-videira").show();
        $(".village-angra, .village-novo, .village-talude").hide();
      });
  
  });









