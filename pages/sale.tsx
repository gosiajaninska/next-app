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
  const productsQuantity = countAllProducts.data?.products.length;
  
  if (loading) {
    return <Main><div>Loading...</div></Main>;
  }

  if (!data?.products || error || !productsQuantity) {
    return <Main><div>ups...</div></Main>;
  }

  const changePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsListWithPagination 
        products={data} 
        productsQuantity={productsQuantity}
        pageNumber={pageNumber}
        productsPerPage={productsPerPageQuantity}
        pageChangeFunction={changePage}
      />
    </Main>
  )
}

export default SalePage;

