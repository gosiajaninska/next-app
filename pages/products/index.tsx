import { InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { ProductsListWithPagination } from "../../components/ProductsList";
import { countPages, countProducts, getProducts } from "../../graphql/queries";

const ProductsPage = ({ products, productsQuantity, productsPerPage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductsListWithPagination 
        products={products} 
        productsQuantity={productsQuantity}
        productsPerPage={productsPerPage}
        pageNumber={1}
      />
    </Main>
  )
}

export default ProductsPage;




export const getStaticProps = async () => {

  const productsPerPage = 4;
  const products = await getProducts(0, productsPerPage);
  const productsQuantity = await countProducts();
  //const pagesQuantity = await countPages(productsPerPage);

  return {
    props: {
      products,
      productsQuantity,
      productsPerPage,
    }
  };
};




