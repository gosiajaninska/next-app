import { useContext } from "react";
import { ReactNode, useState } from "react";
import { createContext } from "react";


interface CartItem {
  price: number;
  title: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
}

const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartStateContext.Provider 
      value={{
        items: cartItems,
        addToCart: (item) => {
          setCartItems((prevCartItems) => [...prevCartItems, item]);
        }
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