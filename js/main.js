class Cerveza{
    constructor(nombre, estilo, envase, precio, stock){
    this.nombre = nombre;
    this.estilo = estilo;
    this.envase = envase;
    this.precio = precio;
    this.stock = stock;
    };
   
};

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

var lupuladasArray = [microIpa, ipaYanky, brutIpa, neipa];
var maltosasArray = [stoutImperio, britishRed];
var sourArray = [mandagose, pinky];
var lagerArray = [rice, pilsen];

const ordenarPorPrecio = (array) => array.sort(function(a, b) {return a.precio - b.precio;});

console.log(ordenarPorPrecio(lupuladasArray));


var cervezasArray = [lupuladasArray, maltosasArray, sourArray, lagerArray];

var pedido =[];

const montoAPagar = (array) => {
    let costo = 0;
    for (let i = 0; i < array.length; i++){
        costo += array[i].precio;
    }
    return costo;
    };

var packDeLatas = (array) => {
    let pack= [];
    for (let i = 0; i < array.length; i++){
        pack.push(array[i].nombre)
    }
    return pack.join(", ");
}


var edad = parseInt(prompt("¿qué edad tiene?"));

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


function Usuario(nombre, apellido, edad, direccion){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.direccion = direccion
};






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
       
       
        alert(nuevoUsuario.nombre + " " + nuevoUsuario.apellido + ` tu pedido de ${pedido.length} latas Laurus a sido confirmado será entregado en ` + nuevoUsuario.direccion +  `. costo a abonar: $ ${montoAPagar(pedido)}\nSu pedido consta de las siguientes latas ${packDeLatas(pedido)} ¡Gracias por su compra!`);
    
    }else{ alert("Ud. es menor de edad no puede comprar bebidas alcohólicas")};

};

compraMayorDeEdad(edad);
