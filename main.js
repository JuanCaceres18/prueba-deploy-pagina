// Carrousel de testimonios
var contenedorTestimonios = document.getElementById("containerTestimonios");
var botonPosterior = document.getElementById("siguienteTestimonios");
botonPosterior.addEventListener("click",() => {
    var testimonioActivo = contenedorTestimonios.querySelector(".activo");
    var siguienteTestimonio = contenedorTestimonios.querySelector(".activo + .oculto");

    if (siguienteTestimonio === null){
        siguienteTestimonio = contenedorTestimonios.querySelector(".oculto:first-child");
    }
    
    testimonioActivo.classList.remove("activo");
    testimonioActivo.classList.add("oculto");

    siguienteTestimonio.classList.remove("oculto");
    siguienteTestimonio.classList.add("activo");
});

var botonAnterior = document.getElementById("anteriorTestimonios");
botonAnterior.addEventListener("click", () => {
    var testimonioActivo = contenedorTestimonios.querySelector(".activo");
    var testimonioAnterior = testimonioActivo.previousElementSibling;

    if(testimonioAnterior === null){
        testimonioAnterior = contenedorTestimonios.querySelector(".oculto:last-child");
    }

    testimonioActivo.classList.remove("activo");
    testimonioActivo.classList.add("oculto");

    testimonioAnterior.classList.remove("oculto");
    testimonioAnterior.classList.add("activo");

});

// Llamar al form wizard
var botonConsulta = document.getElementById("botonConsulta");
botonConsulta.addEventListener("click",(event) => {
    event.preventDefault(); /* Se agrega para evitar que haga su comportamiento por defecto. */
    var formularioWizard = document.querySelector(".contenedorWizard");
    var fondoOscuro = document.getElementById("fondoOscuro");
    
    if (formularioWizard != null && fondoOscuro != null){ // Si ambos existen, haz esto...
        formularioWizard.style.display="block";
        formularioWizard.style.position="absolute";
        formularioWizard.style.top="0px";
        formularioWizard.style.left="500px";
        fondoOscuro.style.display="block";
        document.body.style.overflow="hidden"; /* Deshabilita el scroll */
        contornoTextarea.style.border = "";
        mensajeDeError.style.display = "none";

    }
})

// Formulario wizard
var contenedorFormularios = document.querySelector(".contenedorWizard");
var barraProgreso = document.getElementById("barraProgreso");
var pasos = contenedorFormularios.childElementCount;
var pasoActual=1;

function mostrarSiguienteFormulario() {
    var formActivo = contenedorFormularios.querySelector(".activo");
    var formSiguiente = contenedorFormularios.querySelector(".activo + .oculto");

    formActivo.classList.remove("activo");
    formActivo.classList.add("oculto");

    formSiguiente.classList.add("activo");
    formSiguiente.classList.remove("oculto");

    contenedorFormularios.classList.add("formDeslizar");

    pasoActual++;
    actualizarBarraProgreso();

}

function mostrarFormularioAnterior() {
    var formActivo = contenedorFormularios.querySelector(".activo");
    var formAnterior = formActivo.previousElementSibling;
     // previousElementSibling: selecciona el elemento hermano anterior 
    // (el elemento que está antes en el mismo nivel del DOM).

    formActivo.classList.remove("activo");
    formActivo.classList.add("oculto");

    formAnterior.classList.add("activo");
    formAnterior.classList.remove("oculto");
    
    contenedorFormularios.classList.add("formDeslizar");

    pasoActual--;
    actualizarBarraProgreso();

}

function actualizarBarraProgreso(){
    /* Calcula el ancho de la barra de progreso.
    Se multiplica el número de pasos actuales (variable pasoActual) por el ancho total de la
    barra (360 px). La división del ancho total por pasos-1 se utiliza para distribuir 
    equitativamente el ancho total entre los pasos. */
    var anchoBarra = pasoActual * (360 / (pasos-1));
    barraProgreso.style.width=anchoBarra + "px";

}

