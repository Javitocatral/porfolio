<!-- 1-etiquetas form input
2-peticiones get o post
    2.1 get : pedir información al servidor. Busqueda , filtro etc..
        dominio-com?variable=dato&variable_2=dato2
        TODA LA INFO VA EN LA URL!!!
        No se utiliza para login. registro.

    2.2 post: Dar información al servidor 
    la info va en el cuerpo de la petición ( no visible)
    Podemos enviar más informacion  u la get y archivos No binarios( imagenes, pdfs, videos..)
    lo utilizaremos para login, registros, envio de info en general.. Simpre que la info sea importante  utilizamos POST
3-recibir datos de la petición
4-enviar correo -->

<?php
    //  $_POST
    $nombrevariable = 3;
//  imprimi algo sencillo por pantalla
    echo $nombrevariable;
    // imprimir cosas por pantala yarray y objetos
    print_r($nombrevariable);
    print_r($_POST);
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    // receptor
     $to = "javitocatral@gmail.com";
    //  asunto
    $subjet = "consulta de la web";
    //  mensaje
    $body = "<html>  
            <heade>
            <body> 
                <h1> Consulta en la web</h1>
                <p> $mensaje </p>
            </body>
            </heade>
        </html>";

    // cabeceras de el correo 
    $headers = "MIME-Version:1.0 \r\n";
    $headers .= "From: $email \r\n ";
    $headers .= "Content-type/html;charset=UTF-8 \r\n";
   

    // true si envia correo Fslse si algo ha ido mal y no ha enviado correo
    $enviomail = mail($to, $subjet, $body, $headers);
    if( $enviomail){
        echo" correo enviado";
    };

?>