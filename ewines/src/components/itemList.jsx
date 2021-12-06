import Item from "./item"


const ItemList = ({products}) =>{
    console.log ('Que productos tengo',products)
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(product =>{
            
            return (
                <Item
                key= {product.id}
                vino= {product.vino}
                uva= {product.uva}
                precio ={product.precio}
                detalle= {product.detalle}
                img= {product.img}
                id={product.id}
                stock={product.stock}
                categoria={product.categoria}
                />
            );
            })} 
        </div>
    );
};

export default ItemList; 

