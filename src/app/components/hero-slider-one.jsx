'use client'
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function HeroSliderOne(){
    return(
        <section className="swiper-slider-hero relative block h-screen" id="home">
            <div className="swiper-container absolute end-0 top-0 w-full h-full">
                <Swiper className="swiper-wrapper" loop={true} speed={2000} autoplay={{delay:6500}} effect="flip" modules={[Autoplay,EffectFade ]}>
                    <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center" style={{backgroundImage:`url('/images/bg/2.jpg')`}}>
                            <div className="absolute inset-0 bg-slate-900/70"></div>
                            <div className="container relative">
                                <div className="grid grid-cols-1">
                                    <div className="text-center">
                                        <Image src='/images/map-plane.png' width={0} height={0} sizes='100vw' style={{width:'300px', height:'auto'}} className="mx-auto w-[300px]" alt=""/>
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Find Your Best <br/> Travels Package</h1>
                                        <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                                        
                                        <div className="mt-6">
                                            <Link href="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md">See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 

                    <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center" style={{backgroundImage:`url('/images/bg/3.jpg')`}}>
                            <div className="absolute inset-0 bg-slate-900/70"></div>
                            <div className="container relative">
                                <div className="grid grid-cols-1">
                                    <div className="text-center">
                                        <img src='/images/map-plane.png' width={0} height={0} sizes='100vw' style={{width:'300px', height:'auto'}} className="mx-auto w-[300px]" alt=""/>
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Find Next Best <br/> Place To Visit</h1>
                                        <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                                        
                                        <div className="mt-6">
                                            <Link href="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md">See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 
                </Swiper>
            </div>
        </section>
    )
}