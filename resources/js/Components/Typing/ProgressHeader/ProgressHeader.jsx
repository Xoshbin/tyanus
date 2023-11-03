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
        </div>
    );
}
