'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Tambahkan icon FiMapPin untuk penanda lokasi
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi'; 

// Daftar kota/area (Bisa kamu tambah/kurangi sesuai dengan data tour kamu)
const baliAreas = ["Nusa Penida", "Nusa Lembongan"];

export default function Search() {
    const [keyword, setKeyword] = useState('');
    const [city, setCity] = useState(''); // State baru untuk menyimpan pilihan kota
    
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault(); 
        
        // Menggunakan URLSearchParams agar lebih mudah merangkai parameter URL
        const params = new URLSearchParams();
        
        if (keyword.trim()) {
            params.set('q', keyword.trim());
        }
        
        if (city) {
            params.set('city', city);
        }
        
        // Ubah parameter menjadi string (misal: "q=pantai&city=badung")
        const queryString = params.toString();
        
        // Jika ada query string, tambahkan "?". Jika kosong, langsung ke /packages
        router.push(`/packages${queryString ? `?${queryString}` : ''}`);
    };

    return (
        <div className="grid grid-cols-1">
            <form onSubmit={handleSearch} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
                <div className="registration-form text-dark text-start">
                    
                    {/* Mengubah layout grid agar pas untuk 3 elemen (Search, Filter, Button) */}
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4">
                        
                        {/* 1. Kolom Input Search */}
                        <div className="lg:col-span-3 md:col-span-1">
                            <label className="form-label font-medium text-slate-900 dark:text-white">Search:</label>
                            <div className="relative mt-2">
                                <FiSearch className="size-[18px] absolute top-[10px] start-3"></FiSearch>
                                <input 
                                    name="name" 
                                    type="text" 
                                    id="job-keyword" 
                                    className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                                    placeholder="Search tours, activities, or tickets   "
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* 2. Kolom Filter Kota */}
                        <div className="lg:col-span-2 md:col-span-1">
                            <label className="form-label font-medium text-slate-900 dark:text-white">Location:</label>
                            <div className="relative mt-2">
                                {/* Icon Pin di sebelah kiri */}
                                <FiMapPin className="size-[18px] absolute top-[11px] start-3"></FiMapPin>
                                
                                <select 
                                    /* Perubahan di sini: menghapus py-2, menambahkan pr-10, dan membiarkan h-10 menengahkan teks secara otomatis */
                                    className="w-full px-3 ps-10 pr-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 appearance-none leading-tight"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="">All Locations</option>
                                    {baliAreas.map((area, index) => (
                                        <option key={index} value={area.toLowerCase()}>{area}</option>
                                    ))}
                                </select>

                                {/* Icon Panah di sebelah kanan */}
                                <div className="absolute inset-y-0 end-3 flex items-center pointer-events-none text-slate-400">
                                    <FiChevronDown className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* 3. Kolom Tombol Submit */}
                        <div className="lg:col-span-1 md:col-span-1 flex items-end">
                            <button 
                                type="submit" 
                                className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary hover:bg-primary/80 text-white rounded-md w-full cursor-pointer"
                            >
                                Search
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}