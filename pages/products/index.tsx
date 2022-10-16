import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"
import { Product } from "../../components/Product"
import { PRODUCTS } from "../api/products"

const Users = () => {
  return (
    <>
      <Header></Header>

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

      <Footer></Footer>
    </>
  )
}

export default Users
