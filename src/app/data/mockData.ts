import { Post, User, Comment } from "../Types";

export const users: User[] = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Smith", email: "janesmith@gmail.com" },
  { id: 3, name: "Bob", email: "bob@gmail.com" },
];

export const post: Post[] = [
  {
    id: 1,
    image : "/images/next.png",
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful react framework.",
    authorId: 1,
    createdAt : new Date().toISOString(),
    updatedAt : new Date().toISOString(),
  },
  {
    id : 2,
    image:"/images/react.png",
    title : "Getting Started with React.js",
    content : "React is good but Next.js with Typescript is better.",
    authorId : 2,
    createdAt: new Date().toISOString(),
    updatedAt:new Date().toISOString()
  },
  {
    id:3,
    image : "/images/javascript.png",
    title : "Getting Started with Javascript",
    content : "Javascript is good but Javascript is better.",
    authorId:3,
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString(),
  }
];


export const comment: Comment[]=[
  {
    id : 1,
    content : "Nice Article",
    authorId : 2,
    postId : 1,
    createdAt : new Date().toISOString(),
  },
  {
    id : 2,
    content : "Very Good",
    authorId : 1,
    postId : 2,
    createdAt : new Date().toISOString(),
  },
  {
    id : 3,
    content : "Nice",
    authorId : 3,
    postId : 3,
    createdAt : new Date().toISOString(),
  }
]