"use client"
import { useSession } from "@/lib/auth-client";
import { CloudUpload, Info, ScanFace, Trash, Upload } from "lucide-react";
import { Geist, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

const geist = Geist({
  subsets: ["latin"],
});
const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
});
export default function Avatar() {
  const convertToBase64 = (
    file: File
  ) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
      }
      reader.onerror = reject
    })
  }
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {data : sessionData , refetch} = useSession()
  React.useEffect(() => {
    if (sessionData?.user?.image) {
      setPreview(sessionData.user.image)
    }
  }, [sessionData])
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target.files?.[0];
    if (!selectFile) return;
    const maxsize = 2 * 1024 * 1024;
    if (selectFile.size > maxsize) {
      toast.error("Image must be less than 2 MB")
      return
    }
    const imageUrl = URL.createObjectURL(selectFile);

    setPreview(imageUrl);
    setFile(selectFile);
  }
  const fileUpload = async () => {
    if (!file) return null;
    try {
      setUploading(true);
      const base64 = await convertToBase64(file);
      const response = await fetch("/api/users/avatar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64
        })
      })
      if (!response.ok) {
        toast.error("Upload Failed")
        return
      }
      toast.success("Avatar Uploaded Successfully ")
      await refetch()
      window.location.reload();
    }
    catch (error) {
      return toast.error("Something Went Wrong")
    }
    finally {
      setUploading(false)
    }
  }
  return (
    <div className="md:mx-22  ">
      <div className="flex  sm:justify-start justify-center flex-col gap-4 border-[#C6C6CD] border-b-2 pb-2 ">
        <div
          className={`${geist.className} text-[#2D2D2D] text-4xl font-semibold`}
        >
          Avatar Management
        </div>
        <div className={`${geist.className} text-[#45464D]`}>
          Manage your profile picture and personal branding.
        </div>
      </div>
      <div className="flex gap-8 w-full md:w-[60vw] flex-col my-8 justify-center">
        <div className="bg-[#FFFFFF] border-2 border-[#E0E3E5] md:flex-row flex-col  p-12 gap-8 items-center rounded-lg flex w-full md:h-[40vh] shadow-lg   ">
          <div className="w-[220px] h-[220px] relative">
            {preview ? (
              <Image
                className="rounded-xl border-7 border-[#E0E3E5] "
                src={preview || "/images/react.png"}
                alt="React"
                fill
              />
            ) : (
              <div>
                A
              </div>
            )}
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
            <div className="flex md:flex-row flex-col gap-4 items-center ">
              <button onClick={fileUpload} disabled={!file || uploading} className={`flex  rounded-sm  items-center  text-white px-6 py-3 gap-2 ${!file || uploading ? "bg-gray-400 cursor-not-allowed" : "bg-[#00687A] hover:opacity-90 cursor-pointer"}`}>
                <span>
                  <Upload />
                </span>
                <span>Upload new picture</span>
              </button>
              <div className="flex w-full  md:w-fit gap-2 border-2 px-6 py-2.5 text-[#191C1E] rounded-sm border-[#191C1E]  items-center">
                <span>
                  <Trash />
                </span>
                <span>Remove Avatar</span>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => fileInputRef.current?.click()}  className="flex cursor-pointer flex-col  justify-center w-full   border-dashed md:h-[40vh] p-12 gap-4 items-center rounded-xl hover:border-[#00687A] transition-all duration-300  border-4  border-[#C6C6CD]">
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
        <input type="file" onChange={handleFileChange} ref={fileInputRef} hidden accept="image/png, image/jpg, image/jpeg, image/webp" />

        <div className="flex md:flex-row w-full flex-col gap-6 items-center">
          <div className="flex flex-col w-full gap-4 rounded-sm md:h-[25vh] md:w-1/2 bg-white border-1 p-6">
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
          <div className="flex w-full md:h-[25vh] flex-col gap-4  rounded-sm md:w-1/2 bg-white border-1 p-6">
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
    </div>
  );
}
