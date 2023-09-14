import { useOutletContext, useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';

function ItemListContainer(props) {
  const { categoryId } = useParams()
  // console.log(categoryId)
  const [handleProducto,handleFavorito] = useOutletContext()
  const [productosVista,setProductos] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    const itemsCollection = collection(db, 'Items')
    let q
    switch (categoryId) {
      case 'mujer':
        q = query(itemsCollection, where('category_group','==','women'))
        break
      case 'hombre':
        q = query(itemsCollection, where('category_group','==','men'))
        break
      case 'accesorios':
        q = query(itemsCollection, where('category_group','==','accesories'))
        break
      case 'niños':
        q = query(itemsCollection, where('age_group','==','kids'))
        break
      default:
        q = itemsCollection
    }
     
    getDocs(q).then((snapshot) => {
      const productos = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
      // console.log(productos)
      setProductos(productos)
    })
    // productos.map((prod)=>{
    //   setDoc(doc(db,'Items',prod.id),prod)
    // })
  },[categoryId])
  return (
    <div className='item-list-wrapper' style={{backgroundColor: props.color?props.color:'beige'}}>
      {categoryId? `Categoria: ${categoryId}` : null}
      <div className="item-list">
        {productosVista?.map((producto,key) => (
          <ItemList key={key} producto={producto} clickDetail = {() => handleProducto(producto)} clickFavorito = {(e) => handleFavorito(e,producto)}></ItemList>
        ))}
      </div>
    </div>
    
  );
}

export default ItemListContainer;
