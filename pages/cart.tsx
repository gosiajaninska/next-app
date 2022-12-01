import { Main } from "../components/Main";
import { useCartState } from "../components/cart/Context";
import { DecreaseCartItemButton, IncreaseCartItemButton } from "../components/cart/Button";
import React from "react";

const CartPage = () => {
  const cartState = useCartState();

  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Cart</h1>
      <div className="grid md:grid-cols-3 gap-12 px-8">
        <div className="col-span-2 grid grid-cols-12 gap-y-4 text-slate-700">
          { 
            cartState.items.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div className="col-span-1"><IncreaseCartItemButton id={item.id} title={item.title} price={item.price} /></div>
                  <div className="col-span-1">{item.amount}</div>
                  <div className="col-span-1"><DecreaseCartItemButton id={item.id} /></div>                  
                  <div className="col-span-6">{item.title}</div> 
                  <div className="col-span-3 text-right">{item.price * item.amount}</div>
                </React.Fragment>
              )
            })
          }
        </div>
        <div>
          <p>
            Items in cart: 
            <b> { cartState.countItems() }</b>
          </p>
          <p>
            Total: 
            <b> { cartState.countTotal() }</b>
          </p>
        </div>
      </div>
    </Main>
  )
}

export default CartPage;