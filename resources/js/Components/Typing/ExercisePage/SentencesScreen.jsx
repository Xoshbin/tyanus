import React, { useEffect, useState, useRef } from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";
import WindowsKeyboardKu from "@/Components/Typing/Keyboard/WindowsKeyboardKu";
import { __ } from "@/Libs/Lang";
import "moment/locale/ku"; // Import the Kurdish locale

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
const SentencesScreen = ({
    screen,
    visibleCharacters,
    user_settings,
    currentCharacter,
    userInput,
}) => {
    const containerRef = useRef(null);
    let encounteredCurrentChar = false; // Initialize a variable to track encountering 'currentCharacter'

    // Function to scroll to the bottom of the container with a smooth transition
    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.style.transition = "scroll-behavior 5s ease"; // Add a smooth scroll transition
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    // Calculate the index of the next upcoming character
    const nextCharIndex = userInput.length;

    useEffect(() => {
        // Call scrollToBottom whenever visibleCharacters changes
        scrollToBottom();
    }, [visibleCharacters]);

    return (
        <div className="hidden md:flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
            {screen && screen.content ? (
                <div
                    ref={containerRef}
                    className="w-full py-4 px-4 text-3xl text-center max-h-48 overflow-y-scroll transform flex-col-reverse justify-end scroll-smooth leading-loose"
                >
                    {visibleCharacters.split("").map((char, i) => {
                        let color = "text-black";

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
                                        className={`text-2xl font-naskh underline ${
                                            color === "text-black"
                                                ? "text-transparent"
                                                : color
                                        }`}
                                    >
                                        {char}
                                    </span>
                                </span>
                            );
                        }

                        /// animate the next upcoming character
                        if (i === nextCharIndex) {
                            return (
                                <span key={i}>
                                    <span className="animate-pulse text-2xl font-naskh font-black">
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
                </div>
            ) : (
                <div className="flex">
                    <LettersScreen
                        screen={screen}
                        visibleCharacters={visibleCharacters}
                        user_settings={user_settings}
                        currentCharacter={currentCharacter}
                        userInputForHighlight={userInputForHighlight}
                        flipped={flipped}
                    />
                </div>
            )}

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
                            user_settings.keyboard_type === "mac"
                                ? macLeftKeys.includes(char.toLowerCase())
                                : windowsLeftKeys.includes(char.toLowerCase())
                        ) {
                            fingerClass = "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                            shiftFingerClass =
                                "absolute -right-28 -top-7 w-4/5";
                            shiftImage = "/img/fingers/right-resting-hand.webp";
                        } else if (
                            user_settings.keyboard_type === "mac"
                                ? macRightKeys.includes(char.toLowerCase())
                                : windowsRightKeys.includes(char.toLowerCase())
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
                            user_settings.keyboard_type === "mac"
                                ? macRightShiftKeys.includes(char)
                                : windowsRightShiftKeys.includes(char)
                        ) {
                            shiftImage = "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                            shiftFingerClass =
                                "absolute -right-28 -top-7 w-4/5";
                        } else if (
                            macRightShiftKeys.includes(char)
                                ? macLeftShiftKeys.includes(char)
                                : windowsLeftShiftKeys.includes(char)
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

export default SentencesScreen;
