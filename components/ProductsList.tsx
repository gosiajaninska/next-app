import { GetProductsListQuery } from "../generated/graphql";
import { Pagination } from "./Pagination";
import { ProductListItem } from "./Product";

export const ProductsList = ({ products }: GetProductsListQuery ) => {
  return(
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-4">
      {
        products.map(product => {
          return <ProductListItem 
            key={product.id}
            id={product.id}
            imageUrl={product.images[0].url}
            name={product.name}
            price={product.price}
            slug={product.slug}
          />;
        })
      }
    </div>
  )
}


interface ProductsListWithPaginationProps {
  products: GetProductsListQuery,
  productsQuantity: number,
  pageNumber: number,
  productsPerPage: number,
  pageChangeFunction?: (pageNumber: number) => void,
}

export const ProductsListWithPagination = ({ products, productsQuantity, pageNumber, productsPerPage, pageChangeFunction }: ProductsListWithPaginationProps ) => {

  return(
    <>
      <p className="mx-16 mt-16 text-xl font-bold text-gray-500">
        {productsQuantity} products
      </p>

      <ProductsList products={products.products} />

      <Pagination
        productsQuantity={productsQuantity}
        productsPerPage={productsPerPage}
        activePageNumber={pageNumber}
        onClick={pageChangeFunction}
      />
    </>
  )
}
