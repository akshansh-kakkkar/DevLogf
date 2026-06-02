import { useSession } from "@/lib/auth-client";
import { X } from "lucide-react";
import { Geist, Libertinus_Sans } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
const geist = Geist({
  subsets: ["latin"],
});
const libretinus = Libertinus_Sans({
  subsets : ['latin'],
  weight : ['400']
})
interface InterfaceBioModelProps {
  open: boolean;
  onClose: () => void;
  bio: string;
  name: string;
}
export default function BioModal({
  open,
  onClose,
  bio,
  name,
}: InterfaceBioModelProps) {
  const { data: session } = useSession();
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className="inset-0  fixed bg-black/50 flex items-center justify-center z-50"
    >
      <div
        className="bg-white mx-4 py-6 rounded-xl min-h-[300px] min-w-[250px] max-h-[600px] max-w-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b p-2 text-3xl font-bold">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              {session?.user.image ? (
                <Image
                  alt="user image"
                  src={session?.user?.image}
                  width={56}
                  height={56}
                  className="rounded-xl border-2 border-[#00687A]"
                />
              ) : (
                <div
                  className={`rounded-xl text-white flex justify-center items-center font-medium h-12 w-12 bg-[#00687A] ${geist.className}`}
                >
                  {session?.user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex flex-col">
              <div className="text-xl font-medium text-left text-[#45464D]">
                {session?.user.name}
              </div>
              <div className="text-sm font-medium text-left text-[#76777D]">
                {session?.user.email}
              </div>
              </div>
            </div>
            <div onClick={onClose}>
              <X size={32} />
            </div>
          </div>
        </div>
        <div className=" mt-4 max-h-[400px] rounded-2xl overflow-y-auto">
          <div className={`px-8 pr-12 break-words  whitespace-pre-wrap ${libretinus.className} text-lg leading-7 text-[#45464D]`}>
            {bio || "Bio not available"}
          </div>
        </div>
        <div className="border-t flex mt-4  pt-4">
          <div className="flex justify-end w-full text-end items-end">
          <button onClick={onClose} className="flex justify-center items-center text-center cursor-pointer text-white bg-[#191C1E] px-5 py-2 rounded-lg mx-7">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
