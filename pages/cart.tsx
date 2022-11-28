import { Main } from "../components/Main";
import { useCartState } from "../components/cart/Context";

const CartPage = () => {
  const cartState = useCartState();

  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Cart</h1>
      <ul className="px-8">
        { 
          cartState.items.map((item, i) => {
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