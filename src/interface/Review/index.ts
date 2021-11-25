export default interface Review {
  storeId: number;
  storeName: "~~반점";
  reviews: [
    {
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
  ];
}
