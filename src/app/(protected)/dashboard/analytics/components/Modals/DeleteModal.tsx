import { Trash2Icon } from "lucide-react";

interface DeleteModalProps {
  isOpen: Boolean;
  onClose: () => void;
}

export default function DeleteModal({ onClose, isOpen }: DeleteModalProps) {
  if (!isOpen) return null
    return (
    <div
      onClick={onClose}
      className="bg-black/50 flex justify-center items-center inset-0 fixed z-50 w-full h-full "
    >
        <div onClick={(e)=>e.stopPropagation()} className="flex p-4 flex-col gap-2 bg-white rounded-lg w-[320px] sm:w-[500px] h-[350px] justify-center items-center text-center" >
            <div className="w-full h-full flex flex-col gap-4  p-4 justify-center">
            <div className="flex items-center w-full justify-center">
                <Trash2Icon size={64} className="p-4 text-[#93000A] bg-[#FFDAD6] rounded-full" />
            </div>
            <div className=" text-slate-900 text-base font-semibold dark:text-slate-50">
                Are you sure you want to delete this post?
            </div>
            <div className="text-slate-600 text-md leading-relaxed dark:text-slate-400">
                This action is permanent and cannot be undone. Once deleted, the item will be removed from your account.
            </div>
            <div className="flex gap-4">
                <button onClick={onClose} className='border cursor-pointer hover:scale-[98%] transition-all duration-300 border-[#C6C6CD] cursor-pointer py-4 rounded-md w-full'>No, Cancel</button>
                <button className=' py-4 flex justify-center items-center text-center rounded-md cursor-pointer hover:scale-[98%] transition-all duration-300 bg-[#93000A] hover:bg-red-700 disabled:50 disabled:cursor-not-allowed text-white w-full'>Yes, Delete</button>
            </div>
            </div>
        </div>
    </div>
  );
}
