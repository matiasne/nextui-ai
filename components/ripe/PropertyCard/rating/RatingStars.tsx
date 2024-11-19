import { Rating } from "@/services/dtos/property-dto";
import { Star, StarHalf } from "lucide-react";

export default function RatingStars({ ratings }: { ratings: Rating[] }) {
  function getAverageRating(): number {
    const ratingSum: number = ratings.reduce((acc, curr) => {
      return acc + Number(curr.stars);
    }, 0);

    return Number((ratingSum / ratings.length).toFixed(1));
  }

  return (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => {
        if (i + 1 < Number(getAverageRating())) {
          return (
            <Star
              key={"filled" + i}
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          );
        }

        if (
          i < Number(getAverageRating()) &&
          Number(getAverageRating()) % 1 == 0
        ) {
          return (
            <Star
              key={"empty" + i}
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          );
        }

        if (
          i === Math.floor(Number(getAverageRating())) &&
          Number(getAverageRating()) % 1 !== 0
        ) {
          return (
            <div className="w-5 h-5 relative">
              <StarHalf
                key={"half-filled" + i}
                className="w-5 h-5 text-yellow-400 fill-current absolute z-50"
              />
              <Star
                key={"r" + i}
                className="w-5 h-5 text-gray-200 fill-current absolute"
              />
            </div>
          );
        } else {
          return (
            <Star
              key={"e" + i}
              className="w-5 h-5 text-gray-200 fill-current"
            />
          );
        }
      })}
      <span className="ml-2 text-sm  font-light opacity-45">
        {ratings.length} reviews
      </span>
    </div>
  );
}