var botonSiguiente1 = document.getElementById("next1");
botonSiguiente1.addEventListener("click", () => {
    var nombre = form1.querySelector('input[name="nombre"]').value;
    var email = form1.querySelector('input[name="email"]').value;
    var telefono = form1.querySelector('input[name="teléfono"]').value;
    var nombreBorde = form1.querySelector('input[name="nombre"]');
    var emailBorde = form1.querySelector('input[name="email"]');
    var telefonoBorde = form1.querySelector('input[name="teléfono"]');
    var mensajeDeErrorDatos = form1.querySelector (".mensajeDeErrorDatosPersonales");

    if (nombre == "" || email == "" || telefono == "") {
        nombreBorde.style.borderBottom = "1px solid red";
        emailBorde.style.borderBottom = "1px solid red";
        telefonoBorde.style.borderBottom = "1px solid red";
        mensajeDeErrorDatos.style.display="block";
        mensajeDeErrorDatos.style.color="red";
        mensajeDeErrorDatos.style.textAlign="center";
        mensajeDeErrorDatos.innerHTML="<p> Debes rellenar los campos con tus datos </p>";
        return;
    }
    else {
        nombreBorde.style.border = ""; 
        emailBorde.style.border = "";    // Restablezco estilos
        telefonoBorde.style.border = "";
        mensajeDeErrorDatos.style.display = "none"; // Oculto el mensaje de error
        mostrarSiguienteFormulario();
    }
});

var botonSiguiente2 = document.getElementById("next2");
botonSiguiente2.addEventListener("click", () =>{
    var botonServicioSeleccionado = document.querySelector('.botonesServicios-clicked');

        if (botonServicioSeleccionado === null) {
            mostrarServicioSeleccionado.innerHTML="<p>Elige un servicio, por favor</p>";
            mostrarServicioSeleccionado.style.color="red";
            return;
        }
        else{
            mostrarSiguienteFormulario();
        }

});

var botonAnterior1 = document.getElementById("back1");
botonAnterior1.addEventListener("click", mostrarFormularioAnterior);

var botonAnterior2 = document.getElementById("back2");
botonAnterior2.addEventListener("click", () =>{
    mostrarFormularioAnterior();
    contornoTextarea.style.border = "";
    mensajeDeError.style.display = "none";
});

var botonEnviar = document.getElementById("submit");
// Mensaje de comprobación al apretar submit
var mensajeComprobación = document.getElementById("mensajeComprobación");
var contornoTextarea = form3.querySelector('textarea');
var mensajeDeError = form3.querySelector('.mensajeDeErrorTextarea');
botonEnviar.addEventListener("click",() =>{
    var formularioWizard = document.querySelector(".contenedorWizard");
    var fondoOscuro = document.getElementById("fondoOscuro");
    var formularios = document.querySelectorAll(".formularios");
    var descripcionConsulta = form3.querySelector('textarea[name="mensaje"]').value;

    if (descripcionConsulta == "") {
        contornoTextarea.style.border="1px solid red";
        mensajeDeError.style.display="block";
        mensajeDeError.style.textAlign="center";
        mensajeDeError.style.color="red";
        mensajeDeError.innerHTML = "<p> La descripción es obligatoria </p>"
        return;
    }
    else{
        mensajeComprobación.innerHTML="<p>Su solicitud ha sido recibida. Nos comunicaremos con usted a la brevedad.</p><i class='las la-check-circle la-3x'></i>";
        if (formularioWizard != null && fondoOscuro != null && mensajeComprobación != null){ 
        /* Con este if nos aseguramos de que las variables tengan un valor antes de manipularlas. */
            mensajeComprobación.style.display = "flex";
            mensajeComprobación.style.flexDirection = "column";
            mensajeComprobación.style.justifyContent = "center";
            mensajeComprobación.style.position="absolute";
            mensajeComprobación.style.top="90px";
            mensajeComprobación.style.left="380px";
            mensajeComprobación.style.textAlign = "center";
            mensajeComprobación.style.padding = "50px"; 
            fondoOscuro.style.display="block";
            document.body.style.overflow="hidden";
            mensajeComprobación.style.alignItems = "center";    
        }

        /* Reiniciamos los campos de un formulario después de que se haya enviado. */
        formularios.forEach(formulario => formulario.reset()); 
        formularioWizard.style.display="none";

        setTimeout(() => { /* Retrasa la ejecución de un fragmento de código */
            mensajeComprobación.style.display = "none";
            document.body.style.overflow = "auto";
            fondoOscuro.style.display="none";
        }, 3000); /* Oculta el mensaje después de 3 segundos */

        reiniciarFormularioWizard();
        despintarBotones();
        mostrarServicioSeleccionado.innerHTML="";
    }
});

