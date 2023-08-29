import { useLoaderData, useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

export default function ItemDetailContainer(props) {
    // const { itemId } = useLoaderData()
    const { itemId } = useParams()
    return (
        <>
            Soy el Producto {itemId}
        </>
    );
}