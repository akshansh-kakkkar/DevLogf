import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});
export default function Appearance() {
  return (
    <div className="sm:mx-22">
      {" "}
      <div className="flex flex-col gap-4 border-[#C6C6CD] border-b-2 pb-2">
        <div
          className={`${geist.className}   text-[#2D2D2D] text-4xl font-semibold`}
        >
          Appearance
        </div>
        <div className={`${geist.className} text-[#45464D]`}>
          Customize your Devlog interface to match your workflow.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[60vh]">
        <div className="bg-white border py-12 px-8 rounded-xl ">
          <div className={`sm:text-4xl text-2xl font-bold text-[#2D2D2D] ${geist.className}`}>Coming soon</div>
        </div>
      </div>
    </div>
  );
}
