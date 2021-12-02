import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Mostrar from "./data";
import ItemDetail from "./ItemDetail";
// import { CartProvider } from "./contexts/cartContext";



const ItemDetailContainer =() => {
    const [item, setItems] = useState ({});
    console.log ("item",item);
    const { id } = useParams();
    


    useEffect (()=> {

        Mostrar.then((res) =>{
            setItems(res.find((prod) => prod.id === parseInt(id)));
        });
    }, [id]);

    return  <ItemDetail item={item}/>;
                

};

export default ItemDetailContainer;