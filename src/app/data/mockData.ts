import { title } from "process";
import { Post, User, Comment } from "../Types";

export const users: User[] = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Smith", email: "janesmith@gmail.com" },
  { id: 3, name: "Bob", email: "bob@gmail.com" },
];

export const post: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful react framework",
    authorId: 1,
    createdAt : new Date().toISOString(),
    updatedAt : new Date().toISOString(),
  },
];


export const comment: Comment[]=[
  {
    id : 1,
    content : "Nice Article",
    authorId : 2,
    postId : 1,
    createdAt : new Date().toISOString(),
  }
]