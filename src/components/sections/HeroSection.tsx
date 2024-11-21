import fireIMG from '@/../public/fire.png'
import Image from 'next/image'

import { FiMenu } from "react-icons/fi";

import Button from '../ui/button'

export default function HeroSection() {

  return (
    <section className='space-y-5 mt-5'>
      <div className='relative'>
        <video
          className="h-[50vh] w-full object-cover rounded-2xl"
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

      <div className='space-y-4'>
        <h1 className='text-[15vw] md:text-8xl font-bold leading-tight select-none'>Let’s <span className='text-main-red'>grill it</span> – where flavor meets fire</h1>

        <div className='flex items-center gap-4'>
          <Button variant='outlined-foreground'>Menu <FiMenu size={20}/></Button>
          <Button>Book Now</Button>
        </div>
      </div>
    </section>
  )
}