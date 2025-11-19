import { usePage } from "@inertiajs/react";
import Navbar from "@/Components/Typing/Navbar";
import { Alert } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";

export default function Guest({ children }) {
    const { locale } = usePage().props;

    return (
        <div className="min-h-screen bg-surface-muted">
            <Navbar locale={locale} />

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

            <main className="container flex justify-center py-8 sm:py-12">
                <div className="w-full max-w-md">
                    <div className="rounded-2xl bg-surface border border-subtle shadow-soft px-6 py-8 sm:px-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
