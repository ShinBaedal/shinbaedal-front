import uri from "../../../constance/uri";
import PhotoRequest from "../../../models/dto/request/photoRequest";
import PhotoResponse from "../../../models/dto/response/photoResponse";
import instance from "../axios";

export const postPicture = async (data: PhotoRequest) => {
  const form = new FormData();
  form.append("file", data.file);

  try {
    return await instance.post<PhotoResponse>(`${uri.photo}`, form);
  } catch (error) {
    return Promise.reject(error);
  }
};
