import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="1000px:w-[80%] flex min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
        <Image
          src={require("../../../public/assests/banner-img-1.png.png")}
          alt=""
          className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
        />
      </div>
      <div className="1000px:w-[80%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[250px] ">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]">
          Improve Your Online Learning Experience Better Instantly
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#eeeee0ac] font-Josefin font-[600] text-[18px] w-[80%]">
          We have 40k+ Online courses & 500K+ Online registered students. Find
          your desired courses from them.
        </p>
        <br />
        <br />

        <div className="1500px:w-[65%] 1100px:w-[80%] w-[90%] h-[70%] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[580] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-top-bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={60} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className=" 1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
          <Image
            src={require("../../../public/assests/client-1.jpg")}
            alt=""
            className="rounded-full mr-2 w-[40px] h-[40px]"
          />
          <Image
            src={require("../../../public/assests/client-2.jpg")}
            alt=""
            className="rounded-full mr-2 w-[40px] h-[40px]"
          />
          <Image
            src={require("../../../public/assests/client-3.jpg")}
            alt=""
            className="rounded-full mr-2 w-[40px] h-[40px]"
          />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500K+ people already trusted us.{" "}
            <Link href="/courses" className="text-[#46e256] text-[crimson]">
              View Courses
            </Link>
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;
