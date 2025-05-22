import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [userEmail, setEmail] = useState('')
    const navigate = useNavigate()

    //getting the email of user and set it via usenavigate hook
    const handleData = (e) => {
        e.preventDefault()
        navigate("/useraccount", { state: { userEmail } });
    }

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='w-[100vw] h-screen px-5 py-10 pb-15 md:w-100 xl:border-1 xl:border-gray-300 flex flex-col gap-3 bg-[#F7F8F9]'>
                    <h1 className='text-3xl font-bold'>Signin to your <br /> PopX account</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, in!</p>
                    <form action="" className='flex flex-col' onSubmit={handleData}>
                        <div className='flex flex-col'>
                            <label className='text-[#7330FF] bg-white w-fit relative top-3 left-2 px-1'>Email address</label>
                            <input type="text" className='border-1 border-gray-500 px-3 py-2 rounded bg-white' placeholder='Enter email address'
                                required
                                value={userEmail}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#7330FF] bg-white  w-fit relative top-3 left-2 px-1'>Password</label>
                            <input type="password" required className='border-1 border-gray-500 px-3 py-2 rounded bg-white' placeholder='Enter password' />
                        </div>
                        <button type="submit" className='bg-[#6C25FF] text-white mt-4 w-full text-xl font-semibold py-3 rounded-[10px] border-none bold cursor-pointer' >login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;
