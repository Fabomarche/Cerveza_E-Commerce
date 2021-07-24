if (screen.width <= 576){

    $("#carritoLink").click(() => {
        $("#carritoLink").prop("href",'#container_pack')
    })
}

if (screen.width <= 768 || screen.width > 576){
    $("#carritoLink").click(() => {
        $(".card").css("width","50%")
    })
    
    
}

