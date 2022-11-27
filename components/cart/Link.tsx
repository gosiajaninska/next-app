import Link from "next/link";
import { CartIcon } from "./Icon";

interface CartLinkProps {
  isActive?: boolean
}

export const CartLink = ({ isActive }: CartLinkProps) => {
  return <Link href="/cart">
    <a
      className={`flex items-center h-full text-gray-500 border-b-4 border-${isActive ? 'current' : 'transparent'} p-6 hover:opacity-75`}
    >
      <CartIcon></CartIcon>
      <span className="sr-only">Cart</span>
    </a>
  </Link>
}