import Image from "next/image";
import Link from "next/link";

import Tagline from "./components/tagline";
import Navbar from "./components/navbar";
import Search from "./components/search";
import TopDestinationOne from "./components/top-destination-one";
import About from "./components/about";
import WhyChooseUs from "./components/why-choose-us";

import Footer from "./components/footer";
import Switcher from "./components/switcher";

import { products } from "./data/product";
import { productPrices } from "./data/price";

import Blogs from "./components/blogs";
import Client from "./components/client";



import { MdArrowForward, MdStar } from "react-icons/md";
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
                    poster="/images/2.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    >
                    <source src="/videos/landing-page.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/50"></div> */}
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="container relative h-full flex items-center">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center w-full gap-7.5">

                        <div className="lg:col-span-8 md:col-span-7">
                            <h5 className="text-3xl font-dancing! text-white mb-4">
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
                <Search />
            </div>
            <section className="relative md:py-24 py-16 overflow-hidden">
                <TopDestinationOne />

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Tour Packages</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Discover our top tour packages — curated itineraries, great value, and unforgettable Bali experiences ready to book.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        {products.slice(0, 6).map((item, index) => {
                            return (
                            <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                                <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                    <Link href={`/tours/${item.slug}`} className="block overflow-hidden">
                                        {item.images?.[0]?.src && (
                                            <Image
                                                src={item.images[0].src}
                                                alt={item.images[0].alt || item.productData.title}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "100%", height: "auto" }}
                                                className="scale-125 group-hover:scale-100 duration-500"
                                            />
                                        )}
                                    </Link>
                                </div>

                                <div className="p-4">
                                    <p className="flex items-center text-slate-400 font-medium mb-2">
                                        <FiMapPin className="text-primary size-4 me-1" />
                                        {item.productData.place}
                                    </p>

                                    
                                    <Link href={`/tours/${item.slug}`} className="text-lg font-medium hover:text-primary duration-500 ease-in-out">
                                        {item.productData.title}
                                    </Link>

                                    
                                    <div className="flex items-center mt-2">
                                        <span className="text-slate-400">Rating:</span>
                                        <ul className="flex items-center text-amber-400 list-none ms-2">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i} className="inline-flex items-center">
                                                    <MdStar className="text-lg" />
                                                </li>
                                            ))}
                                            <li className="text-black dark:text-white text-sm ms-1">
                                                5.0
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 className="text-lg font-medium text-primary">
                                            {
                                                item.tourDetailAbout.find(
                                                    (detail) => detail.name === "Start Price"
                                                )?.title
                                            }
                                        </h5>

                                        <Link href={`/tours/${item.slug}`} className="inline-flex items-center gap-1 text-slate-400 hover:text-primary">
                                            Explore Now
                                            <MdArrowForward size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>

                    <div className="mt-6 text-center">
                        <Link href="/packages" className="inline-flex items-center gap-1 text-slate-400 hover:text-primary">
                            See More Tours
                            <MdArrowForward size={18} />
                        </Link>
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
