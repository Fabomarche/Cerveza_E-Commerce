var numeroDeLatas = document.getElementById("numeroDeLatas");
var pagarBtn = document.getElementById("pagarBtn");


var cantidadDeLatas = 0; //Número de latas en carrito HEADER
var mnjCantidadLatas = document.getElementById("mnjCantidadLatas")//en msj final carrito

var pedido =[];//Carrito de pédido

const listaDeLatas = document.getElementById("listaDeLatas")

const aniadirBrutIpa = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.push(brutIpa);
    
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
    pedido.push(ipaYanky);
    
    let elemento = document.createElement('div');
    elemento.innerHTML = `
        <div class="elementoLata">
            <div class="imagenLataChica">
            <img src="./images/laurus-ipa-yanky.png" alt="lata de cerveza">            </div>
            <p>${ipaYanky.nombre}</p>
        </div>
    `;
    listaDeLatas.appendChild(elemento);
}

const aniadirMicroIpa = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.push(microIpa);
    
    let elemento = document.createElement('div');
    elemento.innerHTML = `
        <div class="elementoLata">
            <div class="imagenLataChica">
            <img src="./images/laurus-micro-ipa.png" alt="lata de cerveza">
            <p>${microIpa.nombre}</p>
        </div>
    `;
    listaDeLatas.appendChild(elemento);
}

const abrirCarrito = () => {
    carrito.style.display = "block";
    packDelComprador.style.display = "block";
}

const pagar = () => {
    iniciarSesion.style.display = "block";
}