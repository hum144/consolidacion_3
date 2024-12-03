class Producto {
    constructor(nom, pre) {
        this.nombre = nom;
        this.precio = pre;
    }
    info() {
        return (this.nombre + " $" + this.precio)
    }

}

class Carrito {
    constructor() {
        this.carro = []
    }
    agregar(Producto, cantidad) {
        this.carro.push({ producto: Producto, cantidad: cantidad })
    }
    calcTotal() {
        let total = 0;
        this.carro.forEach(item => {
            total += item.producto.precio * item.cantidad;
        })
        return (total)
    }
    comprar() {
        return("Compra finalizada:\nTotal de la compra: $"+this.calcTotal())
    }
    detalles() {
        if (this.carro.length === 0) {
            return ("El carrito está vacío.");
        } else {
            let det = ""
            console.log(this.carro)
            this.carro.forEach(item => {
                det += (item.cantidad + " x " + item.producto.nombre + "\n");
            });
            return ("Productos en el carrito: \n" + det+"Valor total: $"+this.calcTotal())
        }
    }
}
var carrito = new Carrito();
const productos = [];
productos.push(null)
productos.push(new Producto("Leche", 1000))
productos.push(new Producto("Pan de Molde", 2000))
productos.push(new Producto("Queso", 1200))
productos.push(new Producto("Mermelada", 890))
productos.push(new Producto("Azucar", 1300))

let lista = ""
for (var i = 1; i < productos.length; i++) {
    lista += i + ".-" + productos[i].info() + "\n"
}

let continuar = ""
while (continuar != "n") {

    alert("Productos displonibles: \n" + lista
    )

    let eleccion = prompt("Ingrese el numero del producto que deseas agregar al carrito: (0 para detalles)")
    if (eleccion == 0) {
        alert(carrito.detalles())
    }
    else if (eleccion < productos.length && !isNaN(eleccion) && eleccion != null && eleccion != "") {
        let cantidad = prompt("Ingresa la cantidad de unidades: ")
        if (!isNaN(cantidad) && cantidad != null && cantidad != "" && cantidad != 0) {
            carrito.agregar(productos[eleccion], cantidad)
            alert(cantidad + " " + productos[eleccion].nombre + "(s)agregado(s) al carrito")
        } else {
            continuar = prompt("Respuesta invalida, ¿desea continuar? (y/n)")
        }
    } else {
        continuar = prompt("Respuesta invalida, ¿desea continuar? (y/n)")
    }
    if(continuar!="n"){
        continuar=prompt("¿Desea continuar? (y/n)")}
}
alert(carrito.comprar());
