import React from "react";
import { usePage, Link } from "@inertiajs/react";
import moment from "moment";
import humanizeDuration from "humanize-duration";
import { __ } from "@/Libs/Lang";
import "moment/locale/ku"; // Import the Kurdish locale
import StarIcon from "@/Components/Typing/StarIcon";
const ExerciseSummary = ({
    starsEarned,
    finishedTyping,
    speed,
    accuracy,
    time,
    screen,
    nextScreen,
}) => {
    const { auth } = usePage().props;
    const { locale } = usePage().props;

    const duration = moment.duration(time, "seconds");

    const redoLesson = () => {
        // Perform a visit to the current page's URL to reload it.
        window.location.reload();
    };
    return (
        <div className="m-4">
            {finishedTyping && (
                <div className="bg-gradient-to-r from-kblue-600 to-kblue-400 p-8 rounded-lg shadow-lg text-white">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">
                            {__("Lesson Results")}
                        </h2>
                        <div className="5 flex items-center gap-0">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <StarIcon
                                    key={index}
                                    active={index < starsEarned}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-6 h-6 text-kyellow-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                                <p className="text-xl font-semibold">
                                    {__("Speed")}
                                </p>
                            </div>
                            <p className="text-3xl font-bold">
                                <span>{parseInt(speed)}</span>{" "}
                                {__("Words per minute")}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                {accuracy >= 75 ? (
                                    <svg
                                        className="w-6 h-6 text-kyellow-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6 text-kyellow-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                )}
                                <p className="text-xl font-semibold">
                                    {__("Accuracy")}
                                </p>
                            </div>
                            <p className="text-3xl font-bold">
                                <span>{parseInt(accuracy)}%</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center space-x-2">
                            <p className="text-xl font-semibold">
                                {__("Time")}
                            </p>
                        </div>
                        <p className="text-3xl font-bold">
                            {humanizeDuration(duration.asMilliseconds(), {
                                units: ["d", "h", "m", "s"],
                                largest: 2,
                                language: locale === "ckb" ? "ckb" : "en",
                                fallbacks: locale === "ckb" ? ["ku"] : ["en"],
                            })}
                        </p>
                    </div>
                </div>
            )}
            <div className="mt-4">
                {screen.content_type === "letters" ? (
                    auth ? (
                        <Link
                            href={route("lesson", nextScreen.url)}
                            as="button"
                            className={`inline-flex w-full justify-center rounded-md text-white bg-kblue-600 hover:bg-kblue-500 px-3 py-2 text-sm font-semibold text-kblue shadow-sm sm:ml-3 sm:w-auto`}
                            disabled={starsEarned === 0}
                        >
                            {__("Next")}
                        </Link>
                    ) : (
                        <Link
                            href={route("login")}
                            as="button"
                            className={`inline-flex w-full justify-center rounded-md text-white bg-kblue-600 hover:bg-kblue-500 px-3 py-2 text-sm font-semibold text-kblue shadow-sm sm:ml-3 sm:w-auto`}
                            disabled={starsEarned === 0}
                        >
                            {__("Please login to save your progress")}
                        </Link>
                    )
                ) : (
                    <></>
                )}
                {screen.content_type === "letters" ? (
                    <button
                        onClick={redoLesson}
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-kblue-50 px-3 py-2 text-sm font-semibold text-kblue-900 shadow-sm ring-1 ring-inset ring-kblue-300 hover:bg-kblue-50 sm:mt-0 sm:w-auto"
                    >
                        {__("Repeat")}
                    </button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default ExerciseSummary;
