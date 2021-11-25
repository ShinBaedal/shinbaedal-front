import uri from "../../../constance/uri";
import OrderRequest from "../../../models/dto/request/orderRequest";
import instance from "../axios";

export const postOrder = async (data: OrderRequest) => {
  try {
    return await instance.post(`${uri.order}`, data);
  } catch (error) {
    return Promise.reject(error);
  }
};
