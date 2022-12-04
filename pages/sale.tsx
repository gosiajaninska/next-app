import { Main } from "../components/Main";
import { ProductsListWithPagination } from "../components/ProductsList";
import { useQuery, gql } from '@apollo/client';
import { useState } from "react";
import { ProductsListResponse } from "../utility";


const SalePage = () => {

  const productsPerPage = 25;
  const [ pageNumber, setPageNumber ] = useState<number>(1);
  const offset = productsPerPage * (pageNumber - 1);

  const { data, loading, error } = useQuery<ProductsListResponse>(gql`
    query GetProductsList {
      products {
        id
        name
        price
        slug
        images {
          width
          height
          url
        }
      }
    }
  `);

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
        pageNumber={pageNumber}
        productsPerPage={productsPerPage}
        pageChangeFunction={changePage}
      />
    </Main>
  )
}

export default SalePage;

