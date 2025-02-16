import React from 'react'
import Image from 'next/image'

export default function Login() {
  return (
    <>
     <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center w-4/5 h-5/6 shadow-sm shadow-black rounded-lg'>
            <div className=' h-full w-1/2 rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center text-center '>
                <div className="logo">logo</div>
                <h2 className='text-3xl font-bold'>Welcome Back !</h2>
                <div className="text-xl flex justify-center items-center gap-2">
                    <Image src='/google.svg' width={40} height={40} alt='google logo'/>
                    <span>Log Using Google</span>
                </div>
                <h2 className='text-xl '>Or using this form</h2>
                <div className="form">
                    <form className='flex flex-col gap-4'> 
                        <input type="text" placeholder="username" className='w-96 p-2 border border-black'/>
                        <input type="password" placeholder="password" className='w-96 p-2 border border-black'/>
                        <button className='bg-black text-white p-2'>login</button>
                    </form>
                </div>
            </div>
            <div className='bg-green-500 h-full w-1/2 rounded-br-lg rounded-tr-lg'>hi</div>
        </div>
     </div>
    </>
  )
}
