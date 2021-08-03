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

        lata.stock += 1;
        CardsCreator(); 
    }
    
}

const sumarLata = (lata) => {
    if(lata.stock !== 0){
        lata.unidadesPedidas += 1;

        lata.stock -= 1;
        CardsCreator(); 

        cantidadDeLatas += 1;
        numeroDeLatas.innerText = cantidadDeLatas.toString();
        mnjCantidadLatas.innerText = cantidadDeLatas.toString();

        subtotalANum += lata.precio;
        subtotal.innerHTML = subtotalANum;
        total.innerHTML = (subtotalANum * 1.21).toFixed(2);
        creadorLatasEnCarrito();

        }else{
            Swal.fire({
                background: "white",
                title: "No hay Stock",
                text: "Disculpe las molestias",
                icon: "error",
                allowOutsideClick: true,
                allowEscapeKey: true,
                allowEnterKey: true,
                backdrop: true,
                confirmButtonText: "Continuar",
                buttonsStyling: false,
                customClass: {
                    popup: 'popupSwal',
                    confirmButton: 'btn',
                    
                }
            });}
}


const sacarLata = (lata) => {
    pedido = pedido.filter((lataFiltrar) => {
        return lataFiltrar.id !== lata.id;
    })
    creadorLatasEnCarrito()
    cantidadDeLatas -= lata.unidadesPedidas;
    numeroDeLatas.innerText = cantidadDeLatas.toString();
    mnjCantidadLatas.innerText = cantidadDeLatas.toString();

    subtotalANum -= lata.precio * lata.unidadesPedidas;
    subtotal.innerHTML = subtotalANum;
    total.innerHTML = (subtotalANum * 1.21).toFixed(2);
    creadorLatasEnCarrito();

    if(lata.unidadesPedidas == 0){
        lata.unidadesPedidas = 1;
    }else{
        lata.stock += lata.unidadesPedidas;
    }
    
    CardsCreator();
}

/* $("#sacarLata").hover(()=>{
    $("#containerElementoLata p,  #containerElementoLata button, #containerElementoLata a").css({"color":"#990000"})}, 
    ()=>{$("#containerElementoLata p,  #containerElementoLata button, #containerElementoLata a").css({"color":"#F5F5DC"})}
    ); */