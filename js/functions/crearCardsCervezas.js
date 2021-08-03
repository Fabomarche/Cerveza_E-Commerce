const CardsCreator = () => {
    let showCards = '';
    let seleccionFiltroLatas="";
    /* seleccionFiltroLatas = todasCervezasArray; */
    let filtroLatas = ()=> {
        if($("#filtroEstilos").val() == "todas"){
            seleccionFiltroLatas = todasCervezasArray;
        }else{
            let arrayEstilo = $("select option:selected").attr('id');
            console.log(arrayEstilo);
            switch(arrayEstilo) {
                case "lupuladasArray":
                    seleccionFiltroLatas = listaArrayCervezas[0];
                    break;
                case "maltosasArray":
                    seleccionFiltroLatas = listaArrayCervezas[1];
                    break;
                case "sourArray":
                    seleccionFiltroLatas = listaArrayCervezas[2];
                    break;
                case "lagerArray":
                    seleccionFiltroLatas = listaArrayCervezas[3];
                    break;
            }
        }
    };

    filtroLatas();
    
    

    seleccionFiltroLatas.map(cerveza => showCards += 
        `<div class="card" id="card-${cerveza.id}">
            <div "class="card-image">
                <img id="cardImg-${cerveza.id}" src="${cerveza.rutaImagen}" alt="lata de cerveza ${cerveza.nombre}" onclick="creadorImageModal(${cerveza.id})">
            </div>
            <h5 class="card-title">${cerveza.nombre}</h5>
            <ul class="card-list">
                <li class="item-card-list">${cerveza.estilo}</li>
                <li class="item-card-list">Stock ${cerveza.stock}</li>
                <li class="item-card-list price">$ ${cerveza.precio}</li>
            </ul>
            <button class="card-btn" onclick="aniadir(${cerveza.id})">Agregar</button>
        </div>`)

    $('.cards-group').html(showCards);
}
    

CardsCreator();
