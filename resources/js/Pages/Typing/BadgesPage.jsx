import React from "react";
import Badge from "@/Components/Typing/Badge";
import AppLayout from "@/Layouts/AppLayout";
import { __ } from "@/Libs/Lang";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Typing/Footer";

const BadgesPage = ({ badges }) => {
    return (
        <AppLayout>
            <Head title={__("Badges")} footer={<Footer />} />
            <div class="container mx-auto py-10">
                <h1 class="text-3xl font-bold mb-5">{__("badges")}</h1>
                {Object.keys(badges).length !== 0 ? (
                    <div class="flex flex-wrap -mx-2">
                        {badges.map((badge) => (
                            <div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                                <div class="bg-kblue-200 rounded-lg shadow-lg p-5">
                                    <div class="flex items-center justify-between mb-4">
                                        <h2 class="text-lg font-bold text-gray-800">
                                            {badge.name}
                                        </h2>
                                        <span class="bg-blue-500 text-kblue-200 text-sm font-medium px-2 py-1 rounded-full">
                                            New
                                        </span>
                                    </div>
                                    <Badge
                                        key={badge.id}
                                        badgeName={badge.name}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-xl mt-24">
                        <p>
                            {__(
                                "You haven't earned any badges yet. Please engage in some gameplay and return later."
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

export default BadgesPage;
