import React, { useState } from 'react';
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import DangerButton from "@/Components/DangerButton.jsx";
import {Textarea} from "@material-tailwind/react";
import { router } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import { toast } from 'react-toastify';

export default function FeedbackForm({ onClose }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false);


    const submit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        post('/feedback', {
            onFinish: () => setIsSubmitting(false),
            onError: () => {
                toast.error('Please correct the errors and try again.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            },
            onSuccess: () => {
                toast.success('Feedback submitted successfully!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                onClose();
            }
        });
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-20">
            <div className="relative p-8 bg-white w-full max-w-md m-auto rounded-md shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <TextInput type={'text'} name={'name'} value={data.name} onChange={e => setData('name', e.target.value)}/>
                        {errors.name && <div className="text-red-600 text-sm mt-2">{errors.name}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <TextInput type={'email'} name={'email'} value={data.email} onChange={e => setData('email', e.target.value)}/>
                        {errors.email && <div className="text-red-600 text-sm mt-2">{errors.email}</div>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">message</label>
                        <Textarea value={data.message} onChange={e => setData('message', e.target.value)}/>
                        {errors.message && <div className="text-red-600 text-sm mt-2">{errors.message}</div>}
                    </div>
                    <div className="flex items-center justify-between">
                        <PrimaryButton disabled={processing}>Submit</PrimaryButton>
                        <DangerButton>Close</DangerButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
