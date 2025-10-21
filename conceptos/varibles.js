/* 
Variables en JavaScript

var: Declaración de variable con alcance global o de función. Ejemplo: var nombre = "Juan";

let: Declaración de variable con alcance de bloque. Ejemplo: let edad = 30;

const: Declaración de constante con alcance de bloque. No puede ser reasignada. Ejemplo: const PI = 3.14;

*/

/* Variables de tipo String */
var saludo = "Hola, Mundo!";
let nombre = "Juan";
const apellido = "Pérez";
let direccion = 'Calle Falsa 123';
let mensaje = `Bienvenido, ${nombre} ${apellido} lorem ipsum dolor sit amet. `;


/* Variables de tipo Number */
var edad = 25;
let altura = 1.75;
const temp = -2.5;

/* Variables de tipo Boolean */
var esEstudiante = true;
let tieneTrabajo = false;

/* Variables de tipo Object */
const persona = {
    nombre: "Ana",
    apellido: "García",
    edad: 28,
    ciudad: "Madrid",
    tieneTrabajo: true
};
/* Variables de tipo Array */
let numeros = [1, 2, 3, 4, 5];
const frutas = ["manzana", "banana", "cereza"];
const estudiantes = [
    { nombre: "Luis", edad: 22 },
    { nombre: "María", edad: 24 },
    { nombre: "Carlos", edad: 23 }
];
/* Variables de tipo Null */
let valorNulo = null;
let users = null

/* Variables de tipo Undefined */
let valorIndefinido; // No se le asigna ningún valor