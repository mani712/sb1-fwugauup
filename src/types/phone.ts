export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  affiliateLink: string;
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
  };
}