import React from 'react'

const Manager = () => {
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
    </div>
     <div className=" p-3 md:mycontainer min-h-[88.2vh] ">
     <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>

                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className='text text-white flex flex-col p-4 text-black gap-8 items-center'>
           <input placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id=''/>
           <div className='flex w-full justify-between gap-8'>
           <input placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id=''/>
           <div className="relative">
           <input placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id=''/>
           <span className='absolute right-[3px] top-[4px] cursor-pointer'>
          <img className='p-1 'width={26}src="Icons\eye.png" alt="" />
           </span>
           </div>
           </div>
           <button className='flex justify-center items-center gap-4 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
           <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>
                        Add Password</button>
        </div>
     </div>

   
   
    </>
  )
}

export default Manager