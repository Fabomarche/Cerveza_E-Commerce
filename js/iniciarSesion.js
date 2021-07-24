
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



$('#logInBtn').click(() => {
    let nombre = document.getElementById("nameform").value;
    let apellido = document.getElementById("lastname").value;
    let direccion = document.getElementById("direction").value;
    let nuevoUsuario = new Usuario(nombre, apellido, direccion);
    
    sessionStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));

    imprimirDatosEnCarrito();
    $("#iniciarSesion").fadeOut(500, ()=>{Swal.fire({
        background: "white",
        title: "¡Bienvenido!",
        text: "Ud. ya esta logueado...",
        icon: "success",
        width: "50%",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        confirmButtonText: "Pagar",
        buttonsStyling: false,
        showCancelButton: true,
        cancelButtonText: "Continuar",
        customClass: {
            popup: "popupSwal",
            confirmButton: 'btn',
            cancelButton: 'btn',   
        }
        
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            Swal.fire({
                background: "white",
                title: "¡Compra Confirmada!",
                text: "A brindar...",
                icon: "success",
                width: "50%",
                allowOutsideClick: true,
                allowEscapeKey: true,
                allowEnterKey: true,
                confirmButtonText: "Salud!",
                buttonsStyling: false,
                customClass: {
                    popup: "popupSwal",
                    confirmButton: 'btn',
                    
                }
            });
          } 
    });
    });
    }
    );

    
const imprimirDatosEnCarrito= () => {
    let usuarioSessionStorage = JSON.parse(sessionStorage.getItem("nuevoUsuario"));
    nombreID.innerHTML = usuarioSessionStorage.nombre + " " + usuarioSessionStorage.apellido;
    direccionID.innerHTML = usuarioSessionStorage.direccion;
}
