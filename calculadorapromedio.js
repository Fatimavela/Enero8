
let nota1 = parseFloat(prompt("Ingrese la primera nota"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota"));

if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
  let promedio = (nota1 + nota2 + nota3) / 3;
  let nombre = prompt("Ingrese el nombre del alumno");
  let materia = prompt("Ingrese la materia");

  if (promedio >= 7) {
    alert(nombre + ", ¡felicidades! Has aprobado " + materia + " con un promedio de " + promedio.toFixed(2));
  } else {
    alert(nombre + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en " + materia + " es " + promedio.toFixed(2));
  }
} else {
  alert("Las notas ingresadas no son válidas. Por favor, ingrese notas entre 0 y 10.");
}