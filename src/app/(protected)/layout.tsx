import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default async function ProtectedLayout({
    children
} : { 
    children : React.ReactNode
}){
    const session =  await  auth.api.getSession({
        headers : await headers()
    })
    if(!session){
        redirect('/auth')
    }
    return <>
    {children}
    </>
}