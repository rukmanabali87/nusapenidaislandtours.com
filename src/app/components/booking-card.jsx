'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { FiCalendar, FiUser, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { productPrices } from "@/app/data/price";

export default function BookingCard({ price = 0, slug }) {
    const [startDate, setStartDate] = useState(new Date());
    const [traveler, setTraveler] = useState(2);

    const router = useRouter();
    
    const currentProductPrices = productPrices[slug];
    
    const [packageType, setPackageType] = useState(
        currentProductPrices ? Object.keys(currentProductPrices)[0] : ""
    );
    let unitPrice = price;

    useEffect(() => {
        if (currentProductPrices) {
            setPackageType(Object.keys(currentProductPrices)[0]);
        }
    }, [slug, currentProductPrices]);

    const effectiveTraveler = (traveler === '' || traveler < 1) ? 2 : traveler;

    if (currentProductPrices && packageType) {
        const typePrices = currentProductPrices[packageType]; 
        const maxPaxInData = Math.max(...Object.keys(typePrices).map(Number));
        const selectedPax = effectiveTraveler > maxPaxInData ? maxPaxInData : effectiveTraveler;
        unitPrice = typePrices[selectedPax] || price;
    }
    
    const totalPrice = unitPrice * (traveler === '' ? 0 : traveler);

    // Alur 1: Reserve Now (Online Payment via Xendit)
    const goToCheckout = () => {
        const finalTraveler = (traveler === '' || traveler < 1) ? 2 : traveler;
        const url = `/checkout?slug=${slug}&pax=${finalTraveler}&type=${encodeURIComponent(packageType)}&date=${startDate.toISOString()}&method=xendit`;
        router.push(url);
    };

    // Alur 2: Pay on the Spot (Booking form -> WhatsApp Admin)
    const goToWhatsAppCheckout = () => {
        const finalTraveler = (traveler === '' || traveler < 1) ? 2 : traveler;
        const url = `/checkout?slug=${slug}&pax=${finalTraveler}&type=${encodeURIComponent(packageType)}&date=${startDate.toISOString()}&method=whatsapp`;
        router.push(url);
    };

    return (
        <>
        <div className="lg:col-span-4 md:col-span-5">
            <div className="sticky top-20 flex flex-col gap-6">

                {/* Booking Card */}
                <div className="p-4 rounded-md shadow dark:shadow-gray-700">
                    <div className='flex flex-col'>
                        <h3 className="text-xl font-bold text-center"> Price </h3>
                    </div>
                    
                    <div className="mt-4">
                        <div className="md:flex mt-4 items-center">
                            <div className="md:w-1/3">
                                <label className="font-medium">Date:</label>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <div className="form-icon relative w-full h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded border border-gray-100 dark:border-gray-800 flex items-center">
                                    <FiCalendar className="w-4 absolute top-3 start-4" />
                                    <DatePicker
                                        className="w-full ps-12 py-2 px-3 h-10 outline-none border-0 focus:outline-none focus:ring-0 bg-transparent"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="md:flex mt-4 items-center">
                            <div className="md:w-1/3">
                                <span className="font-medium">Traveler:</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <div className="form-icon relative">
                                    <FiUser className="w-4 h-4 absolute top-3 start-4" />
                                    <input
                                        type="number"
                                        min="1"
                                        value={traveler}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setTraveler(val === '' ? '' : Number(val));
                                        }}
                                        className="w-full ps-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="No. of person"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="md:flex mt-4 items-center">
                            <div className="md:w-1/3">
                                <label className="font-medium">Option:</label>
                            </div>
                            
                            <div className="md:w-2/3 mt-4 md:mt-0 relative">
                                <select 
                                    className="w-full py-2 pl-3 pr-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 appearance-none" 
                                    value={packageType} 
                                    onChange={(e) => setPackageType(e.target.value)}
                                >
                                    {Object.keys(currentProductPrices || {}).map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <FiChevronDown className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="mt-6 border-t border-slate-400 pt-4 mb-4">
                            <div className="flex justify-between items-center text-lg">
                                <span className="font-semibold">Total:</span>
                                <span className="font-bold text-primary">
                                    Rp {totalPrice.toLocaleString("id-ID")}
                                </span>
                            </div>
                            <div className="text-right text-sm text-slate-400 mt-1">
                                (Rp {unitPrice.toLocaleString("id-ID")} / pax)
                            </div>
                        </div>

                        {/* Dua Tombol Metode Pembayaran */}
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={goToCheckout} 
                                disabled={traveler === '' || traveler < 1}
                                className="py-2.5 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary hover:bg-primary/80 text-white rounded-md w-full disabled:opacity-60 disabled:cursor-not-allowed font-medium"
                            >
                                Reserve Now
                            </button> 

                            <button 
                                onClick={goToWhatsAppCheckout} 
                                disabled={traveler === '' || traveler < 1}
                                className="py-2.5 px-5 tracking-wide align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-md w-full disabled:opacity-60 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                Pay on the Spot
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}