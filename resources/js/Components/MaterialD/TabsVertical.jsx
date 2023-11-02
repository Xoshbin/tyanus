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

export default function TabsVertical({ exercises, lesson }) {
    const { locale } = usePage().props;

    const exerciesData = exercises.map((exercise) => ({
        label: exercise.title,
        isExerciseFinished: exercise.isExerciseFinished,
        icon: IconDiscountCheckFilled,
        value: exercise.title.toLowerCase(),
        desc: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercise.screens.map((screen) => (
                    <Link href={route("lesson", screen.url)}>
                        <ExerciseCard key={screen.id} screen={screen} />
                    </Link>
                ))}
            </div>
        ),
    }));

    return (
        <Tabs
            value={
                locale === "ckb"
                    ? lesson.id === 1
                        ? "ف، ژ، لەگەڵ سپەیس"
                        : "ووشە زۆر باوەکان"
                    : lesson.id === 28
                    ? "J, F, and Space"
                    : "Common English Words"
            }
            orientation="vertical"
            className="py-2 px-1"
        >
            <TabsHeader className="w-56 p-0">
                {exerciesData.map(
                    ({ label, value, isExerciseFinished, icon }) => (
                        <Tab key={value} value={value}>
                            <div
                                className={`flex items-center gap-2 ${
                                    isExerciseFinished ? "text-kblue-700" : ""
                                }`}
                            >
                                {label}
                                {isExerciseFinished ? (
                                    React.createElement(icon, {
                                        className: "w-5 h-5",
                                    })
                                ) : (
                                    <></>
                                )}
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
