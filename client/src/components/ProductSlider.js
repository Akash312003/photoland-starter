import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css'
import {Pagination ,Navigation} from 'swiper'
import Product from '../components/Product';


const ProductSlider = ({data}) => {
  return( 
  <Swiper modules={[Pagination , Navigation]} loop={false} navigation={true} breakpoints={{
    320:{
      slidesPerView: 1,
      spaceBetween:30
    },
    768:{
      slidesPerView: 2,
      spaceBetween:30
    },
    1024:{
      slidesPerView: 2,
      spaceBetween:30
    },
    1440:{
      slidesPerView: 5,
      spaceBetween:30
    }
  }}
  pagination={{
    clickable:true,
  }}
  className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
   >

    <>
    {data?.map((product) =>{
      return <SwiperSlide key={product.id}>
        <Product product={product}/>
      </SwiperSlide>
    }
      )}
    </>
  </Swiper>
  )
};

export default ProductSlider;
