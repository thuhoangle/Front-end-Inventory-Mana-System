import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
      <div className='flex bg-gray-200 h-screen'>
        <div className='text-blue font-bold text-5xl w-1/2 justify-center items-center flex flex-col'>
          <p className='p-4'>INVENTORY</p>
          <p className='p-4'>MANAGEMENT</p>
          <p className='p-4'>SYSTEM</p>
        </div>
        <div className='flex flex-col w-1/2 items-center justify-center'>
          <div className='w-1/2 py-3'>
            <p className='text-3xl mb-5 font-semibold'>Sign Up</p>
            <label>Email</label>
            <input type="text" className='block w-full p-2 border border-gray-300 rounded' placeholder='Enter your email' />
          </div>
          <div className='w-1/2 py-3'>
            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full p-2 border border-gray-300 rounded"
                placeholder='Input password'
              />
              {/* <div className='inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                {showPassword ? (
                  <FiEyeOff onClick={() => setShowPassword(false)} />
                ) : (
                  <FiEye onClick={() => setShowPassword(true)} />
                )}
              </div> */}
            </div>
          </div>
          <div className='w-1/2 py-3'>
            <label>Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full p-2 border border-gray-300 rounded"
                placeholder='Input password'
              />
              {/* <div className='inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                {showPassword ? (
                  <FiEyeOff onClick={() => setShowPassword(false)} />
                ) : (
                  <FiEye onClick={() => setShowPassword(true)} />
                )}
              </div> */}
            </div>
          </div>
          <button className='bg-blue p-3 rounded-lg text-white font-semibold w-1/2'>Sign up</button>
          <div>
            <label className='text-center'>Or Sign up with</label>
          </div>
          <div className='w-1/2'>
            <button className='p-3 rounded-lg bg-white font-semibold w-full'>Sign up with Google</button>
            <div className='absolute'>
              {/* <FcGoogle /> */}
            </div>
          </div>
          <div className='text-center flex'>
            Already have an account?
            <p className='text-blue-500'><Link to="/login">Log in</Link></p>
          </div>
        </div>
      </div>
  
  )
}
export default SignUp