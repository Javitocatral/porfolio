$(function(){
   
    if ( window.history.replaceState) {
       window.history.replaceState( null, null, window.location.href);
    }

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

         $(".yo").toggleClass("abierto");
         $(".cv").removeClass("abierto");
         $(".proyectos").removeClass("abierto")
        

      })
      $(".botonrosa").click(function(){
         console.log("clic botonamarillo")
         $(".rosa").addClass("grande");
         $(".cv").toggleClass("abierto");
         $(".yo").removeClass("abierto");
         $(".proyectos").removeClass("abierto")
         

      })
      $(".botonazul").click(function(){
         console.log("clic botonamarillo")
         $(".azul").addClass("grande");
         $(".proyectos").toggleClass("abierto");
         $(".cv").removeClass("abierto");
         $(".yo").removeClass("abierto")
         

      })




      $(".homeamarillo").click(function(){
         console.log("clic en homeamarillo");
        
         if( $(".amarillo").hasClass("grande")){
            $(".rosa").removeClass("oculto")
            $(".azul").removeClass("oculto")
         }else{
            $(".rosa").addClass("oculto").removeClass("grande");
            $(".azul").addClass("oculto").removeClass("grande");
         }
         $(".amarillo").toggleClass("grande").removeClass("oculto");

         $(".yo").toggleClass("abierto");
         $(".cv").removeClass("abierto");
         $(".proyectos").removeClass("abierto")
         
      })


      $(".homerosa").click(function(){
         if( $(".rosa").hasClass("grande")){
            $(".amarillo").removeClass("oculto")
            $(".azul").removeClass("oculto")
         }else{
            $(".amarillo").addClass("oculto").removeClass("grande");
            $(".azul").addClass("oculto").removeClass("grande");
         }
         $(".rosa").toggleClass("grande").removeClass("oculto");

         $(".cv").toggleClass("abierto");
         $(".yo").removeClass("abierto");
         $(".proyectos").removeClass("abierto");
      })

      $(".homeazul").click(function(){
         if( $(".azul").hasClass("grande")){
            $(".amarillo").removeClass("oculto")
            $(".rosa").removeClass("oculto")
         }else{
            $(".amarillo").addClass("oculto").removeClass("grande");
            $(".rosa").addClass("oculto").removeClass("grande");
         }
         $(".azul").toggleClass("grande").removeClass("oculto");
         $(".proyectos").toggleClass("abierto");
         $(".yo").removeClass("abierto");
         $(".cv").removeClass("abierto");
           
      });

      



 
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
var hash = window.location.hash;
console.log("hash")
console.log(hash)
if(hash != ""){
   $(".informacion").removeClass("activo")
   var clase= hash.replace("#", ".")
   console.log(clase);
   $(clase).addClass("active")
}

$(".boton").click(function(){
   console.log("clic en boton") 
   $("#video").css("opacity", 0)

   setTimeout(() => {
      $("#video").animate( {
         opacity:1
      }, 500 )
   }, 300);


   var src= $(this).data("src")
   console.log(src)
   $("#video").attr("src", src)

   
  
 
})
$(window).scroll(function(){
   scrollAnimation("#animacion", "aparece-izq");
   scrollAnimation("#animacion-1", "aparece-dch");
   scrollAnimation("#animacion-2", "aparece-izq");
   scrollAnimation("#animacion-3", "aparece-dch");
   scrollAnimation("#animacion-4", "aparece-izq");
   scrollAnimation("#animacion-5", "aparece-dch");
   scrollAnimation("#animacion-6", "aparece-izq");
   scrollAnimation("#animacion-7", "aparece-dch");

})
})
function scrollAnimation(id, clase){

   if($(id).length==0 ){
      return
   }
   var scroll = $(window).scrollTop()
   console.log(scroll)
   var distancia_elemento = $(id).offset().top;
   var ventana = $(window).height();

   if( scroll+ventana/2> distancia_elemento){
       $(id+" .trabajo-3").addClass(clase)
   }else{
       $(id+" .trabajo-3").removeClass(clase)
   }
}

$(window).on("load", function(){

setTimeout(function(){
   $(".carga").fadeOut(500);
}, 1200)
})