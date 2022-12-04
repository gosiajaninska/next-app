import { ProductsListResponse } from "../utility";
import { ProductListItem } from "./Product";

export const ProductsList = ({ products }: ProductsListResponse) => {
  return(
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-4">
      {
        products.map(product => {
          return <ProductListItem 
            key={product.id}
            productData={{
              id:     product.id,
              name:   product.name,
              imgUrl: product.images[0].url,
              imgAlt: product.name,
              price:  product.price,
            }}
          />;
        })
      }
    </div>
  )
}