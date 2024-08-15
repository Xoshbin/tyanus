import Navbar from "@/Components/Typing/Navbar";
import { Alert } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";
import FeedbackForm  from "@/Components/FeedbackForm.jsx";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ locale, header, footer, children }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const notify = () => toast("Wow so easy!");
    return (
        <div className="min-h-screen bg-kblue-50 bg-blob-blue bg-no-repeat bg-contain">
            <Navbar locale={locale}/>
            <ToastContainer />


            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <div className="md:hidden mx-4 my-2">
                <Alert color="blue" className="text-right">
                    {__(
                        "Desktop is Ideal: For the optimal typing experience, switch to a desktop for this app!"
                    )}
                </Alert>
            </div>

            <button
                id="openFormBtn"
                className="[writing-mode:vertical-lr] fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l z-50"
                onClick={() => {
                    console.log("Button clicked, setting isFormOpen to true");
                    setIsFormOpen(true);
                }}
            >
                Feedback
            </button>

            {isFormOpen && (
                <FeedbackForm onClose={() => setIsFormOpen(false)}/>
            )}

            <main>{children}</main>

            {footer && (
                <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 border-t-2">
                    {footer}
                </div>
            )}
        </div>
    );
}
