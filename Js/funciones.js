$(function(){
   
    

$(".amarillo").click(function(){
console.log("clic cuadrado");

   $(".amarillo").toggleClass("grande");
   // $(this).removeClass("grande");
   $(".yo").toggleClass("abierto");
   // $(this).removeClass("abierto");
   $(".amarrillo").toggleClass("oculto");
   // $(this).removeClass("oculto");
  
});
$(".rosa").click(function(){
  
   
   $(".rosa").toggleClass("grande");
   // $(this).removeClass("grande");
      $(".cv").toggleClass("abierto");
      // $(this).removeClass("abierto");
      $(this).addClass("oculto");
      $(".rosa").removeClass("oculto");
      
      
   });
   
   $(".azul").click(function(){
     
      
      
      $(".azul").toggleClass("grande");
      // $(this).removeClass("grande");
         $(".proyectos").toggleClass("abierto");
         $(this).removeClass("abierto");
        
      });
 


});