export default interface Review {
  id: number;
  user: {
    id: number;
    name: string;
  };
  menuNames: string[];
  type: string;
  createAt: string;
  content: string;
  rate: number;
  reply: {
    content: string;
  };
}