function reiniciarFormularioWizard() {
    var formularios = document.querySelectorAll(".formularios");
    formularios.forEach((formulario, index) => { /* Utilizamos forEach para iterar 
                                                sobre cada elemento en la NodeList "formularios".
                                              Se toman dos parámetros: formulario (es 
                                              el elemento actual y index (es el índice del
                                              elemento en el conjunto). */
        if (index === 0) { /* Comprueba si el índice es igual a cero, 
                        es decir, si es el primer formulario. */
            formulario.classList.add("activo");
            formulario.classList.remove("oculto"); /* Agrega la clase "activo" al primer formulario y
                                                    le elimina la clase oculto.  */
        } else {
            formulario.classList.remove("activo"); /*  Si el índice no es cero, se elimina la clase 
                                                "activo" del formulario actual y se agrega
                                                la clase "oculto". Esto convertiría en ocultos
                                                a los formularios que no son el primero. */
            formulario.classList.add("oculto");
        }
    });
    pasoActual = 1;
    actualizarBarraProgreso();
}

// Servicios dentro del formulario wizard
var botonesServicios = document.querySelectorAll('.botonesServicios');
var mostrarServicioSeleccionado = document.getElementById("mostrarServicioSeleccionado");
for (var i = 0; i < botonesServicios.length; i++) { /* Agregas un vigilante a cada botón con
                                                            for. */
        
        /*  Función que toma un parámetro event.
         Este parámetro contiene información sobre el evento que ocurrió.*/
    botonesServicios[i].addEventListener('click', (event) => {
    event.preventDefault();
    
       // Botón en el que se hizo clic
       var boton = event.target;

       // Texto del botón
       var servicioSeleccionado = boton.textContent;

       // Si el botón ya tiene la clase 'botonesServicios-clicked', se despinta y se borra el mensaje
       if (boton.classList.contains('botonesServicios-clicked')) {
           boton.classList.remove('botonesServicios-clicked');
           mostrarServicioSeleccionado.innerHTML = "";
       } else {
           // Despinta todos los botones
           for (var j = 0; j < botonesServicios.length; j++) {
               botonesServicios[j].classList.remove('botonesServicios-clicked');
           }

           // Resalta el botón en el que se hizo clic
           boton.classList.add('botonesServicios-clicked');

           // Muestra el mensaje indicando el servicio seleccionado
           mostrarServicioSeleccionado.innerHTML = "<p>Servicio seleccionado: " + servicioSeleccionado + "</p>";
           mostrarServicioSeleccionado.style.color = "black";
       }
   });
}

function despintarBotones() { /* Esta función recorre todos los botones de servicio y 
                            les elimina la clase botonesServicios-clicked,
                            deshaciendo cualquier color de click.*/
    botonesServicios.forEach((boton) => {
    boton.classList.remove('botonesServicios-clicked');
    });
    /*  Despinta todos los botones antes de pintar uno nuevo, asegurando que solo haya un botón pintado a la vez. */
}
/* Botones de las tarjetas que te envían al formulario */
var enlacesTarjetas = document.querySelectorAll('.tarjeta a'); // Nodelist con enlaces
enlacesTarjetas.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        mostrarFormularioWizardTarjetas();
    });
});
function mostrarFormularioWizardTarjetas() {
    var formularioWizard = document.querySelector(".contenedorWizard");
    var fondoOscuro = document.getElementById("fondoOscuro");

    if (formularioWizard && fondoOscuro) {
        formularioWizard.style.display="block";
        formularioWizard.style.position="absolute";
        formularioWizard.style.bottom="0px";
        formularioWizard.style.left="500px";
        fondoOscuro.style.display="block";
        document.body.style.overflow="hidden";
        contornoTextarea.style.border = "";
        mensajeDeError.style.display = "none";
    }
}