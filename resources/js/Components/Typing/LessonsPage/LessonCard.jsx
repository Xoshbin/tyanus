import React, { useState, useEffect } from "react";
import axios from "axios";
import { __ } from "@/Libs/Lang";

export default function LessonCard({ lessonId, exerciseId }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Define your API endpoint
        const endpoint =
            "/api/lessoncard/" + { lessonId } + "/" + { exerciseId };

        axios
            .get(endpoint)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div
            className="lg:container max-w-7xl mx-auto block rounded-lg @if ($isExerciseFinished) bg-gradient-to-r from-kblue-700 to-kblue-400 text-kblue-100 @else text-kblue-800 bg-gradient-to-r from-kblue-200
to-kblue-50 @endif pt-6 pb-1 px-1 space-y-4"
        >
            <div className="flex flex-col px-5 space-y-2">
                <div className="flex flex-row-reverse">
                    <div className="flex w-4/12 justify-end">
                        {data.isExerciseFinishedc === true && (
                            <a href="{ route('lesson', $exercise->screens->first()?->id) }">
                                <x-button className="px-3 py-2 text-sm font-medium text-center space-x-2 inline-flex items-center text-kblue-700 bg-kblue-50 rounded-lg hover:bg-kblue-200 focus:ring-4 focus:outline-none focus:ring-kblue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-repeat text-kblue-900"
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
                                        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                                        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                                    </svg>
                                    <div className="text-kblue-900 font-notosans">
                                        {__("Restart")}
                                    </div>
                                </x-button>
                            </a>
                        )}
                        {data.isHalfwayThroughExercise ? (
                            <a href="{ route('lesson', $screenToContinue) }">
                                <x-button className="px-3 py-2 text-sm font-medium text-center space-x-2 inline-flex items-center text-kblue-900 bg-kyellow-300 rounded-lg hover:bg-kyellow-400 focus:ring-4 focus:outline-none focus:ring-kyellow-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="@if (app()->getLocale() == 'ckb') scale-x-[-1] @endif icon icon-tabler text-kblue-900 icon-tabler-player-play-filled"
                                        width="18"
                                        height="18"
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
                                            d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div className="text-kblue-900 font-notosans">
                                        {__("Continue")}
                                    </div>
                                </x-button>
                            </a>
                        ) : (
                            <a href="{ route('lesson', $exercise->screens->first()?->id) }">
                                <x-button className="px-3 py-2 text-sm font-medium text-center space-x-2 inline-flex items-center text-kblue-900 bg-kyellow-300 rounded-lg hover:bg-kyellow-400 focus:ring-4 focus:outline-none focus:ring-kyellow-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="@if (app()->getLocale() == 'ckb') scale-x-[-1] @endif icon icon-tabler text-kblue-900 icon-tabler-player-play-filled"
                                        width="18"
                                        height="18"
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
                                            d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                            strokeWidth="0"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div className="text-kblue-900 font-notosans">
                                        {__("Start")}
                                    </div>
                                </x-button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex @if (app()->getLocale() == 'ckb') flex-row-reverse @endif w-full space-x-1"></div>
        </div>
    );
}
