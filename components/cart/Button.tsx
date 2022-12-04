import { CartItemButtonProps } from "../../utility";
import { useCartState } from "./Context";
import { CartIcon } from "./Icon";


export const AddToCartButton = ({id, title, price}: CartItemButtonProps) => {
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

export const RemoveItemFromCartButton = ({id}: {id: CartItemButtonProps['id']}) => {
  const cartState = useCartState();

  return (
    <button 
      onClick={() => cartState.clearItem(id)} 
      className={`font-bold hover:opacity-75`}
    >
      <span>&times;</span>
    </button>
  )
}

export const ClearCartButton = () => {
  const cartState = useCartState();

  return (
    <button 
      onClick={() => cartState.clearCart()} 
      className={`flex gap-2 items-center justify-center py-3 px-4 pr-5 border border-gray-400 font-bold rounded-lg hover:opacity-75`}
    >
      <span>&times;</span>
      <span>Clear cart</span>
    </button>
  )
}

export const DecreaseCartItemButton = ({id}: {id: CartItemButtonProps['id']}) => {
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

export const IncreaseCartItemButton = ({id, title, price}: CartItemButtonProps) => {
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