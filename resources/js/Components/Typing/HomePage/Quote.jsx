import React from 'react';

const Quote = () => {
    return (
        <div className="mx-auto w-full max-w-screen-lg px-10 mt-20 lg:px-5">
            <div className={`flex flex-col ${/* conditional classes based on locale */} items-center justify-center gap-10 lg:justify-between`}>
                <div style={{ opacity: 1, visibility: 'inherit' }} className="text-kblue-600 text-center">

                    <div className="text-3xl font-semibold">
                        <span className="font-extrabold">{/* Your localized content */}</span>
                    </div>

                    <div className="pt-7 font-semibold text-dolphin">
                        {/* Your localized content */}
                    </div>
                </div>

                <div className="group/mockup relative grid w-full border-8 border-kyellow-300 border-double p-2.5 bg-kyellow-100"
                    style={{ opacity: 1, visibility: 'inherit' }}>
                    {app()->getLocale() === 'ckb' ? (
                        <img src={/* your image source */} alt="Tyanus demo" className="w-full" />
                    ) : (
                        <img src={/* your image source */} alt="Tyanus demo" className="w-full" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quote;
