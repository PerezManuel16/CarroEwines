import { createContext, useContext, useState } from "react";





export const CartContext =createContext();

export const UseCart = () => useContext(CartContext);
export const CartProvider = ({children}) => {

    const [addProduct, setAddProduct] = useState ([]);

    console.log ("addProducts", addProduct);
    


    const aumentar = (item, quantity) => {
        
        setAddProduct (addProduct.filter(item => item !== undefined))
        
        if (agregarCart(item.id)) {

            let index = addProduct.findIndex((prod) => prod.item.id === item.id)
            
            let NuevoQuantity = addProduct[index].quantity + quantity;
            
            if (NuevoQuantity< item.stock){
                addProduct[index].quantity = NuevoQuantity
                
            }
        } else{
            setAddProduct([...addProduct,{item, quantity}]);
        }
        


    }
    const disminuir = (id) => {
        let index = 0;
        addProduct.map(product =>{
            if (product.item.id === id){
                delete addProduct[index];

            } index++;
        })
        setAddProduct(addProduct.filter(item => item !== undefined && item.lenght !== 0))
    }

    const vaciarCarrito = () => {
        setAddProduct([])
    }
    


    const agregarCart = (id) => {
        let agregarCarrito = false;
        addProduct.map(product => {
            if( product.item.id === id) agregarCarrito = true;
        });
        return agregarCarrito;
        
    }


    const sumarItems = () =>{
        let cantidadItems = 0;
        addProduct.map( item =>{
            cantidadItems = cantidadItems + item.quantity;
        })
        return cantidadItems;
    }

    const precioTotal = () => {
        let precio = 0;
        setAddProduct.map(item =>{
            precio = precio (item.precio * item.quantity);
        })
        return precio;
    }
    return(
        <CartContext.Provider value = {{aumentar, disminuir, vaciarCarrito, setAddProduct, sumarItems, precioTotal, agregarCart, addProduct}}>
            {children}
        </CartContext.Provider>
    )
};






