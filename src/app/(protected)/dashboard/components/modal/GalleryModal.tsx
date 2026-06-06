import Image from "next/image";

interface GalleryModalProps {
    images : string[],
    isOpen : boolean,
    onClose : ()=> void;
}
export default function GalleryModal({ images, isOpen, onClose}:GalleryModalProps){
    if(!isOpen) return null;
    return(
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
            <div onClick={(e)=>e.stopPropagation()}  className="bg-white rounded-xl p-4 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
               {images.map((images, index)=>(
                <div key={index} >
                    <div >
                        <Image src={images} alt="images" fill />
                    </div>
                </div>
               ) )}
            </div>
        </div>
    )
}