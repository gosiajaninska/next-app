import { InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { ProductsListWithStaticPagination } from "../../components/ProductsList";
import { apolloClient } from "../../graphql/apolloClient";
import { getProductsList, getProductsSlugs } from "../../graphql/queries";
import { ProductsListResponse } from "../../utility";

const ProductsPage = ({ products, productsQuantity, pagesQuantity }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsListWithStaticPagination 
        products={products} 
        productsQuantity={productsQuantity}
        pagesQuantity={pagesQuantity}
        pageNumber={1}
      />
    </Main>
  )
}

export default ProductsPage;


const countProducts = async () => {
  const { data } = await apolloClient
    .query<{ products: { slug: string }[]}>({
      query: getProductsSlugs
    });
  return data.products.length;
}


export const getStaticProps = async () => {

  const productsPerPage = 2;
  const productsQuantity = await countProducts().then(res => res);
  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);

  const { data } = await apolloClient
    .query<ProductsListResponse>({
      query: getProductsList,
      variables: { skip: 0, first: productsPerPage}
    });
  const products = data.products;

  return {
    props: {
      products,
      productsQuantity,
      pagesQuantity,
    }
  };
};




