import { useContext } from "react";
import { ReactNode, useState } from "react";
import { createContext } from "react";


interface CartItem {
  price: number;
  title: string;
}

interface CartState {
  items: CartItem[];
}

const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      price: 20.23,
      title: "szałowa bluzka",
    },
    {
      price: 38.14,
      title: "szałowa kiecka",
    },
  ]);

  return (
    <CartStateContext.Provider 
      value={{
        items: cartItems,
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