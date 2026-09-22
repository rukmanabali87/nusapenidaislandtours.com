'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FiCheckCircle, FiPrinter, FiHome } from 'react-icons/fi';
import { Berkshire_Swash } from 'next/font/google';
import Navbar from "@/app/components/navbar";
import Image from 'next/image';
import Footer from '../components/footer';
import Switcher from '../components/switcher';
import { HiChevronRight } from "react-icons/hi";

const berkshireSwash = Berkshire_Swash({
    weight: '400',
    subsets: ['latin'],
});

function SuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId') || '-';
    
    const [bookingData, setBookingData] = useState(null);
    const [printDate, setPrintDate] = useState('');
    
    // 1. Tambahkan state loading
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const savedData = localStorage.getItem('rukmanaPendingOrder');
        if (savedData) {
            setBookingData(JSON.parse(savedData));
            localStorage.removeItem('rukmanaPendingOrder'); 
        }

        setPrintDate(new Date().toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        }));

        // 2. Matikan status loading setelah pencarian data selesai (baik ketemu maupun kosong)
        setIsLoading(false); 
    }, []);

    const handlePrint = () => {
        const originalTitle = document.title;
        document.title = `E-Voucher-Nusa-Penida-Island-Tours-${orderId}`;
        window.print();
        setTimeout(() => {
            document.title = originalTitle;
        }, 1000);
    };

    // 3. Tampilkan tulisan verifying HANYA saat proses mencari data berlangsung
    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">Verifying your booking data...</div>;
    }

    // 4. Jika loading selesai TAPI data kosong (karena sudah dihapus/refresh)
    if (!bookingData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Expired</h2>
                <p className="text-gray-500 mb-6">Your booking data has been cleared for security, or the session has expired.</p>
                <Link href="/" className="flex items-center gap-2 py-2 px-6 bg-primary hover:bg-primary/90 text-white rounded-md font-medium transition-all">
                    <FiHome className="w-5 h-5" />
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="print:hidden">
                <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
            </div>

            <section className="relative table w-full py-20 lg:py-24 bg-[#157F84] print:hidden">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-bold text-white">Booking Success</h3>
                    </div>
                </div>
                
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/70 hover:text-white"><Link href="/">Nusa Penida Island Tours</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5"><HiChevronRight className="text-xl inline-block align-middle" /></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-white" aria-current="page">Booking</li>
                    </ul>
                </div>
            </section>

            <section className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:min-h-0">
                <div className="max-w-2xl w-full space-y-8">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 print:shadow-none print:border-none print:p-0">
                        
                        {/* Header Berhasil */}
                        <div className="text-center print:hidden mb-8">
                            <FiCheckCircle className="mx-auto h-16 w-16 text-primary mb-4" />
                            <h2 className="text-3xl font-bold text-gray-900">Payment Successful!</h2>
                            <p className="mt-2 text-gray-500">Thank you for booking with Nusa Penida Island Tours.</p>
                        </div>

                        {/* Logo & Judul Voucher (Tampil di Layar dan Saat Dicetak) */}
                        <div className="hidden print:block text-center mb-6 border-b-2 border-gray-200 pb-4">
                            <div className="flex justify-center mb-3 mt-5">
                                <Image 
                                    src="/images/logo-nusa-penida-icon.png" 
                                    alt="Nusa Penida Island Tours" 
                                    width={120} 
                                    height={25} 
                                    priority
                                    className="object-contain"
                                />
                            </div>
                            <h1 className={`${berkshireSwash.className} text-3xl font-bold text-gray-900 leading-bold`}>Nusa Penida Island Tours</h1>
                            <p className="text-xs text-gray-600 mt-3">Official Booking E-Voucher / Receipt</p>
                        </div>

                        {/* Rincian Pesanan */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 print:bg-white print:border-gray-300">
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                                <div>
                                    <p className="text-sm text-gray-500">Order ID</p>
                                    <p className="font-semibold text-gray-900">#{orderId}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Status</p>
                                    <p className="font-bold text-primary uppercase">PAID</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm text-gray-500">Customer Name</p>
                                    <p className="font-medium text-gray-900">{bookingData.customerName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Nationality</p>
                                    <p className="font-medium text-gray-900">{bookingData.nationality}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Email Address</p>
                                    <p className="font-medium text-gray-900">{bookingData.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">WhatsApp Number</p>
                                    <p className="font-medium text-gray-900">{bookingData.phone}</p>
                                </div>

                                <div className="border-t border-gray-200 pt-4 mt-2">
                                    <p className="text-sm text-gray-500">Tour Package</p>
                                    <p className="font-medium text-gray-900">{bookingData.productName}</p>
                                </div>
                                <div className="border-t border-gray-200 pt-4 mt-2">
                                    <p className="text-sm text-gray-500">Travelers</p>
                                    <p className="font-medium text-gray-900">{bookingData.quantity} Person(s)</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Tour Date & Time</p>
                                    <p className="font-medium text-gray-900">{bookingData.date} at {bookingData.pickupTime}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Pickup Point</p>
                                    <p className="font-medium text-gray-900">{bookingData.pickupPoint || '-'}</p>
                                </div>

                                <div className="col-span-2">
                                    <p className="text-sm text-gray-500">Special Note</p>
                                    <p className="font-medium text-gray-900">{bookingData.note || '-'}</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                                <span className="font-semibold text-gray-700">Total Amount</span>
                                <span className="text-xl font-bold text-primary">Rp {bookingData.price ? (bookingData.price * bookingData.quantity).toLocaleString('id-ID') : '-'}</span>
                            </div>
                        </div>

                        {/* Tombol Aksi */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center print:hidden">
                            <button 
                                onClick={handlePrint}
                                className="flex items-center justify-center gap-2 py-3 px-6 bg-primary hover:bg-primary/90 text-white rounded-md font-medium transition-all"
                            >
                                <FiPrinter className="w-5 h-5" />
                                Download Voucher (PDF)
                            </button>
                            
                            <Link href="/" className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md font-medium transition-all">
                                <FiHome className="w-5 h-5" />
                                Back to Home
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </section>

            <div className="print:hidden">
                <Footer />
                <Switcher />
            </div>
        </>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl font-bold">Loading Voucher...</div>}>
            <SuccessContent />
        </Suspense>
    );
}