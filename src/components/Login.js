import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className=' absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background img'/>
        </div>
        <form className='absolute text-white bg-black bg-opacity-80 py-4 px-10 w-[30%] text-center mx-auto left-0 right-0 mt-60'>
            <h1 className='font-bold text-3xl text-start'>{isSignInForm ? "Sign in" : "Sign Up"}</h1>
            {
                !isSignInForm && <input className='p-2 my-4 w-full bg-gray-700' type='text' placeholder='Full Name'/>
            }
            <input className='p-2 my-4 w-full bg-gray-700' type='text' placeholder='Email Adress'/>
            <input className='p-2 my-4 w-full bg-gray-700' type='password' placeholder='password'/>
            <button className='p-2 my-4 w-full bg-red-600 font-bold'>{isSignInForm ? "Sign in" : "Sign Up"}</button>
            <p  onClick={toggleSignInForm} className='text-start cursor-pointer'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login