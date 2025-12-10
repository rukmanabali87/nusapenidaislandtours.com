import React from "react";
import Link from "next/link";


import Navbar from "../../components/navbar";

import DetailSidebar from "../../components/detail-sidebar";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";
import TourImageOne from "../../components/tour-image-one";
import TourDetailFaq from "../../components/faq/tour-detail-faq";
import Client from "../../components/client-page";
import { FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail, FiClock, FiActivity, FiUsers, FiGlobe, FiDollarSign, FiYoutube, FiHelpCircle, FiBookmark, FiSettings, FiGithub, FiGitlab } from "react-icons/fi"


import { FiMapPin } from 'react-icons/fi'

import { packages } from "../../data/data";

export const tourDetailAbout = [
    {
        icon: FiClock,
        name: 'Duration',
        title: '12 Hours'
    },
    {
        icon: FiActivity,
        name: 'Type',
        title: 'Adventure'
    },
    {
        icon: FiUsers,
        name: 'Group Size:',
        title: 'Max 50 Peoples'
    },
    {
        icon: FiGlobe,
        name: 'Languages',
        title: 'English'
    },
    {
        icon: FiDollarSign,
        name: 'Price',
        title: 'Start From US$ 12'
    },
];

export const metadata = {
    title: "West Nusa Penida Tour – Private Day Trip with Local Driver",
    description:
        "Experience the best West Nusa Penida Tour. Visit Kelingking Beach, Broken Beach, Angel’s Billabong, and Crystal Bay. Private driver, fast boat tickets, hotel pickup included.",
    keywords: [
        "west nusa penida tour",
        "nusa penida tour",
        "private nusa penida tour",
        "nusa penida day trip",
        "kelingking beach tour"
    ],
    alternates: {
        canonical: "https://www.nusapenidaislandtours.com/tour/west-nusa-penida-tour"
    },
    openGraph: {
        title: "West Nusa Penida Tour – Private Day Trip",
        description:
            "Explore the western side of Nusa Penida including Kelingking Beach, Broken Beach, Angel’s Billabong, and Crystal Bay with a private driver.",
        url: "https://www.nusapenidaislandtours.com/tour/west-nusa-penida-tour",
        siteName: "Nusa Penida Island Tours",
        images: [
            {
                url: "https://www.nusapenidaislandtours.com/images/west-penida.jpg",
                width: 1200,
                height: 630
            }
        ],
        type: "article"
    }
};


export default function TourDetailOne(props) {
    let id = props.params.id
    let data = packages.find((item) => item.id === parseInt(id))

    return (
        <>
            <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light" />
            <section className="relative table w-full items-center py-36 bg-[url('/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">{data?.title}</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Tour</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">west-nusa-penida-tour</li>
                    </ul>
                </div>
            </section>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                        <div className="lg:col-span-8 md:col-span-7">
                            <TourImageOne />

                            <h5 className="text-2xl font-semibold mt-5">{data?.title}</h5>
                            <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin>Nusa Penida</p>

                            <ul className="list-none">
                                {tourDetailAbout.map((item, index) => {
                                    let Icon = item.icon
                                    return (
                                        <li className="inline-flex items-center me-5 mt-5" key={index}>
                                            <Icon className="size-6 stroke-[1.5] text-primary"></Icon>

                                            <div className="ms-3">
                                                <p className="font-medium">{item.name}</p>
                                                <span className="text-slate-400 font-medium text-sm">{item.title}</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="mt-6">
                                <h5 className="text-lg font-semibold">Tour Descriptions:</h5>

                                <p className="text-slate-400 mt-6">
                                    Experience the beauty of West Nusa Penida on a private and comfortable full-day tour.
                                    This trip takes you to the island’s most iconic landmarks, including Kelingking Beach,
                                    Broken Beach, Angel’s Billabong, and Crystal Bay. Each location offers breathtaking
                                    cliff views, turquoise waters, and perfect photo opportunities for couples, families,
                                    and adventure travelers.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    During the tour, you will travel in a private air-conditioned car with a friendly
                                    English-speaking local driver who will guide you to each destination. Fast boat tickets
                                    from Sanur to Nusa Penida are included, ensuring a smooth and hassle-free journey.
                                    Whether you're looking for relaxation or adventure, this tour provides the perfect
                                    blend of comfort, flexibility, and unforgettable scenery.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    This tour is ideal for travelers who want a safe, customizable, and private experience
                                    on one of Bali’s most beautiful islands. With transparent pricing and no hidden fees,
                                    you can enjoy the day stress-free while exploring the best highlights of West Nusa Penida.
                                </p>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-2xl font-semibold mb-4">Tour Highlights</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-5 border rounded-xl shadow-sm bg-white">
                                        <h4 className="font-bold text-lg">Private Car & Driver</h4>
                                        <p className="text-slate-500 mt-2">Explore comfortably with an expert local island driver.</p>
                                    </div>

                                    <div className="p-5 border rounded-xl shadow-sm bg-white">
                                        <h4 className="font-bold text-lg">Fast Boat Tickets Included</h4>
                                        <p className="text-slate-500 mt-2">Round-trip fast boat from Sanur to Nusa Penida.</p>
                                    </div>

                                    <div className="p-5 border rounded-xl shadow-sm bg-white">
                                        <h4 className="font-bold text-lg">Top Destinations</h4>
                                        <p className="text-slate-500 mt-2">Visit Kelingking, Broken Beach, Angel Billabong, and Crystal Bay.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-2xl font-semibold mb-4">Tour Itinerary</h3>

                                <ul className="border-l-4 border-blue-500 pl-6 space-y-4">
                                    <li>
                                        <h4 className="font-bold">08:00 – Fast Boat Check-In</h4>
                                        <p className="text-slate-500">Meet our team at Sanur Harbor.</p>
                                    </li>
                                    <li>
                                        <h4 className="font-bold">10:00 – Broken Beach</h4>
                                        <p className="text-slate-500">Iconic natural rock arch with ocean views.</p>
                                    </li>
                                    <li>
                                        <h4 className="font-bold">11:00 – Angel’s Billabong</h4>
                                        <p className="text-slate-500">A beautiful natural infinity pool.</p>
                                    </li>
                                    <li>
                                        <h4 className="font-bold">13:00 – Kelingking Beach</h4>
                                        <p className="text-slate-500">The famous T-Rex cliff viewpoint.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Included</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>✔️ Private Car & Driver</li>
                                        <li>✔️ Return Fast Boat Ticket</li>
                                        <li>✔️ Entrance Fees</li>
                                        <li>✔️ Parking Fees</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Not Included</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>❌ Meals</li>
                                        <li>❌ Personal expenses</li>
                                        <li>❌ Travel insurance</li>
                                    </ul>
                                </div>

                            </div>



                            <a href="https://www.tripadvisor.com/YourBusinessPage" target="_blank" rel="noopener noreferrer">
                                See our reviews on TripAdvisor
                            </a>


                            <div className="mt-6">
                                <h5 className="text-lg font-semibold">Questions & Answers:</h5>

                                <TourDetailFaq />
                            </div>
                            <Client />


                        </div>

                        <DetailSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <Switcher />
        </>
    )
}