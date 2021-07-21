//Constructor de Cervezas
class Cerveza{
    constructor(id, nombre, estilo, envase, precio, stock, rutaImagen){
        this.id = id;
        this.nombre = nombre;
        this.estilo = estilo;
        this.envase = envase;
        this.precio = precio;
        this.stock = stock;
        this.rutaImagen = rutaImagen;
    };
};

//Variedades de Cervezas
var microIpa = new Cerveza("microIpa","Micro IPA", "Lupuladas", "Lata", 280, 1000, "./images/laurus-micro-ipa.png");
var ipaYanky = new Cerveza("ipaYanky","IPA Yanky", "Lupuladas", "Lata", 200, 500, "./images/laurus-ipa-yanky.png");
var brutIpa = new Cerveza("brutIpa","Brut IPA", "Lupuladas", "Lata", 280, 50, "./images/laurus-brut-ipa.png");
var hoppySaison = new Cerveza("hoppySaison","Hoppy Saison", "Lupuladas", "Botella", 250, 50, "./images/laurus-sasion.png");

var stoutImperio = new Cerveza("stoutImperio","Stout Imperio Ruso", "Maltosas", "Lata", 280, 20, "./images/laurus-stout-imperio-ruso.png");
var britishRed = new Cerveza("britishRed","British Red", "Maltosas", "Lata", 200, 20, "./images/laurus-british-red.png");


var mandagose = new Cerveza("mandagose","Mandagose", "Sour", "Lata", 250, 6, "./images/laurus-Mangose.png");
var pinky = new Cerveza("pinky","Pinky y Cerebro", "Sour", "Lata", 280, 250, "./images/laurus-pinky-cerebro.png");

var rice = new Cerveza("rice","Rice Rice Baby", "Lager", "Lata", 180, 25, "./images/laurus-rice-baby.png");
var pilsen = new Cerveza("pilsen","Hoppy Pilsen", "Lager", "Lata", 150, 24, "./images/laurus-pilsen.png");

//Listas de Cervezas por Estilos
var lupuladasArray = [microIpa, ipaYanky, brutIpa, hoppySaison];
var maltosasArray = [stoutImperio, britishRed];
var sourArray = [mandagose, pinky];
var lagerArray = [rice, pilsen];

var todasCervezasArray = [lupuladasArray, maltosasArray, sourArray, lagerArray];