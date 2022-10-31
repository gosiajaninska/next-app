import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../../components/Main";
import { ProductListItem } from "../../../components/Product";
import { PaginationStatic } from "../../../components/Pagination";

const ProductsPage = ({ products, pageNumber }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Main cssClass="flex flex-col justify-center">
      <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-4">
        {
          products.map(product => {
            return <ProductListItem 
              key={product.id}
              productData={{
                id:     product.id,
                name:   product.title,
                imgUrl: product.image,
                imgAlt: product.title,
                price:  product.price,
              }}
            />;
          })
        }
      </div>
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
  const pagesQuantity = 10;

  return {
    paths: pagesPaths(pagesQuantity),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ pageNumber: string }>) => {

  const productsPerPage = 25;
  const pageNumber = parseInt(params?.pageNumber || "1");
  const offset = productsPerPage * pageNumber;

  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/?take=${productsPerPage}&offset=${offset}`);
  const products: StoreApiResponse[] = await response.json();

  return {
    props: {
      products,
      pageNumber,
    }
  };
};




