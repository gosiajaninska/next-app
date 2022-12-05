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

const getProducts = async (skip: number, first: number) => {
  const { data } = await apolloClient
  .query<ProductsListResponse>({
    query: getProductsList,
    variables: { skip: skip, first: first}
  });

  return data.products;
}


export const getStaticProps = async () => {

  const productsPerPage = 4;
  const productsQuantity = await countProducts();
  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);
  const products = await getProducts(0, productsPerPage);

  return {
    props: {
      products,
      productsQuantity,
      pagesQuantity,
    }
  };
};




