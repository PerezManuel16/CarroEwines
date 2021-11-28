import { useState } from "react";
import {PlusCircle} from 'react-bootstrap-icons';
import {DashCircle} from 'react-bootstrap-icons';




const Contador = ({stock, initial, onAdd}) => {
    

    const [count, setCount] = useState(initial)

    const aumentar = () => {
        const newValue = count +1
        if (newValue <= stock) {
            setCount (newValue);
        }
    };

    const disminuir = () => {
        const restar = count -1
        if (restar >= initial){
            setCount (restar);
        }
    };
    const elementosCarrito = () => {
        if(stock>0){
            onAdd(count)
        }
    };

    return (
        <div>
            <div >
                <button className="btn btn-link" onClick={aumentar}><PlusCircle/></button>
                <span>{count}</span>                    
                <button className="btn btn-link" onClick={disminuir}><DashCircle/></button>  
            </div>            
            <button className="btn btn-secondary" onClick={elementosCarrito}>Agregar al carrito</button>
        </div>

    )


}

export default Contador;  