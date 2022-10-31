import { Main } from "../components/Main";
import { ProductsList } from "../components/ProductsList";
import { useQuery } from '@tanstack/react-query';
import { Pagination } from "../components/Pagination";
import { useState } from "react";

const getProducts = async ({ queryKey }: any) => {
  const { productsPerPage, offset } = queryKey[1];

  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${productsPerPage}&offset=${offset}`
  );
  const products: StoreApiResponse[] = await response.json();
  return products;
}

const SalePage = () => {

  const productsPerPage = 25;
  const [ pageNumber, setPageNumber ] = useState<number>(1);
  const offset = pageNumber * productsPerPage;

  const { data, isLoading, isError } = useQuery(
    [
      "products", 
      { 
        productsPerPage: productsPerPage, 
        offset: offset,
      }
    ], 
    getProducts
  );

  if (isLoading) { 
    return <Main><div>Loading...</div></Main>;
  }

  if (!data || isError) {
    return <Main><div>ups...</div></Main>;
  }

  const changePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsList 
        products={data} 
      />
      <Pagination 
        activePageNumber={pageNumber}
        pagesQuantity={10}
        onClick={changePage}
      />
    </Main>
  )
}

export default SalePage;

export interface StoreApiResponse {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating: {
    rate:      number;
    count:     number;
  };
}
