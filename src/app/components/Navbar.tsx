"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { Geist, JetBrains_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const GeistFont = Geist({
  subsets: ["latin"],
});
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Pathname = usePathname();
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between text-center content-center items-center bg-[#F7F9FB] border-b border-[#C6C6CD] p-4">
        <div className="flex gap-12 text-center content-center items-center">
          <div className={`${GeistFont.className} text-3xl font-bold`}>
            <Link href={"/"}>DevLog</Link>
          </div>
          <div className="md:block hidden">
            <ul
              className={`${JetBrainsMono.className} text-[#45464D] font-medium text-md flex gap-6`}
            >
              <li>
                <Link
                  className={`transition-all dura3 ${Pathname === "/" ? "outline-2 rounded-sm outline-offset-2 outline-[#C6C6CD]" : ""}`}
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`transition-all duration-300 ${Pathname === "/posts" ? "rounded-sm outline-2 outline-offset-2 outline-[#C6C6CD]" : ""}`}
                  href={"/posts"}
                >
                  Feed
                </Link>
              </li>
              <li>
                <Link
                  className={`transition-all duration-300 ${Pathname === "/about" ? "outline-2 rounded-sm outline-offset-2 outline-[#C6C6CD]" : ""}`}
                  href={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`transition-all duration-300 ${Pathname === "/contact" ? "outline-2 rounded-sm outline-offset-2 outline-[#C6C6CD]" : ""}`}
                  href={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative md:block hidden">
          <Search className=" absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5  text-[#45464D]" />
          <input
            type="text"
            placeholder="search..."
            className="border-[#C6C6CD] text-lg rounded-sm border-2 pl-10 pr-2 placeholder:text-[#aeaeb9]  py-1 outline-none"
          />
        </div>
        <motion.div
          exit={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 360 : 0 }}
          initial={{ rotate: 0 }}
          className="block md:hidden"
          onClick={toggleOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div initial={{x:-100 , opacity:0}} animate={{x:0, opacity:1}} transition={{duration : 0.3}} exit={{x : -100, opacity:0}} className="bg-[#f7f9fb]  fixed mt-22 md:hidden border-[#c6c6cd] p-4 justify-center w-[200px]   text-center items-center mx-4 z-12 my-3 border rounded-md flex ">
          <ul className={`flex flex-col gap-4 ${JetBrainsMono.className} text-xl font-medium`}>
            <li>
              <Link href={"/"} className={`${Pathname === '/' ? "outline-2 outline-offset-2 outline-[#C6C6CD] rounded-sm px-2" : ""}`}>Home</Link>
            </li>
            <li>
              <Link href={"/posts"} className={`${Pathname === '/posts' ? "outline-2 rounded-sm outline-offset-2 outline-[#c6c6cd] px-2 " : ""}`}>Feed</Link>
            </li>
            <li>
              <Link href={"/about"} className={`${Pathname === '/about' ? "outline-2 outline-offset-2 rounded-sm outline-[#c6c6cd] px-2" : ""}`}>About</Link>
            </li>
            <li>
              <Link className={`${Pathname === '/contact' ? "outline-2 outline-offset-2 outline-[#c6c6cd] rounded-sm px-2": ""}`} href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
