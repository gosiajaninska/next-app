import Link from "next/link";
import { CartIcon } from "./Icon";

export const AddToCartButton = () => {
  return (
    <button className={`flex gap-2 items-center justify-center py-4 px-4 pr-6 bg-red-400 text-white font-bold rounded-lg hover:opacity-75`}>
      <CartIcon></CartIcon>
      <span>Add to cart</span>
    </button>
  )
}