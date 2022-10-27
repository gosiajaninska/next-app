import Link from "next/link"
import Image from 'next/image'

interface ProductProps {
  id: number,
  name: string,
  imgUrl: string,
  imgAlt: string,
  price: number,
}

export const Product = ({ name, imgUrl, imgAlt, price, id }: ProductProps) => {
  return (
    <Link href={`products/${id}`}>
      <a className="block border border-gray-100 hover:border-gray-300 overflow-hidden shadow-lg">
        <div className="bg-white p-8 shadow-gray-200 shadow-md">
          <Image
            src={imgUrl}
            alt={imgAlt}
            width={650}
            height={650}
            className="aspect-square w-full object-contain"
          />
        </div>
        <div className="p-4 bg-white h-full">
          <h3 className="font-medium">{name}</h3>
          <p className="mt-1 text-sm text-slate-700">${price}</p>
        </div>
      </a>
    </Link>
  )
}