import React from 'react'
import about from "../images/about.jpg"
import ScrollReveal from '../ScrollReveal';



export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.15"  className="w-full py-20 px-10 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black font-['Neue_Montreal']">
        <h1 className="text-5xl tracking-tight"><ScrollReveal
  baseOpacity={2}
  enableBlur={true}
  baseRotation={8}
  blurStrength={7}
>
Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
</ScrollReveal></h1>
        <div className='w-full border-t-[1px] border-[#212121] mt-23'></div>

        <div className='flex justify-between'>
            <div className='flex-col mt-10'> 
                <h1 className='text-5xl'>Our Approach:</h1>
                <button className='bg-[#212121] flex gap-10 items-center mt-5 text-white py-5 px-6 rounded-full hover:bg-[#000000] font-extralight text-sm'>READ MORE
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='mt-10'>
                <img src={about} alt="about" className='rounded-3xl h-[33vw] w-[47vw]' />
            </div>
        </div>
    </div>

  )
}
