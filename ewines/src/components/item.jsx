
import { Link } from 'react-router-dom';




const Item =({ vino, uva, precio, detalle, img, id, stock})=>{
    
    
    return(
            
                <div className="col">
                    
                    <div className="card" >
                        <img  src={img} className="card-img-top" alt=""/>
                        <div className="card-body" >
                            <h5 className="card-title">{vino}</h5>
                            <p className="card-text">{uva}</p>
                            <p className="card-text"> Precio: ${precio}</p>
                            <p className="card-text">{detalle}</p>
                        </div>
                        <Link to={`/item/${id}`}> <button className="btn btn-secondary">Lo quiero</button> </Link>
                    </div>
                </div>
                
    )
};


export default Item;






