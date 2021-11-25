export default interface defaultResponse<T> {
  code: number;
  message: string;
  data: T;
}
