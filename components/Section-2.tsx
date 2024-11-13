import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <div
      id="work"
      className="project  md:h-[652px] w-full flex justify-center flex-col items-center "
    >
      <div className=" md:mt-5 flex justify-between items-start md:w-[1027px] w-full md:p-0 p-3">
        <div className="flex items-center gap-6 ">
          <h1 className="md:text-[32px]   ">
            <span className="text-[#C778DD]">#</span>projects
          </h1>
          <span className="md:w-[511px] h-[1px] w-[150px] bg-[#C778DD]"></span>
        </div>
        <div>
          <h1 className="text-[16px]"></h1>
        </div>
      </div>
      <div className="mt-5 md:w-[1023px] md:h-[428px] md:flex md:mt-14">
        <div className="sec1 md:mb-0 mb-4 md:ml-0 ml-2 w-[330px] h-[391px] border-2 border-[#ABB2BF]">
          <Image
            className="h-[201px]"
            src={"/images/bashar-motors.PNG"}
            width={330}
            height={201}
            alt={""}
          ></Image>
          <p className="border-[1px] border-t-0 p-1 ">
            <span className="text-[16px] border-[#ABB2BF] font-light text-[#ABB2BF] ml-3">
              NextJS Tailwind React Js
            </span>
          </p>
          <div className="gap-2">
            <h1 className="text-[24px] p-3">Bashar Motors</h1>
            <p className="text-[16px] ml-3 text-[#ABB2BF] ">
              Car purchasing website{" "}
            </p>
            <div className="btn text-[16px] p-3 ">
              <Link href={"https://bashar-motors.vercel.app/"}>
                <button className="hover:bg-[#ABB2BF] border-[1px] border-[#ABB2BF] w-[109px] h-[37px] ">
                  Live
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="sec2 md:mb-0 mb-4 w-[330px] h-[422px] ml-2 border-2 border-[#ABB2BF]">
          <Image
            className="h-[201px]"
            src={"/images/image-generator.PNG"}
            width={330}
            height={201}
            alt={""}
          ></Image>
          <p className="border-[1px] border-t-0 p-1 ">
            <span className="text-[16px] border-[#ABB2BF] font-light text-[#ABB2BF]  ">
              HTML CSS Javascript
            </span>
          </p>
          <div className="gap-2">
            <h1 className="text-[24px] p-3">Ai Image Generator</h1>
            <p className="text-[16px] ml-3 text-[#ABB2BF] ">
              Ai image generator website where every type of images exist{" "}
            </p>
            <div className="btn text-[16px] p-3 ">
              <Link href={"https://ai-image-developer-by-bashar.netlify.app/"}>
                <button className="hover:bg-[#ABB2BF] border-[1px] border-[#ABB2BF] w-[109px] h-[37px] ">
                  Live
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="sec3 w-[330px] h-[428px] ml-2 border-2 border-[#ABB2BF]">
          <Image
            className="h-[201px]"
            src={"/images/clone-pic.PNG"}
            width={330}
            height={201}
            alt={""}
          ></Image>
          <p className="border-[1px] border-t-0 p-1 ">
            <span
              className="text-[16px] border-[#ABB2BF] font-light text-[#ABB2BF] ml-3 
 "
            >
              HTML CSS Javascript
            </span>
          </p>
          <div className="gap-2">
            <h1 className="text-[24px] p-3">Netflix Movie Search</h1>
            <p className="text-[16px] ml-3 text-[#ABB2BF] ">
              Netflix Movie Search Br For Getting Details Of Any Movie{" "}
            </p>
            <div className="btn text-[16px] p-3 ">
              <Link href={"https://bashars-clone.vercel.app/"}>
                <button className="hover:bg-[#ABB2BF] border-[1px] border-[#ABB2BF] w-[109px] h-[37px] ">
                  Live
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
