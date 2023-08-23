import { useLoaderData, useOutletContext } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

export async function loader({ params }) {
  const category = params.categoryId
  return { category }
}
const productos = [
  {
      id:1,
      image: '',
      price: 0,
      oldPrice: 0,
      discount:false,
      title:'Producto 1',
      shortDescription:'Descripcion 1',
      description: 'Descripcion larga de producto 1',
      rating:{
        rate:4,

      }

  },
  {
    id:2,
    image: '',
    price: 0,
    oldPrice: 0,
    discount:false,
    title:'Producto 2',
    shortDescription:'Descripcion 2',
    description: 'Descripcion larga de producto 2',
    rating:{
      rate:4,

    }

}
]
function ItemListContainer(props) {
  const { category } = useLoaderData()
  const [handleProducto,handleFavorito] = useOutletContext()

  return (
    <div className='item-list-wrapper' style={{backgroundColor: props.color?props.color:'beige'}}>
      {category? category : 'no hay nada aqui'}
      <div className="item-list">
        {productos?.map((producto,key) => (
          <ItemList key={key} producto={producto} clickDetail = {() => handleProducto(producto)} clickFavorito = {(e) => handleFavorito(e,producto)}></ItemList>
        ))}
      </div>
    </div>
    
  );
}

export default ItemListContainer;
