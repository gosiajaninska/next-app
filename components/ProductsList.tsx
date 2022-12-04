import { ProductsListResponse } from "../utility";
import { Pagination } from "./Pagination";
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
              slug:   product.slug,
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


interface ProductsListWithPaginationProps {
  products: ProductsListResponse['products'],
  pageNumber: number,
  productsPerPage: number,
  pageChangeFunction: (pageNumber: number) => void,
}

export const ProductsListWithPagination = ({ products, pageNumber, productsPerPage, pageChangeFunction }: ProductsListWithPaginationProps ) => {

  const productsQuantity = products.length;
  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);

  return(
    <>
      <p className="mx-16 mt-16 text-xl font-bold text-gray-500">
        {productsQuantity} products
      </p>

      <ProductsList products={products} />

      <Pagination 
        pagesQuantity={pagesQuantity}
        activePageNumber={pageNumber}
        onClick={pageChangeFunction}
      />
    </>
  )
}