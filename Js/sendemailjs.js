(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('IwPsel-v-iQPV5RkM');

})();
window.onload = function() {
    // 'contact-form' debe ser el ID de tu FORMULARIO
    document.getElementById('contact-form').addEventListener('submit', function(event) {

        // ocultar botóm
        $("#boton-2").css({"display":"none"});
        event.preventDefault();
        emailjs.sendForm('service_o4yo1ie', 'template_h7zvn1d', this)
            .then(function(success) {
                console.log('SUCCESS!');
                console.log(success);
                // Aquí podríamos cambiar el mensaje de envío de correo con éxito por el formulario
                $(".formulario-2").css({"display":"none"});
                $(".exito").css({"display":"block"});
            }, function(error) {
                console.log('FAILED...', error);
        });
    });
}
