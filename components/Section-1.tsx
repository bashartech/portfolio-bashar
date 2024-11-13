"use client"
import {useState} from "react";
import Image from "next/image";
import Link from "next/link"


export default function Section1() {

 const [open, isOpen] = useState(false)
 const handleToggle = () => {
    isOpen(!open)
 }
 const closeMenu = () => {
    isOpen(false)
 }


      return (
    <div id="home">
      <div className="header flex md:justify-around justify-between md:p-0 p-3 pt-3 md:pt-[32px]">
        <div className="logo flex gap-2 md:w-[78px] md:h-[24px] w-[72px] h-[21px]
         ">
          <Image
            src={"images/Union.svg"}
            alt="svg"
            width={16}
            height={16}
          ></Image>
          <p className="text-[16px] font-bold">Bashar</p>
        </div>
        <div className="navbar hidden md:block">
          <nav>
            <ul className="font-light   text-[16px] flex gap-5">
                <Link href={"#home"}>
              <li className="cursor-pointer" >
                <span className="text-[#C778DD]">#</span>home
              </li>
                </Link>
                <Link href={"#work"}>
              <li className="cursor-pointer" >
                <span className="text-[#C778DD]">#</span>work
              </li>
                </Link>
                <Link href={"#skills"}>
              <li className="cursor-pointer" >
                <span className="text-[#C778DD]">#</span>skills
              </li>
                </Link>
                <Link href={"#about"}>
              <li className="cursor-pointer" >
                <span className="text-[#C778DD]">#</span>about
              </li>
                </Link>
                <Link href={"#contact"}>
              <li className="cursor-pointer" >
                <span className="text-[#C778DD]">#</span>contact
              </li>
                </Link>
              
            </ul>
          </nav>
        </div>
        <div id="bar" onClick={handleToggle} className="bar w-[24px] h-[24px] text-[20px] cursor-pointer text-center md:hidden "> {open ? "x":"="}</div>
      </div>
      <div id="small" className= {`small w-[360px] md:hidden ${open ? " max-h-[552px]  opacity-100" : "max-h-0 opacity-0"}   `}>
      <div className="navbar p-5 ">
          <nav className="h-[427px] pt-5">
            <ul className="font-light   text-[32px] ">
                <Link href={"#home"}>
              <li onClick = {closeMenu} className=" mb-5 cursor-pointer" >
                <span className="text-[#C778DD]">#</span>home
              </li>
                </Link>
                <Link href={"#work"}>
              <li onClick = {closeMenu} className=" mb-5 cursor-pointer" >
                <span className="text-[#C778DD]">#</span>work
              </li>
                </Link>
                <Link href={"#skills"}>
              <li onClick = {closeMenu} className=" mb-5 cursor-pointer" >
                <span className="text-[#C778DD]">#</span>skills
              </li>
                </Link>
                <Link href={"#about"}>
              <li onClick = {closeMenu} className=" mb-5 cursor-pointer" >
                <span className="text-[#C778DD]">#</span>about-me
              </li>
                </Link>
                <Link href={"#contact"}>
              <li onClick = {closeMenu} className="cursor-pointer" >
                <span className="text-[#C778DD]">#</span>contacts
              </li>
                </Link>
              
            </ul>
          </nav>
          <div className="icon flex gap-5 w-full mt-2 h-[64px] text-5xl justify-center items-center  ">
            <Link href={"https://github.com/bashartech"}>
            <i className="bx bxl-github"></i>
            </Link>
            <Link href={"https://www.instagram.com/bashartech107/profilecard/?igsh=MWI4YmYzamVnenVwaw=="}>
            <i className="bx bxl-instagram"></i>
            </Link>
            <Link href={"https://www.linkedin.com/in/m-bashar-sheikh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
            <i className="bx bxl-linkedin"></i>
            </Link>
          </div>
        </div>

      </div>
      <div className="hero w-full md:h-[517px] flex justify-center items-center ">

        <div className="content w-[360px] h-[653px]  md:w-[1024px] md:h-[423px] md:flex">
          <div className="left md:mt-0 mt-3 w-[360px] h-[279px] md:w-full md:h-full flex flex-col justify-center lg:items-start items-center md:gap-5 ">
            <h1 className="text-[32px] w-[328px] h-[168px] md:w-[537px] md:h-[84px]">
              Bashar is a <span className="text-[#C778DD]">web designer</span>{" "}
              and <span className="text-[#C778DD]"> front-end developer</span>
            </h1>
            <p className="text-[16px] w-[328px] h-[42px] md:w-[463px] md:h-[50px]">
              He crafts responsive websites where technologies meet creativity
            </p>
            <div className="btn w-full md:ml-0 ml-8 md:mt-0 mt-5 ">
            <Link href={"#contact"}>
              <button className="text-[16px] hover:bg-[#C778DD] text-start border-2  border-[#C778DD] px-[16px] py[8px] ">
                Contact me!!
              </button>
                </Link>
            </div>
          </div>
          <div className="right flex flex-col justify-center items-center  md:w-full md:h-full w-[360px] h-[369px] ">
            <Image className="md:w-[469px] md:h-[386px] w-[316px] h-[260px] "
              src={"images/Group 46.svg"}
              alt="svg"
              width={469}
              height={386}
            ></Image>
            <div className="flex    border-2 md:w-[417px] w-[300px] h-[40px] ">
              <span className="w-[16px] h-[16px]  bg-[#C778DD] mt-3 mr-2 ml-2 ">
                
              </span>
              <p className="w-[402px] font-mono h-[37px] py-[8px] px-[2px] font-extralight text-[#ABB2BF]  ">
                {" "}
                Currently working on  <span className="text-white font-semibold">Portfolio</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="quote hidden md:flex  justify-center items-center">
        <Image src="images/quote.svg" width={718} height={96} alt="" />
      </div>
    </div>
  );
}
