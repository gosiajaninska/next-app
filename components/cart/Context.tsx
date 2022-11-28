import { useContext } from "react";
import { ReactNode, useState } from "react";
import { createContext } from "react";


interface CartItem {
  readonly price: number;
  readonly title: string;
  readonly amount: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addToCart: (item: CartItem) => void;
}

const CartStateContext = createContext<CartState | null>(null);




export const CartStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevState) => {
      const itemFoundInCart = prevState.find(itemInCart => itemInCart.title === item.title);
  
      if (!itemFoundInCart) {
        return [...prevState, item]
      }
  
      return prevState.map(prevItem => {
        if (prevItem.title === item.title) {
          return {
            ...prevItem,
            amount: prevItem.amount + 1
          }
        }
        return prevItem;
      })
  
    });
  }

  return (
    <CartStateContext.Provider 
      value={{
        items: cartItems,
        addToCart: addToCart,
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