import React from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";
import WindowsKeyboardKu from "@/Components/Typing/Keyboard/WindowsKeyboardKu";
import { __ } from "@/Libs/Lang";
import "moment/locale/ku"; // Import the Kurdish locale
import { Spinner } from "@material-tailwind/react";
import {
    macFingerMapping,
    macLeftKeys,
    macRightKeys,
    macRightShiftKeys,
    macLeftShiftKeys,
} from "@/data/keyMappings/macKeyMapping";

const IntroScreen = ({
    screen,
    showFoundKeyMessage,
    user_settings,
    userInput,
    currentCharacter,
}) => {
    return (
        <div className="hidden md:flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
            {showFoundKeyMessage ? (
                <div className="flex flex-col justify-center items-center">
                    <p className="w-full p-4 text-2xl text-center">
                        {__(
                            "Great, you found it. Now, let's start practicing."
                        )}
                    </p>
                    <Spinner color="blue" className="h-12 w-12" />
                </div>
            ) : (
                <p className="w-full p-4 text-2xl text-center">
                    {__(
                        "Put both of your hands on the keyboard and use the highlighted finger"
                    )}
                </p>
            )}

            {showFoundKeyMessage === false && (
                <p className="p-4 text-center bg-kblue-600 rounded-md">
                    {screen.content.split("").map((char, i) => {
                        let color = "text-white text-5xl font-extrabold";

                        if (i < userInput.length) {
                            color =
                                char === userInput[i]
                                    ? "text-green-400"
                                    : "text-red-400"; // Remove underline when user types correctly
                        }

                        if (char === " ") {
                            return (
                                <span key={i}>
                                    <span
                                        className={`text-2xl font-naskh underline ${color}`}
                                    >
                                        {char}
                                    </span>
                                </span>
                            );
                        }

                        return (
                            <span key={i}>
                                <span
                                    className={`text-2xl font-naskh ${color}`}
                                >
                                    {char}
                                </span>
                            </span>
                        );
                    })}
                </p>
            )}

            {/* start images */}
            {/* commenting for now */}
            {/* {user_settings.show_hands === true ? (
                        <div className="flex flex-row justify-center relative w-full opacity-75">
                            {screen.content.split("").map((char, i) => {
                                let fingerClass =
                                    "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                                let shiftFingerClass =
                                    "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                                let shiftImage =
                                    "/img/fingers/left-resting-hand.webp";

                                if (macLeftKeys.includes(char.toLowerCase())) {
                                    fingerClass =
                                        "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                                    shiftFingerClass =
                                        "absolute -right-28 -top-7 w-4/5";
                                    shiftImage =
                                        "/img/fingers/right-resting-hand.webp";
                                } else if (
                                    macRightKeys.includes(char.toLowerCase())
                                ) {
                                    fingerClass =
                                        "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
                                    shiftFingerClass =
                                        "absolute -left-44 -top-14 w-4/5";
                                    shiftImage =
                                        "/img/fingers/left-resting-hand.webp";
                                }

                                if (char === " ") {
                                    const fingerImage =
                                        macFingerMapping[char] || ""; // Get the finger image
                                    return (
                                        <span key={i}>
                                            {char === currentCharacter && (
                                                <img
                                                    src={fingerImage}
                                                    alt=""
                                                    className={fingerClass} // Apply your styling for the finger image here
                                                />
                                            )}
                                        </span>
                                    );
                                }

                                const fingerImage =
                                    macFingerMapping[char] || ""; // Get the finger image

                                // Handle characters that require the Shift key
                                if (macRightShiftKeys.includes(char)) {
                                    shiftImage =
                                        "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                                    shiftFingerClass =
                                        "absolute -right-28 -top-7 w-4/5";
                                } else if (macLeftShiftKeys.includes(char)) {
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
                                                alt=""
                                                className={shiftFingerClass} // Apply your styling for the finger image here
                                            />
                                        )}
                                        {char === currentCharacter && (
                                            <div>
                                                <img
                                                    src={fingerImage}
                                                    alt=""
                                                    className={fingerClass} // Apply your styling for the finger image here
                                                />
                                                <img
                                                    src={shiftImage}
                                                    alt=""
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
                    )} */}

            {user_settings.show_keyboard === true ? (
                screen.locale === "ckb" ? (
                    user_settings.keyboard_type === "windows" ? (
                        <WindowsKeyboardKu
                            screenType={screen.content_type}
                            currentCharacter={currentCharacter}
                        />
                    ) : (
                        <MacKeyboardKu
                            screenType={screen.content_type}
                            currentCharacter={currentCharacter}
                        />
                    )
                ) : (
                    <MacKeyboardEn
                        screenType={screen.content_type}
                        currentCharacter={currentCharacter}
                    />
                )
            ) : (
                <></>
            )}
        </div>
    );
};

export default IntroScreen;
