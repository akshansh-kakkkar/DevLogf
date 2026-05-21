import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { Prisma } from "@/lib/prisma";
export async function POST(request:Request) {
    try{
        const body= await request.json();
        const hashedPassword = await bcrypt.hash(body.password,10);
        const User = await Prisma.user.create({
            data : {
                name : body.name, 
                email : body.email,
                password : hashedPassword
            }
        })
        return NextResponse.json(User)

    }catch(error){
        return NextResponse.json({error : "Message something went wrong"},{status : 500})
    }
}