import { Rating } from "./Rating"

interface ProductProps {
  desc: string,
  name: string,
  imgUrl: string,
  imgAlt: string,
  rating: number,
}

export const Product = ({ desc, name, imgUrl, imgAlt, rating }: ProductProps) => {
  return (
    <>
      <img className="object-cover w-full h-full" src={imgUrl} alt={imgAlt} />
      <div className="p-4">
        <h1>{name}</h1>
        <Rating rating={rating}/>
        <p>{desc}</p>
      </div>
    </>
  )
}