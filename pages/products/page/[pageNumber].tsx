import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../../components/Main";
import { ProductsList } from "../../../components/ProductsList";
import { PaginationStatic } from "../../../components/Pagination";
import { useRouter } from "next/router";
import { ProductsListResponse } from "../../../utility";
import { apolloClient } from "../../../graphql/apolloClient";
import { getProductsList, getProductsSlugs } from "../../../graphql/queries";

const productsPerPage = 4;


const ProductsPage = ({ products, pageNumber, productsQuantity, pagesQuantity }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <p className="mx-16 mt-16 text-xl font-bold text-gray-500">
        {productsQuantity} products
      </p>
      <ProductsList
        products={products}
      />
      <PaginationStatic
        activePageNumber={pageNumber}
        pagesQuantity={pagesQuantity}
      />
    </Main>
  )
}

export default ProductsPage;


export const getStaticPaths = async () => {

  const productsQuantity = await countProducts();
  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);
  const maxStaticPagesQuantity = 5;
  const staticPagesQuantity = Math.min(pagesQuantity, maxStaticPagesQuantity);

  const paths = [];

  for (let i = 1; i <= staticPagesQuantity; i++) {
    paths.push({ params: { pageNumber: i.toString() }})
  }

  return {
    paths,
    fallback: true,
  }
}


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


export const getStaticProps = async ({ params }: GetStaticPropsContext<{ pageNumber: string }>) => {

  const pageNumber = parseInt(params?.pageNumber || "1");

  if (isNaN(pageNumber)) {
    return {
      redirect: {
        destination: `/products`,
        permanent: false,
      },
    }
  }

  const offset = productsPerPage * (pageNumber - 1);
  const products = await getProducts(offset, productsPerPage);
  const productsQuantity = await countProducts();
  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);
  
  if (products.length == 0 && productsQuantity > 0) {
    return {
      redirect: {
        destination: `/products/page/${pagesQuantity}`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      products,
      pageNumber,
      productsQuantity,
      pagesQuantity,
    }
  };
};




