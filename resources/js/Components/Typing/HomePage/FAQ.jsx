import React from "react";
import { __ } from "@/Libs/Lang";

const FAQ = ({ locale }) => {
    return (
        <section className="mt-20 rounded-2xl bg-surface border border-subtle shadow-soft">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
                    {__("Frequently asked questions")}
                </h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                    <div>
                        <div
                            className={`mb-10 ${
                                locale === "ckb" ? "text-right" : ""
                            }`}
                        >
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-700"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {__("How do I increase my typing speed?")}
                            </h3>
                            <p className="text-gray-700">
                                {__(
                                    'There are two effective ways to type faster. The first is to learn touch typing, a method that involves using all 10 fingers for typing instead of the slow "hunt and peck" approach. You can start your touch typing journey with Tyanus.com, which offers a comprehensive set of 300 lessons in both Kurdish and English. These lessons will guide you towards mastering touch typing.'
                                )}
                            </p>
                        </div>
                        <div
                            className={`mb-10 ${
                                locale === "ckb" ? "text-right" : ""
                            }`}
                        >
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-700"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {__("How is typing speed measured?")}
                            </h3>
                            <p className="text-gray-700">
                                {__(
                                    'Typing speed is measured by calculating the number of words you can accurately type within a specific time frame. Each "word" is equivalent to five keystrokes. During a typing test, both your speed and accuracy are evaluated. You\'ll receive an average words per minute (WPM) score and an accuracy percentage. Tyanus.com offers timed typing tests for 1, 3, or 5 minutes, and upon completion, you can obtain a certificate to showcase your progress and achievements.'
                                )}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`mb-10 ${
                                locale === "ckb" ? "text-right" : ""
                            }`}
                        >
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-700"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {__("How fast should I type based on my age?")}
                            </h3>
                            <p className="mb-2">
                                {__("Typing speeds can vary by age group.")}
                            </p>
                            <ul className="max-w-md space-y-1 text-gray-700 list-disc list-inside">
                                <li>
                                    {__(
                                        "Elementary school (Grades 3–5): 8–15 words per minute (WPM)"
                                    )}
                                </li>
                                <li>
                                    {__(
                                        "Middle school (Grades 6–8): 12–25 WPM"
                                    )}
                                </li>
                                <li>
                                    {__("High school (Grades 9–12): 20–35 WPM")}
                                </li>
                                <li>{__("College/Adult: 50 WPM")}</li>
                            </ul>
                        </div>
                        <div
                            className={`mb-10 ${
                                locale === "ckb" ? "text-right" : ""
                            }`}
                        >
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-700"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {__(
                                    "Why is it important to take a typing speed test?"
                                )}
                            </h3>
                            <p className="text-gray-700">
                                {__(
                                    "Participating in typing speed tests establishes your baseline typing speed (WPM) and accuracy, which serves as a foundation for improvement. Regular testing allows you to track your progress and measure enhancements in accuracy. Additionally, you can leverage your impressive WPM score from Tyanus.com's typing tests on your resume, highlighting your administrative skills!"
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
