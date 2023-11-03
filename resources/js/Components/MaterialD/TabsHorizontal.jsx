import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { usePage } from "@inertiajs/react";
import TabsVertical from "@/Components/MaterialD/TabsVertical";

export default function TabsHorizontal({ lessons }) {
    const { user_settings } = usePage().props;

    const lessonsData = lessons.map((lesson) => ({
        label: lesson.title,
        value: lesson.title.toLowerCase(),
        desc: <TabsVertical exercises={lesson.exercises} lesson={lesson} />,
    }));

    return (
        <Tabs
            value={
                user_settings.exercise_lang === "ckb" ? "سەرەتایی" : "beginner"
            }
            className="min-w-full"
        >
            <TabsHeader>
                {lessonsData.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {lessonsData.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="p-0 py-4">
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
