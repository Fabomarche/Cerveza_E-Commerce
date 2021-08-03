var mostrarModal = $("#mostrarImageModal");
const creadorImageModal = (estilo) => {
    mostrarModal += `
    <div id="imageModal-${estilo.id}" class="imageModalContent">
        <span class="closeModal">X</span>
        <img src="${estilo.rutaImagen}" alt="lata de cerveza ${estilo.nombre}" class="imageModalContent">
        <div class="textoModal">
            <h5>${estilo.nombre}</h5>
            <p>${estilo.descripcion}</p>
        </div>
    </div>`
$('#mostrarImageModal').html(mostrarModal);
$(".imageModalBakcgroud").css("display","block")

$(".closeModal").click(()=>{
    $(".imageModalBakcgroud").css("display","none")
    $("#mostrarImageModal").empty();
})

}


