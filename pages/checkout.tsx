import React from "react";
import { useCartState } from "../components/cart/Context";
import { CheckoutForm } from "../components/CheckoutForm";
import { Main } from "../components/Main";

const CheckoutPage = () => {
  const cartState = useCartState();

  
  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Checkout</h1>
      <section>
        <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2 border md:divide-x">
          <div className="py-16 px-8">
            <div className="max-w-lg px-8 mx-auto grid grid-cols-10 gap-y-4 text-slate-700">
              <h2 className="col-span-10 uppercase text-md font-bold text-slate-600 mb-12 ">Order summary</h2>
              { 
                cartState.items.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="col-span-1">{item.amount}</div>
                      <div className="col-span-1">&times;</div>                  
                      <div className="col-span-6 pl-4">{item.title}</div> 
                      <div className="col-span-2 pl-4 text-right">{item.price * item.amount}</div>
                    </React.Fragment>
                  )
                })
              }
              <div className="col-span-8 font-bold text-slate-600">
                TOTAL
              </div>
              <div className="col-span-2 text-right font-bold text-slate-600">
                {cartState.countTotal()}
              </div>
            </div>
          </div>
    
          <div className="py-16 px-8">
            <div className="max-w-lg px-8 mx-auto">      
              <CheckoutForm/>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
}

export default CheckoutPage;