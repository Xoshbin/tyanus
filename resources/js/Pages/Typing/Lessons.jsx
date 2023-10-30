import AppLayout from "@/Layouts/AppLayout";
import ProgressHeader from "@/Components/Typing/ProgressHeader/ProgressHeader";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { __ } from "@/Libs/Lang";
import PrimaryButton from "../../Components/PrimaryButton";
import moment from "moment";
import ScreenTooltip from "@/Components/Typing/LessonsPage/ScreenTooltip";
import ExerciseStars from "../../Components/Typing/LessonsPage/ExerciseStars";

export default function Lessons({
    lessons,
    locale,
    daily_time,
    sumTime,
    avgSpeed,
    avgAccuracy,
    todaySumTime,
}) {
    const [activeTab, setActiveTab] = useState("");
    const { auth } = usePage().props;
    const { user_settings } = usePage().props;

    useEffect(() => {
        // Define your condition based on the 'locale' and set the 'activeTab' accordingly.
        if (user_settings.exercise_lang === "ckb") {
            setActiveTab("tab1");
        } else if (user_settings.exercise_lang === "en") {
            setActiveTab("tab9");
        } else {
            setActiveTab("tab1"); // Set a default tab for other locales
        }
    }, [user_settings.exercise_lang]);

    let buttonGenerated = false; // Initialize a flag

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
            <Head title="Dashboard" />

            <div className="py-12">
                <div
                    className={` ${
                        locale === "ckb" ? "" : ""
                    } max-w-7xl mx-auto sm:px-6 lg:px-8`}
                >
                    <div className="flex flex-col lg:flex-row lg:container max-w-5xl mx-auto lg:max-w-5xl lg:mx-auto md:space-x-2 justify-center space-y-8">
                        <div className="flex lg:w-3/12">
                            <div className="flex md:flex-col justify-between w-full font-notosans lg:px-4">
                                <ul className="flex lg:flex-col overflow-x-scroll hide-scroll-bar md:overflow-hidden space-x-4 md:space-y-2">
                                    <li className="hidden lg:flex text-sm font-semibold">
                                        {__("Lessons")}
                                    </li>
                                    {lessons.map((lesson) => (
                                        <li key={lesson.id}>
                                            <a
                                                onClick={() =>
                                                    setActiveTab(
                                                        "tab" + lesson.id
                                                    )
                                                }
                                                href="#"
                                                className={`flex flex-row w-max lg:w-full justify-between rounded-lg bg-gradient-to-l from-kblue-50 to-kblue-200 px-4 py-2 shadow-md text-md font-black text-kblue-700 ${
                                                    activeTab ===
                                                    "tab" + lesson.id
                                                        ? "z-20 border-l-2 transform translate-x-0 border-blue-500"
                                                        : " transform translate-x-2"
                                                }`}
                                            >
                                                <span>
                                                    {lesson.locale === "ckb" &&
                                                    lesson.locale !==
                                                        user_settings.exercise_lang
                                                        ? lesson.title ===
                                                          "سەرەتایی"
                                                            ? "beginner"
                                                            : lesson.title ===
                                                              "ناوەندی"
                                                            ? "intermediate"
                                                            : lesson.title
                                                        : lesson.title ===
                                                          "beginner"
                                                        ? "سەرەتایی"
                                                        : lesson.title ===
                                                          "intermediate"
                                                        ? "ناوەندی"
                                                        : lesson.title}
                                                </span>

                                                <span
                                                    className={`p-1 rounded-md ${
                                                        activeTab ===
                                                        "tab" + lesson.id
                                                            ? "bg-yellow-400"
                                                            : ""
                                                    }`}
                                                >
                                                    {locale === "ckb" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-arrow-big-left-lines-filled"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="2"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            ></path>
                                                            <path
                                                                d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h2a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-2 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
                                                                strokeWidth="0"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                                                strokeWidth="0"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                d="M18 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                                                strokeWidth="0"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-arrow-big-right-lines-filled"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="2"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            ></path>
                                                            <path
                                                                d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                                                                strokeWidth="0"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                                                strokeWidth="0"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                                                                strokeWidth="0"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    )}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col lg:w-9/12 rounded-md space-y-2">
                            <div className="flex flex-row-reverse space-x-2 justify-end items-center">
                                <select
                                    value={user_settings.exercise_lang}
                                    onChange={(e) =>
                                        changeExerciseLang(e.target.value)
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="ckb">{__("Kurdish")}</option>
                                    <option value="en">{__("English")}</option>
                                </select>
                                <div className="w-3/12">
                                    {__("Exercise language")}
                                </div>
                            </div>
                            <div className="space-y-6 bg-gradient-to-l from-kblue-800 to-kblue-500 p-4 rounded-md">
                                {lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        style={{
                                            display:
                                                activeTab === `tab${lesson.id}`
                                                    ? "block"
                                                    : "none",
                                        }}
                                    >
                                        <div className="relative mb-5 space-y-3">
                                            <h3 className="text-2xl font-black leading-tight text-kblue-50">
                                                {lesson.title}
                                            </h3>
                                            {/* Lessons card */}
                                            {lesson.exercises.map(
                                                (exercise) => (
                                                    <div
                                                        key={exercise.id}
                                                        className={`lg:container max-w-7xl mx-auto block rounded-lg pt-6 pb-1 px-1 space-y-4 ${
                                                            exercise.isExerciseFinished
                                                                ? "bg-gradient-to-r from-kblue-700 to-kblue-400 text-kblue-100"
                                                                : "text-kblue-800 bg-gradient-to-r from-kblue-200 to-kblue-50"
                                                        }`}
                                                    >
                                                        <div className="flex flex-col px-5 space-y-2">
                                                            <div className="flex flex-row-reverse">
                                                                <div className="flex w-4/12 justify-end">
                                                                    {exercise.isExerciseFinished ===
                                                                    true ? (
                                                                        <Link
                                                                            href={`/lesson/${exercise.screens[0].url}`}
                                                                            as="button"
                                                                            className="h-max px-3 py-2 text-sm font-medium text-center space-x-2 inline-flex items-center text-kblue-700 bg-kblue-50 rounded-lg hover:bg-kblue-200 focus:ring-4 focus:outline-none focus:ring-kblue-500"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="icon icon-tabler icon-tabler-repeat text-kblue-900"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                strokeWidth="2"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            >
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                ></path>
                                                                                <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                                                                                <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                                                                            </svg>
                                                                            <div className="text-kblue-900 font-notosans">
                                                                                {__(
                                                                                    "Restart"
                                                                                )}
                                                                            </div>
                                                                        </Link>
                                                                    ) : exercise.isHalfwayThroughExercise ? (
                                                                        exercise.screens.map(
                                                                            (
                                                                                screen
                                                                            ) => {
                                                                                if (
                                                                                    !buttonGenerated &&
                                                                                    screen.hasStar !==
                                                                                        true
                                                                                ) {
                                                                                    buttonGenerated = true; // Set the flag to true after generating the button
                                                                                    return (
                                                                                        <Link
                                                                                            key={
                                                                                                screen.id
                                                                                            }
                                                                                            href={`/lesson/${screen.url}`}
                                                                                            as="button"
                                                                                            className="h-max px-3 py-2 text-sm font-medium text-center space-x-2 inline-flex items-center text-kblue-900 bg-kyellow-300 rounded-lg hover:bg-kyellow-400 focus:ring-4 focus:outline-none focus:ring-kyellow-50"
                                                                                        >
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                className="@if (app()->getLocale() == 'ckb') scale-x-[-1] @endif icon icon-tabler text-kblue-900 icon-tabler-player-play-filled"
                                                                                                width="18"
                                                                                                height="18"
                                                                                                viewBox="0 0 24 24"
                                                                                                strokeWidth="2"
                                                                                                stroke="currentColor"
                                                                                                fill="none"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                            >
                                                                                                <path
                                                                                                    stroke="none"
                                                                                                    d="M0 0h24v24H0z"
                                                                                                    fill="none"
                                                                                                ></path>
                                                                                                <path
                                                                                                    d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                                                                                    strokeWidth="0"
                                                                                                    fill="currentColor"
                                                                                                ></path>
                                                                                            </svg>
                                                                                            <div className="text-kblue-900 font-notosans">
                                                                                                {__(
                                                                                                    "Continue"
                                                                                                )}
                                                                                            </div>
                                                                                        </Link>
                                                                                    );
                                                                                }
                                                                                return null; // Render nothing for other cases
                                                                            }
                                                                        )
                                                                    ) : (
                                                                        <Link
                                                                            href={`/lesson/${exercise.screens[0].url}`}
                                                                            as="button"
                                                                            className="h-max px-3 py-2 text-sm font-medium text-center space-x-2 inline-flex items-center text-kblue-900 bg-kyellow-300 rounded-lg hover:bg-kyellow-400 focus:ring-4 focus:outline-none focus:ring-kyellow-50"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="@if (app()->getLocale() == 'ckb') scale-x-[-1] @endif icon icon-tabler text-kblue-900 icon-tabler-player-play-filled"
                                                                                width="18"
                                                                                height="18"
                                                                                viewBox="0 0 24 24"
                                                                                strokeWidth="2"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            >
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                ></path>
                                                                                <path
                                                                                    d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                                                                    strokeWidth="0"
                                                                                    fill="currentColor"
                                                                                ></path>
                                                                            </svg>
                                                                            <div className="text-kblue-900 font-notosans">
                                                                                {__(
                                                                                    "Start"
                                                                                )}
                                                                            </div>
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                                <div
                                                                    className={`flex w-4/12 rounded-full bottom-3 ${
                                                                        exercise.isExerciseFinished
                                                                            ? "text-kblue-100"
                                                                            : "text-kyellow-300"
                                                                    } border-kyellow`}
                                                                >
                                                                    <ExerciseStars
                                                                        exerciseTotalStars={
                                                                            exercise.exerciseTotalStars
                                                                        }
                                                                        totalStarsEarned={
                                                                            exercise.totalStarsEarned
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="flex w-4/12">
                                                                    {
                                                                        exercise.title
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="h-px my-8 bg-kblue-200 border-0" />

                                                        {exercise.totalStarsEarned >=
                                                            1 && (
                                                            <div className="flex flex-row">
                                                                <p className="">
                                                                    {__(
                                                                        "Speed"
                                                                    )}
                                                                    :{" "}
                                                                    {parseInt(
                                                                        avgSpeed
                                                                    )}{" "}
                                                                    {__(
                                                                        "Words per minute"
                                                                    )}
                                                                </p>
                                                                <p className="mx-4">
                                                                    {__(
                                                                        "Accuracy"
                                                                    )}
                                                                    : %{" "}
                                                                    {parseInt(
                                                                        avgAccuracy
                                                                    )}
                                                                </p>
                                                                <p className="mx-4">
                                                                    {__("Time")}
                                                                    :
                                                                    {moment
                                                                        .duration(
                                                                            sumTime,
                                                                            "seconds"
                                                                        )
                                                                        .locale(
                                                                            "ku"
                                                                        )
                                                                        .humanize()}
                                                                </p>
                                                            </div>
                                                        )}

                                                        <div
                                                            className={`flex ${
                                                                locale === "ckb"
                                                                    ? "flex-row-reverse"
                                                                    : ""
                                                            } w-full space-x-1`}
                                                        >
                                                            {locale === "ckb"
                                                                ? exercise.screens
                                                                      .filter(
                                                                          (
                                                                              screen
                                                                          ) =>
                                                                              screen.content_type ===
                                                                              "letters"
                                                                      )
                                                                      .reverse()
                                                                      .map(
                                                                          (
                                                                              screen,
                                                                              index
                                                                          ) => (
                                                                              <ScreenTooltip
                                                                                  key={
                                                                                      screen.id
                                                                                  }
                                                                                  screen={
                                                                                      screen
                                                                                  }
                                                                                  exercise={
                                                                                      exercise
                                                                                  }
                                                                                  index={
                                                                                      index
                                                                                  }
                                                                                  locale={
                                                                                      locale
                                                                                  }
                                                                              />
                                                                          )
                                                                      )
                                                                : exercise.screens
                                                                      .filter(
                                                                          (
                                                                              screen
                                                                          ) =>
                                                                              screen.content_type ===
                                                                              "letters"
                                                                      )
                                                                      .map(
                                                                          (
                                                                              screen,
                                                                              index
                                                                          ) => (
                                                                              <ScreenTooltip
                                                                                  key={
                                                                                      screen.id
                                                                                  }
                                                                                  screen={
                                                                                      screen
                                                                                  }
                                                                                  exercise={
                                                                                      exercise
                                                                                  }
                                                                                  index={
                                                                                      index
                                                                                  }
                                                                                  locale={
                                                                                      locale
                                                                                  }
                                                                              />
                                                                          )
                                                                      )}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
