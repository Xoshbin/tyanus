import { useState } from "react";
import { __ } from "@/Libs/Lang";
import Navbar from "@/Components/Typing/Navbar";

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

            <main>{children}</main>
        </div>
    );
}
