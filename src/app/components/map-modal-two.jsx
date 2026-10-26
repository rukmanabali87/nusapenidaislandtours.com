'use client'
import React,{useState} from "react"
import Link from "next/link"

export default function MapModalTwo(){
    let [modal, setModal] = useState(false)
    return(
        <>
        <div className="mt-5">
            <Link href="#" scroll={false} onClick={()=>setModal(!modal)} className="video-play-icon read-more lightbox text-primary font-medium">View on Google map</Link>
        </div>

        {modal && (
            <div className="w-full h-screen bg-slate-900/80 fixed top-0 left-0 bottom-0 right-0 z-999 flex items-center justify-center">
                <div className="w-full h-full px-5 md:px-40 md-py-20 py-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4252.309786677275!2d115.4880491109013!3d-8.675245191336657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd27263e49ab575%3A0x7cd8e064eb1ff6e6!2sJl.%20Bias%20Muntig!5e1!3m2!1sid!2sid!4v1792982329383!5m2!1sid!2sid" width="100%" height="100%" title="myfram" loading="lazy"></iframe>
                </div>
                <button className="text-slate-400 absolute top-[20px] right-[20px]" onClick={()=>setModal(!modal)}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        )}
        </>
    )
}