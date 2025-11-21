// ========================================
// ¿QUÉ SON LOS CALLBACKS?
// ========================================
// Un callback es una función que se pasa como argumento a otra función
// para ser ejecutada posteriormente. Es fundamental en JavaScript para
// manejar operaciones asincrónicas.

// ========================================
// EJEMPLO 1: Callback Básico
// ========================================

function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);
    callback(); // Ejecutamos el callback
}

function despedir() {
    console.log("Adiós!");
}

// Pasamos 'despedir' como callback
saludar("Juan", despedir);

console.log("-------------------");

// ========================================
// EJEMPLO 2: Callback con parámetros
// ========================================

function procesar(num1, num2, operacion) {
    const resultado = operacion(num1, num2);
    console.log(`El resultado es: ${resultado}`);
    return resultado;
}

// Diferentes callbacks para diferentes operaciones
function sumar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

procesar(5, 3, sumar);        // El resultado es: 8
procesar(5, 3, multiplicar);  // El resultado es: 15

console.log("-------------------");

// ========================================
// EJEMPLO 3: Callbacks con Arrow Functions
// ========================================

function operarNumeros(a, b, callback) {
    return callback(a, b);
}

// Usando arrow functions como callbacks
const resultado1 = operarNumeros(10, 5, (x, y) => x - y);
console.log(`Resta: ${resultado1}`); // Resta: 5

const resultado2 = operarNumeros(10, 5, (x, y) => x / y);
console.log(`División: ${resultado2}`); // División: 2

console.log("-------------------");

// ========================================
// EJEMPLO 4: Callbacks Asíncronos (setTimeout)
// ========================================

console.log("Inicio del programa");

setTimeout(() => {
    console.log("Este mensaje aparece después de 2 segundos");
}, 2000);

console.log("Fin del programa (pero el timeout sigue ejecutándose)");

console.log("-------------------");

// ========================================
// EJEMPLO 5: Callbacks en Arrays
// ========================================

const numeros = [1, 2, 3, 4, 5];

// forEach recibe un callback que se ejecuta por cada elemento
numeros.forEach((numero) => {
    console.log(`Número: ${numero}`);
});

console.log("-------------------");

// map recibe un callback y devuelve un nuevo array
const numerosDobles = numeros.map((numero) => numero * 2);
console.log(`Números originales: ${numeros}`);
console.log(`Números duplicados: ${numerosDobles}`);

console.log("-------------------");

// filter recibe un callback y devuelve elementos que cumplen la condición
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(`Números pares: ${numerosPares}`);

console.log("-------------------");

// ========================================
// EJEMPLO 6: Callback Hell (Problema común)
// ========================================
// Cuando anidamos muchos callbacks, el código se vuelve difícil de leer

function paso1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado");
        callback();
    }, 1000);
}

function paso2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado");
        callback();
    }, 1000);
}

function paso3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado");
        callback();
    }, 1000);
}

// Esto se conoce como "Callback Hell" o "Pyramid of Doom"
paso1(() => {
    paso2(() => {
        paso3(() => {
            console.log("Todos los pasos completados");
        });
    });
});

console.log("-------------------");

// ========================================
// EJEMPLO 7: Callbacks con manejo de errores
// ========================================

function dividir(a, b, callback) {
    if (b === 0) {
        // Primer parámetro: error, segundo: resultado
        callback("Error: No se puede dividir por cero", null);
    } else {
        callback(null, a / b);
    }
}

// Patrón común: (error, resultado)
dividir(10, 2, (error, resultado) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Resultado de la división: ${resultado}`);
    }
});

dividir(10, 0, (error, resultado) => {
    if (error) {
        console.log(error); // Mostrará el error
    } else {
        console.log(`Resultado de la división: ${resultado}`);
    }
});

console.log("-------------------");

// ========================================
// EJEMPLO 8: Simulación de operación asíncrona
// ========================================

function obtenerUsuario(id, callback) {
    console.log(`Buscando usuario con id: ${id}...`);
    
    // Simulamos una petición a una base de datos
    setTimeout(() => {
        const usuarios = {
            1: { id: 1, nombre: "Ana", edad: 25 },
            2: { id: 2, nombre: "Carlos", edad: 30 },
            3: { id: 3, nombre: "María", edad: 28 }
        };
        
        const usuario = usuarios[id];
        
        if (usuario) {
            callback(null, usuario);
        } else {
            callback("Usuario no encontrado", null);
        }
    }, 1500);
}

// Usando el callback
obtenerUsuario(2, (error, usuario) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(`Usuario encontrado: ${usuario.nombre}, Edad: ${usuario.edad}`);
    }
});

console.log("-------------------");

// ========================================
// RESUMEN
// ========================================
// ✓ Los callbacks permiten ejecutar código después de que termine otra operación
// ✓ Son esenciales para programación asíncrona en JavaScript
// ✓ Se pueden pasar como funciones normales o arrow functions
// ✓ El patrón común es: callback(error, resultado)
// ✓ Muchos callbacks anidados crean "Callback Hell"
// ✓ Hoy en día se prefieren Promises y async/await para evitar el callback hell
