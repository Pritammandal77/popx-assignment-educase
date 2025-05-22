import React from 'react';
import { useLocation } from 'react-router-dom';

function UserAccount() {

    const location = useLocation();
    const state = location.state || {};

    const userEmail = state.userEmail || state.email || "user@gmail";
    const userName = state.userName || "User";

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='w-[100vw] h-screen bg-[#f3f3f3] md:w-100 xl:border-1 xl:border-gray-300 flex flex-col '>
                    <h1 className='text-2xl text-gray-600 p-5 bg-white font-semibold'>Account Settings</h1>
                    <div className='px-5 py-7 flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <div className=' flex max-h-15 items-center cursor-pointer'>
                                <img src="userProfile.jpeg" alt="" className='rounded-full h-20' />
                                <i className="fa-solid fa-camera text-sm bg-[#6C25FF] p-1.5 text-white rounded-full h-fit relative top-4 right-4"></i>
                            </div>

                            <div className='text-l font-semibold'>
                                <p className=''>{userName}</p>
                                <p className='text-gray-500'>{userEmail}</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, enim vitae iusto dolorem recusandae dolore provident id? Assumenda, doloribus? Aut ducimus fuga nobis dolor! </p>
                    </div>
                    <div className=' h-full flex flex-col justify-between'>
                        <hr className=" border-gray-400 border-dashed " />
                        <hr className='border-gray-400 border-dashed mb-10' />
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserAccount;
