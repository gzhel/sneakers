import image1 from './images/image-product-1.jpg';
import image2 from './images/image-product-2.jpg';
import image3 from './images/image-product-3.jpg';
import image4 from './images/image-product-4.jpg';

export type ProductInfo = {
  images: string[];
  info: {
    company: string;
    name: string;
    description: string;
    price: number;
    sale?: number;
  };
};

export const productInfo: ProductInfo = {
  images: [image1, image2, image3, image4],
  info: {
    company: 'Sneaker company',
    name: 'Fall Limited Edition Sneakers',
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable ' +
      'rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250.0,
    sale: 50
  }
};
