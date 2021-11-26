import { useState, useEffect } from "react";
import ItemList from "./itemList";
import Mostrar from "./data";






const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    console.log(' mostrar', products);

    useEffect (() =>{
        Mostrar
        .then (res =>setProducts (res))
        .catch (err => alert ('Hay un error', err));  
    },[])
    return (
        <div>
        
        <ItemList products={products}/>
         
        
        </div>
    );
    


};


export default ItemListContainer;



