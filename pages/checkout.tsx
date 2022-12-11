import { CheckoutForm } from "../components/CheckoutForm";
import { Main } from "../components/Main";

const CheckoutPage = () => {
  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Checkout</h1>
      <CheckoutForm/>
    </Main>
  );
}

export default CheckoutPage;