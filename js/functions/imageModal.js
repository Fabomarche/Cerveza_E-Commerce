var mostrarModal;//container para modal imagen lata

const creadorImageModal = (estilo) => {
    mostrarModal = `
    <div id="imageModal-${estilo.id}" class="imageModalContent">
        <span class="closeModal">X</span>
        <img src="${estilo.rutaImagen}" alt="lata de cerveza ${estilo.nombre}" class="imageModalContent animate__animated animate__pulse">
        <div class="textoModal">
            <h5>${estilo.nombre}</h5>
            <p>${estilo.descripcion}</p>
            <button class="card-btn modal-btn" onclick="aniadir(${estilo.id});flashBackground()">Agregar</button>
            <p >Stock: <span id="modalStock">${estilo.stock}</span></p>
        </div>
    </div>`

$('#mostrarImageModal').html(mostrarModal);

$(".imageModalBackground").css("display","block")
.animate({"opacity":"1"});

$(".imageModalContent").animate({"opacity":"1"},500,"swing");
$(".textoModal").slideDown(1000,"swing");

$(".closeModal").click(()=>{
    $(".imageModalBackground").css("display","none")
    $("#mostrarImageModal").empty();
})

};

const flashBackground = () => {
    $(".imageModalBackground").animate({"backgroundColor":"beige"},100).animate({"backgroundColor":"transparent"},1000);
}; //animacion para evidenciar la suma al carrito de la lata en el modal



