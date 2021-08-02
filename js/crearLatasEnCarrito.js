const creadorLatasEnCarrito = () => {
    let mostrarLatas = '';
    
    $.get("./html/mostrarLatas.html",  function(html) {
        
        pedido.forEach(lata => {
            let view = html;
            view = view.replaceAll("[id]", lata.id)
            view = view.replaceAll("[nombre]", lata.nombre)
            view = view.replaceAll("[rutaImagen]", lata.rutaImagen)
            view = view.replaceAll("[unidadesPedidas]", lata.unidadesPedidas)
            mostrarLatas += view});

        $('#listaDeLatas').html(mostrarLatas)});
}
    
    


    /*  pedido.forEach(lata => mostrarLatas +=
        
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
 */
