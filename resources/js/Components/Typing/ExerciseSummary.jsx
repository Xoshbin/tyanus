import React from "react";

const ExerciseSummary = ({
    authid,
    starsEarned,
    finishedTyping,
    speed,
    accuracy,
    time,
}) => {
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
                {`${starsEarned} Stars earned out of 3`}
            </div>
            {finishedTyping && (
                <div className="w-full bg-gradient-to-r from-kblue-300 to-kblue-400 rounded-lg mt-4 p-4 text-right">
                    <p>{`Speed: ${speed} Words per minute`}</p>
                    <p>{`Accuracy: ${accuracy}%`}</p>
                    <p>{`Time: ${time}`}</p>
                </div>
            )}
            <div className="mt-4">
                {authid ? (
                    <button
                        type="button"
                        className={`inline-flex w-full justify-center rounded-md ${
                            starsEarned === 0
                                ? "bg-kblue-100"
                                : "bg-green-600 hover:bg-green-500"
                        } px-3 py-2 text-sm font-semibold text-kblue shadow-sm sm:ml-3 sm:w-auto`}
                        disabled={starsEarned === 0}
                    >
                        {`Next`}
                    </button>
                ) : (
                    <a
                        href="/login"
                        className="self-center text-center ml-8 bg-yellow-300 pl-4 pr-4 pt-1 pb-1"
                    >
                        {`Please login to save your progress`}
                    </a>
                )}
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-kblue-50 px-3 py-2 text-sm font-semibold text-kblue-900 shadow-sm ring-1 ring-inset ring-kblue-300 hover:bg-kblue-50 sm:mt-0 sm:w-auto"
                >
                    {`Repeat`}
                </button>
            </div>
        </div>
    );
};

export default ExerciseSummary;
