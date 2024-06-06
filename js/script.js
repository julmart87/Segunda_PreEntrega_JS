//* Clase Producto
class Producto {
    constructor(id, marca, modelo, precio, stock) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    };

    reducirStock(cantidad) {
        if(this.stock >= cantidad) {
            this.stock -= cantidad;
            return true;
        } else {
            return false;
        }
    };
};

//* Carrito
class Carrito {
    constructor() {
        this.productos = [];
    };

    agregarProducto(producto, cantidad) {
        if(producto.reducirStock(cantidad)) {
            this.productos.push({ producto, cantidad });
            alert(`Usted eligio: ${producto.marca} ${producto.modelo}`)
        } else {
            alert(`No hay suficiente stock de ${producto.modelo}. Stock disponible: ${producto.stock}`);
        };
    };

    calcularTotal() {
        return this.productos.reduce((total, item) => total + (item.producto.precio * item.cantidad * 1.21), 0);
    };
};

//* Productos disponibles
const productosDisponibles = {
    "1": [new Producto(1, "Adidas", "Adizero", 120, 50), new Producto(2, "Adidas", "Ultraboost", 263, 110), new Producto(3, "Adidas", "Response", 125, 44), new Producto(4, "Adidas", "Superstar", 183, 8)],
    "2": [new Producto(5, "Nike", "Vomero", 139, 75), new Producto(6, "Nike", "Pegasus", 209, 94), new Producto(7, "Nike", "Precision VI", 127, 140), new Producto(8, "Nike", "Air Max", 169, 22)],
    "3": [new Producto(9, "Puma", "Deviate Nitro 2", 99, 25), new Producto(10, "Puma", "Magnify Nitro 2", 135, 11), new Producto(11, "Puma", "Velocity Nitro 3", 79, 33), new Producto(12, "Puma", "Ca Pro Classics", 149, 3)],
    "4": [new Producto(14, "Saucony", "Axon 2", 79, 14), new Producto(15, "Saucony", "Endorphin Speed 3", 168, 2), new Producto(16, "Saucony", "Endorphin Pro 3", 273, 10), new Producto(17, "Saucony", "Guide 15", 85, 0)]
};

//* Inicialización
let carrito = new Carrito();
let nombreDeUsuario = prompt("Hola!! Ingrese su nombre: ");
let apellidoDeUsuario = prompt("Hola!! Ingrese su Apellido: ");


alert("¡Hola! " + nombreDeUsuario + " " + apellidoDeUsuario + "\nBienvenido Exclusive Sport!!!" );


let consulta = prompt("¿Quieres ver los productos?\n Escriba 'Si'  o 'No' ");
if (consulta === "si") {
    alert("A continuacion le enseñaremos las marcas exclusivas de la tienda!");
    mostrarMarcas();
} else if (consulta === "no") {
    alert("Saliendo de los productos..");
} else {
    alert("No ingresó un valor correcto!");
}

function mostrarMarcas() {
    let marcaElegida = prompt("Ingrese el numero correspondiente para cada marca: \n 1- Adidas \n 2- Nike \n 3- Puma \n 4- Saucony");
    if (productosDisponibles[marcaElegida]) {
        mostrarProductos(marcaElegida);
    } else {
        alert("La opción elegida no es válida.");
        mostrarMarcas();
    }
};


function mostrarProductos(marca) {
    let productos = productosDisponibles[marca];
    let productosLista = productos.map(producto => ` ${producto.id}-` + ` `+ `${producto.marca} ` + ` ${producto.modelo}\n` + `Valor:   $` + ` ${producto.precio}` + `   (Stock Disponible: ${producto.stock} pares!)`).join("\n");
    let idElegido = parseInt(prompt(`Elige el numero correspondienta al modelo:\n${productosLista}`));
    let producto = productos.find(p => p.id === idElegido);
    
    if (producto) {
        let cantidad = obtenerCantidad();
        if (cantidad > 0) {
            carrito.agregarProducto(producto, cantidad);
            preguntarNuevoProducto();
        } else {
            alert("Debes indicar una cantidad válida.");
            mostrarProductos(marca);
        }
    } else {
        alert("La opción elegida no es válida.");
        mostrarProductos(marca);
    }
};

function obtenerCantidad() {
    let cantidad;
    while (true) {
        cantidad = parseInt(prompt("Ingrese el numero por cantidad que desea comprar: "));
        if (!isNaN(cantidad) && cantidad > 0) {
            break;
        } else {
            alert("Debes indicar una cantidad válida.");
        }
    }
    return cantidad;
}

function preguntarNuevoProducto() {
    let nuevoProducto = prompt("¿Quieres sumar otro producto?\n Escriba 'Si'\n Para finalizar escriba 'No'").toLowerCase();
    if (nuevoProducto === "si") {
        mostrarMarcas();
    } else if (nuevoProducto === "no") {
        alert("El total de su compra es de: $" + carrito.calcularTotal().toFixed(2) + " dólares, incluyendo el IVA.");
        elegirFormaDePago();
    } else {
        alert("Ingrese un valor correcto");
        preguntarNuevoProducto();
    }
};

//* Forma de pago

function elegirFormaDePago() {
    // Calcula el total del carrito
    let total = carrito.calcularTotal().toFixed(2);
    let carritoFinal = "Usted lleva:\n";
    carrito.productos.forEach(item => {
        carritoFinal += `- ${item.producto.modelo} | ${item.cantidad} (Unidad)\n` ;
    });
    alert(carritoFinal);
    // Pregunta la forma de pago al usuario
    let formaDePago = prompt(`El total de su compra es de: $${total} dólares.\nElija la forma de pago:\nEscriba:\n'Cuotas' para abonar en 2 o 3 pagos\n'Efectivo' si desea abonar en un pago`).toLowerCase();
    
    // Maneja la forma de pago seleccionada
    if (formaDePago === "cuotas") {
        let cuotas = parseInt(prompt("Ingrese el número '2' o '3' para la cantidad de cuotas."));
        if (cuotas === 2 || cuotas === 3) {
            let cuota = (total / cuotas).toFixed(2);
            alert(`Pagando en ${cuotas} cuotas de $${cuota} dólares por cuota.`);
            alert("Gracias por su compra");
            return;
        } else {
            alert("Opción de cuota no válida, se calculará el precio total.");
            mostrarTotal(total);
        }
    } else if (formaDePago === "efectivo") {
        alert("Gracias por su compra");
        // mostrarTotal(total);
    } else {
        alert("La forma de pago ingresada no es válida. Inténtelo nuevamente.");
        elegirFormaDePago();
    }
};



