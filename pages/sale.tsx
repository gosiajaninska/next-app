import { Main } from "../components/Main";
import { ProductsListWithPagination } from "../components/ProductsList";
import { useQuery } from '@apollo/client';
import { useState } from "react";
import { 
  GetProductsListDocument, 
  GetProductsListQuery, 
  GetProductsListQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery, 
} from "../generated/graphql";


const SalePage = () => {

  const productsPerPageQuantity = 2;
  const [ pageNumber, setPageNumber ] = useState<number>(1);
  const offset = productsPerPageQuantity * (pageNumber - 1);

  const { data, loading, error } = useQuery<GetProductsListQuery, GetProductsListQueryVariables>(
    GetProductsListDocument, { 
      variables: { skip: offset, first: productsPerPageQuantity }
    }
  );

  // @todo ref: products counter graphql query 
  const countAllProducts = useQuery<GetProductsSlugsQuery>(GetProductsSlugsDocument);
  const allProductsQuantity = countAllProducts.data?.products.length;
  
  if (loading) {
    return <Main><div>Loading...</div></Main>;
  }

  if (!data?.products || error || !allProductsQuantity) {
    return <Main><div>ups...</div></Main>;
  }

  const pagesQuantity = Math.ceil(allProductsQuantity / productsPerPageQuantity);

  const changePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  }


  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsListWithPagination 
        productsForCurrentPage={{ products: data.products }} 
        allProductsQuantity={allProductsQuantity}
        pagination={{
          pagesQuantity: pagesQuantity,
          currentPageNumber: pageNumber,
          pageChangeFunction: changePage
        }}
      />
    </Main>
  )
}

export default SalePage;

