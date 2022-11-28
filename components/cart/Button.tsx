import Link from "next/link";
import { useCartState } from "./Context";
import { CartIcon } from "./Icon";

export const AddToCartButton = ({title, price}: {title: string, price: number}) => {
  const cartState = useCartState();

  return (
    <button 
      onClick={() => cartState.addToCart({ title: title, price: price })} 
      className={`flex gap-2 items-center justify-center py-4 px-4 pr-6 bg-red-400 text-white font-bold rounded-lg hover:opacity-75`}
    >
      <CartIcon></CartIcon>
      <span>Add to cart</span>
    </button>
  )
}