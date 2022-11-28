import { useContext } from "react";
import { CartStateContext } from "../components/cart/Context";
import { Main } from "../components/Main";

const CartPage = () => {
  const CartState = useContext(CartStateContext);

  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Cart</h1>
      <ul className="px-8">
        { 
          CartState?.items.map((item, i) => {
            return (
              <li key={i} className="flex justify-between border-b border-gray-300 py-4 px-8">
                <span>{item.title}</span> 
                <span>{item.price}</span>
              </li>
            )
          })
        }
      </ul>
    </Main>
  )
}

export default CartPage;