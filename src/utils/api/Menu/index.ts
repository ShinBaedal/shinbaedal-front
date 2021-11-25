import uri from "../../../constance/uri";
import MenuListResponse from "../../../models/dto/response/menuListResponse";
import instance from "../axios";

export const getMenuList = async (id: string) => {
  try {
    return await instance.get<MenuListResponse>(`${uri.menuList}/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

