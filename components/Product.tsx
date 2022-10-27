import Link from "next/link";
import Image from 'next/image';

interface Product {
  id:          number;
  name:        string;
  price:       number;
  desc:        string;
  category:    string;
  imgUrl:      string;
  imgAlt:      string;
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
    <Link href={`products/${productData.id}`}>
      <a className="block border border-gray-100 hover:border-gray-300 overflow-hidden shadow-lg">
        <div className="bg-white p-8 shadow-gray-200 shadow-md">
          <Image
            src={productData.imgUrl}
            alt={productData.imgAlt}
            width={650}
            height={650}
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
