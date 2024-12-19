import Rating from "@mui/material/Rating";
import { ReviewItemWrapper } from "./Review.styles";
import { ReviewType } from "../../../../utils/Types";

type ReviewItemType = {
  big: boolean;
  review: ReviewType;
};

const ReviewItem: React.FC<ReviewItemType> = ({ big, review }) => {
  return (
    <ReviewItemWrapper
      style={{ flex: big ? "1" : "", minWidth: big ? "320px" : "" }}
    >
      <div className="review_top">
        <div className="user_image_wrapper">
          <img
            className="reviewImg"
            src={review.user?.profileImg}
            alt="user image"
          />
        </div>
        <div className="review_item_right">
          <div className="userInfo">
            <div className="">
              <h4 className="userName">{review.user?.username}</h4>
              <span className="userEmail">{review.user?.email}</span>
            </div>
            <Rating
              color="red"
              readOnly
              name="size-small"
              defaultValue={review.rating}
              value={review.rating}
              size="small"
            />
          </div>
          <div className="review_text">{review.text}</div>
        </div>
      </div>
    </ReviewItemWrapper>
  );
};

export default ReviewItem;
