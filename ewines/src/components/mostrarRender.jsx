import Catalogo from "./Catalogo"



const MostrarRender = ({products}) =>{
    console.log ('Que productos tengo',products)
    return(
        <div>
            {products.map(product =>{
            
            return (
                <Catalogo
                key= {product.id}
                vino= {product.vino}
                uva= {product.uva}
                detalle= {product.detalle}
                img= {product.img}
                />
            )
            })} 
        </div>
    )
}

export default MostrarRender; 