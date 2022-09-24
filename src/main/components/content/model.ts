import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCallDispatch } from '../../store';
import { sneakersActions } from '../../store-sneakers';

export const useModel = () => {
  const { productId = 0 } = useParams();
  const getProductInfo = useCallDispatch(() => sneakersActions.getProductInfo(+productId));

  useEffect(() => {
    (async () => await getProductInfo())();
  }, [productId]);
};
