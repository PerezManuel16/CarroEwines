import { createContext, useContext, useState } from "react";

export const CartContext =createContext();
export const UseCart = () => useContext(CartContext);
export const CartProvider = ({children}) => {

    const [addProduct, setAddProduct] = useState ([]);

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
        addProduct.map(prod => {
            if( prod.item.id === id) agregarCarrito = true;
        });
        return agregarCarrito;       
    }

    const sumarItems = () =>{
        let cantidadItems = 0;
        addProduct.map( item =>{
            cantidadItems = (cantidadItems + item.quantity);
        })
        return cantidadItems;
    }
    
    const precioTotal = ( ) =>{
        return addProduct.reduce(( acc, el) => acc + el.quantity * el.item.precio, 0)
    }    

    return(
        <CartContext.Provider 
        value = {{ 
                    aumentar,
                    disminuir,
                    vaciarCarrito, 
                    setAddProduct, 
                    sumarItems, 
                    precioTotal,
                    agregarCart, 
                    addProduct,
        }}
        >
            {children}
        </CartContext.Provider>
    )
};






