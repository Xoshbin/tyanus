import React from "react";
import { __ } from "@/Libs/Lang";

const Quote = ({ locale }) => {
    return (
        <div className="mx-auto w-full max-w-screen-lg px-10 mt-20 lg:px-5">
            <div className="flex flex-col @if (app()->getLocale() == 'ckb') md:space-x-reverse @endif items-center justify-center gap-10  lg:justify-between">
                <div className="text-kblue-600 text-center">
                    <div className="text-3xl font-semibold">
                        <span className="font-extrabold">
                            {__("More Than Typing: It's a Journey of Wisdom!")}
                        </span>
                    </div>

                    <div className="pt-7 font-semibold text-dolphin">
                        {__(
                            "Explore the world of touch typing with enriching content."
                        )}
                    </div>
                </div>

                <div className="group/mockup relative grid w-full border-8 border-kyellow-300 border-double p-2.5 bg-kyellow-100">
                    {locale === "ckb" ? (
                        <img
                            src="img/homepage/ku-quote.png"
                            alt="Tyanus demo"
                            className="w-full"
                        />
                    ) : (
                        <img
                            src="img/homepage/en-quote.png"
                            alt="Tyanus demo"
                            className="w-full"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quote;
