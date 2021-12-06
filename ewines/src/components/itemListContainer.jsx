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
            <div>
        <ItemList products={products}/>
            </div>
    );
    


};


export default ItemListContainer;



// getDocs(itemsCollection).then((snapshot) => {
//     setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));

// });

// },[]);



// getDocs(itemsCollection)
// .then((snapshot) => {
//     if (itemId === undefined) {
//         setProducts(snapshot.docs.map((doc) =>({id:doc.categoria,...doc.data()})))
//     } else {
//         let data = snapshot.docs.map((doc) =>({id:doc.categoria,...doc.data()}));
//         setProducts(data.filter((doc) => doc.id === itemId));
//     }
// })
// },[itemId]);

