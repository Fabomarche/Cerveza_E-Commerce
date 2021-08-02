

const CardsCreator = (seleccionFiltroLatas) => {
    let showCards = '';
    let filtroLatas = ()=> {
        if($("#filtroEstilos").val() == "todas"){
            seleccionFiltroLatas = todasCervezasArray;
        }else{
            seleccionFiltroLatas = $("#filtroEstilos").val() + "Array";
        }
        
    };
   
    filtroLatas();
    console.log(seleccionFiltroLatas);

    seleccionFiltroLatas.map(cerveza => showCards += 
        `<div class="card" id="card-${cerveza.id}">
            <div class="card-image">
                <img src="${cerveza.rutaImagen}" alt="lata de cerveza ${cerveza.nombre}">
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

$("#filtroEstilos").on('change', ()=>{CardsCreator()});