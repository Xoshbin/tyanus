import React, { useState } from "react";
import moment from "moment";
import { __ } from "@/Libs/Lang";

const ScreenTooltip = ({ screen, exercise, index, locale }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const showTooltip = () => {
        setIsTooltipVisible(true);
    };

    const hideTooltip = () => {
        setIsTooltipVisible(false);
    };

    console.log("screen.hasStar" + screen.hasStar);

    return (
        <button
            onClick={() => {
                if (screen.hasStar) {
                    goToLesson(screen.id);
                }
            }}
            className={`flex-auto bg-kblue-500 w-1 h-2 border ${
                !screen.hasStar ? "disabled:bg-kblue-300" : ""
            }  ${index === 0 ? "rounded-bl-md" : ""} ${
                index === exercise.screens.length - 1 ? "rounded-br-md" : ""
            }  ${exercise.isExerciseFinished ? "border-kblue-400" : ""}`}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            <div className="relative mx-2 bottom-12 transform -translate-y-10">
                {isTooltipVisible && (
                    <div
                        className={`flex w-64 flex-col bg-kblue-900 text-kblue-50 text-xs rounded py-1 px-4`}
                    >
                        <div className="mb-1 text-kblue-50 text-lg">
                            {screen.title}
                        </div>
                        <div
                            className={`flex ${
                                locale === "ckb" ? "flex-row-reverse" : ""
                            } space-x-4 text-kblue-200`}
                        >
                            <p>
                                {moment
                                    .duration(screen.time, "milliseconds")
                                    .locale("ku")
                                    .humanize()}
                            </p>
                            <p>
                                {locale === "ckb" ? "دروستی" : "Accuracy"}: %{" "}
                                {screen.accuracy_percentage} /
                            </p>
                            <p>
                                {locale === "ckb" ? "خێرایی" : "Speed"}:{" "}
                                {screen.typing_speed}{" "}
                                {locale === "ckb" ? "ولخ" : "WPM"} /
                            </p>
                        </div>
                        <div
                            className={`flex ${
                                locale === "ckb" ? "flex-row-reverse" : ""
                            } space-x-1 justify-center text-kyellow-300 mt-1`}
                        >
                            {Array.from({ length: screen.starsEarned }).map(
                                (_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-star-filled"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                                            stroke-width="0"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                )
                            )}
                        </div>
                        <svg
                            className="absolute text-kblue-700 h-2 w-full left-0 top-full"
                            x="0px"
                            y="0px"
                            viewBox="0 0 255 255"
                            xmlSpace="preserve"
                        >
                            <polygon
                                className="fill-current"
                                points="0,0 127.5,127.5 255,0"
                            />
                        </svg>
                    </div>
                )}
            </div>
        </button>
    );
};

export default ScreenTooltip;
