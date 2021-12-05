import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { getFirestore, collection, getDocs  } from "firebase/firestore"; 







const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
            const db = getFirestore();

            const itemsCollection = collection(db, 'items');
            getDocs(itemsCollection).then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));

            });

        },[]);


    return (
            <div>
        <ItemList products={products}/>
            </div>
    );
    


};


export default ItemListContainer;



