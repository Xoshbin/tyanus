import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProgressHeader from "@/Components/Typing/ProgressHeader/ProgressHeader";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Lessons({
    auth,
    locale,
    daily_time,
    sumTime,
    avgSpeed,
    avgAccuracy,
    todaySumTime,
}) {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <ProgressHeader
                    locale={locale}
                    daily_time={daily_time}
                    sumTime={sumTime}
                    avgSpeed={avgSpeed}
                    avgAccuracy={avgAccuracy}
                    todaySumTime={todaySumTime}
                ></ProgressHeader>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div
                    className={` ${
                        locale === "ckb" ? "" : ""
                    } max-w-7xl mx-auto sm:px-6 lg:px-8`}
                >
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav
                            className="flex space-x-2"
                            aria-label="Tabs"
                            role="tablist"
                        >
                            <button
                                onClick={() => setActiveTab("tab1")}
                                type="button"
                                className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 active"
                                id="card-type-tab-item-1"
                                data-hs-tab="#card-type-tab-1"
                                aria-controls="card-type-tab-1"
                                role="tab"
                            >
                                Tab 1
                            </button>
                            <button
                                onClick={() => setActiveTab("tab2")}
                                type="button"
                                className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                id="card-type-tab-item-2"
                                data-hs-tab="#card-type-tab-2"
                                aria-controls="card-type-tab-2"
                                role="tab"
                            >
                                Tab 2
                            </button>
                            <button
                                onClick={() => setActiveTab("tab3")}
                                type="button"
                                className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                id="card-type-tab-item-3"
                                data-hs-tab="#card-type-tab-3"
                                aria-controls="card-type-tab-3"
                                role="tab"
                            >
                                Tab 3
                            </button>
                        </nav>
                    </div>

                    <div className="mt-3">
                        {activeTab === "tab1" && (
                            <p>This is the content for Tab 1.</p>
                        )}
                        {activeTab === "tab2" && (
                            <p>This is the content for Tab 2.</p>
                        )}
                        {activeTab === "tab3" && (
                            <p>This is the content for Tab 3.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
