import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { ProductDetails } from "../../components/Product";
import { serialize } from 'next-mdx-remote/serialize';
import { getProductBySlug, getProductsSlugs } from "../../graphql/queries";


const ProductPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return <>Ups...</>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <ProductDetails 
        id={product.id}
        imageUrl={product.images[0].url}
        name={product.name}
        price={product.price}
        description={product.description} />
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

  const product = await getProductBySlug({ slug: params.productId });

  if (!product) {
    return { props: {}, notFound: true };
  }

  //const longDescription = await serialize(productResponse.description);
  //const product = { ...productResponse }
  
  return { props: { product } };
}
