import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Section4() {
  return (
    <div
      id="about"
      className="about md:h-[652px] w-full md:mt-0 mt-10 flex justify-center flex-col items-center "
    >
      <div className="flex justify-start items-start md:w-[1027px] md:mb-0 mb-5 ">
        <div className="flex items-center gap-6 ">
          <h1 className="md:text-[32px]   ">
            <span className="text-[#C778DD]">#</span>about-me
          </h1>
          <span className="md:w-[326px] w-[200px] h-[1px] bg-[#C778DD]"></span>
        </div>
      </div>
      <div className="md:w-[1025px] md:h-[508px] md:flex justify-between ">

        <div className="left flex flex-col justify-center md:ml-0 ml-8 md:w-[515px] h-full gap-4 ">
          <p className="text-[16px] pr-5 font-mono">
            Hello, i&apos;m Bashar!
            <br />
            <br />
            I&apos;m a self-taught front-end developer based in Karachi,
            Pakistan. I can develop responsive websites from scratch and raise
            them into modern user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div className="btn mt-5">
            <Link href={"#contact"}>
              <button className="border-[1px]  border-[#C778DD] w-[148px] h-[37px]    px-[16px] py-[8px] hover:bg-[#C778DD]">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="right flex justify-center items-center md:mt-0 mt-5 ">
          <Image
            className="md:w-[343px] md:h-[508] w-[320px] h-[480px]"
            src={"images/Group 50.svg"}
            alt="img"
            width={343}
            height={508}
          ></Image>
        </div>
      </div>
    </div>
  );
}
