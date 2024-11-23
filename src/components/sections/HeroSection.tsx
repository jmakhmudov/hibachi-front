import fireIMG from '@/../public/fire.png'
import Image from 'next/image'

import { FiMenu } from "react-icons/fi";

import Button from '../ui/button'

export default function HeroSection() {

  return (
    <section className='flex flex-col md:flex-row justify-between items-center gap-5'>
      <div className='relative w-full h-full md:order-2'>
        <video
          className="h-[50vh] md:h-[80vh] w-full object-cover rounded-2xl"
          src="/videos/banner.mp4"
          autoPlay
          muted
          loop
        ></video>

        <Image
          src={fireIMG}
          alt='fire'
          className='absolute -right-5 -bottom-5 select-none'
        />
      </div>

      <div className='space-y-4 md:space-y-10'>
        <h1 className='text-[15vw] md:text-[8vw] font-bold leading-tight select-none'>Let’s <span className='text-main-red'>grill it</span> – where flavor meets fire</h1>

        <div className='flex items-center gap-4'>
          <Button variant='outlined-foreground'>Menu <FiMenu size={20}/></Button>
          <Button>Book Now</Button>
        </div>
      </div>
    </section>
  )
}