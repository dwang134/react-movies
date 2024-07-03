"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

interface AllTrendingProps {
  allTrendingStuff: any;
}

const AllTrending: React.FC<AllTrendingProps> = ({ allTrendingStuff }) => {
  return (
    <div className="contentSection w-full py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-center text-white mb-8">Trending Now</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {allTrendingStuff.results.slice(0, 20).map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                {item.media_type === 'person' ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                    width={500}
                    height={750}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                ) : (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title || item.name}
                    width={500}
                    height={750}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                )}
                <h3 className="text-lg font-bold text-white mb-2">{item.title || item.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{item.overview}</p>
                {item.media_type !== 'person' && (
                  <p className="text-gray-500 text-sm mt-2">
                    {item.media_type === 'movie' ? `Released: ${item.release_date}` : `First Air Date: ${item.first_air_date}`}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AllTrending;
