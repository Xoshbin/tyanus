import React, { useState } from "react";
import Modal from "@/Components/Modal";
import { router, usePage } from "@inertiajs/react";
import KeyboardSettings from "./KeyboardSettings";
import { __ } from "@/Libs/Lang";

const LessonSettings = ({ locale, screenlocale }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { user_settings } = usePage().props;

    const openKeyboardSettings = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const redoLesson = () => {
        // Perform a visit to the current page's URL to reload it.
        window.location.reload();
    };

    const toggleKeyboardSound = () => {
        const currentValue = user_settings.enable_sound;
        // Calculate the new value by toggling the current value.
        const newValue = !currentValue;

        router.post(
            "/update-user-settings",
            {
                setting: "enable_sound",
                value: newValue,
            },
            { preserveState: true }
        );
    };

    return (
        <div
            className={`flex justify-end items-center ${
                locale === "ckb" ? "flex-row-reverse" : ""
            }`}
        >
            <div
                className={`hidden sm:flex items-center justify-end gap-4 rounded-full bg-surface border border-subtle shadow-soft px-3 py-1.5 ${
                    locale === "ckb" ? "flex-row-reverse" : ""
                }`}
            >
                {/* redoLesson */}
                <div
                    className={`flex ${
                        locale === "ckb" ? "flex-row-reverse" : ""
                    } items-center space-x-2`}
                >
                    <button
                        onClick={redoLesson}
                        type="button"
                        className="inline-flex items-center justify-center rounded-full p-2 text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        aria-label={__("Restart lesson")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-repeat"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#1f54d6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                            <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                        </svg>
                    </button>
                </div>
                {/* Sound */}
                <div
                    className={`flex ${
                        locale === "ckb" ? "flex-row-reverse" : ""
                    } items-center space-x-2`}
                >
                    <button
                        onClick={toggleKeyboardSound}
                        type="button"
                        className="inline-flex items-center justify-center rounded-full p-2 text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        aria-label={__("Toggle keyboard sound")}
                    >
                        {user_settings.enable_sound === true ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-volume"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#1f54d6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M15 8a5 5 0 0 1 0 8"></path>
                                <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-volume-off"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#1f54d6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464"></path>
                                <path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615"></path>
                                <path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664"></path>
                                <path d="M3 3l18 18"></path>
                            </svg>
                        )}
                    </button>
                </div>
                {/* Keyboard */}
                <div
                    className={`flex ${
                        locale === "ckb" ? "flex-row-reverse" : ""
                    } items-center space-x-2`}
                >
                    <button
                        onClick={openKeyboardSettings}
                        type="button"
                        className="inline-flex items-center justify-center rounded-full p-2 text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        aria-label={__("Keyboard settings")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-keyboard"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#1f54d6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
                            <path d="M6 10l0 .01" />
                            <path d="M10 10l0 .01" />
                            <path d="M14 10l0 .01" />
                            <path d="M18 10l0 .01" />
                            <path d="M6 14l0 .01" />
                            <path d="M18 14l0 .01" />
                            <path d="M10 14l4 .01" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Include your Inertia components or React components here */}
            <Modal show={modalOpen} onClose={closeModal}>
                <KeyboardSettings locale={screenlocale} />
            </Modal>
        </div>
    );
};

export default LessonSettings;
