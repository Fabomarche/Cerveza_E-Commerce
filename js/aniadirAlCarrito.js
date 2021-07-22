var numeroDeLatas = document.getElementById("numeroDeLatas");
var pagarBtn = document.getElementById("pagarBtn");


var cantidadDeLatas = 0; //Número de latas en carrito HEADER
var mnjCantidadLatas = document.getElementById("mnjCantidadLatas")//en msj final carrito

var subtotal = document.getElementById("subtotal");
var subtotalANum = parseInt((document.getElementById("subtotal")).innerText);

var total = document.getElementById("total");

var pedido =[];//Carrito de pédido

const listaDeLatas = document.getElementById("listaDeLatas")

/*----------ARRAYS DE LATAS POR ESTILO PARA CONTADOR-----*/
var pack_microIpa = [];
var pack_ipaYanky = [];
var pack_brutIpa = [];
var pack_hoppySaison = [];
var pack_stoutImperio = [];
var pack_britishRed = [];
var pack_mandagose = [];
var pack_pinky = [];
var pack_rice = [];
var pack_pilsen = [];


/*----------FIN ARRAYS DE LATAS POR ESTILO PARA CONTADOR-----*/

const aniadir = (estilo) => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.unshift(estilo);
    subtotalANum += pedido[0].precio;
    subtotal.innerHTML = subtotalANum;
    total.innerHTML = (subtotalANum * 1.21).toFixed(2);

    $("#carritoLink").animate({"backgroundColor":"#d4188c"},100).animate({"backgroundColor":"#111111"},200)
    .hover(()=>{$("#carritoLink").css("backgroundColor","#d4188c")},
            ()=>{$("#carritoLink").css("backgroundColor","#111111")}
    );
   
    
    let elemento = document.createElement('div');
    elemento.className = `contenedorMiniLata`;//clase al contenedor??
    elemento.innerHTML = `
        <div class="elementoLata">
            
            <div class="imagenLataChica" id="mini-${estilo.id}">
                <img src="${estilo.rutaImagen}" alt="lata de cerveza ${estilo.nombre}">
            </div>
            
            <p>${estilo.nombre}</p>
        
        </div>
        
        <div class="contadorMismaLata">
            <p id="restar-${estilo.id}"><</p>
            <p id="num-${estilo.id}" class="numMiniLatas">0</p>
            <p id="sumar-${estilo.id}">></p>
        </div>
    `;
    
    switch (estilo) {
        case microIpa:
            pack_microIpa.push(estilo)
            break;
        case ipaYanky:
            pack_ipaYanky.push(estilo)
            break;
        case brutIpa:
            pack_brutIpa.push(estilo)
            break;
        case hoppySaison:
            pack_hoppySaison.push(estilo)
            break;
        case stoutImperio:
            pack_stoutImperio.push(estilo)
            break;
        case mandagose:
            pack_mandagose.push(estilo)
            break;
        case britishRed:
            pack_britishRed.push(estilo);
            break;
        case pinky:
            pack_pinky.push(estilo)
            break;    
        case rice:
            pack_rice.push(estilo)
            break;
        case pilsen:
            pack_pilsen.push(estilo)
            break;                            
    }
    
    listaDeLatas.appendChild(elemento);

}   
    


/* const abrirCarrito = () => {
    carrito.style.display = "block";
    packDelComprador.style.display = "block";
} */ //VIEJA FUNCION .ONCLICK

$("#carritoLink").click(() => {
    $("#packDelComprador").fadeIn(500);
    $("#carrito").fadeIn(1000);
})


$("#pagarBtn").click(() => {
    if (usuarioSessionStorage = null) {
        $("#iniciarSesion").slideDown(500)
    }
    $("#gracias").fadeIn(1000);
})

/* const pagar = () => {
    if (usuarioSessionStorage = null) {
        $("#iniciarSesion").slideDown(500)
    }
    )
    gracias.style.display = "block"; */
//VIEJA FUNCION .ONCLICK

const sacarMensajeGracias = () => {
    gracias.style.display = "none";
    
}

