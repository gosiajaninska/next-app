import Link from "next/link";
import Image from 'next/image';
import { Rating } from "./Rating";
import { MyMarkdown } from './MyMarkdown';
import { NextSeo } from 'next-seo';
import { MarkdownResult, ProductDetailsProps, ProductListItemProps } from "../utility";
import { AddToCartButton } from "./cart/Button";


export const ProductDetails = ({ id, imageUrl, name, price, description }: ProductDetailsProps) => {

  return (
    <div className="grid md:grid-cols-2 md:mx-16 md:my-0 m-8 gap-8">
      <NextSeo
        title={name}
        description={description}
        canonical={`https://next-app-mu-lake.vercel.app/products/${id}`}
        openGraph={{
          url: `https://next-app-mu-lake.vercel.app/products/${id}`,
          title: name,
          description: description,
          images: [
            {
              url: imageUrl,
              alt: name,
              type: 'image/jpeg',
            },
          ],
          siteName: 'myShop',
        }}
      />
      <div className="bg-white p-16 md:my-16 shadow-lg">
        <Image
          src={imageUrl}
          alt={name}
          layout="responsive"
          width={1}
          height={1}
          className="aspect-square w-full object-contain"
        />
      </div>
      <div className="p-8 md:my-16 h-full">
        <h1 className="font-bold text-2xl">{name}</h1>

        <p className="mt-1 text-sm font-bold text-slate-700">{description}</p>
        <div className="flex flex-col gap-4 my-6">
          <p className="mt-1 text-slate-700">${price}</p>
          <AddToCartButton 
            id={id}
            title={name}
            price={price}
          />
        </div>

        <div className="mt-1 prose text-sm text-slate-700">

        </div>
      </div>
    </div>
  )
}



export const ProductListItem = ({ id, imageUrl, name, price, slug }: ProductListItemProps ) => {
  return (
      <div className="block border border-gray-100 hover:border-gray-300 overflow-hidden shadow-lg">
        <div className="bg-white p-8 shadow-gray-200 shadow-md">
          <Image
            src={imageUrl}
            alt={name}
            layout="responsive"
            width={1}
            height={1}
            className="aspect-square w-full object-contain"
          />
        </div>
        <div className="p-4 bg-white h-full flex flex-col">
          <h2 className="font-medium">
            <Link href={`products/${slug}`}>
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