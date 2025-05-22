import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  //getting the user data , and send the data via the usernavigate hook
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/useraccount", {
      state : {userName, email}
    })
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='w-[100vw] h-screen px-5 py-7 pb-15 md:w-100 xl:border-1 xl:border-gray-300 flex flex-col gap-5 bg-[#F7F8F9]'>
          <h1 className='text-3xl font-bold'>Create your <br/> PopX account</h1>
          <form action="" id="signUpForm" className='flex flex-col gap-1' onSubmit={() => handleSubmit(event)} >
            <div className='flex flex-col'>
              <label className='text-[#7330FF] bg-white w-fit relative top-3 left-2 px-1'>Full Name
                <span className='text-red-500'>*</span>
              </label>
              <input type="text" className='border-1 border-gray-500 px-3 py-2 bg-white rounded' placeholder='Enter full name' required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-[#7330FF] bg-white w-fit relative top-3 left-2 px-1 '>Phone number
                <span className='text-red-500'>*</span>
              </label>
              <input type="number" className='border-1 border-gray-500 px-3 py-2 rounded bg-white' placeholder='Enter mobile number' required />
            </div>
            <div className='flex flex-col'>
              <label className='text-[#7330FF] bg-white w-fit relative top-3 left-2 px-1'>Email address
                <span className='text-red-500'>*</span>
              </label>
              <input type="text" className='border-1 border-gray-500 px-3 py-2 rounded bg-white' placeholder='Enter email address'
               required
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#7330FF] bg-white w-fit relative top-3 left-2 px-1'>Password
                <span className='text-red-500'>*</span>
              </label>
              <input type="password" className='border-1 border-gray-500 px-3 py-2 rounded bg-white' placeholder='Enter password' required/>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#7330FF] bg-white w-fit relative top-3 left-2 px-1'>Company name</label>
              <input type="text" className='border-1 border-gray-500 px-3 py-2 rounded bg-white' placeholder='Enter your company name' required />
            </div>
            <div className='flex flex-col'>
              <div className='flex p-1'>
                <p>Are you an agency?</p><span className='text-red-500'>*</span>
              </div>
              <div className='flex gap-10 items-center'>
                <label className='flex gap-2 items-center'>
                  <input type="radio" name='agency' />
                  <span>Yes</span>
                </label>
                <label className='flex gap-2'>
                  <input type="radio" name='agency' />
                  <span>No</span>
                </label>
              </div>
            </div>
          </form>
          <div className='w-full self-end mt-auto'>
          <button type='submit' form="signUpForm" className='w-full bg-[#6C25FF] text-white  text-l font-semibold py-3 rounded-[10px] border-none bold cursor-pointer'>Create Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
