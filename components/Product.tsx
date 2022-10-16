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
      <a className="block">
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={650}
          height={650}
          className="aspect-square w-full object-cover"
        />
        <div className="mt-2">
          <h3 className="font-medium">{name}</h3>
          <p className="mt-1 text-sm text-slate-700">${price}</p>
        </div>
      </a>
    </Link>
  )
}