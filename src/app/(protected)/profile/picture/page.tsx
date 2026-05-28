import { CloudUpload, Info, ScanFace, Trash, Upload } from "lucide-react";
import { Geist, JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const geist = Geist({
  subsets: ["latin"],
});
const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
});
export default function Avatar() {
  return (
    <div className="sm:mx-22 ">
      <div className="flex flex-col gap-4 border-[#C6C6CD] border-b-2 pb-2 ">
        <div
          className={`${geist.className} text-[#2D2D2D] text-4xl font-semibold`}
        >
          Avatar Management
        </div>
        <div className={`${geist.className} text-[#45464D]`}>
          Manage your profile picture and personal branding.
        </div>
      </div>
      <div className="flex gap-8 flex-col my-8 justify-center">
        <div className="bg-[#FFFFFF] border-2 border-[#E0E3E5]  p-12 gap-8 items-center rounded-lg flex w-[60vw] h-[40vh] shadow-lg   ">
          <div className="w-[220px] h-[220px] relative">
            <Image
              className="rounded-xl border-7 border-[#E0E3E5] "
              src="/images/react.png"
              alt="React"
              fill
            />
          </div>
          <div className="gap-4 flex flex-col">
            <div
              className={`text-4xl ${geist.className} font-semibold text-[#191C1E]  `}
            >
              Your Profile Photo
            </div>
            <div className={`text-[#C6C6CD] ${jetBrains.className} text-md`}>
              PNG, JPG, JPEG, WebP. Max Size 2 MB
            </div>
            <div className="flex gap-4 items-center ">
              <div className="flex rounded-sm  items-center bg-[#00687A] text-white px-6 py-3 gap-2">
                <span>
                  <Upload />
                </span>
                <span>Upload new picture</span>
              </div>
              <div className="flex gap-2 border-2 px-6 py-2.5 text-[#191C1E] rounded-sm border-[#191C1E]  items-center">
                <span>
                  <Trash />
                </span>
                <span>Remove Avatar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[60vw] justify-center items-center border-dashed h-[40vh] p-12 gap-4 items-center rounded-xl hover:border-[#00687A] transition-all duration-300  border-4  border-[#C6C6CD]">
          <div className="p-4 bg-[#E6E8EA] rounded-full">
            <CloudUpload size={64} className="text-[#76777D]  " />
          </div>
          <div className={`flex justify-center items-center flex-col `}>
            <div
              className={`${geist.className} text-lg font-bold text-[#191C1E]`}
            >
              Drag and drop your avatar here
            </div>
            <div
              className={`${jetBrains.className} text-sm font-medium text-[#45464D]`}
            >
              or click to browse your files
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col gap-4 rounded-sm h-[25vh] w-[30vw] bg-white border-1 p-6">
          <div className="flex gap-3 items-center">
            <span>
              <ScanFace size={24} strokeWidth={3} />
            </span>
            <span className={`${geist.className} font-bold text-xl`}>Branding Tips</span>
          </div>
          <div className={`${jetBrains.className} font-bold text-[#45464D]`}>
            Consistent Branding will help you stand out in the developer
            community. A high-contrast head-shot with a clean backgroud is
            recommended.
          </div>
        </div>
        <div className="flex h-[25vh] flex-col gap-4  rounded-sm w-[30vw] bg-white border-1 p-6">
          <div className="flex gap-3 items-center">
            <span>
              <Info size={24} strokeWidth={3} />
            </span>
            <span className={`${geist.className} font-bold text-xl`}>Technical Info</span>
          </div>
          <div>
            <ul className={`list-disc px-6 text-[#C6C6CD] ${jetBrains.className}`}>
                <li>Min Resolution : 400x400px</li>
                <li>Recommended Aspect Ration : 1:1</li>
                <li>Formats : PNG, JPG, JPEG, WebP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
