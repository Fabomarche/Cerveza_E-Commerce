const creadorLatasEnCarrito = () => {
    let mostrarLatas = '';
    
    pedido.forEach(lata => mostrarLatas +=
        `<div class="elementoLata">
            <div class="elementoLata">
                
                <div class="imagenLataChica" id="mini-${lata.id}">
                    <img src="${lata.rutaImagen}" alt="lata de cerveza ${lata.nombre}">
                </div>
                
                <p>${lata.nombre}</p>
        
            </div>
        
            <div class="contadorMismaLata">
                <button id="restar-${lata.id}" class="flechasContadorLatas paddingRight" onclick="restarLata(${lata.id})"><</button>
                <p id="num-${lata.id}" class="numMiniLatas">${lata.unidadesPedidas}</p>
                <button id="sumar-${lata.id}" class="flechasContadorLatas paddingLeft" onclick="sumarLata(${lata.id})">></button>
            </div>
        </div>`)

    $('#listaDeLatas').html(mostrarLatas);
    
}

