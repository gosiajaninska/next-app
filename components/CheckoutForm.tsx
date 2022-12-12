import { FormEventHandler } from "react";

export const CheckoutForm = () => {

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <section>

      <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2 px-8 border divide-x">
        <div className="py-16">
          <h2 className="uppercase text-md font-bold text-slate-600 mb-12 ">Cart summary</h2>
        </div>

        <div className="py-16">
          <div className="max-w-lg px-8 mx-auto">
            <form 
              onSubmit={handleSubmit} 
              className="grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <label
                  htmlFor="FirstName"
                  className="block text-xs font-medium text-slate-700"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="name"
                  autoComplete="name"
                  className="w-full mt-1 border-slate-200 rounded-xs  sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-xs font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  autoComplete="email"
                  className="w-full mt-1 border-slate-200 rounded-xs  sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Phone" className="block text-xs font-medium text-slate-700">
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  name="phone"
                  autoComplete="tel"
                  className="w-full mt-1 border-slate-200 rounded-xs  sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-slate-700">
                  Card Details
                </legend>

                <div className="mt-1 -space-y-px rounded-xs ">
                  <div>
                    <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                    <input
                      type="text"
                      id="CardNumber"
                      name="cardNumber"
                      autoComplete="cc-number"
                      placeholder="Card Number"
                      className="relative w-full mt-1 border-slate-200 rounded-t-xs focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="flex -space-x-px">
                    <div className="flex-1">
                      <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        name="cardExpiry"
                        autoComplete="cc-exp"
                        placeholder="Expiry Date"
                        className="relative w-full border-slate-200 rounded-bl-xs focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="flex-1">
                      <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                      <input
                        type="text"
                        id="CardCVC"
                        name="cardCVC"
                        autoComplete="off"
                        placeholder="CVC"
                        className="relative w-full border-slate-200 rounded-br-xs focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-slate-700">
                  Billing Address
                </legend>

                <div className="mt-1 -space-y-px bg-white rounded-xs ">
                  <div>
                    <label htmlFor="Country" className="sr-only">Country</label>

                    <select
                      id="Country"
                      name="country"
                      autoComplete="country"
                      className="relative w-full border-slate-200 rounded-t-xs focus:z-10 sm:text-sm"
                    >
                      <option></option>
                      <option>England</option>
                      <option>Wales</option>
                      <option>Poland</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>

                    <input
                      type="text"
                      id="PostalCode"
                      name="postalCode"
                      autoComplete="postal-code"
                      placeholder="ZIP/Post Code"
                      className="relative w-full border-slate-200 rounded-b-xs focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button
                  className="block w-full rounded-xs bg-red-400 font-bold p-3 text-sm text-white transition hover:shadow-lg"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}