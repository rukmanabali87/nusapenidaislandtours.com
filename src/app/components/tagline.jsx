import React from "react";

import {FiClock, FiMapPin, FiMail, FiFacebook, FiInstagram, FiTwitter, FiPhone} from 'react-icons/fi'

export default function Tagline(){
    return(
        <>
        <div className="tagline bg-[#157F84]">
            <div className="container relative">                
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-between">
                        <ul className="list-none space-x-2">
                            <li className="inline-flex items-center">
                            </li>
                        </ul>

                        <ul className="list-none">
                            <li className="inline-flex items-center">
                                <FiMail className="text-slate-300 size-4"></FiMail>
                                <a href="mailto:hello.nusapenidaislandtours@gmail.com" className="ms-2 text-slate-300 hover:text-slate-200">hello.nusapenidaislandtours@gmail.com</a>
                            </li>
                            <li className="inline-flex items-center ms-2">
                                <ul className="list-none space-x-3">
                                    <li className="inline-flex mb-0"><a href="#!" className="text-slate-300 hover:text-primary"><FiFacebook className="size-4 align-middle" title="facebook"></FiFacebook></a></li>
                                    <li className="inline-flex ms-2 mb-0"><a href="#!" className="text-slate-300 hover:text-primary"><FiInstagram className="size-4 align-middle" title="instagram"></FiInstagram></a></li>
                                    <li className="inline-flex ms-2 mb-0"><a href="https://wa.me/6287717068139" className="text-slate-300 hover:text-primary"><FiPhone className="size-4 align-middle" title="phone"></FiPhone></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}