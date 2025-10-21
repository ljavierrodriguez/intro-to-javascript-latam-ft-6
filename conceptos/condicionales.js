/* Condicionles */
/* 
if (condicion) {
    // codigo a ejecutar si la condicion es verdadera
}

if (condicion) {
    // codigo a ejecutar si la condicion es verdadera
} else {
    // codigo a ejecutar si la condicion es falsa
}

if (condicion1) {
    // codigo a ejecutar si la condicion1 es verdadera
} else if (condicion2) {
    // codigo a ejecutar si la condicion2 es verdadera
} else {
    // codigo a ejecutar si ninguna condicion es verdadera
}

Operador Ternario:
condicion ? expresionSiVerdadero : expresionSiFalso;

Operadores Lógicos:
&& (AND): Verdadero si ambas condiciones son verdaderas.
|| (OR): Verdadero si al menos una de las condiciones es verdadera.
! (NOT): Invierte el valor de verdad de una condición.

Operadores de Comparación:
== : Igualdad (compara valores, no tipos)
=== : Igualdad estricta (compara valores y tipos)
!= : Desigualdad (compara valores, no tipos)
!== : Desigualdad estricta (compara valores y tipos
>, <, >=, <= : Mayor que, Menor que, Mayor o igual que, Menor o igual que

Operadores Aritméticos:
+ : Suma
- : Resta
* : Multiplicación
/ : División
% : Módulo (resto de una división)

*/
let a = 6;
let b = 3;
let c = 9;

if (a > b) {
    console.log(`${a} es mayor que ${b}`);
}

if (a < b) {
    console.log(`${a} es menor que ${b}`);
} else {
    console.log(`${a} no es menor que ${b}`);
}

if (a > b && a > c) {
    console.log(`${a} es el mayor`);
} else if (b > c) {
    console.log(`${b} es el mayor`);
} else {
    console.log(`${c} es el mayor`);
}

if (a === b || a === c || b === c) {
    console.log(`${a} es igual a ${b} o ${c}`);
}

let respuesta = (a > c) ? `${a} es mayor que ${c}` : `${a} no es mayor que ${c}`;
console.log(respuesta);
