import { useContext } from 'react';
import { CartContext } from './store/shopping-cart-context';

function Product() {
    const { addItemToCart } = useContext(CartContext);

    return (
        <li>
            some random product
            <button onClick={() => addItemToCart('xbox360')}>Add</button>
        </li>
    )
}

export default Product;
