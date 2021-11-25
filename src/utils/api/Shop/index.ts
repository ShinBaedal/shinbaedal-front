import uri from "../../../constance/uri";
import StoreResponse from "../../../models/dto/response/stroeResponse";
import instance from "../axios";

export const getShop = async (id: string) => {
  try {
    return await instance.get<StoreResponse>(`${uri.store}/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
