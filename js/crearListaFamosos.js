$("#btnFamosos").click( () => {
    let mostrarFamosos = '';

    $.getJSON("http://hp-api.herokuapp.com/api/characters/students", 
function (datos) {
    datos.forEach(famoso => mostrarFamosos +=
        `<div id="famoso">
                <p>${famoso.name} de la casa ${famoso.house}</p>
        </div>`)
        $('#listaFamosos').html(mostrarFamosos); 
})

})



/* const creadorFamosos = () => {
    let mostrarFamosos = '';

    $.getJSON("http://hp-api.herokuapp.com/api/characters/students", 
function (datos) {
    datos.forEach(famoso => mostrarFamosos +=
        `<div id="famoso">
                <p>${famoso.name} de la casa ${famoso.house}</p>
        </div>`)
        $('#listaFamosos').html(mostrarFamosos); 
})

}

creadorFamosos(); */