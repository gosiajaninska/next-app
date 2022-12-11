import Link from "next/link";
import Image from 'next/image';
import { Rating } from "./Rating";
import { MyMarkdown } from './MyMarkdown';
import { NextSeo } from 'next-seo';
import { AddToCartButton } from "./cart/Button";
import { GetProductBySlugsQuery, GetProductsListQuery } from "../generated/graphql";


export const ProductDetails = ({ product }: GetProductBySlugsQuery) => {

  if (!product) {
    return <>Product not found</>
  }

  const coverPhoto = product.images[0].url;

  return (
    <div className="grid md:grid-cols-2 md:mx-16 md:my-0 m-8 gap-8">
      <NextSeo
        title={product.name}
        description={product.description}
        canonical={`https://next-app-mu-lake.vercel.app/products/${product.id}`}
        openGraph={{
          url: `https://next-app-mu-lake.vercel.app/products/${product.id}`,
          title: product.name, 
          description: product.description,
          images: [
            {
              url: coverPhoto,
              alt: product.name,
              type: 'image/jpeg',
            },
          ],
          siteName: 'myShop',
        }}
      />
      <div className="bg-white p-16 md:my-16 shadow-lg">
        <Image
          src={coverPhoto}
          alt={product.name}
          layout="responsive"
          width={1}
          height={1}
          className="aspect-square w-full object-contain"
        />
      </div>
      <div className="p-8 md:my-16 h-full">
        <h1 className="font-bold text-2xl">{product.name}</h1>

        <p className="mt-1 text-sm font-bold text-slate-700">{product.description}</p>
        <div className="flex flex-col gap-4 my-6">
          <p className="mt-1 text-slate-700">${product.price}</p>
          <AddToCartButton 
            id={product.id}
            title={product.name}
            price={product.price}
          />
        </div>

        <div className="mt-1 prose text-sm text-slate-700">

        </div>
      </div>
    </div>
  )
}



export const ProductListItem = ({ id, images, name, price, slug }: GetProductsListQuery["products"][number] ) => {
  return (
      <div className="block border border-gray-100 hover:border-gray-300 overflow-hidden shadow-lg">
        <div className="bg-white p-8 shadow-gray-200 shadow-md">
          <Image
            src={images[0].url}
            alt={name}
            layout="responsive"
            width={1}
            height={1}
            className="aspect-square w-full object-contain"
          />
        </div>
        <div className="p-4 bg-white h-full flex flex-col">
          <h2 className="font-medium">
            <Link href={`/products/${slug}`}>
              <a>{name}</a>
            </Link>
          </h2>
          <p className="mt-1 mb-4 text-sm text-slate-700">${price}</p>
          <AddToCartButton 
            id={id}
            title={name}
            price={price}
          />
        </div>
      </div>
  )
}