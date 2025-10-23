/* Ciclos en Javascript */
/* 
Un ciclo es una estructura de control que permite repetir un bloque de código 
varias veces hasta que se cumpla una condición específica. En JavaScript, existen 
varios tipos de ciclos, entre los más comunes se encuentran:

1. Ciclo "for":

El ciclo "for" se utiliza cuando se conoce de antemano cuántas veces se debe repetir 
el bloque de código. La sintaxis básica es la siguiente:

for (inicialización; condición; incremento) {
    // Código a ejecutar en cada iteración
}

2. Ciclo "while":

El ciclo "while" se utiliza cuando no se sabe de antemano cuántas veces se debe repetir 
el bloque de código. La sintaxis básica es la siguiente:

while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}

3. Ciclo "do...while":

El ciclo "do...while" es similar al ciclo "while", pero garantiza que el bloque de 
código se ejecute al menos una vez antes de evaluar la condición. La sintaxis básica 
es la siguiente:

do {
    // Código a ejecutar
} while (condición);

4. Ciclo "for...in":

El ciclo "for...in" se utiliza para iterar sobre las propiedades enumerables de un 
objeto. 
La sintaxis básica es la siguiente:

for (variable in objeto) {
    // Código a ejecutar para cada propiedad del objeto
}

5. Ciclo "for...of":

El ciclo "for...of" se utiliza para iterar sobre los elementos de una colección 
iterable, como un array o una cadena de texto. La sintaxis básica es la siguiente:

for (variable of iterable) {
    // Código a ejecutar para cada elemento del iterable
}

*/

// Ejemplos de cada tipo de ciclo:

// Ciclo "for"
for (let i = 1; i <= 10; i++) {
    console.log("Ciclo for: " + i);
}

let nombres = ["Ana", "Luis", "Carlos", "María", "Pedro"];

for (let i = 0; i < nombres.length; i++){
    console.log("Nombre " + (i + 1) + ": " + nombres[i]);
}

// Ciclo "while"
let contador = 1;  
while (contador <= 10) {
    console.log("Ciclo while: " + contador);
    contador++;
}

let index = 0;
while(index < nombres.length){
    console.log("Nombre (while): " + nombres[index]);
    index++;
}

// Ciclo "do...while"
let numero = 1;
do {
    console.log("Ciclo do...while: " + numero);
    numero++;
} while (numero <= 10);

const objeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

for(let propiedad in objeto){
    console.log(propiedad + ": " + objeto[propiedad]);
}

for(let indice in nombres){
    console.log(`Indice: ${indice}`)
    console.log("Nombre (for...in): " + nombres[indice]);
}

for(let nombre of nombres){
    console.log("Nombre (for...of): " + nombre);
}

let nombre2 = "Luis Javier";
for(let letra of nombre2){
    console.log("Letra: " + letra);
}

for (let i = 0; i <= nombre2.length; i++){
    console.log("Letra (for): " + nombre2[i]);
} 

nombres.forEach(function(nombre, indice, array){
    console.log(nombre)
    console.log(indice)
    console.log(array)
    console.log("Nombre (forEach): " + nombre);
})

let numeros2 = [1,2,3,4,5,6,7,8,9,10];
numeros2.map(function(numero){
    console.log("Número (map): " + numero**2);
})

let cuadrados = function(numero){
    return numero ** 2;
}

let resultados = numeros2.map(cuadrados);


let resultados2 = numeros2.filter(function(numero){
    return numero % 2 === 0;
})

console.log("Números pares (filter): " + resultados2);