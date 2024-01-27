import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { __ } from "@/Libs/Lang";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Typing/Footer";

const CertificatesPage = ({ certificates }) => {
    return (
        <AppLayout footer={<Footer />}>
            <Head title={__("Certificates")} />
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold mb-5">
                    {__("certificates")}
                </h1>
                {Object.keys(certificates).length !== 0 ? (
                    <div className="flex flex-wrap -mx-2">
                        {certificates.map((certificate) => (
                            <div className="px-2 mb-4" key={certificate.id}>
                                <div className="bg-kblue-200 rounded-lg shadow-lg p-5">
                                    <a
                                        href={route(
                                            "certificate",
                                            certificate.id
                                        )}
                                    >
                                        <div className="flex h-36 w-52 bg-kblue-300 rounded-lg text-center justify-center items-center">
                                            <img
                                                src={
                                                    certificate.media[0]
                                                        .original_url
                                                }
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
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
        </AppLayout>
    );
};

export default CertificatesPage;
