

<?php
// vivne el form de contacto?
    //  $_POST
   
//  imprimi algo sencillo por pantalla
    
    // imprimir cosas por pantala yarray y objetos
   
    $envioMail = false;
    if( 
    isset($_POST["nombre"]) && 
    isset($_POST["email"]) &&
    isset($_POST["mensaje"])
    
    ){  

       

        // lo que hacemos si hay información enviada del form
        
        $nombre = $_POST["nombre"];
        $email = $_POST["email"];
        $mensaje = $_POST["mensaje"];

        // receptor
        $to = "javitocatral@gmail.com";
        //  asunto
        $subjet = "consulta de la web";
        //  mensaje
        $body = "<html>  
                <head>
                </head>
                <body> 
                    <h1> Consulta en la web</h1>
                    <p> $mensaje </p>
                </body>
            </html>";
    
        // cabeceras de el correo 
        $headers = "MIME-Version:1.0 \r\n";
        $headers .= "From: $email \r\n ";
        $headers .= "Content-type/html;charset=UTF-8 \r\n";
       
    
        // true si envia correo Fslse si algo ha ido mal y no ha enviado correo
        $envioMail = mail($to, $subjet, $body, $headers);
        
        }     

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title><link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/2d60c846f7.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/estilo.css">
</head>
<body>
    <div class="carga">              
            <div class="cuadrado cambio"></div>                  
            <div class="circulo cambio"></div>                      
            <svg class="triangulo_1 cambio"> <polygon points= "0,0 100,0 100,100" fill="#5EF2E3"></polygon></svg>          
     </div>
    <div class="menphys-2">
        <div class="nav-2">
            <div class="parte_1">
                <div class="iconos uno botonamarillo"><i class="fa-solid fa-square-full"></i></div>
                <div class="iconos dos botonrosa"><i class="fa-solid fa-circle"></i></div>
                <div class="iconos tres botonazul"><svg class="i"> <polygon points= "0,0 40,0 40,40" fill="#5EF2E3">  </polygon></svg></div>
            </div>
            <div class="parte_2" >
               
                <div class="casa"><a href="index.html"> <i class="fa-brands fa-houzz"></a></i></div>
                
            </div>
        </div>
        <div class="personal-2">
            <div id="soy" class="titulo">
    
                <h1 class="textito"> Contacto</h1>
            </div>
        </div>
        
        <div class="formulario">
            <div class="rellena">
                <?php
                if( $envioMail==false ){
                ?>
                <!-- action: donde enviamos los datos: si esta vacio se envia  al misma pagina donde esta el formulario -->
                <div class="formulario-2">
                <form class="escribeme" action="" method="POST">
                    <div class="uno">
                        <h1>Contratame!</h1>
                    </div>
                    <div class="dos-1">
                        <label for="nombre">Tu nombre</label>
                        <input id="nombre" name="nombre" type="text" placeholder="Escríbe tu nombre">
                        <div class="linea"></div>
                    </div>
                    <div class="dos-1">
                                <label for="email">Tu email</label>
                                <input id="email" name="email" type="email" placeholder="Escríbe tu email">
                                <div class="linea"></div>
                    </div>
                    <div class="dos-1">
                        <label for="consulta">Consulta</label>
                        <textarea  id="consulta" name="mensaje" cols="" rows="" placeholder="Escribe tu mensaje"></textarea>
                        <div class="linea"></div>
                    </div>
                    <div class="dos-1 centrado">
                        <input id="boton-2" type="submit" name="boton">
                   
                    </div>
                </form></div>
                   <?php
                   }else{

                   ?>
                    
                   
                
                    <div class="exito">
                        <div class="mensajes-1">
                           <p> Gracias por contactar conmigo en breve te respondere</p>
                        </div>
                    </div>
                    <?php
                         }
                   ?>
            </div>
           
            <div class="dir">
                <h3 class="textito-3"> Javier Gascon Ruiz</h3>
                <p> Dir: C/Ciuda real nº 9, 2º-puerta6</p>
                <p>Telefono:690084912 </p>
                <p>Mail: <a href=""> javiergasconruiz@live.com</p></a>
                <div class="redes">
                    <a href="https://www.facebook.com/javito.catral"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/javitocatralskater/?hl=es"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/javier-gasc%C3%B3n-ruiz-826b0812b/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div> 
       
        <div class="menu yo">
            <div class="contenido mas">
                <h1> <a href="personal.html#soy">Quien soy</a></h1>
            </div>
            <div class="contenido mas">
                <h1> <a href="personal.html#donde"> De donde soy</a></h1>
            </div>
            <div class="contenido mas">
                <h1><a href="personal.html#hobbies"> Mis hobbies</a></h1>
            </div>
            <div class="contenido mas">
                <h1><a href="contacto.php"> Contacta</a></h1>
            </div>
   
        </div>
        <div class="menu cv">
            <div class="contenido">
                <h1><a href="cv.html">C.vitae</a></h1>
            </div>
            <div class="contenido">
                <h1><a href=""> Experiencia laboral</a></h1>
            </div>
            <div class="contenido">
                <h1><a href=""> Estudios</a></h1>
            </div>
            <div class="contenido">
                <h1><a href=""> Aptitude</a></h1>
            </div>
            <div class="contenido">
                <h1><a href="contacto.html"> Contacta</a></h1>
            </div>
           
        </div>
        <div class="menu proyectos">
                <div class="contenido">
                    <h1><a href="proyectos.html">Proyectos</a> </h1>
                </div>
                <div class="contenido">
                    <h1><a href="proyectos.html#practicas"> Practicas</a></h1>
                </div>
                <div class="contenido">
                    <h1><a href="proyectos.html#propios"> Proyectos propios</a></h1>
                </div>
                <div class="contenido">
                    <h1><a href="proyectos.html#propios"> Wordprees</a></h1>
                </div>
                
                <div class="contenido">
                    <h1><a href="contacto.php"> Contacta</a></h1>
                </div>
            </div>
        
    </div>
    <script src="Js/funciones.js"></script>
</body>
</html>