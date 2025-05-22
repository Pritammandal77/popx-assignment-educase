import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='flex items-center justify-center '>
                <div className='w-[100vw] h-screen px-5 pb-15 md:w-100 xl:border-1 xl:border-gray-300 flex flex-col gap-[10px] justify-end bg-[#F7F8F9]'>
                    <h1 className='text-3xl font-bold'>Welcome to PopX</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate placeat</p>
                    <NavLink to='/signup' className="mt-5">
                        <button className='bg-[#6C25FF] text-white w-full text-l font-semibold py-3 rounded-[10px] border-none bold cursor-pointer'>Create Account</button>
                    </NavLink>
                    <NavLink to='/signin'>
                        <button className='bg-[#C5ADFA] w-full text-l py-3 font-semibold rounded-[10px] cursor-pointer'>Already Registered? Login</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Home;
