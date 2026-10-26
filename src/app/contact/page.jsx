import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import MapModalTwo from "../components/map-modal-two";

import {FiPhone, FiMail,FiMapPin, } from 'react-icons/fi'

export default function Contact(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="!justify-end"/>
        <div className="container-fluid relative mt-20">
            <div className="grid grid-cols-1">
                <div className="w-full leading-[0] border-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4252.309786677275!2d115.4880491109013!3d-8.675245191336657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd27263e49ab575%3A0x7cd8e064eb1ff6e6!2sJl.%20Bias%20Muntig!5e1!3m2!1sid!2sid!4v1792982329383!5m2!1sid!2sid" style={{border:'0'}} title="travosy" className="w-full h-[500px]"></iframe>
                </div>
            </div>
        </div>
        <section className="relative lg:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-7 md:col-span-6">
                        <Image src='/images/travel-train-station.svg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}}  className="w-full max-w-[500px] mx-auto" alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch !</h3>

                                <form>
                                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                        <div className="lg:col-span-6">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :" required/>
                                        </div>
        
                                        <div className="lg:col-span-6">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :" required/>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Subject :" required/>
                                        </div>
    
                                        <div className="lg:col-span-12">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md mt-2">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-primary/5 text-primary rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                <FiPhone></FiPhone>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Phone</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <Link href="https://wa.me/6282233083081" className="text-primary font-medium">+62 822-3308-3081</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-primary/5 text-primary rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                <FiMail></FiMail>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Email</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <Link href="mailto:hello.nusapenidaislandtours@gmail.com" className="text-primary font-medium">hello.nusapenidaislandtours@gmail.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-primary/5 text-primary rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                <FiMapPin></FiMapPin>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Location</h5>
                            <p className="text-slate-400 mt-3">Jl. Bias Muntig, Ped, Kec. Nusa Penida, <br/> abupaten Klungkung, Bali 80771</p>
                            
                           <MapModalTwo/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        
        </>
    )
}