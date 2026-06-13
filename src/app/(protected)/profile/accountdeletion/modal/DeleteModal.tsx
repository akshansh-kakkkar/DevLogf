import { useSession , signOut} from '@/lib/auth-client';
import { Loader2, Trash2Icon, X } from 'lucide-react';
import { Geist } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { toast } from 'sonner';
interface DeleteModalProps  {
    open : boolean,
    onClose : ()=> void, 
}
const geist = Geist({
    subsets : ['latin']
})
const DeleteModal = ({open, onClose} : DeleteModalProps) => {
    const router = useRouter()
    const {data : session } = useSession();
    const userId = session?.user.id;
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("")
    const  sendDeleteEmail = async ()=>{
    try{
        const response = await fetch('/api/security/deleteaccount', {
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : session?.user?.email
            })
        })
    }
    catch(error){
        toast.error("Something went wrong")
    }
  }
  const deleteUser = async () => {
    if (!userId) return;
    try {
      setIsLoading(true);
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });
      await signOut()
      if (!response.ok) {
        toast.error("Something went wrong");
        return;
      }
     await sendDeleteEmail()
      toast.success(
        "Account Deleted Successfully. We are sad to see you go :(",
      );
      
    router.refresh()
    router.push('/')
    } catch (error) {
        console.error(error)
      toast.error(
        "Unfortunately we can't delete your account please contact us on our email Id.",
      );
    } finally {
      setIsLoading(false);
    }
  };
    if (!open) return null;
    return (
    <div className='inset-0 bg-black/50 fixed flex items-center justify-center z-50' onClick={onClose}>
        <div className='bg-white relative px-4  mx-4 border-2 py-6 min-h-[300px] max-h-[600px] min-w-[250px] max-w-[600px] rounded-xl' onClick={(e)=>e.stopPropagation()}>
           <div className='h-full w-full flex justify-center items-center flex-col gap-4'>
            <div  className='text-[#45464D]  cursor-pointer flex absolute top-4 justify-end right-4'>
                <X onClick={onClose} className='hover:scale-[120%]  transition-all duration-300' />
            </div>
            <div className='flex w-full justify-center items-center '>
                <Trash2Icon size={64} className='bg-[#FFDAD6] p-3 rounded-full text-[#93000A]' />
            </div>
            <div className={`${geist.className} text-[#191C1E] text-xl font-bold flex justify-center items-center w-full`}>
                Delete
            </div>
            <div className={`${geist.className} text-lg text-[#45464D]`}>
                Are you sure you would like to delete this ? This action is irreversible.
            </div>
            <div className={`flex w-full text-lg sm:text-xl font-semibold ${geist.className} gap-4 justify-center items-center `}>
                <button onClick={onClose} className='border cursor-pointer hover:scale-[98%] transition-all duration-300 border-[#C6C6CD] cursor-pointer py-4 rounded-xl w-full'>Cancel</button>
                <button onClick={deleteUser} className=' py-4 flex justify-center items-center text-center rounded-xl cursor-pointer hover:scale-[98%] transition-all duration-300 bg-[#93000A] hover:bg-red-700 disabled:50 disabled:cursor-not-allowed text-white w-full'>
                    {isLoading ? <Loader2 className='flex animate-spin text-white'  /> : "Confirm"}
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal