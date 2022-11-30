import { Main } from "../components/Main";
import { useCartState } from "../components/cart/Context";
import { DecreaseCartItemButton, IncreaseCartItemButton } from "../components/cart/Button";

const CartPage = () => {
  const cartState = useCartState();

  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Cart</h1>
      <div className="grid md:grid-cols-2">
        <ul className="px-8 pb-12 divide-y divide-slate-300">
          { 
            cartState.items.map((item, index) => {
              return (
                <li key={item.id} className="flex justify-between py-4 px-8 text-slate-700">
                  <span>{item.amount} &times; {item.title}</span> 
                  <span>{item.price}</span>
                  <IncreaseCartItemButton id={item.id} title={item.title} price={item.price} />
                  <DecreaseCartItemButton id={item.id} />
                </li>
              )
            })
          }
        </ul>
        <div className="px-8">
          <p>
            Items in cart: 
            <b> { cartState.items.map(item => item.amount).reduce((total, num) => total + num, 0) }</b>
          </p>
        </div>
      </div>
    </Main>
  )
}

export default CartPage;