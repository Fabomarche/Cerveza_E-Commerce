const restarLata = (lata) => {
    if (lata.unidadesPedidas > 0){
        lata.unidadesPedidas -= 1;

        cantidadDeLatas -= 1
        numeroDeLatas.innerText = cantidadDeLatas.toString();
        mnjCantidadLatas.innerText = cantidadDeLatas.toString();
    
        subtotalANum -= lata.precio;
        subtotal.innerHTML = subtotalANum;
        total.innerHTML = (subtotalANum * 1.21).toFixed(2);
        creadorLatasEnCarrito();
    }
    
}

const sumarLata = (lata) => {
    lata.unidadesPedidas += 1;

    cantidadDeLatas += 1
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();

    subtotalANum += lata.precio;
    subtotal.innerHTML = subtotalANum;
    total.innerHTML = (subtotalANum * 1.21).toFixed(2);
    creadorLatasEnCarrito();
}