interface RatingProps {
  rating: number
}

export const Rating = ({ rating }: RatingProps) => {
  return <div className="font-bold py-4 text-red-400">{rating}</div>
}
