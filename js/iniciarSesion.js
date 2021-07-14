
var logInBtn = document.getElementById("logInBtn");

var nombre = document.getElementById("nameform");
var apellido = document.getElementById("lastname");
var direccion = document.getElementById("direction");


/* const saveValue = () => {
var nombre = document.getElementById("nameform").value;
var apellido = document.getElementById("lastname").value;
 nombreID.innerText = nombre + " " + apellido; 

}; */

const iniciarSesionBtn = () => {
    iniciarSesion.style.display = "block";
}

const logIn = () => {
    let nombre = document.getElementById("nameform").value;
    let apellido = document.getElementById("lastname").value;
    let direccion = document.getElementById("direction").value;
    var nuevoUsuario = new Usuario(nombre, apellido, direccion);
    
    sessionStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));


    iniciarSesion.style.display = "none";
};

var usuarioSessionStorage = JSON.parse(sessionStorage.getItem("nuevoUsuario"));
nombreID.innerHTML = usuarioSessionStorage.nombre + " " + usuarioSessionStorage.apellido;
direccionID.innerHTML = usuarioSessionStorage.direccion;