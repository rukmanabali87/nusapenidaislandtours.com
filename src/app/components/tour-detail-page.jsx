import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";
import { FiMapPin } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";
import { FiClock, FiUsers, FiGlobe, FiDollarSign, FiActivity } from "react-icons/fi";

import TourImage from "@/app/components/tour-image";
import TourDetailFaq from "@/app/components/faq/tour-detail-faq";
import TourHighlights from "@/app/components/tour-highlights";
import TourItinerary from "@/app/components/tour-itinerary";
import TourInclusions from "@/app/components/tour-inclusions";
import Client from "@/app/components/client";
import BookingCard from "@/app/components/booking-card";

export default function TourDetailPage({ data }) {

    const iconMap = {
        clock: FiClock,
        users: FiUsers,
        globe: FiGlobe,
        dollar: FiDollarSign,
        activity: FiActivity,
    };
    
    const {
        slug,
        productData,
        images,
        tourDetailAbout,
        highlightsData,
        itineraryData,
        inclusionsData,
        faqData
    } = data;

    return (
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light" />

        <section className="relative table w-full items-center py-36 bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 -z-20">
            <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority
                className="object-cover object-top"
            />
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">
                        {productData.title}
                    </h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold text-white/50">
                        <Link href="/tours">Tours</Link>
                    </li>
                    <li className="inline-block text-base text-white/50 mx-0.5">
                        <HiChevronRight className="text-xl inline-block align-middle" />
                    </li>
                    <li className="inline-block uppercase text-[13px] font-bold text-white">
                        {productData.title}
                    </li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-7">

                    <TourImage images={images} />

                    <h5 className="text-2xl font-semibold mt-5">{productData.title}</h5>

                    <p className="flex items-center text-slate-400 font-medium mt-2">
                        <FiMapPin className="size-4 me-1" />
                        {productData.place}
                    </p>

                    <ul className="list-none">
                        {tourDetailAbout?.map((item, index) => {
                            const Icon = iconMap[item.icon];

                            return (
                                <li key={index} className="inline-flex items-center me-5 mt-5">
                                    {Icon && <Icon className="size-6 stroke-[1.5] text-primary" />}
                                    <div className="ms-3">
                                        <p className="font-medium">{item.name}</p>
                                        <span className="text-slate-400 font-medium text-sm">
                                            {item.title}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold">Tour Descriptions:</h5>
                        <p className="text-slate-400 mt-6">{productData.desc1}</p>
                        <p className="text-slate-400 mt-3">{productData.desc2}</p>
                        <p className="text-slate-400 mt-3">{productData.desc3}</p>
                    </div>

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold mb-6">Tour Highlights:</h5>
                        <TourHighlights items={highlightsData} />
                    </div>

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold">Tour Itinerary:</h5>
                        <TourItinerary items={itineraryData} />
                    </div>

                    <TourInclusions items={inclusionsData} />

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold">Questions & Answers:</h5>
                        <TourDetailFaq items={faqData} />
                    </div>

                    <Client />
                    </div>

                    <BookingCard slug={slug} />
                </div>
            </div>
        </section>

        <Footer />
        <Switcher />
        </>
    );
}