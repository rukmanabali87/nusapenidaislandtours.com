import Link from "next/link";
import Navbar from "../components/navbar";
import Switcher from "../components/switcher";
import Footer from "../components/footer";
import { HiChevronRight } from "react-icons/hi";

// Data untuk General Terms & Cancellation Policy
const termsSections = [
    {
        title: "General Terms",
        intro: "Welcome to Nusa Penida Island Tours! By using our services, you agree to the following terms and conditions. Please read them carefully before placing an order.",
        items: [
        {
            heading: "Services We Offer",
            points: [
            { text: "We provide tour booking services, including tickets, accommodation, transportation, and travel activities." }
            ]
        },
        {
            heading: "Booking and Payment",
            points: [
            { text: "All bookings must be made through our official platform." },
            { text: "Payments must be made using the available payment methods on our website." },
            { text: "Prices listed are subject to change without prior notice." }
            ]
        },
        {
            heading: "Change and Cancellation Policy",
            points: [
            { text: "Changes to travel dates or routes are subject to availability. Please contact us directly to discuss the options." },
            { text: "Charges and cancellations will follow the applicable cancellation & refund policy." }
            ]
        },
        {
            heading: "Responsibilities and Risks",
            points: [
            { text: "We are not responsible for events beyond our control, such as natural disasters, strikes, or changes in government regulations." },
            { text: "Tour participants must have valid travel documents (passport, visa, etc.)." }
            ]
        },
        {
            heading: "Copyright and Website Usage",
            points: [
            { text: "The content on our website is protected by copyright and may not be used without our written permission." }
            ]
        }
        ]
    },
    {
        title: "Cancellation & Refund Policy",
        intro: "Please review our refund and cancellation guidelines below:",
        items: [
        {
            heading: "Cancellations by Customers",
            points: [
            { text: "More than 12 hours before departure → 100% refund" },
            { text: "Less than 12 hours before departure → No refund." }
            ]
        },
        {
            heading: "Cancellations by Us",
            points: [
            { text: "If we cancel the trip for any reason (e.g., force majeure or an insufficient number of participants), customers will receive a full refund or may choose an alternative tour." }
            ]
        },
        {
            heading: "Schedule Changes",
            points: [
            { text: "If customers wish to change their dates or itinerary, changes are subject to availability. Please contact us directly to discuss the options." }
            ]
        },
        {
            heading: "Refund Process",
            points: [
            { 
                text: "Refund requests should contact us directly via this WhatsApp number ", 
                waText: "+6282233083081", 
                waNumber: "+6282233083081",
                extraText: ", along with proof of payment and order details." 
            },
            { text: "The refund process takes 2 x 24 working hours, according to the payment method used." }
            ]
        }
        ]
    }
];

export default function Terms(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>

        <section className="relative table w-full py-20 lg:py-24 bg-darkblue">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-bold text-white">Terms & Conditions</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/70 hover:text-white"><Link href="/">Nusa Penida Island Tours</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5"><HiChevronRight className="text-xl inline-block align-middle" /></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-white" aria-current="page">Terms & Conditions</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-18 py-10">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white shadow rounded-md space-y-10">
                            
                            {termsSections.map((section, sIndex) => (
                                <div key={sIndex}>
                                    {sIndex > 0 && <hr className="my-8 border-slate-200" />}
                                    
                                    <h5 className="text-2xl font-bold text-center mb-4">{section.title}</h5>
                                    <p className="text-slate-400 mb-6">{section.intro}</p>

                                    <ol className="list-decimal list-inside space-y-6">
                                        {section.items.map((item, iIndex) => (
                                            <li key={iIndex} className="text-xl font-semibold text-slate-800">
                                                <span className="font-semibold">
                                                    {item.heading}
                                                </span>
                                                <ul className="list-disc ms-6 mt-2 text-sm text-slate-400 font-normal space-y-1">
                                                    {item.points.map((point, pIndex) => (
                                                        <li key={pIndex}>
                                                            {point.text}
                                                            {point.waNumber && (
                                                                <a 
                                                                    href={`https://wa.me/${point.waNumber}`} 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                    className="text-primary font-semibold underline hover:text-primary/50"
                                                                >
                                                                    {point.waText}
                                                                </a>
                                                            )}
                                                            {point.extraText}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <Footer/>
        </>
    )
}