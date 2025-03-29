import { createContext, useState } from 'react';


export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
});

export default function CartContextProvider({children}) {

  const [shoppingCart, setShoppingCart] = useState({
    items: []
  });


  const handleAddItemToCart = name => {
    setShoppingCart(prev => {
      return {
        items: [...prev.items, { name }],
      };
    });
  }

  const ctx = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
  };

  return (
    <CartContext.Provider value={ctx}>
        {children}
    </CartContext.Provider>
  );

}
