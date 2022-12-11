import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../../components/Main";
import { ProductsListWithPagination } from "../../../components/ProductsList";
import { useRouter } from "next/router";
import { countProducts, getProducts } from "../../../graphql/queries";

// settings
const productsPerPage = 4;
const maxStaticPagesQuantity = 5;


const ProductsPage = ({ productsForCurrentPage, allProductsQuantity, pagesQuantity, currentPageNumber }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsListWithPagination 
        productsForCurrentPage={{ products: productsForCurrentPage }} 
        allProductsQuantity={allProductsQuantity}
        pagination={{
          pagesQuantity: pagesQuantity,
          currentPageNumber: currentPageNumber
        }}
      />
    </Main>
  )
}

export default ProductsPage;


export const getStaticPaths = async () => {

  const allProductsQuantity = await countProducts();
  const pagesQuantity = Math.ceil(allProductsQuantity / productsPerPage);
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
  const productsResponse = await getProducts({ skip: offset, first: productsPerPage });
  const allProductsQuantity = await countProducts();
  const pagesQuantity = Math.ceil(allProductsQuantity / productsPerPage);
  
  if (productsResponse.products.length == 0 && allProductsQuantity > 0) {
    return {
      redirect: {
        destination: `/products/page/${pagesQuantity}`,
        permanent: false,
      },
    }
  }



  return {
    props: {
      productsForCurrentPage: productsResponse.products,
      allProductsQuantity,
      pagesQuantity,
      currentPageNumber: pageNumber,
    }
  };
};




