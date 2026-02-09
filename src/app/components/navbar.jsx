'use client'
import React, { useState, useEffect, useRef  } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import {FiSearch, FiUser, FiHelpCircle, FiSettings, FiLogOut} from 'react-icons/fi'

export default function classNavbar({navclass, navlight, manuclass}){
    let [scrolling, setScrolling] = useState(false);
    let [isToggle, setToggle] = useState(false);
    let [manu , setManu] = useState('');
    let [subManu , setSubManu] = useState('');
    let [isOpen, setIsOpen] = useState(false);
    let [userManu, setUserManu] = useState(false);

    let dropdownRef = useRef(null);
    let userRef = useRef(null)

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsOpen(false);
            }
          };

        const userOutsideClick = (e) =>{
            if(userRef.current && !userRef.current.contains(e.target)){
                setUserManu(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('click', userOutsideClick);
        
        let current = window.location.pathname
        setManu(current)
        setSubManu(current)
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('click', userOutsideClick);
          };
    },[])

    const toggleMenu = () =>{
        setToggle(!isToggle)
      }

    return(
        <nav id="topnav" className={`${navclass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight && (
                    <Link className="logo" href="/">
                        <span className="inline-block dark:hidden">
                            <Image src='/images/logo-nusa-penida-dark.png' width={133} height={28} className="h-7 l-dark" alt=""/>
                            <Image src='/images/logo-nusa-penida-light.png' width={133} height={28} className="h-7 l-light" alt=""/>
                        </span>
                        <Image src='/images/logo-nusa-penida-light.png' width={133} height={28} className="hidden dark:inline-block" alt=""/>
                    </Link>
                )}
                {!navlight && (
                    <Link className="logo" href="/">
                        <div>
                            <Image src='/images/logo-nusa-penida-dark.png' width={133} height={28} className="h-7 inline-block dark:hidden" alt=""/>
                            <Image src='/images/logo-nusa-penida-light.png' width={133} height={28} className="h-7 hidden dark:inline-block" alt=""/>
                        </div>
                    </Link>
                )}

                <div id="navigation" style={{display: isToggle === true ? 'block' : 'none'}}>
                    <ul className={`navigation-menu ${manuclass}`}>

                        <li className={`parent-menu-item ${manu === '/' ? 'active' : '' }`}>
                            <Link href="/" onClick={()=>{ setManu('/'); setSubManu('/'); setToggle(false); }} className="sub-menu-item">Home</Link>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/grid','/grid-left-sidebar','/grid-right-sidebar','/list','/list-left-sidebar','/list-right-sidebar','/tour-detail-one','/tour-detail-two','/listing-item','/grid-item','/list-item','/detail-item'].includes(manu) ? 'active' : '' }`}><Link href="" onClick={()=>setSubManu(subManu === '/listing-item' ? '' : '/listing-item' )}> Tour </Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/grid','/grid-left-sidebar','/grid-right-sidebar','/list','/list-left-sidebar','/list-right-sidebar','/tour-detail-one','/tour-detail-two','/listing-item','/grid-item','/list-item','/detail-item'].includes(subManu) ? 'open' : '' }`}>
                                <li className={`${manu === '/tour/west-nusa-penida-tour' ? 'active' : '' }`}><Link href="/tour/west-nusa-penida-tour" className="sub-menu-item">West Nusa Penida Tour</Link></li>
                                <li className={`${manu === '/blogs' ? 'active' : '' }`}><Link href="/blogs" className="sub-menu-item">East Nusa Penida Tour</Link></li>
                                <li className={`${manu === '/blogs' ? 'active' : '' }`}><Link href="/blogs" className="sub-menu-item">West Nusa Penida + Snorkeling Tour</Link></li>
                                <li className={`${manu === '/blogs' ? 'active' : '' }`}><Link href="/blogs" className="sub-menu-item">West + East Tour Combination</Link></li>
                                <li className={`${manu === '/blogs' ? 'active' : '' }`}><Link href="/blogs" className="sub-menu-item">Snorkeling at Manta Point</Link></li>
                                <li className={`${manu === '/blogs' ? 'active' : '' }`}><Link href="/blogs" className="sub-menu-item">Private Nusa Lembongan Tour</Link></li>
                            </ul>
                        </li>
                
                        <li className={`parent-menu-item ${manu === '/aboutus' || manu.startsWith('/aboutus') ? 'active' : ''}`}>
                            <Link href="/aboutus" onClick={() => { setManu('/aboutus'); setSubManu('/aboutus'); setToggle(false); }} className="sub-menu-item">About Us</Link>
                        </li>

                        <li className={`parent-menu-item ${manu === '/blogs' || manu.startsWith('/blog-detail') ? 'active' : ''}`}>
                            <Link href="/blogs" onClick={() => { setManu('/blogs'); setSubManu('/blogs'); setToggle(false); }} className="sub-menu-item">Blogs</Link>
                        </li>

                        <li className={`parent-menu-item ${manu === '/contact' || manu.startsWith('/contact') ? 'active' : ''}`}>
                            <Link href="/contact" onClick={() => { setManu('/contact'); setSubManu('/contact'); setToggle(false); }} className="sub-menu-item">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}