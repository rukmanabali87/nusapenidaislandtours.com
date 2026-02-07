import Image from "next/image";
import Link from "next/link";

import Tagline from "./components/tagline";
import Navbar from "./components/navbar";
import Form from "./components/form";
import TopDestinationOne from "./components/top-destination-one";
import About from "./components/about";
import WhyChooseUs from "./components/why-choose-us";

import Footer from "./components/footer";
import Switcher from "./components/switcher";

import Blogs from "./components/blogs";
import Client from "./components/client";




import { packages } from './data/data'
import { FiMapPin } from 'react-icons/fi'



export default function Home() {
    return (
        <>

            <Tagline />
            <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="!justify-end nav-light" />
            
            <section className="relative w-full h-screen overflow-hidden">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/hero.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    >
                    <source src="/videos/landing-page.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/50"></div> */}
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="container relative h-full flex items-center">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center w-full gap-[30px]">

                        <div className="lg:col-span-8 md:col-span-7">
                            <h5 className="text-3xl !font-dancing text-white mb-4">
                                Discover the Beauty of Nusa Penida
                            </h5>

                            <h4 className="font-bold text-white lg:leading-normal leading-tight text-4xl lg:text-6xl mb-6">
                                Leave the Road, <br /> Sail to the Island
                            </h4>

                            <p className="text-white/80 text-xl max-w-xl">
                                Dreaming of a tropical escape? Let us design your perfect island adventure.
                            </p>
                        </div>

                        {/* <VideoModalOne /> */}

                    </div>
                </div>

            </section>
            <div className="container relative -mt-16 z-1">
                <Form />
            </div>
            <section className="relative md:py-24 py-16 overflow-hidden">
                <TopDestinationOne />

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        {packages.slice(0, 6).map((item, index) => {
                            return (
                                <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                                    <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="scale-125 group-hover:scale-100 duration-500" alt="" />
                                        {/* {item.tagText && (
                                            <div className="absolute top-0 start-0 p-4">
                                                <span className="bg-primary text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                            </div>
                                        )} */}

                                        {/* <div className="absolute top-0 end-0 p-4">
                                            <Link href="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-primary dark:focus:text-primary hover:text-primary dark:hover:text-primary"><i className="mdi mdi-heart text-[20px] align-middle"></i></Link>
                                        </div> */}
                                    </div>

                                    <div className="p-4">
                                        <p className="flex items-center text-slate-400 font-medium mb-2"><FiMapPin className="text-primary size-4 me-1"></FiMapPin> {item.place}</p>
                                        <Link href={`/tour-detail-one/${item.id}`} className="text-lg font-medium hover:text-primary duration-500 ease-in-out">{item.title}</Link>

                                        <div className="flex items-center mt-2">
                                            <span className="text-slate-400">Rating:</span>
                                            <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                                                <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                <li className="inline text-black dark:text-white text-sm">5.0(30)</li>
                                            </ul>
                                        </div>

                                        <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                            <h5 className="text-lg font-medium text-primary">{item.amount}</h5>

                                            <Link href="" className="text-slate-400 hover:text-primary">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-6 text-center">
                        <Link href="/grid-right-sidebar" className="text-slate-400 hover:text-primary inline-block">See More Tours <i className="mdi mdi-arrow-right align-middle"></i></Link>
                    </div>
                </div>

                <About />

                <WhyChooseUs/>
                
                <Client />
                <Blogs />
            </section>
            <Footer />
            <Switcher />
        </>
    );
}
