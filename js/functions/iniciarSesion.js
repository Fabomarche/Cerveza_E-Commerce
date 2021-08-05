
var logInBtn = document.getElementById("logInBtn");

var nombre = document.getElementById("nameform");
var apellido = document.getElementById("lastname");
var direccion = document.getElementById("direction");


/* const iniciarSesionBtn = () => {
    iniciarSesion.style.display = "block";
} */


$("#btnLogIn").click( () => {
    $("#iniciarSesion").fadeIn(500);
})



$('#logInBtn').click((event) => {
    event.preventDefault();
    if(nameform.value == "" || lastname.value == "" || direccion.value == ""){
    }else{
    let nombre = document.getElementById("nameform").value;
    let apellido = document.getElementById("lastname").value;
    let direccion = document.getElementById("direction").value;
    let nuevoUsuario = new Usuario(nombre, apellido, direccion);
    
    sessionStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));

    imprimirDatosEnCarrito();
    $("#iniciarSesion").fadeOut(500, ()=>{Swal.fire({
        background: "white",
        title: "¡Bienvenido/a!",
        text: "Ud. ya esta logueado/a... Puede continuar con su compra",
        icon: "success",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        backdrop: true,
        confirmButtonText: "Continuar",
        buttonsStyling: false,
        customClass: {
            popup: "popupSwal",
            confirmButton: 'btn',
            cancelButton: 'btn',   
        }  
    })
    });
    }}
    );

    
    const imprimirDatosEnCarrito= () => {
    let usuarioSessionStorage = JSON.parse(sessionStorage.getItem("nuevoUsuario"));
    nombreID.innerHTML = usuarioSessionStorage.nombre + " " + usuarioSessionStorage.apellido;
    direccionID.innerHTML = usuarioSessionStorage.direccion;
}
