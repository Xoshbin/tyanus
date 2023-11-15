import Badge from "../../Components/Typing/Badge";
import { __ } from "@/Libs/Lang";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import AppLayout from "@/Layouts/AppLayout";
import { usePage, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Typing/Footer";

const BadgePage = ({
    exerciseName,
    starsEarned,
    exerciseTotalStars,
    avgSpeed,
    avgAccuraccy,
    sumTime,
    nextScreen,
}) => {
    const { auth } = usePage().props;
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const canvasStyles = {
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
    };

    function getAnimationSettings(originXA, originXB) {
        return {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 150,
            origin: {
                x: randomInRange(originXA, originXB),
                y: Math.random() - 0.2,
            },
        };
    }

    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
            refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
        }
    }, []);

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 400));
        }
    }, [intervalId, nextTickAnimation]);

    useEffect(() => {
        startAnimation();
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);
    return (
        <AppLayout user={auth ? auth.user : undefined}>
            <Head title={exerciseName} footer={<Footer />} />
            <div className="space-y-4 w-7/12 mx-auto">
                <ReactCanvasConfetti
                    refConfetti={getInstance}
                    style={canvasStyles}
                />

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
                        <Link
                            href={route("lesson", nextScreen.url)}
                            as="button"
                            className="inline-flex w-full mt-8 justify-center rounded-md text-kblue-50 disabled:bg-kblue-100 bg-kblue-600 hover:bg-kblue-500 px-3 py-2 text-sm font-semibold text-kblue shadow-sm sm:ml-3 sm:w-auto"
                        >
                            {__("Next")}
                        </Link>
                        <div className="sharethis-inline-share-buttons"></div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default BadgePage;
