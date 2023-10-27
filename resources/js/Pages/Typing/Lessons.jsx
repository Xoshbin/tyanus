import AppLayout from "@/Layouts/AppLayout";
import ProgressHeader from "@/Components/Typing/ProgressHeader/ProgressHeader";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { __ } from "@/Libs/Lang";
import PrimaryButton from "../../Components/PrimaryButton";
import moment from "moment";
import ScreenTooltip from "@/Components/Typing/ScreenTooltip";
import ExerciseStars from "../../Components/Typing/ExerciseStars";
import { usePage } from "@inertiajs/react";

export default function Lessons({
    lessons,
    locale,
    daily_time,
    sumTime,
    avgSpeed,
    avgAccuracy,
    todaySumTime,
}) {
    const [activeTab, setActiveTab] = useState("tab1");
    const { auth } = usePage().props;

    let buttonGenerated = false; // Initialize a flag

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
                    <div className="flex flex-col lg:flex-row lg:container max-w-5xl mx-auto lg:max-w-5xl lg:mx-auto md:space-x-2 justify-center mt-16 space-y-8">
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
                                                        : "bg-gray-300 text-black"
                                                }`}
                                            >
                                                {lesson.title}

                                                <span
                                                    className={`p-1 rounded-md ${
                                                        activeTab ===
                                                        "tab" + lesson.id
                                                            ? "bg-yellow-400"
                                                            : "bg-gray-300 text-black"
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
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="ckb">{__("Kurdish")}</option>
                                    <option value="en">{__("English")}</option>
                                </select>
                                <div>
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-kblue-600"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
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
                                                                            href={`/lesson/${exercise.screens[0].id}`}
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
                                                                                            href={`/lesson/${screen.id}`}
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
                                                                            href={`/lesson/${exercise.screens[0].id}`}
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
                                                                            35
                                                                        }
                                                                        totalStarsEarned={
                                                                            16
                                                                        }
                                                                    ></ExerciseStars>
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
                                                                            "milliseconds"
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
                                                                              ></ScreenTooltip>
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
                                                                              ></ScreenTooltip>
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
