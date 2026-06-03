import { Bold, Code, Heading1, Heading2, Image, Italic, Link, List, ListOrdered } from "lucide-react";
import { Editor } from "@tiptap/react"
interface Props {
    editor: Editor | null
}
export default function EditorToolBar({ editor }: Props) {
    if (!editor) return null;
    return (
        <div className="flex items-start gap-8 py-4">
            <button type="button" className={`px-2 py-1 cursor-pointer rounded `} onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 1 }).run() }}><Heading1 /></button>
            <button  className={`px-2 py-1 cursor-pointer rounded `} onClick={(e) => { e.preventDefault(); editor.chain().toggleHeading({level : 2}).run() }}><Heading2 /></button>
            <button  className={`px-2 py-1 cursor-pointer rounded `} onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run() }}><Bold /></button>
            <button  className={`px-2 py-1 cursor-pointer rounded `} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic /></button>
            <button  className={`px-2 py-1 cursor-pointer rounded`} onClick={() => editor.chain().focus().toggleBulletList().run()}><List /></button>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered /></button>
            <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code /></button>
            <button><Image /></button>
            <button><Link /></button>
        </div>
    )
}