const products = [
    {
        id: 1,
        title: "Auriculares",
        descripcion: "Auriculares inalámbricos con cancelación de ruido",
        price: 100,
        thumbnail: "",
        code: "AUR123",
        stock: 50,
    },
    {
        id: 2,
        title: "Mouse",
        descripcion: "Mouse ergonómico con conexión USB",
        price: 25,
        thumbnail: "",
        code: "MOU456",
        stock: 100,
    },
    {
        id: 3,
        title: "Teclado",
        descripcion: "Teclado mecánico retroiluminado",
        price: 75,
        thumbnail: "",
        code: "TEC789",
        stock: 30,
    }
];

class ProductManager {
    /* Las propiedades privadas se definen arriba del todo con "#" */
    // Son accesibles solo dentro de la clase definida, en este caso "ProductManager"

    #admin;

    // Función constructora
    constructor(products) {
        this.products = products;
        this.#admin = true; // Cambiar a false para simular un usuario no administrador
    }
    ////////////////////////////////////////////////////

    // Obtener productos
    getProducts() {
        return {
            status: "Lista de productos",
            products: this.products
        };
    }

    ////////////////////////////////////////////////////

    // Generar ID automático
    generateId() {
        if (this.products.length > 0) {
            return this.products[this.products.length - 1].id + 1
            // Accedemos al último producto del array, a través del total de elementos del array restándole 1, y le sumamos 1 a su ID. Entonces, si el último producto tiene ID 3, el nuevo producto tendrá ID 4. Siempre vamos a acceder al último elemento del array para asignar el ID.
        } else {
            return 1
            // Si no hay productos, el primer ID será 1
        }
    }   

    ////////////////////////////////////////////////////

    // Agregar producto
    addProduct(newProduct) {
        try{
            if(!this.#admin) throw new Error("No tienes permisos para agregar productos");
                const id = this.generateId();

                this.products.push({id, ...newProduct});
                // Los "..." son el operador spread, que permite copiar todas las propiedades de un objeto en otro y ahorrar código. Copia todas las propiedades de "newProduct" y les agrega la propiedad "id" 
                return {
                    status: "Producto agregado",
                    products: this.products
                };
        }catch(error){
            return {message: error.message}
        }   
    }   

    // Eliminar producto por ID

    deleteProductById(pid) {
        /* try {
            if (this.#admin) {
                const productsFilterById = this.products.filter((product) => product.id !== pid);
                this.products = productsFilterById;
                return {
                    status: "Producto eliminado",
                    products: productsFilterById
                };
            } else {
                throw new Error("No tienes permisos para eliminar productos");
            }
        } catch (error) {
            return {message: error.message}
        }
    }
    */

        // Forma resumida
        try {
            if (!this.#admin) {
                throw new Error("No tienes permisos para eliminar productos");
            }
            const productsFilterById = this.products.filter((product) => product.id !== pid);
            this.products = productsFilterById;
            return {
                status: "Producto eliminado",
                products: productsFilterById
            };
        } catch (error){
            return {message: error.message}
        }
    }

    // Método para actualizar un producto existente
    updateProduct(pid, update){
    try {
        // Verifica si el usuario tiene permisos de administrador para actualizar productos
        if (!this.#admin) throw new Error("No tienes permisos para eliminar productos");
        
        // Busca el índice del producto en el array utilizando su id
        const productIndex = this.products.findIndex((product) => product.id === pid);
        
        // Si no encuentra el producto (índice -1), lanza un error
        if (productIndex === -1) throw new Error("Producto no encontrado");
        
        // Actualiza el producto combinando los datos existentes con los nuevos usando spread operator (...)
        this.products[productIndex] = { ...this.products[productIndex], ...update };
        // Ejemplo: Si el producto original es {id: 1, title: "Auriculares", price: 100} y el update es {price: 120}, el producto actualizado será {id: 1, title: "Auriculares", price: 120}.
        // Siempre se mantienen las propiedades que no se especifican en el update y se sobrescriben las del update.
        

        // Retorna un objeto con el estado de éxito y el producto actualizado
        return {
            status: "Producto actualizado",
            product: this.products
        };
    } catch (error) {
        // Si ocurre algún error, retorna un objeto con el mensaje de error
        return {message: error.message}
    }

    }

};

const productManager = new ProductManager(products);

console.log(productManager.getProducts());

console.log("-------------------");

console.log(productManager.deleteProductById(1));

console.log("-------------------");

const newProducts = productManager.addProduct({
    title: "Monitor",
    descripcion: "Monitor 4K de 27 pulgadas",
    price: 300,
    thumbnail: "",
    code: "MON123",
    stock: 20
});

console.log("-------------------");

console.log(newProducts);

console.log("-------------------");

console.log(productManager.updateProduct(2, {price: 30, stock: 90}));