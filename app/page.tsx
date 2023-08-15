import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/product/دمنوش-منتخب">
            <img
              className="w-100 h-100 d-inline-block"
              src="/banners/damnoosh-makhloot.jpg"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
