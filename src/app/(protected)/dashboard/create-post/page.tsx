"use client";
import { BookCheck, BookDashed, ChevronDownIcon, Plus } from "lucide-react";
import { JetBrains_Mono, Libertinus_Sans, Poppins } from "next/font/google";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DateTimePicker } from "@mantine/dates";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "800"],
});
const JetBrains = JetBrains_Mono({
  subsets: ["latin"],
});
const LiberSans = Libertinus_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function page() {
  const [visibility, setVisibility] = useState("Public (default)");
  const [open, setOpen] = useState(false);
  const [scheduleAt, setScheduleAt] = useState("");
  const [publishedType, setPublishedType] = useState<"now" | "scheduled">(
    "now",
  );
  return (
    <div
      onClick={() => {
        setOpen(false);
      }}
      className="grid inset-0  grid-cols-6 w-full "
    >
      <div className="col-span-4 py-8 px-6 ">
        <div>
          <textarea
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            rows={1}
            placeholder="Title"
            style={{ fontSize: '32px' }}
            className={`${LiberSans.className} resize-none outline-none overflow-hidden border-none font-bold w-full`}
          />
        </div>
        <div
          className={`${poppins.className} font-medium cursor-pointer my-8 mx-8 flex gap-1 items-center text-center  w-fit p-1 px-2 rounded-sm hover:bg-[#e3fff5] text-[#00687A] `}
        >
          <span>
            <Plus strokeWidth={2} />
          </span>
          <span>Tag</span>
        </div>
        <div className="mx-12">
          <textarea
            rows={1}
            placeholder="Type your thought's here"
            onInput={(e) => {
              const target = e.target as HTMLAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            style={{fontSize:"18px"}}
            className={`mt-8 ${JetBrains.className} w-full overflow-hidden bg-transparent border-none font-medium resize-none outline-none `}
          ></textarea>
        </div>
      </div>
      <div className="col-span-1  relative ">
        <div className="fixed w-full flex flex-col justify-between overflow-y-auto  top-18 border-2 h-[calc(100vh-2rem)] py-8 px-6 ">
          <div>
            <label
              htmlFor=""
              className={`${JetBrains.className} text-[#76777D]`}
            >
              Publishing Workflow
            </label>

            <div
              className={`relative flex mt-4 gap-2 flex-col ${LiberSans.className}`}
            >
              <label
                htmlFor=""
                className={`${JetBrains.className} uppercase text-[#76777D]`}
              >
                Visibility
              </label>
              <button
                className={`${poppins.className} font-medium border cursor-pointer w-[200px] flex justify-around p-2 rounded-md`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <span>{visibility}</span>
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.001 }}
                  className="transition-all duration-300"
                >
                  <ChevronDownIcon />
                </motion.div>
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute left-0 overflow-hidden z-100 bg-white top-full cursor-pointer w-[200px]  rounded-lg border  shadow-lg ${poppins.className}`}
                  >
                    {["Public (default)", "Private", "Unlisted"].map((item) => (
                      <button
                        className="w-full  px-4 py-3 text-left hover:bg-gray-100"
                        onClick={() => {
                          setVisibility(item);
                          setOpen(false);
                        }}
                        key={item}
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-4 flex gap-2 flex-col">
              <div
                className={`text-[#76777D] uppercase ${JetBrains.className}`}
              >
                Schedule
              </div>
              <div className={`${poppins.className} font-medium  flex gap-2`}>
                <button
                  className={`${publishedType === "now" ? "bg-[#00687A] text-white" : "hover:bg-accent"} transition-all duration-300 border w-[114px] py-2 px-1 cursor-pointer rounded-lg text-md`}
                  onClick={() => setPublishedType("now")}
                >
                  Publish Now
                </button>
                <button
                  className={`border-1   w-[114px] py-2 px-1 rounded-lg cursor-pointer duration-300 transition-all text-md ${publishedType === "scheduled" ? "bg-[#00687A] text-white" : "hover:bg-accent"}`}
                  onClick={() => setPublishedType("scheduled")}
                >
                  Schedule
                </button>
              </div>
              <div>
                {publishedType === "scheduled" && (
                  <DateTimePicker
                    className={`text-lg ${poppins.className} w-[200px] py-2`}
                    label={"Pick Data and Time"}
                    placeholder="Pick Date and Time"
                    onChange={(e) => setScheduleAt(e.target.value)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-4 py-8 flex-col justify-center items-center text-center w-[360px]">
            <div className={`text-xl gap-2 border-2 py-6 border-[#191C1E] w-[300px] h-[40px] flex justify-center text-center items-center rounded-lg ${JetBrains.className} font-medium hover:text-white hover:bg-[#191C1E] transition-all duration-300 cursor-pointer`}>Save Draft<span><BookDashed /></span></div>
            <div  className={`text-xl gap-2 border-2  text-white py-7 bg-[#191C1E] w-[300px] h-[40px] flex justify-center text-center items-center rounded-lg ${JetBrains.className} font-medium  hover:bg-[#5d5d5d]  transition-all duration-300 cursor-pointer`}>Publish Now <span><BookCheck /></span> </div>
          </div>
        </div>
      </div>
    </div>
  );
}