'use client';
import React from "react";

import { FaMapPin, FaCameraRetro, FaCar, FaSwimmer, FaMapMarkedAlt, FaAnchor, FaUserShield    } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { MdDirectionsBoat } from "react-icons/md";
import { PiIslandFill } from "react-icons/pi";
import { GiSeaCliff } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";



export default function TourHighlights({ items = [] }){

    const iconMap = {
        mapPin: FaMapPin,
        walking: FaPersonWalkingLuggage,
        camera: FaCameraRetro,
        car: FaCar,
        fastBoat: MdDirectionsBoat,
        island: PiIslandFill,
        snorkel: FaSwimmer,
        map: FaMapMarkedAlt,
        cliff: GiSeaCliff,
        anchor: FaAnchor,
        waves: LuWaves,
        shield: FaUserShield,
    };

    return (
        <ul className="space-y-6">
            {items.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                <li
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-md shadow hover:shadow transform hover:scale-105 transition-all duration-300 border-l-4 border-primary dark:shadow-gray-700"
                >
                    <span className="text-3xl text-primary dark:text-white flex items-center leading-none transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                    {Icon && <Icon />}
                    </span>

                    <div>
                    <h6 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                    </h6>
                    <p className="text-gray-400">
                        {item.desc}
                    </p>
                    </div>
                </li>
                );
            })}
        </ul>
    );
};