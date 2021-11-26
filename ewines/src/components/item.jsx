
import Contador from './itemsCount';
import { Link } from 'react-router-dom';




const ItemDetail =({id, vino, uva, precio, detalle, img})=>{
    
    return(
            <Link to={`/item/${id}`}>
                <div className="col">
                    <div className="card">
                        <img  src={img} className="card-img-top" alt=""/>
                        <div className="card-body" >
                            <h5 className="card-title">{vino}</h5>
                            <p className="card-text">{uva}</p>
                            <p className="card-text"> Precio: {precio}</p>
                            <p className="card-text">{detalle}</p>
                            <Contador stock={5} initial={1}/>   
                        </div>
                    </div>
                </div>
            </Link>
    );
};


export default ItemDetail;






