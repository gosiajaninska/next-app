import Link from "next/link"
import { Main } from "../../components/Main"
import { Product } from "../../components/Product"
import { PRODUCTS } from "../api/products"

const ProductsPage = () => {
  return (
    <Main cssClass="flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-stretch">
        <div className="flex flex-col justify-center p-8 mx-auto text-center lg:text-left">
          <h2 className="text-2xl font-bold">Watches</h2>
          <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            cupiditate mollitia saepe vitae libero nobis.
          </p>
          <Link href="#">
            <a className="w-fit mx-auto lg:mx-0 mt-6 inline-block rounded bg-black px-6 py-3 text-sm text-white">
              View all watches
            </a>
          </Link>
        </div>

        <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-3">
          {
            PRODUCTS.slice(0, 3).map((product) => {
              return <Product key={product.id} id={product.id} name={product.name} imgUrl={product.imgUrl} imgAlt={product.imgAlt} price={product.price} />;
            })
          }
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-stretch">
        <div className="flex flex-col justify-center p-8 mx-auto text-center lg:text-left">
          <h2 className="text-2xl font-bold">Bags</h2>
          <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            cupiditate mollitia saepe vitae libero nobis.
          </p>
          <Link href="#">
            <a className="w-fit mx-auto lg:mx-0 mt-6 inline-block rounded bg-black px-6 py-3 text-sm text-white">
              View all bags
            </a>
          </Link>
        </div>

        <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-3">
          {
            PRODUCTS.slice(3, 6).map((product) => {
              return <Product key={product.id} id={product.id} name={product.name} imgUrl={product.imgUrl} imgAlt={product.imgAlt} price={product.price} />;
            })
          }
        </div>
      </div>
    </Main>
  )
}

export default ProductsPage
