import React from "react";
import { __ } from "@/Libs/Lang";

export default function Hero({ locale }) {
    return (
        <div className="flex flex-row px-10 md:px-0">
            <div className="md:w-1/3 hidden md:flex animate-jump">
                <img src="img/homepage/typing-pana.svg" />
            </div>

            <div className="w-full md:w-2/3 self-center space-y-8">
                <div className="space-y-4 group">
                    <div className="flex @if (app()->getLocale() == 'ckb') space-x-reverse @endif space-x-4">
                        <h1 className="text-3xl text-kyellow-600 font-semibold antialiased">
                            {__(
                                "Master the Art of Typing: 300+ Lessons Await!"
                            )}
                        </h1>
                        <img
                            src="img/homepage/rocket.svg"
                            className="h-8 @if (app()->getLocale() == 'ckb') scale-x-[-1] @endif"
                            alt=""
                        />
                    </div>
                    <h2 className="text-3xl text-kblue-600 font-semibold antialiased writer-text">
                        {__("Type Faster, Work Smarter!")}
                    </h2>
                    <p className="text-xl text-kblue-600 font-semibold leading-relaxed antialiased">
                        {__("Start your journey to typing excellence.")}
                    </p>
                    <div className="flex flex-row">
                        <p className="text-xl text-kblue-600 font-semibold leading-relaxed antialiased	">
                            {__("Discover the joy of touch typing.")}
                        </p>
                        <img
                            src="img/homepage/heart-fun.svg"
                            className="h-8 hidden group-hover:flex"
                            alt=""
                        />
                    </div>
                </div>

                <a
                    href={route("lessons")}
                    className="relative inline-block text-lg group"
                >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-kyellow-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-kyellow-400 group-hover:-rotate-180 ease"></span>
                        <span className="relative flex items-center @if (app()->getLocale() == 'ckb') space-x-reverse @endif space-x-4">
                            <span className="">{__("Start now")}</span>
                            <span className="p-1 rounded-md bg-yellow-400 mr-4">
                                {locale === "ckb" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-arrow-big-left-lines-filled"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h2a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-2 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M18 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-arrow-big-right-lines-filled"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                )}
                            </span>
                        </span>
                    </span>
                    <span
                        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-lg"
                    ></span>
                </a>
            </div>
        </div>
    );
}
