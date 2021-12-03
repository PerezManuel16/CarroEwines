import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";



export const Cart = () => {
    const {addProduct, aumentar, disminuir, vaciarCarrito, setAddProduct, sumarItems, precioTotal, agregarCart}= useContext(CartContext)
    console.log ("agregarCart", agregarCart);
    console.log ("setAddProducts",setAddProduct);
    return(
        <div>
            <h1>Hola Carrito</h1>
                <h1>Resumen de compra</h1>

                {addProduct.map(prod => (
                    <div key={prod.id}>
                        <h3>{prod.vino}</h3>
                        <p>Cantidad : {aumentar}</p>
                        <p>Precio: ${prod.precio * prod.cantidad}</p>
                        <p>Precio Total: ${precioTotal}</p>
                        <button
                            onClick={() => disminuir(prod.id)}>
                                eliminar
                        </button>
                    </div>
                ))}
            <hr />
            <button onClick={vaciarCarrito}>vaciar Carrito </button>
            <Link to="checkout">
                <button>
                    terminar mi compra
                </button>
            </Link> 
        </div>
    )

}
