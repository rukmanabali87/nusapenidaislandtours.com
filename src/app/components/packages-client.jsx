'use client';

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import { toursData } from "../data/data";
import { useSearchParams, useRouter } from "next/navigation";

import {FiMapPin, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { MdStar, MdArrowForward, } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";
import Switcher from "../components/switcher";
import Footer from "../components/footer";

export default function PackagesClient(){
    const router = useRouter();
    const searchParams = useSearchParams();

    const itemsPerPage = 6;

    const currentPage = Number(searchParams.get("page")) || 1;

    const totalPages = Math.ceil(toursData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPackages = toursData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const goToPage = (page) => {
        router.push(`/packages?page=${page}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
        <section className="relative w-full py-36 overflow-hidden">
            <Image
                src="/images/tours/west-east-tour-combination/1-new.jpg"
                alt="Bali Tour Packages"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">All Tour Packages</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Nusa Penida Island Tours</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><HiChevronRight className="text-xl inline-block align-middle" /></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tour Packages</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {currentPackages.map((item, index) => {
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
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                {/* Prev */}
                                <li>
                                    <button
                                        onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="size-10 inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl border border-gray-100 dark:border-gray-800 hover:bg-primary hover:text-white disabled:opacity-40"
                                    >
                                        <FiChevronLeft className="size-5" />
                                    </button>
                                </li>

                                {/* Page Numbers */}
                                {Array.from({ length: totalPages }).map((_, index) => {
                                    const page = index + 1;
                                    return (
                                        <li key={page}>
                                            <button
                                                onClick={() => goToPage(page)}
                                                className={`size-10 inline-flex justify-center items-center border
                                                    ${
                                                        currentPage === page
                                                            ? "bg-primary text-white border-primary"
                                                            : "bg-white dark:bg-slate-900 text-slate-400 border-gray-100 dark:border-gray-800 hover:bg-primary hover:text-white"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    );
                                })}

                                {/* Next */}
                                <li>
                                    <button
                                        onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="size-10 inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl border border-gray-100 dark:border-gray-800 hover:bg-primary hover:text-white disabled:opacity-40"
                                    >
                                        <FiChevronRight className="size-5" />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}