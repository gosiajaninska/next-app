import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../../components/Main";
import { ProductsList } from "../../../components/ProductsList";
import { PaginationStatic } from "../../../components/Pagination";
import { useRouter } from "next/router";

const ProductsPage = ({ products, pageNumber }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsList
        products={products}
      />
      <PaginationStatic
        activePageNumber={pageNumber}
        pagesQuantity={10}
      />
    </Main>
  )
}

export default ProductsPage;

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


const pagesPaths = (pagesQuantity:number) => {
  const pagesPaths = [];

  for (let i = 1; i <= pagesQuantity; i++) {
    pagesPaths.push({
      params: { 
        pageNumber: i.toString(),
      }
    })
  }

  return pagesPaths;
}


export const getStaticPaths = async () => {
  const pagesQuantity = 5;

  return {
    paths: pagesPaths(pagesQuantity),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ pageNumber: string }>) => {

  const productsPerPage = 25;
  const pageNumber = parseInt(params?.pageNumber || "1");
  const offset = productsPerPage * (pageNumber - 1);

  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/?take=${productsPerPage}&offset=${offset}`);
  const products: StoreApiResponse[] = await response.json();

  return {
    props: {
      products,
      pageNumber,
    }
  };
};




