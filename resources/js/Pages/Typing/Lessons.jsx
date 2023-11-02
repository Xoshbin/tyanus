import AppLayout from "@/Layouts/AppLayout";
import ProgressHeader from "@/Components/Typing/ProgressHeader/ProgressHeader";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { __ } from "@/Libs/Lang";
import PrimaryButton from "../../Components/PrimaryButton";
import moment from "moment";
import ScreenTooltip from "@/Components/Typing/LessonsPage/ScreenTooltip";
import ExerciseStars from "../../Components/Typing/LessonsPage/ExerciseStars";
import TabsHorizontal from "@/Components/MaterialD/TabsHorizontal";

export default function Lessons({
    lessons,
    daily_time,
    sumTime,
    avgSpeed,
    avgAccuracy,
    todaySumTime,
}) {
    const { auth } = usePage().props;
    const { locale } = usePage().props;

    return (
        <AppLayout
            user={auth ? auth.user : undefined}
            locale={locale}
            header={
                <ProgressHeader
                    locale={locale}
                    daily_time={daily_time}
                    sumTime={sumTime}
                    avgSpeed={avgSpeed}
                    avgAccuracy={avgAccuracy}
                    todaySumTime={todaySumTime}
                ></ProgressHeader>
            }
        >
            <div className="py-12">
                <div
                    className={` ${
                        locale === "ckb" ? "" : ""
                    } max-w-7xl mx-auto sm:px-6 lg:px-8`}
                >
                    <div className="flex flex-col lg:flex-row lg:container max-w-5xl mx-auto lg:max-w-5xl lg:mx-auto md:space-x-2 justify-center space-y-8">
                        <TabsHorizontal lessons={lessons} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
