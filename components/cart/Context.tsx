import { useContext, useEffect } from "react";
import { ReactNode, useState } from "react";
import { createContext } from "react";


interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly amount: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addToCart: (item: CartItem) => void;
  readonly removeFromCart: (itemId: CartItem['id']) => void;
}

const CartStateContext = createContext<CartState | null>(null);




export const CartStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  const getCartItemsFromStorage = () => {
    const itemsFromStorage = localStorage.getItem("MJ_SHOPPING_CART");
    if (!itemsFromStorage) {
      return [];
    }
    try {
      const items = JSON.parse(itemsFromStorage);
      return items;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, [])


  const addToCart = (itemToAdd: CartItem) => {
    setCartItems((prevState) => {
      const itemFoundInCart = prevState.find(itemInCart => itemInCart.id === itemToAdd.id);
  
      if (itemFoundInCart) {
        const updatedItem = { 
          ...itemFoundInCart, 
          amount: itemFoundInCart.amount + 1,
        };
        return prevState.map(itemInCart => itemInCart.id === itemFoundInCart.id ? updatedItem : itemInCart);
      }

      return [...prevState, itemToAdd];
    });
  }


  const removeFromCart = (itemId: CartItem['id']) => {
    setCartItems((prevState) => {
      const itemFoundInCart = prevState.find(itemInCart => itemInCart.id === itemId);

      if (itemFoundInCart && itemFoundInCart.amount > 1) {
        const updatedItem = { 
          ...itemFoundInCart, 
          amount: itemFoundInCart.amount - 1,
        };

        return prevState.map(item => item.id === itemId ? updatedItem : item);
      }

      if (itemFoundInCart && itemFoundInCart.amount <= 1) {
        return prevState.filter(prevItem => prevItem.id !== itemId);
      }

      return [...prevState];
    })
  }

  return (
    <CartStateContext.Provider 
      value={{
        items: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      { children }
    </CartStateContext.Provider>
  )
}


export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error("You forgot CartStateContextProvider");
  }
  return cartState;
}