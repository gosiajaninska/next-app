import { useCartState } from "./Context";
import { CartIcon } from "./Icon";

export const AddToCartButton = ({id, title, price}: {id: number, title: string, price: number}) => {
  const cartState = useCartState();

  return (
    <button 
      onClick={() => cartState.addToCart(
        { 
          id: id,
          title: title, 
          price: price,
          amount: 1
        }
      )} 
      className={`flex gap-2 items-center justify-center py-4 px-4 pr-6 bg-red-400 text-white font-bold rounded-lg hover:opacity-75`}
    >
      <CartIcon></CartIcon>
      <span>Add to cart</span>
    </button>
  )
}

export const RemoveFromCartButton = ({id}: {id: number}) => {
  const cartState = useCartState();

  return (
    <button 
      onClick={() => cartState.removeFromCart(id)} 
      className={`flex gap-2 items-center justify-center py-4 px-4 pr-6 bg-red-400 text-white font-bold rounded-lg hover:opacity-75`}
    >
      <CartIcon></CartIcon>
      <span>Remove</span>
    </button>
  )
}

export const DecreaseCartItemButton = ({id}: {id: number}) => {
  const cartState = useCartState();

  return (
    <button 
      onClick={() => cartState.removeFromCart(id)} 
      className={`font-bold hover:opacity-75`}
    >
      <span>-</span>
    </button>
  )
}

export const IncreaseCartItemButton = ({id, title, price}: {id: number, title: string, price: number}) => {
  const cartState = useCartState();

  return (
    <button 
      onClick={() => cartState.addToCart(
        { 
          id: id,
          title: title, 
          price: price,
          amount: 1
        }
      )} 
      className={`font-bold hover:opacity-75`}
    >
      <span>+</span>
    </button>
  )
}