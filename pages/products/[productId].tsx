import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { Product } from "../../components/Product";
import { serialize } from 'next-mdx-remote/serialize';
import { ProductDataResponse } from "../../utility";
import { apolloClient } from "../../graphql/apolloClient";
import { getProductBySlug, getProductsSlugs } from "../../graphql/queries";

const ProductPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return <>Ups...</>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <Product productData={{
          id:               product.id,
          name:             product.name,
          images:           product.images,
          price:            product.price,
          description:      product.description,
          longDescription:  product.longDescription,
          slug:             product.slug
       }} />
    </Main>
  );
}

export default ProductPage;


export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<{ products: { slug: string }[]}>({query: getProductsSlugs});
  const products = data.products;

  return {
    paths: products.map(product => ({ params: { productId: product.slug }})),
    fallback: false,
  }
}


export const getStaticProps = async ({ params }: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    }
  }

  const { data } = await apolloClient.query<{ product: ProductDataResponse }>({
    query: getProductBySlug, 
    variables: { slug: params.productId }
  });
  const product = data.product;

  if (!product) {
    return {
      props: {},
      notFound: true,
    }
  }

  const longDescription = await serialize(product.description);

  return {
    props: {
      product: {
        ...product,
        longDescription: longDescription,
      },
    }
  };
}
