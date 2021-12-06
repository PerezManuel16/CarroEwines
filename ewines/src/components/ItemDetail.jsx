
import Contador from "./itemsCount";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { UseCart } from "./contexts/cartContext";






const ItemDetail = ({item}) => {

    const {aumentar}= UseCart();

    const [quantity, setQuantity] = useState(0)

useEffect(() => {
    let mensaje = `Has agregado al carrito ${quantity} producto`
    if (quantity !== 0) {
        quantity > 1 ? alert (mensaje+'s'): alert (mensaje);
        aumentar(item,  quantity);
    }
},[quantity])
console.log ("quantity", quantity);

    return (
        <div className="centrado">
        <div className="card text-center" key={item.id}>
            <div className="card-header">{item.vino}</div>
            <div className="card-body">
                <img src={`${item.img}`} className="card-img-top" alt={`${item.img}`}></img>
                <h5 className="card-title">Precio: {item.precio}</h5>
                <p className="card-text">{item.detalle}</p>
                <Contador stock={item.stock} initial={0} setQuantity ={setQuantity}/><br/>
                <Link to="/cart" className="btn btn-secondary">Terminar Compra</Link> <br /><br />
                <Link to="/Destacados" className= "btn btn-secondary">Seguir Comprando</Link>
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
        </div>
    );
};

export default ItemDetail; 



















