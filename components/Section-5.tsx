import React from "react";
import Image from "next/image";

export default function Section5() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div id="contact" className="contact border-b-2 md:mt-0 mt-10 md:h-[400px] w-full flex justify-center flex-col items-center ">
        <div className="flex justify-start items-start md:w-[1027px] ">
          <div className="flex items-center gap-6 ">
            <h1 className="md:text-[32px]   ">
              <span className="text-[#C778DD]">#</span>contacts
            </h1>
            <span className="w-[200px] md:w-[127px] h-[1px] bg-[#C778DD]"></span>
          </div>
        </div>
        <div className="md:w-[1025px] h-[508px] md:flex md:justify-between">
          <div className="left md:ml-0 ml-8 flex flex-col justify-start mt-16 md:w-[515px] md:h-[228px] gap-4 ">
            <p className="text-[16px] pr-5 font-mono">
              I&apos;m I&apos;m interested in freelance opportunities. However, if
              you have other request or question, don&apos;t hesitate to contact me
            </p>
          </div>
          <div className="right h-[228px] flex justify-center items-end">
            <div className="border-2 p-2 w-[204px] h-[141px] flex flex-col ">
              <p className="p-2 text-[16px] font-semibold ">Message me here</p>
              <div className="icon1 w-[143px] h-[32px] flex  mt-2 ml-1 ">
                <i className="bx bxl-discord-alt mr-2 text-[24px] "></i>
                <span>Bashar Sheikh</span>
              </div>
              <div className="icon2 flex w-[172px] h-[32px] ">
                <i className="bx bx-envelope mr-2 p-1 text-[24px]"></i>
                <span>bashartc13@gmail
                    .com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
