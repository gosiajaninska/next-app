import { StoreApiResponse } from "../utility";
import { ProductListItem } from "./Product";

interface ProductsProps {
  products: StoreApiResponse[],
}

export const ProductsList = ({ products }: ProductsProps) => {
  return(
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-4">
      {
        products.map(product => {
          return <ProductListItem 
            key={product.id}
            productData={{
              id:     product.id,
              name:   product.title,
              imgUrl: product.image,
              imgAlt: product.title,
              price:  product.price,
            }}
          />;
        })
      }
    </div>
  )
}