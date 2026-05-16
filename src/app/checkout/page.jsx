'use client'
import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from "next/script";
import { productPrices } from "@/app/data/price";

import Navbar from "@/app/components/navbar";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import Switcher from '../components/switcher';

// Komponen Utama Checkout
function CheckoutContent() {    
    const searchParams = useSearchParams();
    
    // 1. Tangkap Data dari URL
    const slug = searchParams.get('slug');
    const pax = Number(searchParams.get('pax')) || 1;
    const type = searchParams.get('type') || '';
    const dateQuery = searchParams.get('date');
    const date = dateQuery ? new Date(dateQuery).toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
    }) : '-';

    // 2. Hitung Ulang Harga Demi Keamanan
    let unitPrice = 0;
    const currentProductPrices = productPrices[slug];
    if (currentProductPrices && type) {
        const typePrices = currentProductPrices[type]; 
        if (typePrices) {
            const maxPaxInData = Math.max(...Object.keys(typePrices).map(Number));
            const selectedPax = pax > maxPaxInData ? maxPaxInData : pax;
            unitPrice = typePrices[selectedPax];
        }
    }
    const totalPrice = unitPrice * pax;

    // 3. State untuk Form Pengguna
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [pickupPoint, setPickupPoint] = useState("");
    const [note, setNote] = useState("");
    
    // Rapikan slug jadi Judul (misal: "nusa-penida" jadi "Nusa Penida")
    const formattedTitle = slug 
        ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
        : 'Tour';

    // 4. API Midtrans Pembayaran
    const handleCheckout = async () => {
        if (!name || !email || !phone) {
            alert("Harap lengkapi semua data diri terlebih dahulu!");
            return;
        }

        try {
            const response = await fetch('/api/midtrans/create-transaction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: `${slug}-${type}`.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 30), 
                    productName: `${formattedTitle} (${type})`.substring(0, 48), 
                    price: unitPrice, 
                    quantity: pax,      
                    customerName: name,
                    email: email,
                    phone: phone,
                    date: date,
                    pickupTime: pickupTime,
                    pickupPoint: pickupPoint,
                    note: note
                })
            });

            const data = await response.json();

            if (data.token) {
                window.snap.pay(data.token);
            } else {
                alert("Gagal memproses ke Payment Gateway. Silakan coba sesaat lagi.");
                console.error("Midtrans Error:", data);
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <>

        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light" />

        <section className="relative w-full py-15 bg-primary overflow-hidden">
            <Image
                src="/images/bg/cta.jpg"
                alt="Travel Blogs"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">
                    Checkout Your Booking
                    </h3>
                </div>
            </div>  
        </section>
        
        <section className="relative md:py-32 py-24 bg-gray-50 dark:bg-slate-800 min-h-screen">

            <Script 
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                strategy="lazyOnload"
            />
            
            <div className="container relative mx-auto px-4">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    
                    {/* BAGIAN KIRI: Form Data Diri */}
                    <div className="lg:col-span-8 md:col-span-7">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 border-t-4 border-primary">
                            <h3 className="text-2xl leading-normal font-semibold mb-6">Contact Information</h3>
                            
                            <div className="grid grid-cols-1 gap-5">
                                <div>
                                    <label className="font-semibold">Full Name <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full mt-2 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                                        placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                
                                <div>
                                    <label className="font-semibold">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" className="w-full mt-2 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                                        placeholder="youremail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <div>
                                    <label className="font-semibold">WhatsApp Number <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full mt-2 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                                        placeholder="+62 8..." value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>

                                <div>
                                    <label className="font-semibold">Pickup Time <span className="text-red-500">*</span></label>
                                    <input type="time" className="w-full mt-2 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                                        placeholder="08.00 AM" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} required />
                                </div>

                                <div>
                                    <label className="font-semibold">Pickup Point <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full mt-2 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                                        placeholder="Your Hotel Name" value={pickupPoint} onChange={(e) => setPickupPoint(e.target.value)} required />
                                </div>

                                <div>
                                    <label className="font-semibold">Note</label>
                                    <textarea 
                                        className="w-full mt-2 py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                                        placeholder="Additional notes or requests..." 
                                        value={note} 
                                        onChange={(e) => setNote(e.target.value)}
                                        rows="4" 
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BAGIAN KANAN: Order Summary */}
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 sticky top-28">
                            <h3 className="text-xl text-center leading-normal font-semibold mb-6">Booking Summary</h3>
                            
                            <div className="flex justify-between items-start mb-3 border-b dark:border-gray-800 pb-3">
                                <span className="text-slate-400 w-1/3">Tour:</span>
                                <span className="font-medium text-right w-2/3">{formattedTitle}</span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-400">Date:</span>
                                <span className="font-medium">{date}</span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-400">Option:</span>
                                <span className="font-medium text-right">{type}</span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-400">Traveler:</span>
                                <span className="font-medium">{pax} Person(s)</span>
                            </div>

                            <div className="border-t dark:border-gray-800 pt-4 mt-6">
                                <div className="flex justify-between items-center text-lg mb-6">
                                    <span className="font-semibold">Total Price:</span>
                                    <span className="font-bold text-primary text-xl">Rp {totalPrice.toLocaleString("id-ID")}</span>
                                </div>

                                <button onClick={handleCheckout} className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary hover:bg-primary/80 text-white rounded-md w-full disabled:opacity-60">
                                    Pay Now
                                </button>
                                <p className="text-xs text-center text-slate-400 mt-3">
                                    Secure payment powered by Midtrans.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        <Switcher />
        </>
    )
}

// Wrapper Next.js: Wajib menggunakan Suspense jika ada useSearchParams() di dalam "use client" route 
export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="text-center mt-32 text-xl font-bold">Memuat Rincian...</div>}>
            {/* Pada proyek aslimu jika ada <Navbar /> / <Footer />, masukan di luar Suspense ini */} 
            <CheckoutContent />
        </Suspense>
    );
}

