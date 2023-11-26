import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { __ } from "@/Libs/Lang";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Typing/Footer";
import BubbleChart from "@/Components/Typing/stats/BubbleChart";
import LineChart from "../../Components/Typing/Stats/LineChart";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const StatsPage = ({ stats }) => {
    return (
        <AppLayout footer={<Footer />}>
            <Head title={__("Badges")} />
            <div className="container mx-auto py-10">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    {__("badges")}
                </Typography>
                {Object.keys(stats).length !== 0 ? (
                    <div className="flex flex-col space-y-8">
                        <Card className="mt-6">
                            <CardBody>
                                <LineChart stats={stats} />
                            </CardBody>
                        </Card>
                        <Card className="mt-6">
                            <CardBody>
                                <BubbleChart stats={stats} />
                            </CardBody>
                        </Card>
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

export default StatsPage;
