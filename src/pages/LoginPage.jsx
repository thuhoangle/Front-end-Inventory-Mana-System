import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    return(
            <div className='flex bg-gray-200 h-screen'>
                <div className='text-blue font-bold text-5xl w-1/2 justify-center items-center flex flex-col'>
                    <p className='p-4'>INVENTORY</p>
                    <p className='p-4'>MANAGEMENT</p>
                    <p className='p-4'>SYSTEM</p>
                </div>
                <div className='flex flex-col w-1/2 items-center justify-center'>
                    <div className='w-1/2'>
                        <p className='text-3xl mb-5 font-semibold'>Log in</p>
                        <label>Email</label>
                        <input type="text" className='block w-full p-2 border border-gray-300 rounded' placeholder='Enter your email' />
                    </div>
                    <div className='w-1/2'>
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
                        <div className='text-blue-500 text-right'>
                            <label>Forgot password</label>
                        </div>
                    </div>
                    <button className='bg-blue p-3 rounded-lg text-white font-semibold w-1/2'>Log in</button>
                    <div>
                        <label className='text-center'>Or login with</label>
                    </div>
                    <div className='w-1/2'>
                        <button className='p-3 rounded-lg bg-white font-semibold w-full'>Log in with Google</button>
                        <div className='absolute'>
                            {/* <FcGoogle /> */}
                        </div>
                    </div>
                    <div className='text-center flex'>
                        Don't have an account?
                        <p className='text-blue'><Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
    
    )
}
export default LoginPage