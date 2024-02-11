import TheMain from "./TheMain";
import TheNewsletter from "./TheNewsletter";
import { useSelector } from "react-redux";
import CardWithTextIn from "../UI/CardWithTextIn";

export default function ReviewsPage({ title, text }) {
  const reviews = Object.values(useSelector((state) => state.reviews));
  reviews.map((review) => {
    console.log(review);
  });
  return (
    <>
      <TheMain title={title} text={text} />
      <div className="max-w-5xl w-full mx-auto py-16">
        <div className="grid grid-cols-3 space-x-4 space-y-4">
          {reviews.map((review, index) => (
            <CardWithTextIn
              key={review.text}
              src={review.src}
              text={review.text}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <TheNewsletter />
      </div>
    </>
  );
}
