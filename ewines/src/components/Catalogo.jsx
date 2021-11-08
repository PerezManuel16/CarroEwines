import {Component} from 'react';

class Catalogo  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: 1,
            vino: 'Trumpeter',
            uva: 'Malbec',
            detalle:'Some quick example text to build on the card title and make up the bulk of the cards content.',
            img:'https://rinconelegido.com.ar/wp-content/uploads/2017/08/Art10087_TrumpeterMalbec_750cc.jpg'
        }
        
    }
    render() { 
        return ( 
            <div className="card">
                <img src={this.state.img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.vino}</h5>
                    <p className="card-text">{this.state.uva}</p>
                    <p className="card-text">{this.state.detalle}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Catalogo;