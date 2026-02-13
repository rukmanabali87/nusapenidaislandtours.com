'use client'
import React, { useState } from "react";

export default function TourItinerary({ items = [] }) {
    return (
        <ul className="relative mt-6 border-l-4 border-primary pl-6 space-y-4">
            {items.map((item, i) => (
                <li key={i} className="relative">
                    <span className="absolute -left-[32px] top-1.5 w-3 h-3 bg-primary rounded-full"></span>

                    <h6 className="font-medium">
                        {item.time} | {item.title}
                    </h6>
                    <p className="text-slate-400">{item.desc}</p>
                </li>
            ))}
        </ul>
    );
}