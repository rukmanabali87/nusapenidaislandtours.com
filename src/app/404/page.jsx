import Link from "next/link"
import Image from "next/image"

import Switcher from "../components/switcher";
import BackToHome from "../components/back-to-home";

export default function Error(){
    return(
        <>
        <section className="relative bg-primary/5">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link href="/"><Image src='/images/logo-icon.png' width={112} height={112} className="mx-auto" alt=""/></Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <Image src='/images/maintenance.svg' width={0} height={0} sizes="100vw" style={{width:'384px', height:'auto'}} className="mx-auto w-96" alt=""/>
                            <h1 className="my-6 md:text-4xl text-3xl font-bold">Page Not Found?</h1>
                            <p className="text-slate-400">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasn't found.</p>
                            
                            <div className="mt-4">
                                <Link href="/" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md">Back to Home</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Travosy. Design & Develop with <i className="mdi mdi-heart text-primary-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <BackToHome/>
        </>
    )
}