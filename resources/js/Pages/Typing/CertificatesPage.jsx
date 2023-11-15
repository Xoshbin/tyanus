import React from "react";
import Badge from "@/Components/Typing/Badge";
import AppLayout from "@/Layouts/AppLayout";
import { __ } from "@/Libs/Lang";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Typing/Footer";

const CertificatesPage = ({ certificates }) => {
    return (
        <AppLayout>
            <Head title={__("Certificates")} footer={<Footer />} />
            <div className="flex w-full mx-1 md:max-w-7xl md:mx-auto md:space-x-2 mt-4 max-h-screen justify-center">
                <div>
                    {Object.keys(certificates).length !== 0 ? (
                        <div className="grid grid-cols-4 gap-4 w-full space-y-6 bg-gradient-to-r from-kblue-800 to-kblue-500 p-4 rounded-md">
                            {certificates.map((badge) => (
                                <Badge key={badge.id} badgeName={badge.name} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-xl mt-24">
                            <p>
                                {__(
                                    "You haven't earned any certificates yet. Please engage in some gameplay and return later."
                                )}
                            </p>
                            <Link
                                href={route("lessons")}
                                as="button"
                                className="h-max mt-8 px-3 py-2 text-sm font-medium text-center space-x-2 inline-flex items-center text-black bg-kblue-300 rounded-lg hover:bg-kblue-400 focus:ring-4 focus:outline-none focus:ring-kblue-50"
                            >
                                {__("lessons")}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
};

export default CertificatesPage;
