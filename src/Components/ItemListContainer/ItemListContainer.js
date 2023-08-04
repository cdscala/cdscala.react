import './ItemListContainer.css';

function ItemListContainer(props) {
  return (
    <div className="itemList" style={{backgroundColor: props.color?props.color:''}}>
      {props.greeting? props.greeting : 'no hay nada aqui'}
    </div>
  );
}

export default ItemListContainer;
