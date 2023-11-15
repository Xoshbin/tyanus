import Footer from "@/Components/Typing/Footer";
import Navbar from "@/Components/Typing/Navbar";
import { Alert } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";

export default function App({ locale, header, children }) {
    return (
        <div className="min-h-screen bg-kblue-50 bg-blob-blue bg-no-repeat bg-contain">
            <Navbar locale={locale} />

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

            <main>{children}</main>

            <Footer />
        </div>
    );
}
