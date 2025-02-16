import React from 'react'
import Image from 'next/image'

export default function Login() {
  return (
    <>
     <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center w-4/5 h-5/6 shadow-sm shadow-gray-400 rounded-lg'>
            <div className=' h-full w-1/2 rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center text-center column-gap-8'>
                <div className="logo">logo</div>
                <h2 className='text-3xl font-bold'>Welcome Back !</h2>
                <div className="text-xl flex justify-center items-center gap-8  p-2 w-3/5 rounded-lg cursor-pointer shadow-sm shadow-gray-500 hover:shadow-md">  
                    <Image src='/google.svg' width={30} height={30} alt='google logo'/>
                    <span>Join Using Google</span>
                </div>
                <h2 className='text-xl '>Or using this form</h2>
                <div className="form">
                    <form className='flex flex-col gap-4'> 
                        <input type="text" placeholder="your email..." className='h-12 w-96 text-lg px-4 py-2 shadow-sm shadow-gray-500 hover:shadow-md rounded-sm boder border-gray-200'/>
                        <input type="password" placeholder="your password..." className='h-12 w-96 text-lg px-4 py-2 shadow-sm shadow-gray-500 hover:shadow-md rounded-sm border border-gray-200'/>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id="remember"/>
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#">Forget password ?</a>
                        </div>
                        <button className='bg-black text-white px-2 py-3 rounded-lg'>Login</button>
                    </form>
                    <div className='flex justify-center items-center gap-4'>
                        <span>Don't have an account yet?</span>
                        <a href="#" className='text-blue-500'>Sign up</a>
                    </div>
                </div>
            </div>
            <div className='bg-green-500 h-full w-1/2 rounded-br-lg rounded-tr-lg'>hi</div>
        </div>
     </div>
    </>
  )
}
