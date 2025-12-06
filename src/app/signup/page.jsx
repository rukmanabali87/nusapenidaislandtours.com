import Link from "next/link"
import Image from "next/image";

import BackToHome from "../components/back-to-home";
import Switcher from "../components/switcher";

export default function Signup(){
    return(
        <>
        <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
            <div className="absolute inset-0 image-wrap z-1 bg-[url('/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
            <div className="container relative z-3">
                <div className="flex justify-center">
                    <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                        <Link href="/"><Image src='/images/logo-icon.png' width={112} height={112} className="mx-auto" alt=""/></Link>
                        <h5 className="my-6 text-xl font-semibold">Signup</h5>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                                    <input id="RegisterName" type="text" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Harry" required/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                    <input id="LoginEmail" type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="name@example.com" required/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                    <input id="LoginPassword" type="password" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Password:" required/>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center w-full mb-0">
                                        <input className="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-red-600 checked:appearance-auto dark:accent-red-600 focus:border-red-300 focus:ring-0 focus:ring-offset-0 focus:ring-red-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&amp;C"/>
                                        <label className="form-check-label text-slate-400" htmlFor="AcceptT&amp;C">I Accept <Link href="" className="text-primary">Terms And Condition</Link></label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <Link href="/signup-success" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md w-full">Register</Link>
                                </div>

                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Already have an account ? </span> <Link href="/login" className="text-black dark:text-white font-bold inline-block">Sign in</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <BackToHome/>
        </>
    )
}