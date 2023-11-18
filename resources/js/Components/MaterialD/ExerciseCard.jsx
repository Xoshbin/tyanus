import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import humanizeDuration from "humanize-duration";
import { __ } from "@/Libs/Lang";
import StarIcon from "@/Components/Typing/StarIcon";

export function ExerciseCard({ screen }) {
    const { locale } = usePage().props;
    const duration = moment.duration(screen.time, "seconds");

    return (
        <Card
            color="transparent"
            shadow={false}
            className={`w-60 p-4 ${
                screen.time <= 1
                    ? "bg-gradient-to-l from-kblue-500 to-kblue-600"
                    : "bg-gradient-to-l from-kblue-300 to-kblue-400"
            }`}
        >
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex flex-col items-center justify-between">
                        <Typography
                            variant="h5"
                            className={`${
                                screen.time <= 1
                                    ? "text-white"
                                    : "text-neutral-600"
                            }`}
                        >
                            {screen.title}
                        </Typography>
                        <div className="5 flex items-center gap-0">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <StarIcon
                                    key={index}
                                    active={index < screen.starsEarned}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="flex mb-0 p-0 justify-between items-end">
                <div
                    className={`flex flex-col ${
                        screen.time <= 1 ? "text-white" : "text-neutral-600"
                    } `}
                >
                    <Typography variant="h6">
                        {humanizeDuration(duration, {
                            units: ["h", "m", "s"],
                            maxDecimalPoints: 0,
                            largest: 1,
                            language: locale === "ckb" ? "ckb" : "en",
                            fallbacks: locale === "ckb" ? ["ku"] : ["en"],
                        })}
                    </Typography>
                    <Typography variant="h6">
                        {locale === "ckb" ? "دروستی" : "Accuracy"}: %{" "}
                        {parseInt(screen.accuracyPercentage)}
                    </Typography>
                    <Typography variant="h6">
                        {locale === "ckb" ? "خێرایی" : "Speed"}:{" "}
                        {parseInt(screen.typingSpeed)}{" "}
                        {locale === "ckb" ? "ولخ" : "WPM"}{" "}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}
