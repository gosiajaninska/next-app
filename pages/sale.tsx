import { Main } from "../components/Main";
import { ProductsListWithPagination } from "../components/ProductsList";
import { useQuery } from '@apollo/client';
import { useState } from "react";
import { ProductsListResponse } from "../utility";
import { getProductsList, getProductsSlugs } from "../graphql/queries";


const SalePage = () => {

  const productsPerPage = 2;
  const [ pageNumber, setPageNumber ] = useState<number>(1);
  const offset = productsPerPage * (pageNumber - 1);

  const { data, loading, error } = useQuery<ProductsListResponse>(
    getProductsList, { 
      variables: { skip: offset, first: productsPerPage }
    }
  );

  const response = useQuery(getProductsSlugs);
  
  const productsQuantity = response.data?.products.length

  if (loading) {
    return <Main><div>Loading...</div></Main>;
  }

  if (!data || error) {
    return <Main><div>ups...</div></Main>;
  }

  const changePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsListWithPagination 
        products={data.products} 
        productsQuantity={productsQuantity}
        pageNumber={pageNumber}
        productsPerPage={productsPerPage}
        pageChangeFunction={changePage}
      />
    </Main>
  )
}

export default SalePage;

