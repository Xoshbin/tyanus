import { __ } from "@/Libs/Lang";
import moment from "moment";

export default function ProgressHeader({
    locale,
    sumTime,
    avgAccuracy,
    avgSpeed,
    todaySumTime,
    daily_time,
}) {
    const duration = moment.duration(sumTime, "seconds");
    moment.updateLocale(locale, null); // To update the locale dynamically
    const sumTimeHuman = duration.humanize();

    console.log("locale " + locale);

    /* Determine the locale condition here */

    return (
        <div
            className={`flex ${
                locale === "ckb" ? "flex-row-reverse justify-end" : ""
            } h-4 my-2`}
        >
            <div
                className={`hidden sm:flex ${
                    locale === "ckb" ? "flex-row-reverse mr-40" : ""
                } space-x-8 ml-40`}
            >
                {/* {-- Time --} */}
                <div
                    className={`flex ${
                        locale === "ckb" ? "flex-row-reverse" : ""
                    } items-center space-x-2`}
                >
                    <div className="flex flex-col items-start">
                        <div className="flex text-kblue-800 text-sm">
                            {__("Typing Time")}
                        </div>
                        <div className="flex text-base font-bold text-kblue-900">
                            {sumTimeHuman}
                        </div>
                    </div>
                    <div className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-clock"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#00b341"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 7v5l3 3" />
                        </svg>
                    </div>
                </div>
                {/* {-- Accuracy --} */}
                <div
                    className={`flex ${
                        locale === "ckb" ? "flex-row-reverse" : ""
                    } items-center space-x-2`}
                >
                    <div className="flex flex-col items-start">
                        <div className="flex text-kblue-800 text-sm">
                            {__("Avg. Acc.")}
                        </div>
                        <div className="flex text-base font-bold text-kblue-900">
                            %{parseInt(avgAccuracy)}
                        </div>
                    </div>
                    <div className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-target"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#fd0061"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        </svg>
                    </div>
                </div>
                {/* {-- Speed --} */}
                <div
                    className={`flex ${
                        locale === "ckb" ? "flex-row-reverse" : ""
                    } items-center space-x-2`}
                >
                    <div className="flex flex-col items-start">
                        <div className="flex text-kblue-800 text-sm">
                            {__("Avg. Speed")}
                        </div>
                        <div className="flex text-base font-bold text-kblue-900">
                            {parseInt(avgSpeed)} {__("WPM")}{" "}
                        </div>
                    </div>
                    <div className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-dashboard"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#ffbf00"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M13.45 11.55l2.05 -2.05" />
                            <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex flex-col-reverse absolute top-16 items-center space-y-1 justify-center w-28 h-28 overflow-hidden bg-kblue-50 rounded-full border-8 border-kblue-100">
                <div
                    className={`flex ${
                        locale === "ckb" ? "flex-row-reverse" : ""
                    } space-x-1 font-medium text-gray-600 text-xs align-middle`}
                >
                    <div className="flex">{daily_time}</div>
                    {/* <div
                        className="flex"
                        x-data="{ tooltip: false }"
                        x-on:mouseover="tooltip = true"
                        x-on:mouseleave="tooltip = false"
                    >
                        <div
                            className="w-full fixed mx-2 bottom-0 transform -translate-y-10 top-32"
                            x-show="tooltip"
                        >
                            <div className="flex w-64 flex-col bg-kblue-900 text-kblue-50 text-xs rounded-md py-2 px-4 space-y-2 ">
                                <div className="mb-1 text-kblue-50 text-lg font-extrabold">
                                    {__("Set your daily goal")}
                                </div>
                                <div className="flex flex-col space-x-1 justify-center">
                                    <div className="flex flex-row justify-center text-kblue-50 mt-1 align-middle items-center space-x-2">
                                        <p>{__("Type daily for")}</p>
                                        <select
                                            wire:model=""
                                            className="block w-10 px-0 text-sm text-kblue-50 bg-transparent border-0 border-b-2 border-kyellow-200 appearance-none focus:outline-none focus:ring-0 peer"
                                        >
                                            <option value="15" selected>
                                                15
                                            </option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                            <option value="60">60</option>
                                            <option value="75">75</option>
                                        </select>
                                        <p>{__("Minutes")}</p>
                                    </div>
                                </div>
                                <x-button
                                    wire:click="updateTime(14)"
                                    className="px-3 py-2 w-28 text-sm font-medium text-center space-x-2 inline-flex items-center font-notosans text-kblue-900 bg-kyellow-500 rounded-lg hover:bg-kblue-200 focus:ring-4 focus:outline-none focus:ring-kblue-500"
                                >
                                    {__("Update")}
                                </x-button>
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-settings"
                            width="14"
                            height="14"
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
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        </svg>
                    </div> */}
                </div>
                <span className="font-black text-kblue-800 text-lg">
                    {todaySumTime}
                </span>
                <span className="font-black text-kyellow-500 text-sm">
                    {__("DAILY GOAL")}
                </span>
            </div>
        </div>
    );
}
