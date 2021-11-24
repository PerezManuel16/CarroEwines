import { useState, useEffect } from "react";
import MostrarRender from "./mostrarRender";
import axios from "axios";


const ItemListContainer = () =>{

    const [products, setProducts] =useState([]);
    console.log (products);

    const getProducts = async () => {
        const getElementos = await axios.get("../JSON/dataList.json");
        const responseElementos = getElementos.data;
        setProducts(responseElementos);
    }
    useEffect(() => {
        setTimeout (()=> getProducts(), 2000)
    },[]);
    return(
        <div>
        <MostrarRender products={products}/>
        </div>
    );


};
export default ItemListContainer;