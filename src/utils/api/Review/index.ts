import uri from "../../../constance/uri";
import ReviewRequest from "../../../models/dto/request/reviewReqeust";
import ReviewListResponse from "../../../models/dto/response/reviewListResponse";
import instance from "../axios";

export const postReview = async (id: number, data: ReviewRequest) => {
  try {
    return await instance.post(`${uri.review}/${id}`, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getReviewList = async (id: number) => {
  try {
    return await instance.get<ReviewListResponse>(`${uri.reviewList}/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
