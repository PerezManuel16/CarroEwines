import Catalogo from "./Catalogo"



const MostrarRender = ({products}) =>{
    console.log ('Que productos tengo',products)
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(product =>{
            
            return (
                <Catalogo
                key= {product.id}
                vino= {product.vino}
                uva= {product.uva}
                precio ={product.precio}
                detalle= {product.detalle}
                img= {product.img}
                />
            )
            })} 
        </div>
    )
}

export default MostrarRender; 

