import { __ } from "@/Libs/Lang";
import Navbar from "@/Components/Typing/Navbar";
import { Alert } from "@material-tailwind/react";

export default function Authenticated({ locale, header, children }) {
    return (
        <div className="min-h-screen bg-surface-muted">
            <Navbar locale={locale} />

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

            <main className="container py-6 sm:py-8">{children}</main>
        </div>
    );
}
