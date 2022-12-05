import { InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { PaginationStatic } from "../../components/Pagination";
import { ProductsList } from "../../components/ProductsList";
import { apolloClient } from "../../graphql/apolloClient";
import { getProductsList } from "../../graphql/queries";
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
  const productsPerPage = 25;

  const { data } = await apolloClient
    .query<ProductsListResponse>({
      query: getProductsList,
      variables: { skip: 0, first: productsPerPage}
    });
  const products = data.products;

  return {
    props: {
      products,
    }
  };
};




