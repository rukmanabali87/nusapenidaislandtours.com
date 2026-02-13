'use client'
import React, { useState } from "react";
import { FiChevronUp } from 'react-icons/fi';

export default function TourDetailFaq({ items = [] }) {
    const [activeTab, setActiveTab] = useState(null);

    if (!Array.isArray(items) || items.length === 0) return null;

    return (
        <div className="mt-6">
            {items.map((item, index) => (
                <div
                    key={item.id ?? index}
                    className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0"
                >
                    <h2 className="text-base font-semibold">
                        <button
                            type="button"
                            className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                                activeTab === item.id
                                    ? 'bg-gray-50 dark:bg-slate-800 text-primary'
                                    : ''
                            }`}
                            onClick={() => setActiveTab(activeTab === item.id ? null : item.id)}
                        >
                            <span>{item.title}</span>
                            <FiChevronUp
                                className={`size-4 shrink-0 transition-transform ${
                                    activeTab === item.id ? '' : 'rotate-180'
                                }`}
                            />
                        </button>
                    </h2>

                    {activeTab === item.id && (
                        <div className="p-5">
                            <p className="text-slate-400 dark:text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
