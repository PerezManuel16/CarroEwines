import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore"; 
import { useParams } from "react-router";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {itemId} = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        if (itemId){
                const q = query(itemsCollection, where("categoria", "==", itemId ));
                getDocs(q).then((snapshot) => {
                    setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
                
                })                
            }
            else {
                getDocs(itemsCollection).then((snapshot) => {
                    setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            })
        }
},[itemId]);

    return (
            <div className="fondo">
                <h1 className="tituloDestacados">Vinos para disfrutar</h1>
                <ItemList className="centrarProductos" products={products}/>
            </div>
    ); 
};


export default ItemListContainer;



