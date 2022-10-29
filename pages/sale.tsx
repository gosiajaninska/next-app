import { Main } from "../components/Main";
import { ProductListItem } from "../components/Product";
import { useQuery } from '@tanstack/react-query';

const getProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const products: StoreApiResponse[] = await response.json();
  return products;
}

const SalePage = () => {

  const { data, isLoading, isError } = useQuery(["products"], getProducts);

  if (isLoading) { 
    return <Main><div>Loading...</div></Main>;
  }

  if (!data || isError) {
    return <Main><div>ups...</div></Main>;
  }

  return (
    <Main cssClass="flex flex-col justify-center">
      <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-4">
        {
          data.map(product => {
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
    </Main>
  )
}

export default SalePage;

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
