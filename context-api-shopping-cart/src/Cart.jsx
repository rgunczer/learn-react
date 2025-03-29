import { useContext } from 'react';

import { CartContext } from './store/shopping-cart-context';

function Cart() {
    const cartCtx = useContext(CartContext);

    return (
        <div>
            The Cart [{cartCtx.items.length}]
            <ul>
                { cartCtx.items.map((x,index) => <li key={index}>{x.name}</li>) }
            </ul>
        </div>
    )
}

export default Cart;
