//Constructor de Cervezas
class Cerveza{
    constructor(nombre, estilo, envase, precio, stock){
    this.nombre = nombre;
    this.estilo = estilo;
    this.envase = envase;
    this.precio = precio;
    this.stock = stock;
    };
   
};

//Variedades de Cervezas
var microIpa = new Cerveza("Micro IPA", "Lupuladas", "Lata", 200, 1000);
var ipaYanky = new Cerveza("IPA Yanky", "Lupuladas", "Lata", 200, 500);
var brutIpa = new Cerveza("Brut IPA", "Lupuladas", "Lata", 250, 50);
var neipa = new Cerveza("NEIPA", "Lupuladas", "Lata", 230, 6);

var stoutImperio = new Cerveza("Stout Imperio Ruso", "Maltosas", "Lata", 180, 0);
var britishRed = new Cerveza("British Red", "Maltosas", "Lata", 180, 20);

var mandagose = new Cerveza("Mandagose", "Sour", "Lata", 250, 6);
var pinky = new Cerveza("Pinky y Cerebro", "Sour", "Lata", 280, 250);

var rice = new Cerveza("Rice Rice Baby", "Lager", "Lata", 180, 25);
var pilsen = new Cerveza("Hoppy Pilsen", "Lager", "Lata", 150, 24);

//Listas de Cervezas por Estilos
var lupuladasArray = [microIpa, ipaYanky, brutIpa, neipa];
var maltosasArray = [stoutImperio, britishRed];
var sourArray = [mandagose, pinky];
var lagerArray = [rice, pilsen];

var cervezasArray = [lupuladasArray, maltosasArray, sourArray, lagerArray];

/* //Función Ordenar por precio de menor a mayor
const ordenarPorPrecio = (array) => array.sort(function(a, b) {return a.precio - b.precio;});

console.log(ordenarPorPrecio(lupuladasArray)); */

//Carrito de pédido
var pedido =[];

//Función calcula suma a pagar
const montoAPagar = (array) => {
    let costo = 0;
    for (let i = 0; i < array.length; i++){
        costo += array[i].precio;
    }
    return costo;
    };

//Función nombres de latas compradas 
var packDeLatas = (array) => {
    let pack= [];
    for (let i = 0; i < array.length; i++){
        pack.push(array[i].nombre)
    }
    return pack.join(", ");
}

//Primer prompt +18
var edad = parseInt(prompt("¿qué edad tiene?"));

//Menú y eleción de latas
const menuLatas = () => { 
    var eleccionDeLata = parseInt((prompt(`Elegí un estilo de cerveza por su número\n1-Lupuladas\n2-Maltosas\n3-Sour\n4-Lager`)));
    
    switch (eleccionDeLata) {
        case 1:
            let lataElegidaLupulada = parseInt(prompt(`Elegí la lata que querés por su número\n1-${lupuladasArray[0].nombre}\n2-${lupuladasArray[1].nombre}\n3-${lupuladasArray[2].nombre}\n4-${lupuladasArray[3].nombre}`));
            pedido.push(lupuladasArray[lataElegidaLupulada - 1]);
            break;
        case 2:
            let lataElegidaMaltosa = parseInt(prompt(`Elegí la lata que querés por su número\n1-${maltosasArray[0].nombre}\n2-${maltosasArray[1].nombre}`));
            pedido.push(maltosasArray[lataElegidaMaltosa - 1]);
            break;
        case 3:
            let lataElegidaSour = parseInt(prompt(`Elegí la lata que querés por su número\n1-${sourArray[0].nombre}\n2-${sourArray[1].nombre}`));
            pedido.push(sourArray[lataElegidaSour - 1]);
            break;
        case 4:
            let lataElegidaLager = parseInt(prompt(`Elegí la lata que querés por su número\n1-${lagerArray[0].nombre}\n2-${lagerArray[1].nombre}`));
            pedido.push(lagerArray[lataElegidaLager - 1]);
            break;  
            
        default:
            alert("Esa no es una opción. Vuelva a intentar...")
            break;
        }
};        

//Objeto para crear Usuarios
function Usuario(nombre, apellido, edad, direccion){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.direccion = direccion
};




//Función Final para que compre el Usuario y se registre
const compraMayorDeEdad = (x) => {
    if (x >= 18) {

     
        menuLatas();

        const sumarLatasAlCarrito = () => { 
            var quiereOtraLata = prompt("¿Quiere otra lata? Si ó No").toLowerCase();
            if (quiereOtraLata == "si") {
                menuLatas();
                sumarLatasAlCarrito();
            }
        };

        sumarLatasAlCarrito ();        

        console.log(pedido);
     
        alert(`Para continuar debes registrarte`);
        var nombre = prompt("Escribe tu primer nombre");
        var apellido = prompt("Escribe tu Apellido");
        var direccion = prompt("Escribe tu localidad y dirección completa"); 
                     
        var nuevoUsuario = new Usuario(nombre, apellido, edad, direccion);
        console.log(nuevoUsuario);

        sessionStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));
       
       
        alert(nuevoUsuario.nombre + " " + nuevoUsuario.apellido + ` tu pedido de ${pedido.length} latas Laurus a sido confirmado será entregado en ` + nuevoUsuario.direccion +  `.\nSubtotal: $ ${montoAPagar(pedido)}\nCosto final más IVA: $ ${montoAPagar(pedido) * 1.21}\nSu pedido consta de las siguientes latas: ${packDeLatas(pedido)}\n¡Gracias por su compra!`);
        


    }else{ alert("Ud. es menor de edad no puede comprar bebidas alcohólicas")};

};

compraMayorDeEdad(edad);



var nombreID = document.getElementById("nombreID");
var cantidadLatas = document.getElementById("cantidadLatas");
var direccionID = document.getElementById("direccionID");
var listaLatas = document.getElementById("listaLatas");
var subtotal = document.getElementById("subtotal");
var total = document.getElementById("total");


var usuarioSessionStorage = JSON.parse(sessionStorage.getItem("nuevoUsuario"));
nombreID.innerHTML = usuarioSessionStorage.nombre + " " + usuarioSessionStorage.apellido;
direccionID.innerHTML = usuarioSessionStorage.direccion;
cantidadLatas.innerHTML = pedido.length;
listaLatas.innerHTML = packDeLatas(pedido);
subtotal.innerHTML = montoAPagar(pedido);
total.innerHTML = montoAPagar(pedido) * 1.21;

