import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { Fragment, useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(props) {
    const { itemId } = useParams()
    // console.log(itemId)
    const [itemSelected, setItem] = useState({})
    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db, 'Items',itemId)
        
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()){
                setItem({id:snapshot.id,...snapshot.data()})
            }
        })
        
      },[itemId])
    return (
        <Fragment>
            <ItemDetail item = {itemSelected}/>
        </Fragment>
    );
}