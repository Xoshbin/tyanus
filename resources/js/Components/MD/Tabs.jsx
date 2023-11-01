import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { usePage } from "@inertiajs/react";
import VerticalTabs from "@/Components/MD/VerticalTabs";

export default function TabsDefault({ lessons }) {
    const { locale } = usePage().props;

    const lessonsData = lessons.map((lesson) => ({
        label: lesson.title,
        value: lesson.title.toLowerCase(),
        desc: (
            <div className="flex flex-row w-full space-x-8 space-x-reverse">
                <VerticalTabs exercises={lesson.exercises} lesson={lesson} />
            </div>
        ),
    }));

    return (
        <Tabs
            value={locale === "ckb" ? "سەرەتایی" : "beginner"}
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
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
