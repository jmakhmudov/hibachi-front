import Image from "next/image";
import Link from "next/link";

import logo from '../../public/logo.svg'

export default function Footer() {
  return (
    <footer className="bg-foreground mt-20 px-5 md:px-12 text-background py-5 w-screen">
      <div className="flex flex-row justify-between items-start md:items-center gap-5">
        <Link href='/' className='flex items-center gap-2 select-none'>
          <div className="p-2 bg-background rounded-full">
            <Image src={logo} alt="logo" width={50} height={50} />
          </div>
          <div className='-space-y-1 text-lg'>
            <div>BAMBOO</div>
            <div className='font-bold'>HIBACHI</div>
          </div>
        </Link>

        <ul className='font-medium flex flex-col md:flex-row md:items-center gap-2 md:gap-10 text-sm md:text-lg'>
          <li>Locations</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="text-sm flex flex-col md:flex-row justify-between md:items-center gap-5 mt-14">
        <div className="opacity-50 order-2 md:order-1">All rights reserved. 2024 ©</div>
        <div className="flex items-center gap-1 md:order-2">
          <div className="opacity-50">developed by</div>
          <div className="font-bold">ONEGATE.</div>
        </div>
      </div>
    </footer>
  )
}