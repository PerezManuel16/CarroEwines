import { useState, useEffect } from "react";
import MostrarRender from "./mostrarRender";
import mostrar from "./data";





const ObjetosCarrito = () => {


    const [products, setProducts] = useState([])

    
    console.log(' mostrar', products)
    useEffect (() =>{
        mostrar
        .then (res =>{
            setProducts (res)
        })
        .catch (err => alert ('Hay un error', err))
        
    },[])

    
    return (
        <>
        
        <MostrarRender products={products}/>
         
        </>
    );
    


};


export default ObjetosCarrito;
