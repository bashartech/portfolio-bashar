import React from 'react'
import Image from "next/image";

export default function Section3() {
  return (
    <div id='skills' className='skills md:h-[502px] w-full flex justify-center flex-col items-center '>
        <div className='mt-10 md:mt-20 flex justify-start items-start md:w-[1027px] '>
      <div className='flex items-center gap-6 '>
        <h1 className='md:text-[32px]   '><span className='text-[#C778DD]'>#</span>skills</h1>
        <span className='w-[239px] h-[1px] bg-[#C778DD]' ></span>
      </div>
     
        </div>
        <div className='md:w-[1023px] md:h-[428px] md:flex mt-5 md:mt-14 md:gap-20'>
<div className="left flex justify-center items-center md:mb-0 mb-10">
    <Image className='md:w-[349px] md:h-[282px] w-[300px]  ' src={"images/Group 36.svg"} alt='img' width={349} height={282}></Image>
</div>

<div className="right md:flex  md:w-[584px] md:h-[280px] gap-4 ">
    <div className="lang border-[1px] md:mb-0 mb-3 border-[#ABB2BF] md:w-[178px] h-[103px] ">
<h1 className='text-[16px]   font-semibold border-b-[#ABB2BF] border-b-2 p-1 ml-1'>Languages</h1>
<p className='flex p-2 text-[#ABB2BF]'>TypeScript  <br />  Javascript</p>
    </div>
    <div className="data ">
        <div className="database border-[1px] border-[#ABB2BF]">
        <h1 className='text-[16px] font-semibold border-b-[#ABB2BF] border-b-2 p-1 ml-1'>Databases</h1>
        <p className='flex p-2 text-[#ABB2BF]'>Appwrite <br /> Mongo</p>
        </div>
        <div className="others mt-4 border-[1px] border-[#ABB2BF]">
        <h1 className='text-[16px] font-semibold border-b-[#ABB2BF] border-b-2 p-1 ml-1'>Others</h1>
        <p className='flex p-2 text-[#ABB2BF]'>HTML CSS  <br /> EJS</p>
        </div>
    </div>
    <div className="tools">
    <div className="tool border-[1px] border-[#ABB2BF] ">
        <h1 className='text-[16px] font-semibold border-b-[#ABB2BF] border-b-2 p-1 ml-1'>Tools</h1>
        <p className='flex p-2 text-[#ABB2BF]'>VSCode <br /> Figma Git <br /> Font Awesome</p>
        </div>
        <div className="framework mt-4 border-[1px] border-[#ABB2BF]">
        <h1 className='text-[16px] font-semibold border-b-[#ABB2BF] border-b-2 p-1 ml-1'>Frameworks</h1>
        <p className='flex p-2 text-[#ABB2BF]'>React.js <br />Next.js  <br /> Tailwind</p>
        </div>
    </div>
</div>
        </div>
    </div>
  )
}
