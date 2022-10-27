interface RatingProps {
  rate: number,
  count: number,
}

export const Rating = ({ rate, count }: RatingProps) => {
  return (
    <p className="font-bold py-4 text-gray-400">
      {rate} ({count})
    </p>
  );
}
