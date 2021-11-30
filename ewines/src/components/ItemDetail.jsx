
import Contador from "./itemsCount";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";






const ItemDetail = ({item}) => {

    const [quantity, setQuantity] = useState(0)

useEffect(() => {
    let mensaje = `Has agregado al carrito ${quantity} productos`
    if (quantity !== 0) {
        quantity > 1 ? alert (mensaje+'s'): alert (mensaje);
    }
},[quantity])

    return (
        <div className="centrado">
        <div className="card text-center">
            <div className="card-header">{item.vino}</div>
            <div className="card-body">
                <img src={`${item.img}`} className="card-img-top" alt={`${item.img}`}></img>
                <h5 className="card-title">Precio: {item.precio}</h5>
                <p className="card-text"> Stock: {item.stock} unidades</p>
                <p className="card-text">{item.detalle}</p>

                <Contador stock={item.stock} initial={0} setQuantity ={setQuantity}/><br/>
                <Link to="/cart"> <button className="btn btn-secondary">Terminar Compra</button> </Link>
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
        </div>
    );
};

export default ItemDetail; 



    
    // const ItemDetail = ({ items }) => {
    //     const [itemCountVisible, setItemCountVisible] = useState(true);
    //     const [buyButtonVisibility, setBuyButtonVisibility] = useState(true);
    //     const [itemsCount, setItemsCount] = useState(0);
    
    //     const onAdd = (count) => {
    //     setItemsCount(count);
    //     };
    
    //     const onAddToCart = () => {
    //     setItemCountVisible(false);
    //     setBuyButtonVisibility(false);
    //     };
    
    //     return (
    //     <>
    //         <Container>
    //         <Row className="py-5">
    //             <Col className="d-flex align-items-center justify-content-center">
    //             <Image
    //                 style={{ Height: "550px", objectFit: "cover" }}
    //                 src={items.img}
    //                 rounded
    //             />
    //             </Col>
    //             <Col className="info-container">
    //             <div className="d-flex flex-column justify-content-start">
    //                 <h2>{items.title}</h2>
    //                 <h2> {items.price}</h2>
    //                 <p className="pb-5">{items.description}</p>
    //                 {itemCountVisible && (
    //                 <ItemCount stock={items.stock} initial={0} onAdd={onAdd} />
    //                 )}
    //                 {buyButtonVisibility && (
    //                 <Button onClick={onAddToCart} className="w-50 align-self-center" style={{backgroundColor:"rgb(79, 192, 172)", border:"none"}}>
    //                     Agregar al carrito
    //                 </Button>
    //                 )}
    //                 {!buyButtonVisibility && (
    //                 <div className="d-flex flex-column align-items-center">
    //                     <p style={{fontSize:"1.5rem"}}>{itemsCount} Unidades agregadas al carrito.</p>
    //                     <Link to="/cart">
    //                     <Button className="btn-danger">Terminar compra</Button>
    //                     </Link>
    //                 </div>
    //                 )}
    //             </div>
    //             <Col className="text-muted d-flex align-items-center">
    //                 Stock: {items.stock} unidades disponibles.
    //             </Col>
    //             </Col>
    //         </Row>
    //         </Container>
    //     </>
    //     );
    // };
    
    // export default ItemDetail;



