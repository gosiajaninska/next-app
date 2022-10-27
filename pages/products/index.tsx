import { Main } from "../../components/Main"
import { Product } from "../../components/Product"
import { PRODUCTS } from "../api/products"

const ProductsPage = () => {
  return (
    <Main cssClass="flex flex-col justify-center">
      <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-4">
        {
          PRODUCTS.map((product) => {
            return <Product key={product.id} id={product.id} name={product.name} imgUrl={product.imgUrl} imgAlt={product.imgAlt} price={product.price} />;
          })
        }
      </div>
    </Main>
  )
}

export default ProductsPage
