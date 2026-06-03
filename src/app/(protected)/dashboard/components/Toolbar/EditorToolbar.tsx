import { Bold, Code, Heading1, Heading2, Image, Italic, Link, List, ListOrdered } from "lucide-react";

export default function EditorToolBar(){
    return(
        <div className="flex flex-col gap-2">
            <button><Heading1 /></button>
            <button><Heading2 /></button>
            <button><Bold /></button>
            <button><Italic /></button>
            <button><List /></button>
            <button><ListOrdered /></button>
            <button><Code /></button>
            <button><Image /></button>
            <button><Link /></button>
        </div>
    )
}