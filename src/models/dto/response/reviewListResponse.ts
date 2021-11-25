import Review from "../../../interface/Review";
import defaultResponse from "./defaultResponse";

interface Response {
  storeId: number;
  storeName: string;
  reviews: Review[];
}

type ReviewListResponse = defaultResponse<Response>;
export default ReviewListResponse;
