import { getAllReviewsByProductId } from "@/database/queries/queries";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AverageRating = async ({ productId, detailsPage }) => {
  const allReviews = await getAllReviewsByProductId(productId);
  const ratings = allReviews?.data.map((review) => review.rating);
  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / ratings.length;
  if (detailsPage) {
    average = 5;
  }
  let stars = [];

  for (let i = 0; i < Math.ceil(average); i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }

  return (
    <div className="flex items-center">
      <div className="flex gap-1 text-sm text-yellow-400">{stars}</div>

      <div className="text-xs text-gray-500 ml-3">
        {ratings.length > 0 ? (
          <span>({ratings.length})</span>
        ) : (
          <span className="min-h-[13px]">
            {detailsPage && (
              <>
                <span>({ratings.length})</span>
                <Link href="#" className="ml-2 text-md underline">Be the first to review this product.</Link>
              </>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default AverageRating;
