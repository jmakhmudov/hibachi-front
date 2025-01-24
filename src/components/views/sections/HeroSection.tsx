"use client"

import fireIMG from '@/../public/fire.png'
import Image from 'next/image'

import {FiMenu} from "react-icons/fi";

import Button from '../../ui/button'
import Link from 'next/link';
import {VideoType} from "@/types";

export default function HeroSection({
  videos,
}: {
  videos: VideoType[]
}) {
  const handleScrollToMenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <section className='flex flex-col md:flex-row justify-between items-center gap-5'>
      <div className='relative w-full h-full md:order-2'>
        <video
          className="h-[50vh] md:h-[80vh] w-full object-cover rounded-2xl"
          src={videos[0]?.video_file}
          controls={false}
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
        <h1 className='text-[15vw] md:text-[6vw] 2xl:text-9xl font-bold leading-tight select-none'>Let’s <span
          className='text-main-red'>grill it</span> – where flavor meets fire</h1>

        <div className='flex items-center gap-4 '>
          <Button
            variant='outlined-foreground'
            className=' hidden md:flex'
            onClick={handleScrollToMenu}
          >
            Menu <FiMenu size={20}/>
          </Button>

          <Link href={'/locations'}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}