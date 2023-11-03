import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import { __ } from "@/Libs/Lang";
import StarIcon from "@/Components/Typing/StarIcon";

export function ExerciseCard({ screen }) {
    const { locale } = usePage().props;

    return (
        <Card
            color="transparent"
            shadow={false}
            className={`w-60 p-4 ${
                screen.time >= 1 ? "bg-kblue-400" : "bg-kblue-200"
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
                        <Typography variant="h5" color="blue-gray">
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
                <div className={`flex flex-col`}>
                    <Typography variant="h6">
                        {moment
                            .duration(screen.time, "milliseconds")
                            .locale("ku")
                            .humanize()}
                    </Typography>
                    <Typography variant="h6">
                        {locale === "ckb" ? "دروستی" : "Accuracy"}: %{" "}
                        {screen.accuracyPercentage}
                    </Typography>
                    <Typography variant="h6">
                        {locale === "ckb" ? "خێرایی" : "Speed"}:{" "}
                        {screen.typingSpeed} {locale === "ckb" ? "ولخ" : "WPM"}{" "}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}
