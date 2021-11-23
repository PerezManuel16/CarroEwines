import { useState } from "react";
import {PlusCircle} from 'react-bootstrap-icons';
import {DashCircle} from 'react-bootstrap-icons';




const Contador = ({stock, initial}) => {
    

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
    const onAdd = () => {
        alert (`Agregaste ${count} productos`)
    };

    return (
        <div>
            <div >
                <button className="btn btn-link" onClick={aumentar}><PlusCircle/></button>
                <span>{count}</span>                    
                <button className="btn btn-link" onClick={disminuir}><DashCircle/></button>  
            </div>            
            <button className="btn btn-secondary" onClick={onAdd}>Agregar al carrito</button>
        </div>

    )


}

export default Contador;  