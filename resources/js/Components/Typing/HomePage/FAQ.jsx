import React from "react";

const FAQ = () => {
    return (
        <section className="bg-kblue-100 mt-20 rounded-lg">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
                    {/* Your localized content */}
                </h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                                {/* Your localized content */}
                            </h3>
                            <p className="text-gray-700">
                                {/* Your localized content */}
                            </p>
                        </div>
                        {/* Add more similar content blocks */}
                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                                {/* Your localized content */}
                            </h3>
                            <p className="text-gray-700">
                                {/* Your localized content */}
                            </p>
                        </div>
                        {/* Add more similar content blocks */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
