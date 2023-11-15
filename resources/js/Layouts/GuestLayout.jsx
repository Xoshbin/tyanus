import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { Alert } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>
            <div className="md:hidden mx-4 mt-1">
                <Alert color="blue">
                    {__(
                        "Desktop is Ideal: For the optimal typing experience, switch to a desktop for this app!"
                    )}
                </Alert>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
