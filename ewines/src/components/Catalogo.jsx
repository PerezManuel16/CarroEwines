
import Contador from './itemsCount';


const Catalogo =({vino, uva, detalle, img})=>{
    console.log ('productos',vino)
    return(
            <div className="row">
                <div className="col-dm-4"> 
                
                    <div className="card" style={{ width: '18rem' }}>
                        <img  src={img} className="card-img-top" alt=""/>
                        <div className="card-body" >
                            <h5 className="card-title">{vino}</h5>
                            <p className="card-text">{uva}</p>
                            <p className="card-text">{detalle}</p>
                            <Contador stock={5} initial={1}/>   
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Catalogo;






