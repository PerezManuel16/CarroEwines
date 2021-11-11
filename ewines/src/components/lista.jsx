import Catalogo from "./Catalogo"
import ObjetosItems from "./itemsList";




const ItemsCatalogo = () => {

    return (
        <div  className="d-flex justify-content-around">
            <Catalogo/>
            <ObjetosItems/>
        </div>
    );

}


export default ItemsCatalogo;