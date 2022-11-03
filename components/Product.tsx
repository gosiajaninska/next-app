import Link from "next/link";
import Image from 'next/image';
import { Rating } from "./Rating";
import ReactMarkdown from 'react-markdown';
import { NextSeo } from 'next-seo';

interface Product {
  id:          number;
  name:        string;
  price:       number;
  desc:        string;
  category:    string;
  imgUrl:      string;
  imgAlt:      string;
  longDesc:    string;
  rating: {
    rate:      number;
    count:     number;
  };
}

interface ProductProps {
  productData: Product;
}

export const Product = ({ productData }: ProductProps) => {
  return (
    <div className="grid md:grid-cols-2 md:mx-16 md:my-0 m-8 gap-8">
      <NextSeo
        title={productData.name}
        description={productData.desc}
        canonical={`https://next-app-mu-lake.vercel.app/products/${productData.id}`}
        openGraph={{
          url: `https://next-app-mu-lake.vercel.app/products/${productData.id}`,
          title: productData.name,
          description: productData.desc,
          images: [
            {
              url: productData.imgUrl,
              alt: productData.imgAlt,
              type: 'image/jpeg',
            },
          ],
          siteName: 'myShop',
        }}
      />
      <div className="bg-white p-16 md:my-16 shadow-lg">
        <Image
          src={productData.imgUrl}
          alt={productData.imgAlt}
          layout="responsive"
          width={1}
          height={1}
          className="aspect-square w-full object-contain"
        />
      </div>
      <div className="p-8 md:my-16 h-full">
        <h1 className="font-bold text-2xl">{productData.name}</h1>
        <Rating 
          rate={productData.rating.rate} 
          count={productData.rating.count} 
        />
        <p className="mt-1 text-sm font-bold text-slate-700">{productData.desc}</p>
        <div className="flex my-6">
          <p className="mt-1 text-slate-700">${productData.price}</p>
        </div>
        <div className="mt-1 prose text-sm text-slate-700"><ReactMarkdown>{productData.longDesc}</ReactMarkdown></div>
      </div>
    </div>
  )
}


type ProductListItem = Pick<
    Product, 
    "id" | "name" | "imgUrl" | "imgAlt" | "price"
>;

interface ProductListItemProps {
  productData: ProductListItem;
}

export const ProductListItem = ({ productData }: ProductListItemProps) => {
  return (
    <Link href={`products/${productData.id}`}>
      <a className="block border border-gray-100 hover:border-gray-300 overflow-hidden shadow-lg">
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
        <div className="p-4 bg-white h-full">
          <h3 className="font-medium">{productData.name}</h3>
          <p className="mt-1 text-sm text-slate-700">${productData.price}</p>
        </div>
      </a>
    </Link>
  )
}