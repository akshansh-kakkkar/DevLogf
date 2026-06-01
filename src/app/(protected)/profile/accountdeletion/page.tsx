import { AlertTriangleIcon, CircleCheck } from "lucide-react";
import { Geist, JetBrains_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
});
export default function Page() {
  return (
    <div className="lg:mx-22">
      <div className="flex flex-col gap-4 border-[#C6C6CD] border-b-2 pb-2">
        <div
          className={`bg-[#FFDAD6] text-[#93000A] ${jetbrains.className} font-[700] flex w-fit rounded-xs py-0.5 px-2`}
        >
          HIGH RISK
        </div>
        <div
          className={`${geist.className}   text-[#2D2D2D] text-4xl font-semibold`}
        >
          Danger Zone
        </div>
        <div className={`${geist.className} text-[#45464D]`}>
          Irreversible action that affect you account and data. Proceed with
          extreme caution{" "}
        </div>
      </div>
      <div className="bg-white border border-[#C6C6CD] border-l-4 rounded-lg p-8 border-l-[#93000A] my-9">
        <div className="flex gap-4 items-center text-center">
          <span>
            <AlertTriangleIcon
              className="text-[#93000A] p-2 rounded-lg bg-[#FFDAD6]"
              size={64}
            />
          </span>
          <div className="flex flex-col gap-2 text-start">
            <span
              className={`sm:text-xl text-sm text-[#191C1E] ${geist.className} font-bold`}
            >
              Danger Zone
            </span>
            <span
              className={`${geist.className} text-[#45464D] sm:text-sm text-xs text-wrap`}
            >
              Permanently remove your account and all associated data from the
              devlog system
            </span>
          </div>
        </div>
        <div className="flex justify-start md:ml-20 items-center text-center my-12">
          <div className="bg-[#F7F9FB] flex-col gap-4 w-full justify-start text-start flex border-[#C6C6CD] border rounded-lg px-4 pt-7 pb-4">
            <div
              className={`uppercase  ${jetbrains.className} text-md font-bold`}
            >
              The Following Data will be Lost:
            </div>
            <div className={`flex gap-2 flex-col ${geist.className} text-md`}>
              <div className="flex gap-2 items-center">
                <span className="text-[#93000A]">
                  <CircleCheck />
                </span>
                <span>All your technical logs and private snippets.</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[#93000A]">
                  <CircleCheck />
                </span>
                <span>Your projects posts and all links.</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[#93000A]">
                  <CircleCheck />
                </span>
                <span>
                  Avatar, Community Likes, Community Comments, Followers.
                </span>
              </div>
            </div>
            <div
              className={`text-lg  text-[#93000a] font-medium ${geist.className}`}
            >
              This action cannot be undone. Once confirmed your data is scrubbed
              from the servers immediately.
            </div>
          </div>
        </div>
        <div className="md:ml-20">
            <div className="flex flex-col gap-4">
          <label htmlFor="" className={`${jetbrains.className} font-medium uppercase text-[#091C1E]`}>
            Type <strong>"Your Name"</strong> to confirm
          </label>
          <input placeholder="Please follow me on github"  className="px-4 py-3.5 border-[#C6C6CD] border-2  rounded-sm"/>
                 
        </div>
        <button className={`${jetbrains.className} bg-[#93000A] my-4 px-4 text-white text-lg rounded-lg font-bold py-2`}>DELETE</button>
        </div>
      </div>
    </div>
  );
}
