/* Solicitar al usuario ingresar su nombre*/
var nombreUsuario = prompt("Ingrese su nombre:");

/* Solicitar al usuario ingresar el nombre de la materia*/
var nombreColegio = prompt("Ingrese el nombre de su colegio:");

/*Solicitar al usuario ingresar 3 notas*/
var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

/* Verificar si las notas están en el rango del 0 al 10*/
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log("Por favor, ingrese notas válidas en el rango del 0 al 10.");
} else {
    /*Calcular el promedio*/
    var promedio = (nota1 + nota2 + nota3) / 3;

/*Mostrar el resultado, con 2 decimales*/
if (promedio >= 7) {
console.log("Great! Tu nota promedio es: " + promedio.toFixed(2));
} else {
console.log("Wrong. Tu nota promedio es: " + promedio.toFixed(2));
}
}