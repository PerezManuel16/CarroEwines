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
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Tipo de Vino</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio Por Producto</th>
                                        </tr>
                                    </thead>
                                    {addProduct.map((prod) => (
                                        <tbody  key={prod.item.id}>
                                            <tr>
                                                <th scope="row">{prod.item.vino}</th>
                                                <td>{prod.item.uva}</td>
                                                <td>{prod.quantity}</td>
                                                <td>${prod.quantity * prod.item.precio}</td>
                                                <td><button className="btn btn-secondary" onClick={() => disminuir(prod.item.id)}> eliminar </button></td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                        <p>Precio Total: ${precioTotal()}</p>
                    <hr />
                    <button className="btn btn-secondary" onClick={vaciarCarrito}>vaciar Carrito </button>
                    <Link to="checkout" className=" btn btn-secondary">terminar mi compra</Link>
                    </>
                } 
        </div>
    )

}

