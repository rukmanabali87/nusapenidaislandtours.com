import Link from "next/link"
import Image from "next/image"

import Navbar from "../components/navbar";
import AccountingTab from "../components/accounting-tab";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { paymentData } from "../data/data";

import {FiTrash2} from 'react-icons/fi'
import PaymentBtn from "../components/payment-btn";

export default function UserPayment(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="!justify-end"/>

        <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
            <div className="container relative">
                <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-800 h-52 bg-[url('/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <AccountingTab/>

                    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Payment Methods</h5>
                                <p className="text-slate-400 mt-2">Primary payment method is used by default</p>
                            </div>

                            <div className="px-6">
                                <ul>
                                    {paymentData.map((item,index)=>{
                                        return(
                                            <li className="flex justify-between items-center py-6 border-t border-gray-100 dark:border-gray-700 first:border-none" key={index}>
                                                <div className="flex items-center">
                                                    <Image src={item.image} width={48} height={30} className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>

                                                    <div className="ms-3">
                                                        <p className="font-semibold">{item.title}</p>
                                                        <p className="text-slate-400 text-sm">{item.date}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <Link href="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-primary-600/5 hover:bg-primary-600 text-primary-600 hover:text-white rounded-full"><FiTrash2 className="size-4"></FiTrash2></Link>
                                                </div>
                                            </li>
                                        )
                                    })}

                                    <PaymentBtn/>
                                </ul>
                            </div>
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