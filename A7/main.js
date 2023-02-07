console.log("ACTIVIDAD 7");


function recibe() {
    var nombre = document.forma01.nombre.value;
    var correo = document.forma01.correo.value;
    var sexo = document.forma01.sexo.value;
    var boletin = document.forma01.boletin.value;
    var comentario = document.forma01.comentario.value;
    var carrera = document.forma01.carrera.value;
    var pasw = document.forma01.pasw.value;
    var promedio = document.forma01.promedio.value;
    var fecha = document.forma01.fecha.value;
  
    let quiere = "sin definir";

    if (boletin == 1){
        quiere = "si";

    } else {
        quiere = "no";

    }

    let licen = "sin definir";

    if(carrera == 1){
        licen = "ing informatica";
    } else {
        licen = "ing computacion";
    }

    alert(
        "Nombre: " + nombre + 
        "\nCorreo: " + correo + 
        "\nGenero: " + sexo + 
        "\nRecibir boletín: " + quiere + 
        "\nComentario: " + comentario + 
        "\nCarrera: " + licen + 
        "\nContraseña: " + pasw + 
        "\nPromedio: " + promedio + 
        "\nFecha nacimiento: " + fecha);
        
  }

  
function validarFormulario() {

    var nombre = document.forma01.nombre.value;
    var correo = document.forma01.correo.value;
    var sexo = document.forma01.sexo.value;
    var boletin = document.forma01.boletin.value;
    var comentario = document.forma01.comentario.value;
    var carrera = document.forma01.carrera.value;
    var pasw = document.forma01.pasw.value;
    var promedio = document.forma01.promedio.value;
    var fecha = document.forma01.fecha.value;

    if (nombre == "" || correo == "" || sexo == "" || comentario == "" || carrera == 0 || pasw == "" || promedio == "" || fecha == "") {
        alert("Por favor, llene todos los campos");
        return false;
    } else {
        return true;
    }

  }
