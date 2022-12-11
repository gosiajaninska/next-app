import { GetProductsListQuery } from "../generated/graphql";
import { ProductsListWithPaginationProps } from "../utility";
import { Pagination } from "./Pagination";
import { ProductListItem } from "./Product";

export const ProductsList = ({ products }: GetProductsListQuery ) => {
  return(
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-4">
      {
        products.map(product => {
          return <ProductListItem 
            key={product.id}
            {...product}
          />;
        })
      }
    </div>
  )
}


export const ProductsListWithPagination = ({ productsForCurrentPage, allProductsQuantity, pagination }: ProductsListWithPaginationProps ) => {
  return(
    <>
      <p className="mx-16 mt-16 text-xl font-bold text-gray-500">
        {allProductsQuantity} products
      </p>

      <ProductsList {...productsForCurrentPage} />

      <Pagination {...pagination} />
    </>
  )
}
