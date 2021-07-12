var numeroDeLatas = document.getElementById("numeroDeLatas");
var pagarBtn = document.getElementById("pagarBtn");

var cantidadDeLatas = 0; //Número de latas en carrito HEADER
var mnjCantidadLatas = document.getElementById("mnjCantidadLatas")//en msj final carrito

var pedido =[];//Carrito de pédido


const aniadirBrutIpa = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.push(brutIpa);
}

const aniadirIpaYanky = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.push(ipaYanky);
}

const aniadirMicroIpa = () => {
    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    pedido.push(microIpa);
}

const abrirCarrito = () => {
    carrito.style.display = "block";
}

const pagar = () => {
    iniciarSesion.style.display = "block";
}