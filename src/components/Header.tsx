import React, { useState } from 'react'

import Logo from '../assets/logo.png'
import Navbar from './Navbar'
import NavbarMobile from './mobile/Navbar'

import { FaBars } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

export default function Header() {
    const [NavMobile, setNavMobile] = useState(false)
    return (
        <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[120px]'>
                        <a href='#'>
                            <img src={Logo} alt='Logo' className='w-[60px]' />
                        </a>

                        <div className='hidden lg:flex'>
                            <Navbar />
                        </div>

                        <div className={`${NavMobile ? 'max-h-52' : 'max-h-0'
                            } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
                            <NavbarMobile />
                        </div>
                    </div>

                    <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                        데모 요청하기 <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
                    </button>

                    <div onClick={() => setNavMobile(!NavMobile)} className='lg:hidden text-2xl text-primary cursor-pointer'>
                        <FaBars />
                    </div>
                </div>
            </div>
        </header >
    )
}
