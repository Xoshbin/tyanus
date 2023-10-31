import React from "react";
import Badge from "../../Components/Typing/Badge";
import { __ } from "@/Libs/Lang";
const BadgePage = ({
    exerciseName,
    starsEarned,
    exerciseTotalStars,
    avgSpeed,
    avgAccuraccy,
    sumTime,
    nextScreen,
}) => {
    // Replace the Carbon time formatting with a suitable alternative in React

    return (
        <div className="space-y-4 w-7/12 mx-auto">
            <div className="flex flex-col bg-kblue-300 justify-between items-center text-center rounded-md px-4 py-8">
                <div className="flex flex-col">
                    <div className="text-4xl font-black">
                        {__("Keep going!")}
                    </div>
                    <div className="text-2xl font-extrabold">
                        {__("Successfully completed the exercise")}" (
                        {exerciseName}) "
                        {__("Congratulations on getting a badge!")}
                    </div>
                    <div className="text-4xl font-black justify-between items-center">
                        <Badge badgeName={exerciseName} />
                    </div>
                </div>
                <div className="text-lg">
                    {starsEarned} {__("You got")} {__("stars out of")}{" "}
                    {exerciseTotalStars}
                </div>
                {/* Add your logic for the star progress component here */}
                <div className="px-8 py-1 my-2 text-2xl">
                    {__("Your lesson average statistics")}
                </div>
                <div className="flex flex-row w-full justify-center bg-kblue-50">
                    {/* Replace the SVG icons with their React components */}
                    <div className="flex flex-row border-y-2 w-4/12 justify-center items-center border-kblue-400 px-4 py-1">
                        {__("Speed")}: {parseInt(avgSpeed)}{" "}
                        {__("Words per minute")}
                    </div>
                    <div className="flex flex-row border-y-2 w-4/12 justify-center items-center border-kblue-400 px-4 py-1">
                        {__("Accuracy")}: {parseInt(avgAccuraccy)}%
                    </div>
                    <div className="flex flex-row border-y-2 w-4/12 justify-center items-center border-kblue-400 px-4 py-1">
                        {__("Time")}: {sumTime}
                    </div>
                </div>
                {/* Add the rest of your component content */}
                <div className="flex flex-row space-x-4">
                    <button
                        onClick={nextScreen}
                        type="button"
                        className="your-button-styles"
                        disabled={starsEarned === 0}
                    >
                        {__("Next")}
                    </button>
                    <div className="sharethis-inline-share-buttons"></div>
                </div>
            </div>
        </div>
    );
};

export default BadgePage;
