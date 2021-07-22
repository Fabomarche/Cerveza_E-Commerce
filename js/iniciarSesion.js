
var logInBtn = document.getElementById("logInBtn");

var nombre = document.getElementById("nameform");
var apellido = document.getElementById("lastname");
var direccion = document.getElementById("direction");


/* const iniciarSesionBtn = () => {
    iniciarSesion.style.display = "block";
} */


$(".btn").click( () => {
    $("#iniciarSesion").slideDown(500);
})


const imprimirDatosEnCarrito= () => {
    var usuarioSessionStorage = JSON.parse(sessionStorage.getItem("nuevoUsuario"));
    nombreID.innerHTML = usuarioSessionStorage.nombre + " " + usuarioSessionStorage.apellido;
    direccionID.innerHTML = usuarioSessionStorage.direccion;
}


$('#logInBtn').click(() => {
    let nombre = document.getElementById("nameform").value;
    let apellido = document.getElementById("lastname").value;
    let direccion = document.getElementById("direction").value;
    var nuevoUsuario = new Usuario(nombre, apellido, direccion);
    
    sessionStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));

    imprimirDatosEnCarrito();
    $("#iniciarSesion").slideUp(500, ()=>{alert("Ud se Logueó")});
    /* iniciarSesion.style.display = "none" */;}
    )

