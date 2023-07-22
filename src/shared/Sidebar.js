import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex-col mt-6'>
       <div className='py-4'>
        <button className="btn btn-outline btn-info bg-slate-100 text-base-100 w-full ">All Post</button>
       </div>
       <hr/>
       <div className='py-4'>
        <button className="btn btn-outline btn-info bg-slate-100 text-base-100 w-full ">Culture</button>
       </div>
       <hr/>
       <div className='py-4'>
        <button className="btn btn-outline btn-info bg-slate-100 text-base-100 w-full ">Religion</button>
       </div>
       <hr/>
       <div className='py-4'>
        <button className="btn btn-outline btn-info bg-slate-100 text-base-100 w-full ">Humanism</button>
       </div>
       <hr/>
       <div className='py-4'>
        <button className="btn btn-outline btn-info bg-slate-100 text-base-100 w-full ">Chakra</button>
       </div>
       
    </div>
  )
}

export default Sidebar