import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { ExerciseCard } from "./ExerciseCard";
import { usePage, router } from "@inertiajs/react";

export default function VerticalTabs({ exercises, lesson }) {
    const { locale } = usePage().props;

    const exerciesData = exercises.map((exercise) => ({
        label: exercise.title,
        isExerciseFinished: exercise.isExerciseFinished,
        value: exercise.title.toLowerCase(),
        desc: (
            <div className="flex flex-col w-full space-y-8">
                {exercise.screens.map((screen) => (
                    <ExerciseCard key={screen.id} screen={screen} />
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
            className="min-w-full"
        >
            <TabsHeader className="w-56">
                {exerciesData.map(({ label, value }) => (
                    <Tab key={value} value={value} className="">
                        {label}
                    </Tab>
                ))}
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
