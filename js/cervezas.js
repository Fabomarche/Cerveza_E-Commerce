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