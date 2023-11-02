import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import moment from "moment";
import { __ } from "@/Libs/Lang";

export default function StarIcon({ active }) {
    return (
        <div>
            {active ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h5 w-5 icon icon-tabler icon-tabler-star-filled text-yellow-700"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                        strokeWidth="0"
                        fill="currentColor"
                    ></path>
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h5 w-5 icon icon-tabler icon-tabler-star text-yellow-700"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
            )}
        </div>
    );
}

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
            <CardBody className="mb-6 p-0">
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
