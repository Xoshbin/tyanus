import AppLayout from "@/Layouts/AppLayout";
import ProgressHeader from "@/Components/Typing/ProgressHeader/ProgressHeader";
import { usePage, router } from "@inertiajs/react";
import { __ } from "@/Libs/Lang";
import TabsHorizontal from "@/Components/MaterialD/TabsHorizontal";
import { Select, Option } from "@material-tailwind/react";
import { useEffect } from "react";

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
    const { user_settings } = usePage().props;

    useEffect(() => {
        // Define your condition based on the 'locale' and set the 'activeTab' accordingly.
        if (user_settings.exercise_lang === "ckb") {
            // setActiveTab("tab1");
        } else if (user_settings.exercise_lang === "en") {
            // setActiveTab("tab9");
        } else {
            // setActiveTab("tab1"); // Set a default tab for other locales
        }
    }, [user_settings.exercise_lang]);

    const changeExerciseLang = (newValue) => {
        router.post(
            "/update-user-settings",
            {
                setting: "exercise_lang",
                value: newValue,
            },
            { preserveState: true }
        );
    };

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
                    <div className="flex flex-col max-w-5xl mx-auto justify-center space-y-4">
                        <div className="px-1">
                            <Select
                                value={user_settings.exercise_lang}
                                label={__("Keyabord type")}
                                color="blue"
                                onChange={(value) => changeExerciseLang(value)}
                            >
                                <Option value="ckb">{__("Kurdish")}</Option>
                                <Option value="en">{__("English")}</Option>
                            </Select>
                        </div>
                        <TabsHorizontal lessons={lessons} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
