"use client";
import { Dot, EqualApproximatelyIcon, Eye, Mail, User, X } from "lucide-react";
import {
  Geist,
  Lato,
  Libertinus_Serif,
  Noto_Sans_Limbu,
  Poppins,
} from "next/font/google";
import Image from "next/image";
const libreSerif = Libertinus_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const geist = Geist({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function page() {
  return (
    <div className=" flex h-full mt-8 mb-8 items-center justify-center">
      <div className="flex lg:w-[67vw] mx-5 sm:mx-0 h-full  justify-between rounded-md bg-[#F7F9FB] drop-shadow-lg">
        <div className="relative hidden md:block rounded-l-lg z-10 w-[33vw] overflow-hidden">
          <div className="opacity-50 absolute inset-0 bg-[url('/images/auth.jpeg')] bg-cover bg-center "></div>
          <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle,_#00687A,_#191C1E)]"></div>
          <div className="flex flex-col h-full justify-between">
            <div className="mx-8 mt-7 flex gap-5 items-center">
              <div className="z-200">
                <Image
                  src="/images/logo.svg"
                  className="rounded-lg select-none z-140"
                  alt="logo"
                  width={70}
                  height={70}
                />
              </div>
              <div
                className={`${lato.className} z-40 text-4xl text-white font-bold uppercase tracking-widest`}
              >
                DevLog
              </div>
            </div>

            <div
              className={`${lato.className} text-2xl z-40 font-light text-white m-12`}
            >
              A place for developer to grow together.
            </div>
          </div>
        </div>
        <div className=" py-5">
          <div className="flex  mt-6 mx-5 items-start justify-between ">
            <div className="flex flex-col gap-1 text-left">
              <div
                className={`${poppins.className} text-[#191C1E]  text-3xl font-semibold`}
              >
                Welcome
              </div>
              <div
                className={`${poppins.className} text-md font-medium text-[#45464D]`}
              >
                SignUp to your Devlog Account
              </div>
            </div>
            <div className="flex">
              <X
                className="hover:scale-[115%]  transition-all cursor-pointer rounded-full text-black"
                size={24}
              />
            </div>
          </div>
          <div className="mt-7 w-full flex  justify-center">
            <div
              className={`flex text-xl sm:text-2xl bg-[#191C1E]  rounded-4xl ${lato.className}`}
            >
              <div className="bg-[#00687A]  text-white px-8  sm:px-16 py-2 sm:py-3 rounded-4xl">
                SIGNUP
              </div>
              <div className="text-white px-8 sm:px-16  py-2 sm:py-3">LOGIN</div>
            </div>
          </div>
          <div className="mt-4  flex flex-col gap-2 mx-5">
            <div className="flex gap-2 flex-col">
              <label htmlFor="" className={`${poppins.className} text-md`}>
                Full Name
              </label>
              <div className="relative">
                <User className="absolute right-3 -translate-x-2 top-1/2 -translate-y-1/2" />

                <input
                  type="text"
                  placeholder="John Doe"
                  className={`border-1 pl-3  pr-12 w-full ${lato.className}  text-[#191C1E] rounded-sm placeholder:text-[#6B7280] text-lg border-1 border-[#6B7280] p-2`}
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label className={`${poppins.className} text-md `}>Email</label>
              <div className="relative ">
                <Mail className="absolute right-3 top-1/2 -translate-x-2  -translate-y-1/2" />
              <input
                type="text"
                placeholder="johndoe@abc.com"
                className={`border-1 pr-12 ${lato.className} pl-3 w-full text-[#191C1E] rounded-sm placeholder:text-[#6B7280] text-lg border-[#6B7280] p-2 `}
              />
              </div>
            </div>
            <div className="flex gap-4 sm:gap-8 items-center  justify-start ">
              <div className="flex gap-2 flex-col">
                <label className={`${poppins.className} `}>Password</label>
                <div className="relative">
                    <Eye className="absolute right-0 overflow-hidden  text-[#191C1E] top-1/2 -translate-x-2 -translate-y-1/2" />
                <input
                  className={` ${lato.className} text-[#191C1E] pr-8 w-full  rounded-sm placeholder:text-[#6B7280] text-lg border-1 p-2  border-[#6B7280]`}
                  type="password"
                  placeholder={"••••••••••••••••"}
                />
</div>
              </div>
              <div className="flex gap-2 flex-col">
                <label htmlFor="">Confirm Password</label>
                <div className="relative">
                    <Eye className="absolute right-0 overflow-hidden text-[#191C1E] top-1/2 -translate-x-2 -translate-y-1/2" />
                <input
                  className={`border-1 ${lato.className} pr-8 w-full text-[#191C1E] rounded-sm placeholder:text-[#6B7280] text-lg border-1 p-2 border-[#6B7280]`}
                  type="password"
                  placeholder="••••••••••••••••"
                />
                                </div>

              </div>
            </div>
            <div className="bg-[#191C1E] p-2 text-2xl mt-4 text-white flex justify-center rounded-lg">
              <button className={`${poppins.className}`}>SignUp</button>
            </div>
            <div className="flex sm:flex-row flex-col justify-center sm:gap-1 gap-3 mt-2">
              <div className="flex justify-center items-center w-full rounded-lg border-1  p-2 text-center gap-4">
                <span>
                  <Image
                    src={"/images/google.svg"}
                    alt="google"
                    width={30}
                    height={30}
                  />
                </span>
                <span>SignUp with Google</span>
              </div>
              <div className="flex justify-center w-full rounded-lg items-center text-center p-2 border-1 gap-4">
                <span>
                  <Image
                    src={"/images/github.svg"}
                    alt="github"
                    width={30}
                    height={30}
                  />
                </span>{" "}
                <span>SignUp with Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
