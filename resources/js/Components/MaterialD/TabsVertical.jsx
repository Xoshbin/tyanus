import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { ExerciseCard } from "./ExerciseCard";
import { usePage, Link } from "@inertiajs/react";
import { IconDiscountCheckFilled } from "@tabler/icons-react";
import { useMediaQuery } from "react-responsive";

export default function TabsVertical({ exercises, lesson }) {
    const { user_settings } = usePage().props;
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    const exerciesData = exercises.map((exercise) => ({
        label: exercise.title,
        isExerciseFinished: exercise.isExerciseFinished,
        icon: IconDiscountCheckFilled,
        value: exercise.title.toLowerCase(),
        desc: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercise.screens.map((screen) => (
                    <Link key={screen.id} href={route("lesson", screen.url)}>
                        <ExerciseCard screen={screen} />
                    </Link>
                ))}
            </div>
        ),
    }));

    return (
        <Tabs
            value={
                user_settings.exercise_lang === "ckb"
                    ? lesson.id === 1
                        ? "ف، ژ، لەگەڵ سپەیس"
                        : "ووشە زۆر باوەکان"
                    : lesson.id === 9
                    ? "j, f, and space"
                    : "common english words"
            }
            orientation={isTabletOrMobile ? "horizontal" : "vertical"}
            className="py-2 px-1"
        >
            <TabsHeader
                className={`bg-transparent p-0 space-x-2 lg:space-x-0 space-x-reverse overflow-x-auto lg:space-y-2 mb-4 w-full`}
                indicatorProps={{
                    className:
                        "bg-gradient-to-l from-kblue-100 to-kblue-300 border-l-2 transform translate-x-0 border-blue-500",
                }}
            >
                {exerciesData.map(
                    ({ label, value, isExerciseFinished, icon }) => (
                        <Tab
                            key={value}
                            value={value}
                            className={`flex w-48 md:w-56 flex-row lg:w-full rounded-lg bg-gradient-to-l from-kblue-50 to-kblue-200 px-4 py-2 shadow-md font-black text-kblue-700`}
                        >
                            <div
                                className={`flex items-center w-52 ${
                                    isExerciseFinished ? "text-kblue-600" : ""
                                } ${
                                    user_settings.exercise_lang === "ckb"
                                        ? "gap-6 lg:gap-12"
                                        : ""
                                }`}
                            >
                                <div className="w-11/12 text-right">
                                    {label}
                                </div>
                                <div className="w-1/12">
                                    {isExerciseFinished ? (
                                        React.createElement(icon, {
                                            className: "w-5 h-5",
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </Tab>
                    )
                )}
            </TabsHeader>
            <TabsBody>
                {exerciesData.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="py-0">
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
