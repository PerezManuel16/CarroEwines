import { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";



export const Cart = () => {
    const {addProduct, disminuir, vaciarCarrito,  setAddProduct, precioTotal, agregarCart}= useContext(CartContext)
    console.log ("agregarCart", agregarCart);
    console.log ("setAddProducts",setAddProduct);
    return(
        <div>
                {
                    addProduct.length === 0 ?
                        <>
                        <h2>No hay productos Agregados</h2>
                        <Link to="/" className= "btn btn-secondary">Ir a comprar</Link>
                        </>
                        :
                        <>
                        <h1>Resumen de compra</h1>
                        {addProduct.map((prod) => (
                            <div key={prod.item.id}>
                                <h3>{prod.item.vino}</h3>
                                <p>Cantidad : {prod.quantity}</p>
                                <p>Precio: ${prod.quantity * prod.item.precio}</p>
                                <button className="btn btn-secondary" onClick={() => disminuir(prod.item.id)}> eliminar </button>
                            </div>
                        ))}
                        <p><p>Precio Total: ${precioTotal()}</p></p>
                    <hr />
                    <button className="btn btn-secondary" onClick={vaciarCarrito}>vaciar Carrito </button>
                    <Link to="checkout" className=" btn btn-secondary">terminar mi compra</Link>
                    </>
                } 
        </div>
    )

}
