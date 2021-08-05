//Constructor de Cervezas
class Cerveza{
    constructor(id, nombre, estilo, envase, precio, stock, rutaImagen, descripcion, unidadesPedidas){
        this.id = id;
        this.nombre = nombre;
        this.estilo = estilo;
        this.envase = envase;
        this.precio = precio;
        this.stock = stock;
        this.rutaImagen = rutaImagen;
        this.unidadesPedidas = 1;
        this.descripcion = descripcion;
    };
};

//Variedades de Cervezas
var microIpa = new Cerveza("microIpa","Micro IPA", "Lupuladas", "Lata", 280, 1000, "./images/laurus-micro-ipa.png", 'Mezcla de IPA y Session NEIPA esta cerveza de absurdamente bajo alcohol ostenta la carga de lúpulo de una neipa. Y como si fuera poco fue co-fermentada con Saccharomyces “Bruxellensis” y una levadura aisalda de flores de California que ataca los glicósidos del lúpulo, liberando nuevos aromas.');
var ipaYanky = new Cerveza("ipaYanky","IPA Yanky", "Lupuladas", "Lata", 200, 500, "./images/laurus-ipa-yanky.png", 'Sabor a lúpulo de medio a alto, y debería reflejar el carácter de los lúpulos americanos (cítrico, floral, resinoso, frutado o a pino). Amargor de medio-alto a muy alto, aunque la malta debe balancear el fuerte carácter del lúpulo. Sabor a malta de bajo a medio, límpido, aunque son aceptables bajos niveles de caramelo o de tostado.');
var brutIpa = new Cerveza("brutIpa","Brut IPA", "Lupuladas", "Lata", 280, 50, "./images/laurus-brut-ipa.png", '"Conocimos este estilo en 2018 en EEUU, junto a otra cervecería platense amiga, con quien al volver del intenso viaje cocinamos una de las primeras Brut del país. Diseñada para ser una especie de champagne de lúpulo, muy seca, gracias al uso de enzimas amiloglucosidasas en su fermentación"');
var hoppySaison = new Cerveza("hoppySaison","Hoppy Saison", "Lupuladas", "Botella", 250, 50, "./images/laurus-sasion.png", 'Una cerveza que posee levadura liquida WLP590, pimienta de jamaica y cáscara de lima. Con Dry Hop de lúpulos Citra y Centennial. Súper seca, con densidad final 1005 kg/m3, es una cerveza de gran tomabilidad e ideal para los días calurosos.');

var stoutImperio = new Cerveza("stoutImperio","Imperio Ruso", "Maltosas", "Lata", 280, 20, "./images/laurus-stout-imperio-ruso.png", 'Esta cerveza fue elaborada con 8 maltas especiales, entre ellas bastante cebada tostada y mucho cacao. Una cerveza negra en la que destacan notas a café, chocolate, y caramelos. Se encuentran notas terrosas características de este estilo, y un amargor medio-alto.');
var britishRed = new Cerveza("britishRed","British Red", "Maltosas", "Lata", 200, 20, "./images/laurus-british-red.png", 'Esta cerveza, de tonos rojizos oscuros, está centrada en la malta (maris otter y caramelos medios ingleses), complementada con delicados ésteres frutados provenientes de la levadura líquida utilizada y con un toque terroso gracias al lúpulo Fuggles. Es de bajo alcohol y alta experiencia sensorial.');


var mandagose = new Cerveza("mandagose","Mandagose", "Sour", "Lata", 250, 6, "./images/laurus-Mangose.png", 'Una cerveza nacida por el gusto a levaduras y microorganismos poco convencionales, coinoculada con levaduras Kviek Opshaug y Lactobasilos Plantarum. Las mandarinas de estación hicieron el resto aportando aroma y sabor frutal, sumado a una íncreible tomabilidad ideal para los días de calor.');
var pinky = new Cerveza("pinky","Pinky y Cerebro", "Sour", "Lata", 280, 250, "./images/laurus-pinky-cerebro.png",'Una Kettle Sour Ale con frutillas, ananá, arándanos, moras, frambuesas y grosellas rojas. El perfil frutal y chispeante que tiene la hace ideal para los días de calor ya que tiene una increíble tomabilidad. ¡Una cerveza que va a dominar tu mundo y tu paladar!');

var rice = new Cerveza("rice","Rice Rice Baby", "Lager", "Lata", 180, 25, "./images/laurus-rice-baby.png", 'Elegimos este estilo oriental tan característico apoyándonos en la experiencia y conocimientos que tiene los amigos de Dos Dingos en Asia y Oceanía. La elaboramos con 40% de arroz yamaní e incorporamos un mix de lúpulos de origen australiano y japonés: Vic Secret y Sorachi Ace. Ambos en whirplool y en un elegante dry hop.');
var pilsen = new Cerveza("pilsen","Hoppy Pilsen", "Lager", "Lata", 150, 24, "./images/laurus-pilsen.png", 'Reversionamos nuestra clásica y querida Pils que incorpora Huell Melon y Cascade, dos lúpulos norteamericanos, frutados y cítricos que se potencian entre sí. Lxs que buscan una rubia tranqui, lxs hopheads que quieren tomabilidad, lxs cansados de las sours que necesitan limpiar, y algunx más también, he aquí su bálsamo.');

//Listas de Cervezas por Estilos
var lupuladasArray = [microIpa, ipaYanky, brutIpa, hoppySaison];
var maltosasArray = [stoutImperio, britishRed];
var sourArray = [mandagose, pinky];
var lagerArray = [rice, pilsen];

var listaArrayCervezas = [lupuladasArray, maltosasArray, sourArray, lagerArray];
var todasCervezasArray = [microIpa, ipaYanky, brutIpa, hoppySaison, stoutImperio, britishRed, mandagose, pinky, rice, pilsen];