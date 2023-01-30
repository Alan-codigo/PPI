console.log("Actividad 6 (FORMULARIO)")

function comprobar(){
    let nombre = document.getElementById("nombre").value
    let contra = document.getElementById("contra").value
    let puesto = document.getElementById("rol").value

    if( nombre !== "" && contra !== "" && puesto > 0){
        alert('Datos completos');
        return;
    } 

    alert('datos incompletos');
}