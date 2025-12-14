'use client'

import React, { useState } from 'react'
import { FiUser } from "react-icons/fi"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from "next/navigation"

export default function DetailSidebar() {
    const router = useRouter()

    const [startDate, setStartDate] = useState(new Date())
    const [adult, setAdult] = useState(1)
    const [showTours, setShowTours] = useState(false)

    const tours = [
        {
            id: "west",
            title: "West Nusa Penida Tour",
            desc: "Kelingking, Broken Beach, Angel’s Billabong",
            price: 65
        },
        {
            id: "east",
            title: "East Nusa Penida Tour",
            desc: "Diamond Beach, Atuh Beach, Tree House",
            price: 70
        },
        {
            id: "combo",
            title: "Combination Tour",
            desc: "West & East Highlights",
            price: 95
        }
    ]

    const handleCheckAvailability = () => {
        if (adult < 1) {
            alert("Minimum 1 adult")
            return
        }
        setShowTours(true)
    }

    const handleSelectTour = (tour) => {
        router.push(
            `/booking?tour=${tour.id}&date=${startDate.toISOString().split('T')[0]}&adult=${adult}`
        )
    }

    return (
        <div className="lg:col-span-4 md:col-span-5">
            <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">

                {/* DATE */}
                <div className='flex flex-col'>
                    <label className="font-semibold">Date:</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800"
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                    />
                </div>

                {/* ADULT */}
                <div className="mt-4 md:flex items-center">
                    <div className="md:w-1/3">
                        <span className="font-medium">Adult:</span>
                    </div>

                    <div className="md:w-2/3 mt-4 md:mt-0">
                        <div className="relative">
                            <FiUser className="w-4 h-4 absolute top-3 left-4" />
                            <input
                                type="number"
                                min="1"
                                value={adult}
                                onChange={(e) => setAdult(Number(e.target.value))}
                                className="w-full pl-10 py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800"
                                placeholder="No. of person"
                            />
                        </div>
                    </div>
                </div>

                {/* BUTTON */}
                <div className="mt-4">
                    <button
                        onClick={handleCheckAvailability}
                        className="py-2 px-5 w-full bg-primary text-white rounded-md hover:bg-primary/90 transition"
                    >
                        Check availability
                    </button>
                </div>

                {/* TOUR OPTIONS */}
                {showTours && (
                    <div className="mt-6 space-y-3">
                        <h4 className="font-semibold text-lg">Available Tours</h4>

                        {tours.map((tour) => (
                            <div
                                key={tour.id}
                                onClick={() => handleSelectTour(tour)}
                                className="border rounded-md p-3 cursor-pointer hover:shadow-md transition"
                            >
                                <h5 className="font-semibold">{tour.title}</h5>
                                <p className="text-sm text-slate-500">{tour.desc}</p>
                                <p className="font-medium text-primary mt-1">
                                    ${tour.price * adult} ({adult} adult)
                                </p>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}
