"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";

interface HeroSectionProps {
    demandMovies: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ demandMovies }) => {
    return (
        <div className="heroSection w-full h-auto p-10 bg-gray-900"  >
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 text-white">Most demanded Movies</h2>
                <Swiper
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    modules={[Pagination, Autoplay]}
                    className="h-80 md:h-96 lg:h-[600px]"
                >
                    {demandMovies.results.map((movie: any) => (
                        <SwiperSlide key={movie.id} className="relative">
                            <Image
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title}
                                layout="fill"
                                className="object-cover w-full h-full opacity-70"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                                <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 px-4 text-center">{movie.title}</h3>
                                <p className="text-sm md:text-lg lg:text-xl px-4 text-center">{movie.overview}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default HeroSection;
