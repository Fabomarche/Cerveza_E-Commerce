var numeroDeLatas = document.getElementById("numeroDeLatas");
var pagarBtn = document.getElementById("pagarBtn");


var cantidadDeLatas = 0; //Número de latas en carrito HEADER
var mnjCantidadLatas = document.getElementById("mnjCantidadLatas")//en msj final carrito

var subtotal = document.getElementById("subtotal");
var subtotalANum = parseInt((document.getElementById("subtotal")).innerText);

var total = document.getElementById("total");

var pedido =[];//Carrito de pédido

const listaDeLatas = document.getElementById("listaDeLatas")


const aniadir = (estilo) => {
    let index = pedido.findIndex(birra => birra.id == estilo.id);
        
    if(index != -1) {
            pedido[index].unidadesPedidas += 1;
            subtotalANum += pedido[index].precio;
            subtotal.innerHTML = subtotalANum;
            total.innerHTML = (subtotalANum * 1.21).toFixed(2);
        }else{
            pedido.unshift(estilo);
            subtotalANum += pedido[0].precio;
            subtotal.innerHTML = subtotalANum;
            total.innerHTML = (subtotalANum * 1.21).toFixed(2);
        };

    creadorLatasEnCarrito();    

    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    
        $("#carritoLink").animate({"backgroundColor":"#d4188c"},100).animate({"backgroundColor":"#111111"},200)
    .hover(()=>{$("#carritoLink").css("backgroundColor","#d4188c")},
            ()=>{$("#carritoLink").css("backgroundColor","#111111")}
    );//animacion boton carrito en header

}   
    

/*-------BOTON CARRITO HEADER---*/
$("#carritoLink").click(() => {
    $("#packDelComprador").fadeIn(500);
    $("#carrito").fadeIn(1000);
})
/*------CERRRAR container_pack ----------*/
$("#cerrarPack").click(() => {
    $("#packDelComprador").fadeOut(500);
    $("#carrito").fadeOut(500);
})


$("#pagarBtn").click( () => {
    if (sessionStorage.getItem("nuevoUsuario") == null) {
        $("#iniciarSesion").slideDown(500)
    }else{
        Swal.fire({
            background: "white",
            title: "¡Compra Confirmada!",
            text: "A brindar...",
            icon: "success",
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
            backdrop: true,
            confirmButtonText: "Salud!",
            buttonsStyling: false,
            customClass: {
                popup: 'popupSwal',
                confirmButton: 'btn',
                
            }
        });
    }
    
    
})


const sacarMensajeGracias = () => {
    gracias.style.display = "none";
    
}


