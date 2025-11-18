import Navbar from "@/Components/Typing/Navbar";
import { Alert } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";
import FeedbackForm from "@/Components/FeedbackForm.jsx";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ locale, header, footer, children }) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="min-h-screen bg-surface-muted">
            <Navbar locale={locale} />
            <ToastContainer />

            {header && (
                <header className="bg-surface border-b border-subtle">
                    <div className="container py-4 sm:py-6">
                        {header}
                    </div>
                </header>
            )}

            <div className="md:hidden container mt-2">
                <Alert
                    color="blue"
                    className={locale === "ckb" ? "text-right" : "text-left"}
                >
                    {__(
                        "Desktop is Ideal: For the optimal typing experience, switch to a desktop for this app!"
                    )}
                </Alert>
            </div>

            <button
                id="openFormBtn"
                type="button"
                className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-soft hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                onClick={() => setIsFormOpen(true)}
            >
                {__("Feedback")}
            </button>

            {isFormOpen && <FeedbackForm onClose={() => setIsFormOpen(false)} />}

            <main className="container py-6 sm:py-8">{children}</main>

            {footer && (
                <footer className="mt-8 border-t border-subtle bg-surface">
                    <div className="container py-4 sm:py-6">{footer}</div>
                </footer>
            )}
        </div>
    );
}
