$(function(){
   
    

$(".amarillo").click(function(){
console.log("clic cuadrado");

   $(".amarillo").toggleClass("grande");
  $(".rosa").removeClass("grande");
  $(".azul").removeClass("grande");
   $(".yo").toggleClass("abierto");
 $(".cv").removeClass("abierto")
 $(".proyectos").removeClass("abierto")
   
   $(".rosa").toggleClass("oculto");
   $(".azul").toggleClass("oculto");
   
  
});
$(".rosa").click(function(){
  
   $(".rosa").toggleClass("grande");
   $(".amarillo").removeClass("grande");
   $(".azul").removeClass("grande");
      $(".cv").toggleClass("abierto");
     $(".yo").removeClass("abierto");
     $(".proyectos").removeClass("abierto");

      $(".amarillo").toggleClass("oculto");
      $(".azul").toggleClass("oculto");
      
      
      
   });
   
   $(".azul").click(function(){
     
      $(".azul").toggleClass("grande");
      $(".rosa").removeClass("grande");
      $(".amarillo").removeClass("grande");
       $(".proyectos").toggleClass("abierto");
       $(".yo").removeClass("abierto");
       $(".cv").removeClass("abierto");
       $(".rosa").toggleClass("oculto");
       $(".amarillo").toggleClass("oculto");
        
        
      });
      // cuando hago clic en .amarillo necesito la clase grande, la clase abierto para .yo  y la clase oculto para .rosa y .azul y que no tenga la clase oculto tambien necesito que .rosa y .azul no tengan la clase grande
      $(".botonamarillo").click(function(){
         console.log("clic botonamarillo")
         $(".amarillo").addClass("grande");
         $(".yo").addClass("abierto");
         $(".cv").removeClass("abierto");
         $(".proyectos").removeClass("abierto")
         $(".rosa").addClass("oculto");
         $(".azul").addClass("oculto");
         $(".amarillo").removeClass("oculto");
         $(".rosa").removeClass("grande");
         $(".azul").removeClass("grande");

      })
      $(".botonrosa").click(function(){
         console.log("clic botonamarillo")
         $(".rosa").addClass("grande");
         $(".cv").addClass("abierto");
         $(".yo").removeClass("abierto");
         $(".proyectos").removeClass("abierto")
         $(".amarillo").addClass("oculto");
         $(".azul").addClass("oculto");
         $(".rosa").removeClass("oculto");
         $(".amarillo").removeClass("grande");
         $(".azul").removeClass("grande");

      })
      $(".botonazul").click(function(){
         console.log("clic botonamarillo")
         $(".azul").addClass("grande");
         $(".proyectos").addClass("abierto");
         $(".cv").removeClass("abierto");
         $(".yo").removeClass("abierto")
         $(".rosa").addClass("oculto");
         $(".amarillo").addClass("oculto");
         $(".azul").removeClass("oculto");
         $(".rosa").removeClass("grande");
         $(".amarillo").removeClass("grande");

      })
      
 
   $(".book").click(function(){
console.log("clic en book")
$(".lectura").removeClass("active")
var id=$(this).attr("id")
console.log(id)
$("."+id).addClass("active")

})
$(".trabajo").click(function(){
   console.log("clic trabajo")
   $(".informacion").removeClass("active")
  var id=$(this).attr("id")
  console.log(id)
  $("."+id).addClass("active")

})
})