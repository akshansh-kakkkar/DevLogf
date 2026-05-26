import SideBar from "./components/SideBar";

export default function layout({children} : {children : React.ReactNode}){
    return(
        <div className="flex min-h-screen">
            <SideBar />
            <main className="flex-1 p-8 ml-[280px] w-full my-20">
                {children}
            </main>
        </div>
    )
}