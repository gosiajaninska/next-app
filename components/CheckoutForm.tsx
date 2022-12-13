import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from "./form/input";


const checkoutFormSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  cardNumber: yup.string().required(),
  cardExpiry: yup.string().required(),
  cardCVC: yup.string().required(),
  country: yup.string().required(),
  postalCode: yup.string().required(),
}).required();

type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;


export const CheckoutForm = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutFormSchema)
  });

  const onSubmit: SubmitHandler<CheckoutFormData> = data => console.log(data);

  return (
    <section>

      <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2 border md:divide-x">
        <div className="py-16 px-8">
          <h2 className="uppercase text-md font-bold text-slate-600 mb-12 ">Cart summary</h2>
        </div>

        <div className="py-16 px-8">
          <div className="max-w-lg px-8 mx-auto">
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="grid grid-cols-6 gap-4"
            >
              <div className="col-span-6">
                <Input 
                  id="FirstName"
                  label="Name"
                  autocomplete="name"
                  type="text"
                  inputAttributes={{...register("name")}}
                  errorMessage={errors.name?.message}
                />
              </div>

              <div className="col-span-6">
                <Input 
                  id="Email"
                  label="E-mail"
                  autocomplete="email"
                  type="email"
                  inputAttributes={{...register("email")}}
                  errorMessage={errors.email?.message}
                />
              </div>

              <div className="col-span-6">
                <Input 
                  id="phone"
                  label="Phone"
                  autocomplete="tel"
                  type="tel"
                  inputAttributes={{...register("phone")}}
                  errorMessage={errors.phone?.message}
                />
              </div>

              <fieldset className="col-span-6 grid grid-cols-2 gap-0">
                <legend className="block mb-2 text-sm font-medium text-slate-700">
                  Card Details
                </legend>

                <div className="col-span-2">
                  <label htmlFor="cardNumber" className="sr-only"> Card Number </label>
                  <Input 
                    id="cardNumber"
                    placeholder="Card Number"
                    autocomplete="cc-number"
                    type="text"
                    inputAttributes={{...register("cardNumber")}}
                    errorMessage={errors.cardNumber?.message}
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>
                  <Input 
                    id="cardExpiry"
                    placeholder="Expiry Date"
                    autocomplete="cc-exp"
                    type="text"
                    inputAttributes={{...register("cardExpiry")}}
                    errorMessage={errors.cardExpiry?.message}
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>
                  <Input 
                    id="cardCVC"
                    placeholder="CVC"
                    autocomplete="off"
                    type="text"
                    inputAttributes={{...register("cardCVC")}}
                    errorMessage={errors.cardCVC?.message}
                  />
                </div>

              </fieldset>

              <fieldset className="col-span-6 grid grid-cols-1 gap-0">
                <legend className="block mb-2 text-sm font-medium text-slate-700">
                  Billing Address
                </legend>

                  <div>
                    <label htmlFor="Country" className="sr-only">Country</label>

                    <select
                      id="Country"
                      {...register("country")}
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
                    <Input 
                      id="postalCode"
                      placeholder="ZIP/Post Code"
                      autocomplete="postal-code"
                      type="text"
                      inputAttributes={{...register("postalCode")}}
                      errorMessage={errors.postalCode?.message}
                    />

                  </div>
              </fieldset>

              <div className="col-span-6">
                <button
                  className="block w-full mt-4 rounded-xs bg-red-400 font-bold p-3 text-sm text-white transition hover:shadow-lg"
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