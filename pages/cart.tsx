import { Main } from "../components/Main";
import { useCartState } from "../components/cart/Context";
import { ClearCartButton, DecreaseCartItemButton, IncreaseCartItemButton, RemoveItemFromCartButton } from "../components/cart/Button";
import React from "react";
import Link from "next/link";
import { CartItem } from "../utility";


const CartItems = ({ items }: { items: readonly CartItem[] }) => {

  return (
    <div className="col-span-2 grid grid-cols-12 gap-y-4 text-slate-700">
      { 
        items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="col-span-1"><IncreaseCartItemButton id={item.id} title={item.title} price={item.price} /></div>
              <div className="col-span-1">{item.amount}</div>
              <div className="col-span-1"><DecreaseCartItemButton id={item.id} /></div>                  
              <div className="col-span-6 pl-4">{item.title}</div> 
              <div className="col-span-2 pl-4 text-right">{item.price * item.amount}</div>
              <div className="col-span-1 pl-4"><RemoveItemFromCartButton id={item.id} /></div>
            </React.Fragment>
          )
        })
      }
      <div className="col-span-12 pt-8">
        <ClearCartButton />
      </div>
    </div>
  )
}

const CartSummary = ({ countItems, countTotal }: { countItems: number, countTotal: number }) => {
  return (
    <div>
      <p>
        Items in cart: 
        <b> { countItems }</b>
      </p>
      <p>
        Total: 
        <b> { countTotal }</b>
      </p>
    </div>
  )
}

const EmptyCart = () => {
  return (
    <Main cssClass="flex place-items-center place-content-center p-8">
      <div className="text-center">
        <p>Cart is empty.</p>
        <Link href="/products">
          <a className="block w-full rounded bg-black px-12 py-3 mt-4 text-sm font-medium text-white shadow hover:bg-slate-700 focus:outline-none focus:ring active:bg-slate-500 sm:w-auto">
            Go shopping!
          </a>
        </Link>        
      </div>
    </Main>
  )
}


const CartPage = () => {
  const cartState = useCartState();

  if (cartState.countItems() === 0) {
    return <EmptyCart />
  }

  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Cart</h1>
      <div className="grid md:grid-cols-3 gap-12 px-8">
        <CartItems 
          items={cartState.items} 
        />
        <CartSummary 
          countItems={cartState.countItems()} 
          countTotal={cartState.countTotal()} 
        />
      </div>
    </Main>
  )
}

export default CartPage;