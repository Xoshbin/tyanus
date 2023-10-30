import React from "react";
import { usePage, Link } from "@inertiajs/react";
import moment from "moment";
import { __ } from "@/Libs/Lang";
import "moment/locale/ku"; // Import the Kurdish locale

const ExerciseSummary = ({
    totalStars,
    starsEarned,
    finishedTyping,
    speed,
    accuracy,
    time,
    screen,
    nextScreen,
}) => {
    const { auth } = usePage().props;
    moment.locale("ku");

    const redoLesson = () => {
        // Perform a visit to the current page's URL to reload it.
        window.location.reload();
    };
    return (
        <div className="m-4">
            {starsEarned >= 1 && (
                <div className="flex justify-center animate-pulse ease-in-out">
                    <img src="/img/star.png" className="w-36" alt="star" />
                </div>
            )}
            <div className="flex flex-row justify-between">
                {starsEarned >= 2 && (
                    <div className="flex animate-pulse ease-in-out">
                        <img src="/img/star.png" className="w-36" alt="star" />
                    </div>
                )}
                {starsEarned >= 3 && (
                    <div className="flex animate-pulse ease-in-out">
                        <img src="/img/star.png" className="w-36" alt="star" />
                    </div>
                )}
            </div>
            <div className="col-start-1 col-end-7 text-center">
                {Math.floor(starsEarned)} {__(`Stars earned out of 3`)}
            </div>
            {finishedTyping && (
                <div className="w-full bg-gradient-to-r from-kblue-300 to-kblue-400 rounded-lg mt-4 p-4 text-right">
                    <p>
                        {__("Speed")}: <span>{speed}</span>{" "}
                        {__("Words per minute")}
                    </p>
                    <p>
                        {__("Accuracy")}: <span>{accuracy}%</span>
                    </p>
                    <p>
                        {__("Time")}:
                        {moment.duration(time, "seconds").humanize()}
                    </p>
                </div>
            )}
            <div className="mt-4">
                {auth ? (
                    <Link
                        href={`/lesson/${nextScreen.url}`}
                        as="button"
                        className={`inline-flex w-full justify-center rounded-md ${
                            starsEarned === 0
                                ? "bg-kblue-100"
                                : "bg-green-600 hover:bg-green-500"
                        } px-3 py-2 text-sm font-semibold text-kblue shadow-sm sm:ml-3 sm:w-auto`}
                        disabled={starsEarned === 0}
                    >
                        {__("Next")}
                    </Link>
                ) : (
                    <Link
                        href="login"
                        as="button"
                        className={`inline-flex w-full justify-center rounded-md ${
                            starsEarned === 0
                                ? "bg-kblue-100"
                                : "bg-green-600 hover:bg-green-500"
                        } px-3 py-2 text-sm font-semibold text-kblue shadow-sm sm:ml-3 sm:w-auto`}
                        disabled={starsEarned === 0}
                    >
                        {__("Please login to save your progress")}
                    </Link>
                )}
                <button
                    onClick={redoLesson}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-kblue-50 px-3 py-2 text-sm font-semibold text-kblue-900 shadow-sm ring-1 ring-inset ring-kblue-300 hover:bg-kblue-50 sm:mt-0 sm:w-auto"
                >
                    {__("Repeat")}
                </button>
            </div>
        </div>
    );
};

export default ExerciseSummary;
