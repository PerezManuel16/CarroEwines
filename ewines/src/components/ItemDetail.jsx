const ItemDetail = (props) => {
    const {vino, uva, precio, detalle, img } =props.item;
    return (
        <div className="centrado">
        <div className="card text-center">
            <div className="card-header">
                {vino}
            </div>
            <div className="card-body">
                <img src={`${img}`} className="card-img-top" alt={`${img}`}></img>
                <h5 className="card-title">Precio: {precio}</h5>
                <p className="card-text">{detalle}</p>
                
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
        </div>
    );
};

export default ItemDetail; 






