
import Contador from './itemsCount';
import { Link } from 'react-router-dom';




const Item =({ vino, uva, precio, detalle, img, id, stock})=>{
    
    return(
            
                <div className="col">
                    
                    <div className="card" >
                    <Link to={`/item/${id}`} className="items">
                        <img  src={img} className="card-img-top" alt=""/>
                        <div className="card-body" >
                            <h5 className="card-title">{vino}</h5>
                            <p className="card-text">{uva}</p>
                            <p className="card-text"> Precio: ${precio}</p>
                            <p className="card-text">{detalle}</p>

                        </div>
                    </Link>
                    <Contador stock={stock} initial={1}/> 
                    </div>
                    
                </div>
                
    );
};


export default Item;






