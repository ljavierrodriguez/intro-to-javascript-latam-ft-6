/* Funciones en Javascript */
/* 

Una función es un bloque de código diseñado para realizar una tarea específica. Se define 
una vez y se puede reutilizar en cualquier parte del programa.

Sintaxis básica para definir una función declarativa:

function nombreDeLaFuncion(parámetro1, parámetro2, ...) {
    // código a ejecutar
    return valor; // opcional
}

Sintaxis para una función expresiva (función anónima asignada a una variable):

const nombreDeLaFuncion = function(parámetro1, parámetro2, ...) {
    // código a ejecutar
    return valor; // opcional
};

Sintaxis para una función flecha (Arrow Function):

const nombreDeLaFuncion = (parámetro1, parámetro2, ...) => {
    // código a ejecutar
    return valor; // opcional
};

Alcance de las funciones:
- Las variables definidas dentro de una función tienen un alcance local y no pueden ser 
  accedidas desde fuera de la función.
- Las funciones pueden acceder a variables definidas en su ámbito externo (global o de 
  funciones superiores).

*/

function sumar(a, b) {
    const resultado = a + b;
    return resultado;
}

let resultado = sumar(5, 3); // Uso de función declarativa
console.log(`El resultado de la suma es: ${resultado}`);

const restar = function(a, b) {
    return a - b;
}
resultado = restar(10, 4); // Uso de función expresiva
console.log(`El resultado de la resta es: ${resultado}`);

const multiplicar = (a, b) => a * b;
resultado = multiplicar(6, 7); // Uso de función flecha
console.log(`El resultado de la multiplicación es: ${resultado}`);

// Función sin parámetros
function saludar() {
    console.log("¡Hola, bienvenido a JavaScript!");
}

saludar(); // Ejecuta la función saludar

Math.max(5, 10, 15); // Ejemplo de función incorporada que devuelve el valor máximo
Math.random(); // Ejemplo de función incorporada que devuelve un número aleatorio entre 0 y 1   
Math.floor(4.7); // Ejemplo de función incorporada que redondea hacia abajo al entero más cercano
Math.ceil(4.3); // Ejemplo de función incorporada que redondea hacia arriba al entero más cercano


function operaciones(fn, a, b) {
    return fn(a, b);
}

operaciones(sumar, 8, 12); // Uso de función como argumento
operaciones(restar, 20, 5); // Uso de función como argumento
operaciones(multiplicar, 3, 4); // Uso de función como argumento
operaciones((x, y) => x / y, 16, 4); // Uso de función flecha como argumento

[1, 3, 4, 5].forEach(function(numero) {
    console.log(`Número: ${numero}`);
}); // Uso de función anónima como callback

[1, 3, 4, 5].forEach(numero => console.log(`Número: ${numero}`)); // Uso de función flecha como callback

/* Parametros por defecto */
function potencia(base, exponente = 2) {
    return Math.pow(base, exponente);
}

console.log(potencia(5, 3));
