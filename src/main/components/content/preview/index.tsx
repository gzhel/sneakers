import React, { FC } from 'react';
import { Navigation, Pagination, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from 'classnames';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './styles/custom-swiper.scss';
import s from './index.module.scss';
import { useModel } from './model';

export const Preview: FC = () => {
  const { images, isMobile, bulletStyle } = useModel();

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
        pagination={
          isMobile
            ? false
            : {
                clickable: true,
                type: 'bullets',
                renderBullet: (index, className) => {
                  return (
                    '<span class="' + className + '" style="' + bulletStyle(index) + '"></span>'
                  );
                }
              }
        }
        slidesPerView={1}
        className={s.swiper}
      >
        {images.map((slideContent, index) => (
          <SwiperSlide
            key={slideContent}
            virtualIndex={index}
            className={cls(s.swiperSlide, `swiper-slide-active-custom-${index + 1}`)}
          >
            <img
              src={slideContent}
              alt="img"
              className={s.imagePreview}
              onClick={() => console.log('open modal with index (not relevant)', index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
