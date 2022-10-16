import { Main } from "../../components/Main"
import { Product } from "../../components/Product"
import { PRODUCTS } from "../api/products"

const Products = () => {
  return (
    <Main>
      <h1 className="uppercase text-lg font-bold text-slate-600 py-12 px-8">Products</h1>
      <div className="flex flex-col gap-8">
      {
        PRODUCTS.map((product) => {
          return <Product key={product.id} desc={product.desc} name={product.name} imgUrl={product.imgUrl} imgAlt={product.imgAlt} rating={product.rating} />;
        })
      }
      </div>
    </Main>
  )
}

export default Products
