
import Contador from "./itemsCount";
import { useState } from "react";


const ItemDetail = ({item}) => {
    
    const [stock, setStock] = useState(item.stock)
    
    
    const onAdd = () => {
    const agregarCarrito = item.stock-1
        if (agregarCarrito >= item.stock){
            setStock (agregarCarrito)
        }
        
    };
        



    
    return (
        <div className="centrado">
        <div className="card text-center">
            <div className="card-header">{item.vino}</div>
            <div className="card-body">
                <img src={`${item.img}`} className="card-img-top" alt={`${item.img}`}></img>
                <h5 className="card-title">Precio: {item.precio}</h5>
                <p className="card-text"> Stock: {item.stock} unidades</p>
                <p className="card-text">{item.detalle}</p>

                <Contador stock={item.stock} initial={1} onAdd={onAdd}/>
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
        </div>
    );
};

export default ItemDetail; 






