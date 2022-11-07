import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { Product } from "../../components/Product";

const ProductPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return <>Ups...</>
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <Product
        productData={{
          id:       product.id,
          name:     product.title,
          imgUrl:   product.image,
          imgAlt:   product.title,
          price:    product.price,
          desc:     product.description,
          longDesc: product.longDescription,
          category: product.category,
          rating: {
            rate:   product.rating.rate,
            count:  product.rating.count,
          },
        }}
      />
    </Main>
  );
}

export default ProductPage;

export interface StoreApiResponse {
  id:               number;
  title:            string;
  price:            number;
  description:      string;
  category:         string;
  image:            string;
  longDescription:  string;
  rating: {
    rate:           number;
    count:          number;
  };
}

export const getStaticPaths = async () => {
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/`);
  const products: StoreApiResponse[] = await response.json();

  return {
    paths: products.map(product => ({ params: { productId: product.id.toString() }})),
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

  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`);
  const product: StoreApiResponse | null = await response.json();

  if (!product) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      product,
    }
  };
}
