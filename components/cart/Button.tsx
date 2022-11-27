import Link from "next/link";
import { CartIcon } from "./Icon";

export const CartAddButton = () => {
  return <Link href="/cart">
    <a className={`flex items-center h-full text-gray-500 border-b-4 p-6 hover:opacity-75`}>
      <CartIcon></CartIcon>
      <span>Add to cart</span>
    </a>
  </Link>
}