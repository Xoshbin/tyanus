import React from "react";
import { Link } from "@inertiajs/react";
import { __ } from "@/Libs/Lang";

const Show = ({ locale }) => {
    return (
        <div className="mx-auto w-full max-w-screen-lg px-10 mt-20 lg:px-5">
            <div
                className={`flex flex-col ${
                    locale === "ckb" ? "md:space-x-reverse" : ""
                } md:space-x-8 items-center justify-center gap-20 md:flex-row md:gap-10 lg:justify-between`}
            >
                <div className="text-kblue-600">
                    <div className="text-3xl font-semibold">
                        <span className="font-extrabold">
                            {__("300+ Lessons, 1 Goal: Typing Mastery!")}
                        </span>
                    </div>

                    <div className="min-w-[18rem] max-w-[22rem] pt-7 font-semibold text-dolphin">
                        {__(
                            "Join our community of learners and embark on a journey to become a typing expert. We've got the lessons; you bring the ambition!"
                        )}
                    </div>

                    <div
                        className={`flex flex-wrap items-center gap-5 pt-10 ${
                            locale === "ckb" ? "justify-end" : ""
                        }`}
                        dir={locale === "ckb" ? "ltr" : undefined}
                    >
                        <Link
                            href={route("lessons")}
                            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-kyellow-400 text-kyellow-400"
                        >
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-kyellow-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-kyellow-400 transition duration-300 group-hover:text-white ease">
                                {__("Try it now")}
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="group/mockup relative grid w-full max-w-lg">
                    <div className="w-[95%] z-10 self-center justify-self-center overflow-hidden rounded-bl-xl rounded-br-xl rounded-tl-lg rounded-tr-lg shadow-lg shadow-black/5 transition-all duration-1000 [grid-area:1/-1] [transform-style:preserve-3d] group-hover/mockup:[transform:perspective(1500px)_rotateY(0deg)_rotateX(0deg)_translateZ(0)] motion-reduce:transition-none motion-reduce:group-hover/mockup:transform-none md:[transform:perspective(1500px)_rotateY(-10deg)_rotateX(5deg)_translateZ(0)]">
                        <div className="flex h-6 w-full items-center gap-5 bg-[#262B2F]/80 px-3">
                            <div className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                            </div>
                            <div className="flex-1 pr-10 text-center text-[0.6rem] text-white/40">
                                tyanus.com
                            </div>
                        </div>

                        <img
                            src="img/homepage/show.png"
                            alt="Tyanus demo"
                            className="w-full"
                        />
                    </div>

                    <div className="relative h-[120%] w-full self-center justify-self-center rounded-[3rem] bg-gradient-to-bl from-kyellow-100 to-transparent [grid-area:1/-1] md:left-10 md:rotate-2 md:justify-self-start lg:h-[25rem] lg:w-[110%]"></div>
                </div>
            </div>
        </div>
    );
};

export default Show;
