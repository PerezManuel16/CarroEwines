const ItemDetail = (props) => {
    const {vino, uva, precio, detalle, img } =props.item;
    return (
        <div>
            <h1>{vino}</h1>
            <h2>{uva}</h2>
            <h3>{precio}</h3>
            <h4>{detalle}</h4>
            <img src={`${img}`} alt={`${img}`}></img>
        </div>

    );
};

export default ItemDetail; 