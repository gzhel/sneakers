import React, { FC } from 'react';
import { Navigation, Pagination, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from 'classnames';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './styles/custom-swiper.scss';
import s from './index.module.scss';
import image1 from './images/image-product-1.jpg';
import image2 from './images/image-product-2.jpg';
import image3 from './images/image-product-3.jpg';
import image4 from './images/image-product-4.jpg';

export const Preview: FC = () => {
  const slides = [image1, image2, image3, image4];

  return (
    <div className={s.preview}>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        virtual={true}
        navigation={true}
        loop={false}
        lazy={{
          loadPrevNext: true,
          loadOnTransitionStart: true
        }}
        speed={800}
        pagination={{
          clickable: true
        }}
        slidesPerView={1}
        className={s.swiper}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            key={slideContent}
            virtualIndex={index}
            className={cls(s.swiperSlide, `swiper-slide-active-custom-${index + 1}`)}
          >
            <img
              src={slideContent}
              alt="img"
              className={s.imagePreview}
              onClick={() => console.log('open modal with index', index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
