import { doc, getDoc, getFirestore,} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer =() => {
    const [item, setItem] = useState ([]);
    
    const { id } = useParams();

    useEffect (()=> {
        const db = getFirestore();
        const itemsCollection = doc(db, 'items', id);
        getDoc(itemsCollection).then((snapshot) => {
            if (snapshot.exists()){
                setItem({...snapshot.data(), id: snapshot.id});
            }
        });
    },[id]);
    return   <ItemDetail item={item}/>;
};

export default ItemDetailContainer;







