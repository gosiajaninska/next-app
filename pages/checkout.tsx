import { CheckoutForm } from "../components/CheckoutForm";
import { Main } from "../components/Main";

const CheckoutPage = () => {
  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Checkout</h1>
      <section>
        <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2 border md:divide-x">
          <div className="py-16 px-8">
            <h2 className="uppercase text-md font-bold text-slate-600 mb-12 ">Cart summary</h2>
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