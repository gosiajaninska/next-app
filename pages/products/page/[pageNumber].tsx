import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../../components/Main";
import { ProductsListWithPagination } from "../../../components/ProductsList";
import { useRouter } from "next/router";
import { countPages, countProducts, getProducts } from "../../../graphql/queries";

const productsPerPage = 4;


const ProductsPage = ({ products, pageNumber, productsQuantity, productsPerPage }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsListWithPagination 
        products={products} 
        productsQuantity={productsQuantity}
        productsPerPage={productsPerPage}
        pageNumber={pageNumber}
      />
    </Main>
  )
}

export default ProductsPage;


export const getStaticPaths = async () => {

  const pagesQuantity = await countPages(productsPerPage);
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
  const products = await getProducts({ skip: offset, first: productsPerPage });
  const productsQuantity = await countProducts();
  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);
  
  if (products.products.length == 0 && productsQuantity > 0) {
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
      productsPerPage,
    }
  };
};




