import Sidebar from "@/shared/Sidebar"

const BlogLayout = ({children}) => {
  return (
    <div className=" max-w-[1400px] h-[780px] flex gap-10 py-10  w-full m-auto ">
        <div className="bg-slate-50 p-2 text-center w-32 border shadow-xl">
        <Sidebar/> 
        </div>
        <div className="bg-slate-100 w-full h-full">
            {children}
        </div>
    
    </div>
  )
}

export default BlogLayout


