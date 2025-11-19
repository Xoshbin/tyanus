import React from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";
import WindowsKeyboardKu from "@/Components/Typing/Keyboard/WindowsKeyboardKu";
import {
    macFingerMapping,
    macLeftKeys,
    macRightKeys,
    macRightShiftKeys,
    macLeftShiftKeys,
} from "@/data/keyMappings/macKeyMapping";
import {
    windowsFingerMapping,
    windowsLeftKeys,
    windowsRightKeys,
    windowsRightShiftKeys,
    windowsLeftShiftKeys,
} from "@/data/keyMappings/windowsKeyMapping";
const LettersScreen = ({
    screen,
    visibleCharacters,
    user_settings,
    currentCharacter,
    userInputForHighlight,
    flipped,
}) => {
    return (
        <div className="hidden md:flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
            <div className="flex">
                {visibleCharacters.split("").map((char, i) => {
                    let color = "bg-surface text-primary-800";

                    if (i < userInputForHighlight.length) {
                        color =
                            char === userInputForHighlight[i]
                                ? "bg-success-soft text-success"
                                : "bg-error-soft text-error";
                    }

                    return (
                        <div key={i} className="space-y-4">
                            <div
                                className={`w-20 h-16 mx-1 py-2 px-2 text-5xl text-center border border-subtle rounded-xl font-naskh ${color} ${
                                    flipped ? "flip" : ""
                                }`}
                            >
                                {char}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* start images */}
            {user_settings.show_hands === true ? (
                <div className="flex flex-row justify-center relative w-full opacity-75">
                    {visibleCharacters.split("").map((char, i) => {
                        let fingerClass = "absolute -right-28 -top-7 w-4/5"; // Initialize hand class

                        //Attention:: we use these shift variables for rest hands
                        //Rest hands are the two hands that stay on the keyboard when have no jabos
                        let shiftFingerClass =
                            "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                        let shiftImage = "/img/fingers/left-resting-hand.webp";

                        if (
                            (user_settings.keyboard_type === "mac" &&
                                macLeftKeys.includes(char.toLowerCase())) ||
                            (user_settings.keyboard_type === "windows" &&
                                windowsLeftKeys.includes(char.toLowerCase()))
                        ) {
                            fingerClass = "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                            shiftFingerClass =
                                "absolute -right-28 -top-7 w-4/5";
                            shiftImage = "/img/fingers/right-resting-hand.webp";
                        } else if (
                            (user_settings.keyboard_type === "mac" &&
                                macRightKeys.includes(char.toLowerCase())) ||
                            (user_settings.keyboard_type === "windows" &&
                                windowsRightKeys.includes(char.toLowerCase()))
                        ) {
                            fingerClass = "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
                            shiftFingerClass =
                                "absolute -left-44 -top-14 w-4/5";
                            shiftImage = "/img/fingers/left-resting-hand.webp";
                        }

                        if (char === " ") {
                            const fingerImage =
                                user_settings.keyboard_type === "mac"
                                    ? macFingerMapping[char] || ""
                                    : windowsFingerMapping[char] || ""; // Get the finger image
                            return (
                                <span key={i}>
                                    {char === currentCharacter && (
                                        <span>
                                            <img
                                                src={fingerImage}
                                                className={fingerClass} // Apply your styling for the finger image here
                                            />
                                            <img
                                                src={shiftImage}
                                                className={shiftFingerClass} // Apply your styling for the finger image here
                                            />
                                        </span>
                                    )}
                                </span>
                            );
                        }

                        const fingerImage =
                            user_settings.keyboard_type === "mac"
                                ? macFingerMapping[char] || ""
                                : windowsFingerMapping[char] || ""; // Get the finger image

                        // Handle characters that require the Shift key
                        if (
                            (user_settings.keyboard_type === "mac" &&
                                macRightShiftKeys.includes(
                                    char.toLowerCase()
                                )) ||
                            (user_settings.keyboard_type === "windows" &&
                                windowsRightShiftKeys.includes(
                                    char.toLowerCase()
                                ))
                        ) {
                            shiftImage = "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                            shiftFingerClass =
                                "absolute -right-28 -top-7 w-4/5";
                        } else if (
                            (user_settings.keyboard_type === "mac" &&
                                macLeftShiftKeys.includes(
                                    char.toLowerCase()
                                )) ||
                            (user_settings.keyboard_type === "windows" &&
                                windowsLeftShiftKeys.includes(
                                    char.toLowerCase()
                                ))
                        ) {
                            shiftImage = "/img/fingers/left-shift.webp"; // Set the image for the left Shift key
                            shiftFingerClass =
                                "absolute -left-44 -top-14 w-4/5";
                        }

                        // Determine if the shiftImage should be shown
                        const shouldDisplayShiftImage =
                            shiftImage && char === currentCharacter;

                        return (
                            <span key={i}>
                                {shouldDisplayShiftImage && (
                                    <img
                                        src={shiftImage}
                                        className={shiftFingerClass} // Apply your styling for the finger image here
                                    />
                                )}
                                {char === currentCharacter && (
                                    <div>
                                        <img
                                            src={fingerImage}
                                            className={fingerClass} // Apply your styling for the finger image here
                                        />
                                        <img
                                            src={shiftImage}
                                            className={shiftFingerClass} // Apply your styling for the finger image here
                                        />
                                    </div>
                                )}
                            </span>
                        );
                    })}
                </div>
            ) : (
                <></>
            )}

            {user_settings.show_keyboard === true ? (
                screen.locale === "ckb" ? (
                    user_settings.keyboard_type === "windows" ? (
                        <WindowsKeyboardKu
                            currentCharacter={currentCharacter}
                        />
                    ) : (
                        <MacKeyboardKu currentCharacter={currentCharacter} />
                    )
                ) : (
                    <MacKeyboardEn currentCharacter={currentCharacter} />
                )
            ) : (
                <></>
            )}
        </div>
    );
};

export default LettersScreen;
