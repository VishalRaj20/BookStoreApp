import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate(); // Hook for navigation
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        document.getElementById("my_modal_3").close();
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
        .then((res) =>{
            console.log(res.data);
            if(res.data){
                toast.success('Signup Successfully');
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                navigate("/"); 
            }   
            
        })
        .catch((err)=>{
            if(err.response){
                console.log(err)
                toast.error("Error: " +  err.response.data.message);
            }
        })
    };
    return (
        <div className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
            <div className="border-[2px] shadow-md p-5 rounded-md relative dark:bg-slate-800 dark:text-white">
                {/* X Button to Close & Navigate */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => navigate('/')} // Redirect to home or any other page
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-lg">Signup</h3>
                    
                    {/* {Name} */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input type='text' placeholder='Enter your fullname' className='bg-blue-50 w-80 px-3 py-1 rounded-md dark:bg-gray-700 dark:text-white dark:placeholder-gray-400' {...register("fullname", { required: true })} />
                        <br />
                        {errors.fullname && <span className='text-sm text-red-500 dark:text-red-500'>This field is required</span>}
                    </div>

                    {/* {Email} */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type='email' placeholder='Enter your email' className='bg-blue-50 w-80 px-3 py-1 rounded-md dark:bg-gray-700 dark:text-white dark:placeholder-gray-400' {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className='text-sm text-red-500 dark:text-red-500'>This field is required</span>}
                    </div>

                    {/* {Password} */}
                    <div className='mt-8 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type='password' placeholder='Enter your Password' className='bg-blue-50 w-80 px-3 py-1 rounded-md dark:bg-gray-700 dark:text-white dark:placeholder-gray-400' {...register("password", { required: true })} />
                        <br />
                        {errors.password && <span className='text-sm text-red-500 dark:text-red-500'>This field is required</span>}
                    </div>

                    <div className='flex justify-around mt-6'>
                        <button type='submit' className="bg-pink-500 text-white rounded-md px-2 py-1 cursor-pointer hover:bg-pink-700 duration-200">
                            Signup
                        </button>
                        <p >Have an account?{" "} 
                            <a className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a><Login />
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
