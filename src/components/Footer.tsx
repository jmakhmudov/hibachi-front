import Image from "next/image";
import Link from "next/link";

import logo from '../../public/logo.webp'

export default function Footer() {
  return (
    <footer className="bg-background mt-20 px-5 md:px-12 text-foreground py-5 w-screen">
      <div className="flex flex-row justify-between items-start md:items-center gap-5">
        <Link href='/' className='flex items-center gap-2 select-none'>
          <div className="bg-background rounded-full overflow-hidden">
            <Image src={logo} alt="logo" width={50} height={50} />
          </div>
          <div className='-space-y-1 text-lg'>
            <div>BAMBOO</div>
            <div className='font-bold'>HIBACHI</div>
          </div>
        </Link>

        <div>
          <ul className='font-medium flex flex-col md:flex-row md:items-center gap-2 md:gap-10 text-sm md:text-lg'>
            <li>Locations</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>


          <div className="mt-5 text-white/60 text-right">
            <p>Call us: <span className="font-semibold text-white/100">+1 (817) 6005955</span></p>
            <p>Email us: <span className="font-semibold text-white/100">contact@hibachibybamboo.com</span></p>
            <Link className=" mt-5 block text-main-red" href='https://www.instagram.com/Bamboo_hibachi/' target="_blank">Instagram</Link>
          </div>
        </div>
      </div>

      <div className="text-sm flex flex-col md:flex-row justify-between md:items-center gap-5 mt-14">
        <div className="opacity-50 order-2 md:order-1">All rights reserved. 2024 ©</div>
        <div className="flex items-center gap-1 md:order-2">
          <div className="opacity-50">developed by</div>
          <Link href="https://onegatestudios.com" target="_blank" className="font-bold block">ONEGATE.</Link>
        </div>
      </div>
    </footer>
  )
}