import {
  Bold,
  Code,
  Heading1,
  Heading2,
  HighlighterIcon,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
} from "lucide-react";
import { Editor, useEditorState } from "@tiptap/react";
interface Props {
  editor: Editor | null;
}
export default function EditorToolBar({ editor }: Props) {
  if (!editor) return null;
  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isH1: editor?.isActive("heading", { level: 1 }) ?? false,
      isH2: editor?.isActive("heading", { level: 2 }) ?? false,
      isBold: editor?.isActive("bold") ?? false,
      isItalic: editor?.isActive("italic") ?? false,
      isbullet: editor?.isActive("bulletList") ?? false,
      isOrdered: editor?.isActive("orderedList") ?? false,
      isSnippet: editor?.isActive("codeBlock") ?? false,
      ishighLighted: editor?.isActive("highlight") ?? false,
    }),
  });
  if (!editor) return null;
  return (
    <div className="flex bg-white px-2 shadow-lg rounded-lg items-start gap-4 py-2">
      <button
        type="button"
        className={`px-2 py-1 cursor-pointer rounded  ${editorState.isH1 ? "bg-[#00687A]/80 text-white " : "hover:bg-[#00687A]/10"}`}
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
          console.log(editor.getHTML());
        }}
      >
        <Heading1 />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded ${editorState.isH2 ? "bg-[#00687A]/80 text-white" : "hover:bg-[#00687A]/10"}`}
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <Heading2 />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded  ${editorState.isBold ? "bg-[#00687A]/80 text-white" : "hover:bg-[#00687A]/10"} `}
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded ${editorState.isItalic ? "bg-[#00687A]/80 text-white" : "hover:bg-[#00687A]/10"}`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded ${editorState.isbullet ? "bg-[#00687A]/80 text-white" : "hover:bg-[#00697A]/10"}`}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded ${editorState.isOrdered ? "bg-[#00687A]/80 text-white" : "hover:bg-[#00687A]/10"}`}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded ${editorState.isSnippet ? "bg-[#00687A]/80 text-white" : "hover:bg-[#00687A]/10"}`}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded ${editorState.ishighLighted ? "bg-[#00687A]/80 text-white" : "hover:bg-[#00687A]/10"}`}
        onClick={() => editor.chain().focus().toggleHighlight().run()}
      >
        <HighlighterIcon />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded hover:bg-[#00687A]/40 `}
      >
        <Image />
      </button>
      <button
        className={`px-2 py-1 cursor-pointer rounded hover:bg-[#00687A]/40`}
      >
        <Link />
      </button>
    </div>
  );
}
