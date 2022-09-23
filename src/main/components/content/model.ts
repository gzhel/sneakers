import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api, ProductInfo, productInfoInitial } from './api';

export const useModel = () => {
  const { productId } = useParams();

  const [productInfo, setProductInfo] = useState<ProductInfo>(productInfoInitial);

  const getProductInfo = async (id: number) => {
    try {
      const productInfo = await api.getProductInfo(id);
      setProductInfo(productInfo);
    } catch (error) {
      console.error('Product info:', error);
    }
  };

  useEffect(() => {
    if (productId) {
      (async () => await getProductInfo(+productId))();
    }
  }, []);

  return { productInfo };
};
