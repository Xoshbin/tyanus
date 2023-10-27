import React, { useState } from "react";
import Modal from "@/Components/Modal";
import { router, usePage } from "@inertiajs/react";

const LessonSettings = ({ locale, userSettings }) => {
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

        router.visit("/update-user-settings", {
            method: "post",
            data: {
                setting: "enable_sound",
                value: newValue,
            },
        });
    };

    return (
        <div
            className={`flex justify-end h-0 ${
                locale === "ckb" ? "flex-row-reverse" : ""
            }`}
        >
            <div
                className={`hidden sm:flex ${
                    locale === "ckb" ? "flex-row-reverse" : ""
                } space-x-8 justify-end mr-40`}
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
                        className="inline-flex w-full justify-center cursor-pointer"
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
                        className="inline-flex w-full justify-center cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-volume-2"
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
                            <path d="M15 8a5 5 0 0 1 0 8" />
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                        </svg>
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
                        className="inline-flex w-full justify-center cursor-pointer"
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
                <p>hi there</p>
            </Modal>
        </div>
    );
};

export default LessonSettings;
