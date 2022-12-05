import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { Product } from "../../components/Product";
import { serialize } from 'next-mdx-remote/serialize';
import { getProductBySlug, getProductsSlugs } from "../../graphql/queries";
import { ProductData } from "../../utility";

const ProductPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return <>Ups...</>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <Product productData={product} />
    </Main>
  );
}

export default ProductPage;


export const getStaticPaths = async () => {
  const slugs = await getProductsSlugs();

  return {
    paths: slugs.map(slug => ({ params: { productId: slug }})),
    fallback: false,
  }
}


export const getStaticProps = async ({ params }: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return { props: {}, notFound: true };
  }

  const productResponse = await getProductBySlug(params.productId);

  if (!productResponse) {
    return { props: {}, notFound: true };
  }

  const longDescription = await serialize(productResponse.description);
  const product: ProductData = { ...productResponse, longDescription }
  
  return { props: { product } };
}
