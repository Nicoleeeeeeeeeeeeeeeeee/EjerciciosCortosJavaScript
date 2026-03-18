



// 1.1 = Declara una variable nombre con var, asígnale tu nombre y luego reasigna un nuevo nombre. Muestra ambos en consola.

var nombre = "Nicole";
console.log(nombre);

nombre = "Jessica";
console.log(nombre);




// 1.2: Intenta hacer lo mismo pero con const y explica por qué falló.

/* const nombreConst = "Nicole";
nombreConst = "Jessica";

console.log(nombreConst); */

// "const" es una variable constante, por lo tanto no se le puede asignar nuevo valor




// 1.3: Declara una variable edad con let dentro de un bloque if (sin que se cumpla la condición) y luego intenta acceder a ella fuera del bloque. Explica el resultado.

if (false) {
  let edad = 20;
}

console.log(edad);

// Esto no funciona porque con let, las variables solo existen dentro de los "{}"