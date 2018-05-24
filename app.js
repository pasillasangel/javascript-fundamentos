//let nombre = prompt('Cual es tu nombre?');
//let edad = prompt('Cual es tu edad?');

//document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;

//Consola
console.log(2+2);
console.log("Cadena");
console.log(true);

//var let const - camelcase - undercase - pascal case
var nombre = 'Juan';
nombre = 'Pedro';
console.log(nombre);

//let: para rescribir variables
let perrito = "Galleta";
perrito = "Rocky";
console.log(perrito);

//const: cuando la variable no va a cambiar
const producto = 'libro';
console.log(producto);

//concatenar
let texto;
texto = 'Java' + 'Script';
console.log(texto);

//########################################################Funciones JavaScript
//Colocar en mayusculas
let mayusculas = "MAYUSCULAS";
console.log(mayusculas.toUpperCase());

//Encontrar palabra
let mensajeLargo = 'Aprendiendo JavaScript, CSS, HTML: todas las tecnologias Webs.'
console.log(mensajeLargo.indexOf('CSS'));
console.log(mensajeLargo.indexOf('PHP'));

//Toma los caracteres seleccionados
console.log(mensajeLargo.substring(0,11));
console.log(mensajeLargo.slice(0,11));

//Separa en seciones la cadena
console.log(mensajeLargo.split(' '));

//Remplazar palabra
console.log(mensajeLargo.replace('CSS', 'GOLANG'));

//Busca palabra y regresa booleano
console.log(mensajeLargo.includes('GOLANG'));

//Repetir 5 veces la cadena
console.log(mensajeLargo.repeat(5));

//Numeros JavaScript
const numero1 = 30,
     numero2 = 20,
     numero3 = 20.20,
     numero4 = -1020,
     numero5 = -3;

     let resultado;

// SUMA
resultado = numero1 + numero2;
console.log(resultado);
// RESTA
resultado = numero1 - numero2;
console.log(resultado);
// MULTIPLICACION
resultado = numero1 * 2;
console.log(resultado);
// DIVISION
resultado = numero1 / numero2;
console.log(resultado);
// RESIDUO
resultado = numero1 % numero2;
console.log(resultado);
//PI
resultado = Math.PI;
console.log(resultado);
// REDONDEAR
resultado = Math.round(2.4);
console.log(resultado);
// REDONDEAR ARRIBA
resultado = Math.ceil(2.4);
console.log(resultado);
// REDONDEAR ABAJO
resultado = Math.floor(2.4);
console.log(resultado);
// RAIZ CUADRADA
resultado = Math.sqrt(20);
console.log(resultado);
// NUMERO ABSOLUTO
resultado = Math.abs(numero5);
console.log(resultado);
// POTENCIA
resultado = Math.pow(3,4);
console.log(resultado);
// MINIMO
resultado = Math.min(3,4,7,64,7,8,5,3,1);
console.log(resultado);
// MAXIMO
resultado = Math.max(3,5,6,4,3,555,753,23,542,234,66,664);
console.log(resultado);
// NUMERO ALEATORIO
resultado = Math.random();
console.log(resultado);
// JERARQUIA
resultado = (29 + 30) - 12;
console.log(resultado);
// JUEGO
let puntaje = 10;
puntaje++
puntaje--
puntaje+3
puntaje-3
console.log(puntaje);