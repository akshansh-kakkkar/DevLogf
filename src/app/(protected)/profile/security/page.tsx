import { Mail } from "lucide-react";
import { Geist, JetBrains_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});
const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
});
export default function Security() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex  sm:justify-start justify-center flex-col gap-4 border-[#C6C6CD] border-b-2 pb-2 ">
        <div
          className={`${geist.className} text-[#2D2D2D] text-4xl font-semibold`}
        >
          Security Settings
        </div>
        <div className={`${geist.className} text-[#45464D]`}>
          Manage your account, security, passwords and active sessions.
        </div>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="col-span-2">
          <div className="bg-white px-8 flex flex-col gap-4 py-12 w-full  rounded-lg border-1 border-[#C6C6CD]">
            <div className="flex gap- flex-col">
              <div className="flex gap-2 items-center">
                <span>
                  <Mail strokeWidth={2} size={32} className="text-[#191C1E]" />
                </span>
                <span
                  className={`text-2xl ${geist.className} text-[#191C1E] font-semibold`}
                >
                  Change Email
                </span>
              </div>{" "}
              <div className={`${geist.className} text-[#45464D] text-md`}>
                update the primary email address associated with the account.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className={`${jetBrains.className} font-[600] text-[#191C1E]`}
              >
                Current Email Address
              </label>
              <input
                className="rounded-sm bg-[#F2F4F6] border-1 border-[#C6C6CD] p-2 text-[#76777D]"
                type="text"
                placeholder="current@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className={`${jetBrains.className} font-[600] text-[#191C1E]`}
              >
                New Email Address
              </label>
              <input
                className="rounded-sm bg-[#F2F4F6] border-1 border-[#C6C6CD] p-2 text-[#76777D]"
                type="text"
                placeholder="new@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className={`${jetBrains.className} font-[600] text-[#191C1E]`}
              >
                One Time Password (OTP)
              </label>
              <div className="flex gap-4">
                <div className="flex items-center gap-3">
                    {[1,2,3,4].map((_, index)=>(

                    
                <input
                maxLength={1}
                key={index}
                inputMode="numeric"
                  className="rounded-sm w-14 h-14 flex justify-center items-center text-center  tracking-widest bg-[#F2F4F6] border-1 border-[#C6C6CD] p-2 text-[#76777D]"
                  type="text"
                />
                ))}
</div>
                <button
                  className={`border-[#00687A] border-2 px-8 font-bold py-2 text-[#00687A] rounded-sm text-md w-fit ${jetBrains.className}`}
                >
                  SEND
                </button>
              </div>
            </div>
            <button
              className={`bg-[#00687A] px-5 py-3 text-white rounded-sm text-xl w-fit ${jetBrains.className}`}
            >
              Update Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
