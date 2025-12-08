import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

import { footerCompany, footerSocial } from "../data/data";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer bg-slate-900 dark:bg-slate-800 relative text-gray-200 dark:text-gray-200">
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div className="lg:col-span-3 md:col-span-12">
                  <Link href="#" className="text-[22px] focus:outline-none">
                    <Image
                      src="/images/logo-light.png"
                      width={133}
                      height={28}
                      alt=""
                    />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    Planning for a trip? We will organize your trip with the
                    best places and within best budget!
                  </p>
                  <ul className="list-none mt-6 space-x-1">
                    {footerSocial.map((item, index) => {
                      let Icon = item.icon;
                      return (
                        <li className="inline" key={index}>
                          <Link
                            href={item.link}
                            target="_blank"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-primary hover:text-white text-slate-300"
                          >
                            <Icon
                              className="size-4 align-middle"
                              title="Buy Now"
                            ></Icon>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <div className="lg:ms-8">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Office
                    </h5>
                    <h5 className="tracking-[1px] text-gray-100 mt-6">
                      Nusa Penida Island Tours
                    </h5>

                    <div className="flex mt-4">
                      <FiMapPin className="size-4 text-primary me-2 mt-1"></FiMapPin>
                      <div className="">
                        <h6 className="text-gray-300">
                          Office 1: Jl. Bias Muntig, Ped, <br /> Kec. Nusa
                          Penida, Kabupaten Klungkung, <br />
                          Bali 80771{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <FiMapPin className="size-4 text-primary me-2 mt-1"></FiMapPin>
                      <div className="">
                        <h6 className="text-gray-300">
                          Office 2: Jalan Pantai Matahari Terbit, <br /> Sanur
                          Kaja, Denpasar Selatan, Kota Denpasar, <br />
                          Bali 80237{" "}
                        </h6>
                      </div>
                    </div>

                    {/* <div className="flex mt-4">
                                            <FiMail className="size-4 text-primary me-2 mt-1"></FiMail>
                                            <div className="">
                                                <Link href="mailto:contact@example.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">contact@example.com</Link>
                                            </div>
                                        </div>
                        
                                        <div className="flex mt-4">
                                            <FiPhone className="size-4 text-primary me-2 mt-1"></FiPhone>
                                            <div className="">
                                                <Link href="tel:+152534-468-854" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+152 534-468-854</Link>
                                            </div>
                                        </div> */}
                  </div>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <div className="lg:ms-8">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerCompany.map((item, index) => {
                        return (
                          <li className="mt-[10px] first:mt-0" key={index}>
                            <Link
                              href={item.link}
                              className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                            >
                              <i className="mdi mdi-chevron-right"></i>{" "}
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Contact Us On
                  </h5>
                  <div className="flex items-center mt-3">
                    <FaEnvelope className="text-xl text-red-500 me-2" />
                    <span className="text-white">info@yourdomain.com</span>
                  </div>

                  <div className="flex mt-4">
                    <FiPhone className="size-4 text-primary me-2 mt-1"></FiPhone>
                    <div className="">
                      <Link
                        href="tel:+152534-468-854"
                        className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                      >
                        +152 534-468-854
                      </Link>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <FaWhatsapp className="size-4 text-green-500 me-2" />
                    <div className="">
                      <Link
                        href="tel:+152534-468-854"
                        className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                      >
                        +152 534-468-854
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <p className="mb-0">
                © {new Date().getFullYear()} PT. Rejeki Utama Kencana{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
