"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

interface FeaturedTVProps {
    tvShows: any;
}

const FeaturedTV: React.FC<FeaturedTVProps> = ({ tvShows }) => {
    return (
        <div className="featuredTvShowsSection w-full py-10 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-center text-white mb-8">Featured TV Shows</h2>
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
                    {tvShows.results.slice(0, 20).map((show: any) => (
                        <SwiperSlide key={show.id}>
                            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                    alt={show.name}
                                    width={500}
                                    height={750}
                                    className="w-full h-auto rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-bold text-white mb-2">{show.name}</h3>
                                <p className="text-gray-400 text-sm line-clamp-3">{show.overview}</p>
                                <p className="text-gray-500 text-sm mt-2">First Air Date: {show.first_air_date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default FeaturedTV;
