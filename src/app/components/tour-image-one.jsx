'use client'
import React, { useState } from "react";
import Link from "next/link";

import {FiCamera} from 'react-icons/fi'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function TourImageOne(){

    let images = [
        '/images/listing/1.jpg',
        '/images/listing/2.jpg',
        '/images/listing/3.jpg',
        '/images/listing/4.jpg',
    ];
    let [photoIndex, setActiveIndex] = useState(0);
    let [isOpen, setOpen] = useState(false);

    const slides = images.map((image) => ({ src: image }));


    let handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }
    return(
        <>
        <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-8 col-span-7">
                <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img src='/images/listing/1.jpg' className="w-full lg:h-60 md:h-44 h-48 object-cover" alt=""/>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                        <Link href="#" onClick={() => handleCLick(0)} className="inline-flex justify-center items-center size-9 bg-primary text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                    </div>
                </div>
            </div>

            <div className="md:col-span-4 col-span-5">
                <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img src='/images/listing/2.jpg' className="w-full lg:h-60 md:h-44 h-48 object-cover" alt=""/>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                        <Link href="#" onClick={() => handleCLick(1)} className="inline-flex justify-center items-center size-9 bg-primary text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                    </div>
                </div>
            </div>

            <div className="md:col-span-4 col-span-5">
                <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img src='/images/listing/3.jpg' className="w-full lg:h-60 md:h-44 h-48 object-cover" alt=""/>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                        <Link href="#" onClick={() => handleCLick(2)} className="inline-flex justify-center items-center size-9 bg-primary text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                    </div>
                </div>
            </div>

            <div className="md:col-span-8 col-span-7">
                <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img src='/images/listing/4.jpg' className="w-full lg:h-60 md:h-44 h-48 object-cover" alt=""/>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                        <Link href="#" onClick={() => handleCLick(3)} className="inline-flex justify-center items-center size-9 bg-primary text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                    </div>
                </div>
            </div>
        </div>

        <Lightbox
            open={isOpen}
            close={() => setOpen(false)}
            slides={slides}
            index={photoIndex} // Show the clicked image first
        />
        </>
    )
}