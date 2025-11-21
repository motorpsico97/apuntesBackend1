class Persona {
    /* PROPIEDADES */
    constructor(nombre, edad, humor) {
        this.nombre = nombre;
        this.edad = edad;
        this.humor = humor;
    }

    /* METODOS */
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
    mostrarEstadoAnimo() {
        console.log(`Mi estado de ánimo es ${this.humor}.`);
    }


    random() {
        const randomNumber = Math.floor(Math.random() * 2);
        //Math.floor --> redondea hacia abajo
        //Math.random --> genera un numero aleatorio entre 0 y 1 pero nunca llega a 1, por eso se multiplica por 2
        // también puede ser --> return Math.floor(Math.randomNumber() * 2);
        return randomNumber;
    }

    trabajar() {
        let mensaje = "";
        if (this.humor <= 60) {
            mensaje = `A ${this.nombre} no le gusta trabajar cuando su humor es ${this.humor}.`;
        } else {
            this.humor -= 20;
            mensaje = `A ${this.nombre} se fue trabajar. Su humor ha disminuido a ${this.humor}.`;
        }
        return mensaje;
    }

    dormir() {
    this.humor = 100;
    return `¡${this.nombre} ha dormido bien y su humor ahora es ${this.humor}!`;
    }
    
    tormentaElectrica() {
        const randomNumber = this.random();
        let mensaje = "";
        if (randomNumber === 1) {
            this.humor -= 10;
            mensaje = `A ${this.nombre} se le cortó la luz por la tormenta eléctrica!. Su humor ha disminuido a ${this.humor}.`;
        } else {
            this.humor += 10;
            mensaje = `¡La tormenta eléctrica pasó sin problemas para ${this.nombre}.`;
        }
        return mensaje;
    }
};


// Ejemplo de uso
const persona1 = new Persona('Ana', 30, 100);
const persona2 = new Persona('Luis', 25, 80);  
/*
persona1.saludar();
persona1.mostrarEstadoAnimo();
persona2.saludar();
persona2.mostrarEstadoAnimo(); 
*/


console.log(persona1.tormentaElectrica());
console.log(persona2.tormentaElectrica());

console.log(persona1.trabajar());
console.log(persona2.trabajar());

console.log(persona1.dormir());
console.log(persona2.dormir());