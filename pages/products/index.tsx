import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { PaginationStatic } from "../../components/Pagination";
import { ProductsList } from "../../components/ProductsList";
import { apolloClient } from "../../graphql/apolloClient";
import { ProductsListResponse } from "../../utility";

const ProductsPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsList 
        products={products} 
      />
      <PaginationStatic
        activePageNumber={1}
        pagesQuantity={10}
      />
    </Main>
  )
}

export default ProductsPage;

export const getStaticProps = async () => {

  const response = await apolloClient
    .query<ProductsListResponse>({
      query: gql`
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
      `,
    });
  const products = response.data.products;

  return {
    props: {
      products,
    }
  };
};




