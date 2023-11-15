import { useState } from "react";
import { __ } from "@/Libs/Lang";
import Navbar from "@/Components/Typing/Navbar";
import { Alert } from "@material-tailwind/react";

export default function Authenticated({ locale, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar locale={locale} />

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <div className="md:hidden mx-4 mt-1">
                <Alert color="blue">
                    {__(
                        "Desktop is Ideal: For the optimal typing experience, switch to a desktop for this app!"
                    )}
                </Alert>
            </div>

            <main>{children}</main>
        </div>
    );
}
