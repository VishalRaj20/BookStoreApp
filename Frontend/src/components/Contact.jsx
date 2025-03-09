import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contact() {
    const form = useRef();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const sendEmail = (data, e) => {
        e.preventDefault();
        
        const sendingToast = toast.loading("Sending message... 📩");

        emailjs.sendForm('service_ce9qvy8', 'template_xhwtbbm', form.current, {
            publicKey: '4GCRa8A_QEEpMSeD9',
        })
        .then(() => {
            toast.success('Thank you for reaching out! I will get back to you soon. ✅', { id: sendingToast });
            reset();  // Clears form fields
            e.target.reset();  // Extra safeguard to ensure fields are cleared
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            toast.error("Failed to send message. Please try again. ❌", { id: sendingToast });
        });
    };

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='pt-20 flex items-center justify-center'>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} className='w-full max-w-lg bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800'>
                    <h3 className="font-bold text-xl text-center mb-4">Contact Us</h3>

                    {/* Name */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 dark:text-white'>Name</label>
                        <input type='text' name="user_name" placeholder='Enter your full name' className='w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white' {...register("user_name", { required: true })} />
                        {errors.user_name && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Email */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 dark:text-white'>Email</label>
                        <input type='email' name="user_email" placeholder='Enter your email' className='w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white' {...register("user_email", { required: true })} />
                        {errors.user_email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Message */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 dark:text-white'>Message</label>
                        <textarea name="message" placeholder='Type your message' className='w-full h-32 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white' {...register("message", { required: true })} />
                        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    <div className='text-center'>
                        <button type='submit' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-200">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
