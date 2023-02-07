console.log("Actividad 8 (FORMULARIO)")

var usuarios = Array('Rubén', 'Juan', 'Pedro', 'Luis');
var pass = Array('1234', 'admin', 'abcd', 'password')

function ingreso(nombre, contra){
    
    usuarios.forEach(function(elemento, i, array) {
        if (nombre == elemento){
            if(pass[i] == contra){
                alert("Tienes acceso");
                return;
            }
        }

    });

    alert("datos equivocados");
    
}



function comprobar(){
    let nombre = document.getElementById("nombre").value
    let contra = document.getElementById("contra").value
    let puesto = document.getElementById("rol").value

    if( nombre !== "" && contra !== "" && puesto > 0){

        ingreso(nombre,contra);
        return;
    } 

    alert('datos incompletos');
}