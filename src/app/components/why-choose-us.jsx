'use client'
import React from "react";

import { FiUsers } from 'react-icons/fi';
import { TbReportMoney } from 'react-icons/tb';
import { MdDashboardCustomize } from 'react-icons/md';
import { RiCustomerService2Line } from "react-icons/ri";

export default function WhyChooseUs(){
    return(
        <section className="md:mt-24 mt-16 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-12">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-slate-900">
                        Why Travelers Trust Nusa Penida Island Tours
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-4 grid-cols-1 gap-8 text-center">

                    {/* Card 1 */}
                    <div className="p-6 rounded-md shadow dark:shadow-gray-700 transition">
                        <TbReportMoney className="h-12 w-12 mx-auto mb-6 text-primary" />
                        <h4 className="text-xl font-semibold min-h-[70px]">
                            Transparent Pricing
                        </h4>
                        <p className="text-slate-400 leading-relaxed dark:shadow-gray-700">
                            Enjoy clear, upfront pricing with no hidden costs — what you see is exactly what you pay.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 rounded-md shadow dark:shadow-gray-700 transition">
                        <FiUsers className="h-12 w-12 mx-auto mb-6 text-primary" />
                        <h4 className="text-xl font-semibold min-h-[70px]">
                            Experienced Local Team
                        </h4>
                        <p className="text-slate-400 leading-relaxed dark:shadow-gray-700">
                            Our knowledgeable local team brings years of hands-on experience to ensure a smooth and authentic Bali adventure.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 rounded-md shadow dark:shadow-gray-700 transition">
                        <MdDashboardCustomize className="h-12 w-12 mx-auto mb-6 text-primary" />
                        <h4 className="text-xl font-semibold min-h-[70px]">
                            Fully Customizable Tours
                        </h4>
                        <p className="text-slate-400 leading-relaxed dark:shadow-gray-700">
                            Every trip is designed around your needs — flexible itineraries, personal preferences, and special requests are always welcome.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6 rounded-md shadow dark:shadow-gray-700 transition">
                        <RiCustomerService2Line className="h-12 w-12 mx-auto mb-6 text-primary" />
                        <h4 className="text-xl font-semibold min-h-[70px]">
                            24/7 Customer Support
                        </h4>
                        <p className="text-slate-400 leading-relaxed dark:shadow-gray-700">
                            Our friendly support team is available around the clock to assist you before, during, and after your trip.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};