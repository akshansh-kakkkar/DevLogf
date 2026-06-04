"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { JetBrains_Mono } from "next/font/google";
import Placeholder from '@tiptap/extension-placeholder'
import EditorToolBar from "../Toolbar/EditorToolbar";
import Highlight from "@tiptap/extension-highlight";

interface Props {
  content: string;
  onChange: (value: string) => void;
}
const jetbrains = JetBrains_Mono({
  subsets: ['latin']
})
export default function TipTapEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit,
      Highlight,
      Placeholder.configure({
        placeholder: 'add something here...',
      }),
    ],
    content,

    editorProps: {
      attributes: {
        class: `outline-none min-h-[400px] [&_mark]:bg-[#00687A]/80  [&_mark]:text-white [&_mark]:px-2 [&_mark]:py-1 w-full ProseMirror [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4  [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:my-4`,
      },
    },

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  });
  return (
    <div className={`${jetbrains.className} flex flex-col gap-4`}>
      <EditorToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
