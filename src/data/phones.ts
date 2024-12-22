import { Phone } from '../types/phone';

export const phones: Phone[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
    affiliateLink: 'https://amazon.com',
    specs: {
      display: '6.7" Super Retina XDR OLED',
      processor: 'A17 Pro chip',
      ram: '8GB',
      storage: '256GB',
      camera: '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      battery: '4422 mAh'
    }
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
    affiliateLink: 'https://amazon.com',
    specs: {
      display: '6.8" QHD+ Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '512GB',
      camera: '200MP Main + 12MP Ultra Wide + 50MP Telephoto',
      battery: '5000 mAh'
    }
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    image: 'https://images.unsplash.com/photo-1696434829716-36f94a9d4ec0',
    affiliateLink: 'https://amazon.com',
    specs: {
      display: '6.7" LTPO OLED',
      processor: 'Google Tensor G3',
      ram: '12GB',
      storage: '256GB',
      camera: '50MP Main + 48MP Ultra Wide + 48MP Telephoto',
      battery: '5050 mAh'
    }
  }
];