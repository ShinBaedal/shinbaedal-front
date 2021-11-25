import uri from "../../../constance/uri";
import OrderRequest from "../../../models/dto/request/orderRequest";
import MyOrderResponse from "../../../models/dto/response/myOrderResponse";
import instance from "../axios";

export const postOrder = async (data: OrderRequest) => {
  try {
    return await instance.post(`${uri.order}`, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMyOrderList = async () => {
  try {
    return await instance.get<MyOrderResponse>(uri.myOrder);
  } catch (error) {
    return Promise.reject(error);
  }
};
