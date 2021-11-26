import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./item";
import Mostrar from "./data";




const ItemDetailContainer =() => {
    const [item, setItems] = useState ({});
    console.log ("item",item);
    console.log(useParams);
    const {id} =useParams ();
    console.log ("ide de useParams", id);
    console.log ("tipo de dato Id", typeof id);


    useEffect (()=> {

        Mostrar.then((res) =>{
            setItems(res.find((prod) => prod.id === parseInt(id)));
        });
    }, [id]);

    return  <ItemDetail item={item}/>;
                

};

export default ItemDetailContainer;