import { InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { PaginationStatic } from "../../components/Pagination";
import { ProductsList } from "../../components/ProductsList";

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

export const getStaticProps = async () => {
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/`);
  const products: StoreApiResponse[] = await response.json();

  return {
    props: {
      products,
    }
  };
};




