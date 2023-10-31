import Footer from "@/Components/Typing/Footer";
import Navbar from "@/Components/Typing/Navbar";

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

            <main>{children}</main>

            <Footer />
        </div>
    );
}
