import { useLoaderData } from 'react-router-dom';
import './ItemDetailContainer.css';
export async function loader({ params }) {
    const itemId = params.itemId
    return { itemId }
  }

export default function ItemDetailContainer(props) {
    const { itemId } = useLoaderData()
    return (
        <>
            Soy el Producto {itemId}
        </>
    );
}