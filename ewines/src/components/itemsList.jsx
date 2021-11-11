
import Contador from "./itemsCount";


const ObjetosItems = [
    {id: 1, vino:'Navarro Correa', uva:'malbec', detalle:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg'},
    {id: 2, vino:'Navarro Correa', uva:'malbec', detalle:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg'},
    {id: 3, vino:'Navarro Correa', uva:'malbec', detalle:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg'},
    {id: 4, vino:'Navarro Correa', uva:'malbec', detalle:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg'}
];
ObjetosItems.map(({id, vino, uva, detalle, img})=> {
    return(
        <div className="card" style={{ width: '18rem' }}>
            <img key={id} src={img} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 key={id} className="card-title">{vino}</h5>
                <p key={id} className="card-text">{uva}</p>
                <p key={id} className="card-text">{detalle}</p>
                <Contador stock={5} initial={1}/>   
            </div>
        </div>
    )
})

export default ObjetosItems;