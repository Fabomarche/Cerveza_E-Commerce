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
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.unshift(estilo);
    subtotalANum += pedido[0].precio;
    subtotal.innerHTML = subtotalANum;
    total.innerHTML = (subtotalANum * 1.21).toFixed(2);
    
    let elemento = document.createElement('div');
    elemento.innerHTML = `
        <div class="elementoLata">
            
            <div class="imagenLataChica">
            <img src="${estilo.rutaImagen}" alt="lata de cerveza ${estilo.nombre}">
            </div>
            <p>${estilo.nombre}</p>
        </div>
    `;
    
    listaDeLatas.appendChild(elemento);
}


/* const aniadirBrutIpa = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.unshift(brutIpa);
    subtotalANum += pedido[0].precio;
    subtotal.innerHTML = subtotalANum;
    total.innerHTML = (subtotalANum * 1.21).toFixed(2);
    
    let elemento = document.createElement('div');
    elemento.innerHTML = `
        <div class="elementoLata">
            <div class="imagenLataChica">
            <img src="./images/laurus-brut-ipa.png" alt="lata de cerveza">
            </div>
            <p>${brutIpa.nombre}</p>
        </div>
    `;
    listaDeLatas.appendChild(elemento);
}

const aniadirIpaYanky = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.unshift(ipaYanky);
    subtotalANum += pedido[0].precio;
    subtotal.innerHTML = subtotalANum;
    total.innerHTML = subtotalANum * 1.21;
    
    let elemento = document.createElement('div');
    elemento.innerHTML = `
        <div class="elementoLata">
            <div class="imagenLataChica">
            <img src="./images/laurus-ipa-yanky.png" alt="lata de cerveza">
            </div>
            <p>${ipaYanky.nombre}</p>
        </div>
    `;
    listaDeLatas.appendChild(elemento);
}

const aniadirMicroIpa = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.unshift(microIpa);
    subtotalANum += pedido[0].precio;
    subtotal.innerHTML = subtotalANum;
    total.innerHTML = (subtotalANum * 1.21).toFixed(2);
    
    let elemento = document.createElement('div');
    elemento.innerHTML = `
        <div class="elementoLata">
            <div class="imagenLataChica">
            <img src="./images/laurus-micro-ipa.png" alt="lata de cerveza">
            </div>
            <p>${microIpa.nombre}</p>
        </div>
    `;
    listaDeLatas.appendChild(elemento);
} */

const abrirCarrito = () => {
    carrito.style.display = "block";
    packDelComprador.style.display = "block";
}

const pagar = () => {
    if (usuarioSessionStorage = null) {
        iniciarSesionBtn()
    }
    gracias.style.display = "block";
}

const sacarMensajeGracias = () => {
    gracias.style.display = "none";
    
}

