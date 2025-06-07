import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import ReviewBlock from "../../reusable components/ReviewBlock/ReviewBlock";
const Feedbacks = () => {
  const reviews = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div>
      <WhiteCard title="Reviews">
        {reviews.map((review) => (
          <ReviewBlock key={review.id} />
        ))}
      </WhiteCard>
    </div>
  );
};

export default Feedbacks;
