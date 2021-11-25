export const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

const uri = {
  store: `${PROXY}/store`,
  menuList: `${PROXY}/menu/list`,
  review: `${PROXY}/review`,
  reviewList: `${PROXY}/review/list`,
  photo: `${PROXY}/photo`,
  order: `${PROXY}/order`,
  myOrder: `${PROXY}/order/my`,
};

export default uri;
