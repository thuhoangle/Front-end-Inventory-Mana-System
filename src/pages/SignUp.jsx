import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
      <div className='flex bg-white h-screen'>
        <div className='text-blue font-bold text-4xl w-1/2 justify-center items-center flex flex-col transform -translate-y-8'>
                <div className='text-center'>
                    <p className='p-1 mb-1'>INVENTORY</p>
                    <p className='p-1 mb-1'>MANAGEMENT</p>
                    <p className='p-1'>SYSTEM</p>
                    <p className='p-1 smaller-text'> Group 1</p>                    
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '10px'}}>
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
          <div className='w-1/2 py-3'>
            <p className='text-3xl mb-5 font-semibold'>Sign Up</p>
            <label>Email</label>
            <input type="text" className='block w-full p-2 border border-gray-300 rounded' placeholder='Enter your email' />
          </div>
          <div className='w-1/2 py-3'>
            <label>Password</label>
            <div className="relative">
              <input
                className="block w-full p-2 border border-gray-300 rounded"
                placeholder='Input password'
              />
              
            </div>
          </div>
          <div className='w-1/2 py-3'>
            <label>Confirm Password</label>
            <div className="relative">
              <input
                className="block w-full p-2 border border-gray-300 rounded"
                placeholder='Input password'
                style={{marginBottom: '30px'}}
              />
              
            </div>
          </div>
          <button className='bg-blue p-3 rounded-lg text-white font-semibold w-1/2'>Sign up</button>
          
          <div className='text-center flex py-3'>
            Already have an account? 
            <p className='text-blue' style={{marginLeft: '5px'}}><Link to="/login"> <strong> Log in </strong> </Link></p>
          </div>
        </div>
      </div>
  
  )
}
export default SignUp