'use client'

import Image from 'next/image'
import logo from '../../public/logo.svg'

import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { useState } from 'react';
import Button from './ui/button';
import Link from 'next/link';


export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className='py-5 flex items-center justify-between bg-background relative mb-10'>
      {
        menuIsOpen &&
        <MobileMenuNavbar />
      }

      <Link href='/' className='flex items-center gap-2 select-none'>
        <Image src={logo} alt="logo" width={60} height={60} />
        <div className='-space-y-1 text-lg'>
          <div>BAMBOO</div>
          <div className='font-bold'>HIBACHI</div>
        </div>
      </Link>

      <DesktopNavbar />

      <Link href={'/estimate'}>
        <Button className='hidden md:block' variant='outlined-red'>Free Quote</Button>
      </Link>

      <button className='block md:hidden' onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {
          menuIsOpen ?
            <CgClose size={35} />
            :
            <FiMenu size={35} />
        }
      </button>

    </header>
  )
}

function DesktopNavbar() {
  return (
    <nav className='hidden md:block select-none'>
      <ul className='font-medium flex items-center gap-10 text-lg'>
        <li>
          <Link href={"/locations"}>Locations</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link href={"/faq"}>FAQ</Link>
        </li> 
        <li>
          <Link href={"/#contacts"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

function MobileMenuNavbar() {
  return (
    <nav className='bg-background md:hidden absolute top-full select-none space-y-10 py-10 z-50 w-full'>
      <ul className='grid gap-4 font-medium'>
        <li>Locations</li>
        <li>About Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>

      <Link href={'/estimate'}>
        <Button variant='outlined-red'>Free Quote</Button>
      </Link>
    </nav>
  )
}