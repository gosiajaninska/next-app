import Link from "next/link";
import { useContext } from "react";
import { CartStateContext } from "./Context";
import { CartIcon } from "./Icon";

interface CartLinkProps {
  isActive?: boolean
}

export const CartLink = ({ isActive }: CartLinkProps) => {
  const CartState = useContext(CartStateContext);

  return <Link href="/cart">
    <a
      className={`flex items-center gap-2 h-full text-gray-500 border-b-4 border-${isActive ? 'current' : 'transparent'} p-6 hover:opacity-75`}
    >
      <span 
        className="bg-red-400 text-white font-bold text-xs rounded-full aspect-square w-6 h-6 flex items-center justify-center"
      >
        {CartState?.items.length}
      </span>
      <CartIcon></CartIcon>
      <span className="sr-only">Cart</span>
    </a>
  </Link>
}