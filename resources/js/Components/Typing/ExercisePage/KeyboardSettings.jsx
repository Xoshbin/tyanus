import React from "react";
import { __ } from "@/Libs/Lang";
import { router, usePage } from "@inertiajs/react";

const KeyboardSettings = ({ locale }) => {
    const { user_settings } = usePage().props;

    const toggleShowKeyboard = () => {
        const currentValue = user_settings.show_keyboard;
        // Calculate the new value by toggling the current value.
        const newValue = !currentValue;

        router.post(
            "/update-user-settings",
            {
                setting: "show_keyboard",
                value: newValue,
            },
            { preserveState: true }
        );
    };

    const toggleShowHands = () => {
        const currentValue = user_settings.show_hands;
        // Calculate the new value by toggling the current value.
        const newValue = !currentValue;

        router.post(
            "/update-user-settings",
            {
                setting: "show_hands",
                value: newValue,
            },
            { preserveState: true }
        );
    };

    const changeKeyboardType = (newValue) => {
        router.post(
            "/update-user-settings",
            {
                setting: "keyboard_type",
                value: newValue,
            },
            { preserveState: true }
        );

        if (typeof window !== "undefined") {
            window.localStorage.setItem(
                "tyanus_keyboard_layout_manual",
                "1"
            );
        }
    };

    return (
        <div className="px-6 py-4">
            <div className="text-lg font-medium text-gray-900">
                {__("Keyboard settings")}
            </div>

            <div className="mt-4 text-sm text-gray-600">
                <div className="flex flex-col p-6 space-y-4">
                    <div className="flex flex-row justify-between">
                        <span>{__("Show keyboard")}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={user_settings.show_keyboard}
                                onChange={() => toggleShowKeyboard()}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-kyellow-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-kyellow-600"></div>
                        </label>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span>{__("Show hands")}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={user_settings.show_hands}
                                onChange={() => toggleShowHands()}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-kyellow-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-kyellow-600"></div>
                        </label>
                    </div>
                    {locale === "ckb" && (
                        <div className="flex flex-row justify-between">
                            <span>{__("Keyboard layout")}</span>
                            <select
                                value={user_settings.keyboard_type}
                                onChange={(e) =>
                                    changeKeyboardType(e.target.value)
                                }
                                className="select-box rounded-lg"
                            >
                                <option value="windows">{__("Windows")}</option>
                                <option value="mac">{__("Mac OS")}</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KeyboardSettings;
