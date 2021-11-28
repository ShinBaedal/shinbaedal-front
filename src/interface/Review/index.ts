export default interface Review {
  content: string;
  createdAt: string;
  id: number;
  menuNames: string[];
  rate: number;
  reply: { content: undefined | string };
  type: string;
  user: { id: number; name: string };
}
