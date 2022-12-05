import Link from "next/link";
import Image from 'next/image';
import { Rating } from "./Rating";
import { MyMarkdown } from './MyMarkdown';
import { NextSeo } from 'next-seo';
import { MarkdownResult, ProductData } from "../utility";
import { AddToCartButton } from "./cart/Button";

interface Product {
  id:          string;
  slug:        string;
  name:        string;
  price:       number;
  desc:        string;
  category:    string;
  imgUrl:      string;
  imgAlt:      string;
  longDesc:    MarkdownResult;
  rating: {
    rate:      number;
    count:     number;
  };
}

interface ProductProps {
  productData: ProductData;
}

export const Product = ({ productData }: ProductProps) => {

  return (
    <div className="grid md:grid-cols-2 md:mx-16 md:my-0 m-8 gap-8">
      <NextSeo
        title={productData.name}
        description={productData.description}
        canonical={`https://next-app-mu-lake.vercel.app/products/${productData.id}`}
        openGraph={{
          url: `https://next-app-mu-lake.vercel.app/products/${productData.id}`,
          title: productData.name,
          description: productData.description,
          images: [
            {
              url: productData.images ? productData.images[0].url : "",
              alt: productData.name,
              type: 'image/jpeg',
            },
          ],
          siteName: 'myShop',
        }}
      />
      <div className="bg-white p-16 md:my-16 shadow-lg">
        <Image
          src={productData.images ? productData.images[0].url : ""}
          alt={productData.name}
          layout="responsive"
          width={1}
          height={1}
          className="aspect-square w-full object-contain"
        />
      </div>
      <div className="p-8 md:my-16 h-full">
        <h1 className="font-bold text-2xl">{productData.name}</h1>

        <p className="mt-1 text-sm font-bold text-slate-700">{productData.description}</p>
        <div className="flex flex-col gap-4 my-6">
          <p className="mt-1 text-slate-700">${productData.price}</p>
          <AddToCartButton 
            id={productData.id}
            title={productData.name}
            price={productData.price}
          />
        </div>

        <div className="mt-1 prose text-sm text-slate-700">
          <MyMarkdown>
            {productData.longDescription}
          </MyMarkdown>
        </div>
      </div>
    </div>
  )
}


type ProductListItem = Pick<
    Product, 
    "id" | "slug" | "name" | "imgUrl" | "imgAlt" | "price"
>;

interface ProductListItemProps {
  productData: ProductListItem;
}

export const ProductListItem = ({ productData }: ProductListItemProps) => {
  return (
      <div className="block border border-gray-100 hover:border-gray-300 overflow-hidden shadow-lg">
        <div className="bg-white p-8 shadow-gray-200 shadow-md">
          <Image
            src={productData.imgUrl}
            alt={productData.imgAlt}
            layout="responsive"
            width={1}
            height={1}
            className="aspect-square w-full object-contain"
          />
        </div>
        <div className="p-4 bg-white h-full flex flex-col">
          <h2 className="font-medium">
            <Link href={`products/${productData.slug}`}>
              <a>{productData.name}</a>
            </Link>
          </h2>
          <p className="mt-1 mb-4 text-sm text-slate-700">${productData.price}</p>
          <AddToCartButton 
            id={productData.id}
            title={productData.name}
            price={productData.price}
          />
        </div>
      </div>
  )
}