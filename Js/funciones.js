$(function(){
   
    

$(".amarillo").click(function(){
console.log("clic cuadrado");

   $(this).toggleClass("grande")

   $(".menu").toggleClass("abierto");

});
$(".rosa").click(function(){
   console.log("clic cuadrado");
   
   
      $(".menu.cv").toggleClass("abierto");
   });
   
   $(".azul").click(function(){
      console.log("clic cuadrado");
      
      
         $(".menu.proyectos").toggleClass("abierto");
      });
      


});