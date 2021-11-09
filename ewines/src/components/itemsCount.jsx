import { useState } from "react";

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
            <button className="btn btn-primary" onClick={aumentar}>+</button>
                <h5>{count}</h5>
            <button className="btn btn-primary" onClick={disminuir}>-</button><br />
            <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
        </div>

    )


}

export default Contador;  