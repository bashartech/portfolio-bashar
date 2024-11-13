import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Section6() {
  return (
    <>
    <div className="w-screen h-[240px]">

    <div className="h-[200px] flex justify-center items-center
     w-screen">
        <div className="md:w-[1025px] md:flex justify-between md:h-[75px] md:ml-0 ml-8 ">
      <div className="left  w-[346px] h-[58px] ">
          <div className="logo flex gap-2">
            <Image
              src={"images/Union.svg"}
              alt="svg"
              width={16}
              height={16}
            ></Image>
            <p className="text-[16px] font-bold mr-5">Bashar</p>
            <p className="text-[16px] font-mono">bashartc13@gmail.com</p>
          </div>
          <div className="text text-[16px] mt-3 font-mono">Web designer and front-end developer</div>
        </div>
        <div className="right md:mt-0 mt-6 md:mb-0 mb-6">
          <p className="text-[24px] font-semibold font-mono">Media</p>
          <div className="icon flex gap-3 mt-2 text-2xl ">
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
        
          {/* <div className="icon flex gap-3 mt-2 text-2xl">
            <i className="bx bxl-github"></i>
            <i className="bx bxl-discord-alt"></i>
            <i className="bx bxl-figma"></i>
          </div> */}
        </div>
      </div>
    </div>
      <div className="copyright text-center">© Copyright 2022. Made by Bashar</div>
    </div>
    </>
  );
}
