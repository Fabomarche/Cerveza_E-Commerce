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