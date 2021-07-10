var modal = document.getElementById("modalBackground");
var textModal = document.getElementById("textModal");
var siBtn = document.getElementById("siBtn");
var noBtn = document.getElementById("noBtn");


const si18 = () => {

    modal.style.display = "none";

}


const no18 = () => {

    textModal.innerText = "La venta a menores de 18 años esta prohíbida. No podés ingresar a este sitio";
    textModal.style.color = "red"
    siBtn.style.display = "none";
    noBtn.style.display = "none";
}