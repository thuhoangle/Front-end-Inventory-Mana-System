import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleLogin = () => {

        navigate("/");
    };

    return (
        <div className='flex bg-gray-200 h-screen'>
            <div className='text-blue font-bold text-4xl w-1/2 justify-center items-center flex flex-col transform -translate-y-24'>
                <div className='text-center'>
                    <p className='p-1 mb-1'>INVENTORY</p>
                    <p className='p-1 mb-1'>MANAGEMENT</p>
                    <p className='p-1'>SYSTEM</p>
                </div>
                {/* <img src='src/assets/login_asset/1.jpg' alt='hello'/>
                    <img src='src/assets/login_asset/2.jpg' alt='hello'/> */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <img src="src/assets/login_asset/shiba.png" alt="Image 1" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="src/assets/login_asset/tram.png" alt="Image 2" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="src/assets/login_asset/quynh.png" alt="Image 3" style={{ width: '33.33%', margin: '0 1%' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="src/assets/login_asset/Sang.png" alt="Image 1" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="src/assets/login_asset/nghia.png" alt="Image 2" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="src/assets/login_asset/na.png" alt="Image 3" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="src/assets/login_asset/huy.png" alt="Image 4" style={{ width: '33.33%', margin: '0 1%' }} />
                </div>
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
                <button className='bg-blue p-3 rounded-lg text-white font-semibold w-1/2' onClick={handleLogin}>Log in</button>
                <div>
                    <label className='text-center'>Or login with</label>
                </div>
                <div className='w-1/2'>
                    <button className='p-2 rounded-lg bg-white font-semibold w-full'>Log in with Google</button>
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