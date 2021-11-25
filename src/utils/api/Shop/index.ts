import uri from "../../../constance/uri";
import instance from "../axios";

export const getShop = async (id: string) => {
  const response = await instance.get(`${uri.store}/${id}`);
};
