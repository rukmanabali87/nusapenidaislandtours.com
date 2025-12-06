'use client'
import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

import { FiSearch, FiCalendar, FiUsers } from 'react-icons/fi'

export default function Form() {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    return (
        <div className="grid grid-cols-1">
            <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
                <div className="registration-form text-dark text-start">
                    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">

                        {/* Kolom Search */}
                        <div className="lg:col-span-4">
                            <label className="form-label font-medium text-slate-900 dark:text-white">Search:</label>
                            <div className="relative mt-2">
                                <FiSearch className="size-[18px] absolute top-[10px] start-3" />
                                <input
                                    name="name"
                                    type="text"
                                    id="job-keyword"
                                    className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                    placeholder="Search"
                                />
                            </div>
                        </div>

                        {/* Tombol Search */}
                        <div className="flex items-end">
                            <input
                                type="submit"
                                id="search-buy"
                                name="search"
                                className="py-2 h-10 px-5 w-full tracking-wide duration-500 text-base text-center bg-primary text-white rounded-md cursor-pointer"
                                defaultValue="Search"
                            />
                        </div>

                    </div>

                </div>
            </form>
        </div>
    )
}