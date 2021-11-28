import Review from "../../../interface/Review";
import defaultResponse from "./defaultResponse";

interface Response {
  reviewCount: number;
  reviews: Review[];
  storeId: number;
  storeName: string;
}

type ReviewListResponse = defaultResponse<Response>;
export default ReviewListResponse;
