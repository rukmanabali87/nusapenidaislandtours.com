'use client'

import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Form from './form';

export default function HeroSliderTwo(){
    return(
        <>
        <Swiper className="swiper-wrapper" loop={true} speed={2000} autoplay={{delay:4000}} effect="fade" modules={[Autoplay,EffectFade ]}>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('/images/bg/4.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                            </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('/images/bg/5.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                            </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('/images/bg/6.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                        </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
        </>
    )
}