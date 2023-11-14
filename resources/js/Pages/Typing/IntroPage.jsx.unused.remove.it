import React, { useEffect, useState } from "react";
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
import AppLayout from "@/Layouts/AppLayout";
import LessonSettings from "@/Components/Typing/ExercisePage/LessonSettings";
import { router, usePage } from "@inertiajs/react";
import { Alert, Typography } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";

export default function Lesson({ screen, nextScreen }) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [errorCount, setErrorCount] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const { auth } = usePage().props;
    const { user_settings } = usePage().props;
    const { locale } = usePage().props;
    const keySound = "/sound/soft-key.mp3";
    const wrongKeySound = "/sound/wrong.mp3";
    const [errors, setErrors] = useState([]);

    const playKeySound = () => {
        if (user_settings.enable_sound) {
            const audio = new Audio(keySound);
            audio.play();
        }
    };

    const playWrongKeySound = () => {
        if (user_settings.enable_sound) {
            const audio = new Audio(wrongKeySound);
            audio.play();
        }
    };

    // Define a function to update the current character
    const updateCurrentCharacter = () => {
        if (currentCharacterIndex < screen.content.length) {
            setCurrentCharacterIndex(currentCharacterIndex + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

            playKeySound(); // Add this line to play the sound

            // Check if the user has reached the end of the text
            if (currentCharacterIndex < screen.content.length) {
                // Only capture character keys (letters and spaces)
                if (
                    !e.ctrlKey &&
                    !e.metaKey &&
                    !e.altKey &&
                    !e.getModifierState("CapsLock") &&
                    e.key !== "Shift" &&
                    e.key !== "Tab" &&
                    !e.key.startsWith("Arrow") &&
                    e.key !== "Backspace" // Exclude the Backspace key
                ) {
                    const characterToType = e.key === "Enter" ? "↩" : e.key;

                    // Check if the character at the current position should match the Enter symbol
                    if (
                        screen.content.charAt(currentCharacterIndex) ===
                        characterToType
                    ) {
                        setUserInput((prev) => prev + characterToType);
                    } else if (characterToType === "↩") {
                        // Check if the entered character is not "↩"
                        setUserInput((prev) => prev + characterToType);
                    } else {
                        setUserInput((prev) => prev + e.key);

                        // Check for errors and store them in the 'errors' array
                        if (e.key !== screen.content[currentCharacterIndex]) {
                            setErrors((prevErrors) => [
                                ...prevErrors,
                                screen.content[currentCharacterIndex],
                            ]);
                        }
                    }

                    // Check if typing is complete
                    if (currentCharacterIndex + 1 === screen.content.length) {
                        setEndTime(Date.now());
                        setIsTypingComplete(true);
                    }

                    // Update the current character
                    updateCurrentCharacter();
                }
            }

            // Check for space key
            if (key === " ") {
                e.preventDefault(); // Prevent scrolling when the space key is pressed
            }

            // Check for errors (exclude Shift key)
            if (
                currentCharacterIndex < screen.content.length &&
                key !== screen.content[currentCharacterIndex]
            ) {
                // Exclude Shift key from errors
                if (key !== "Shift") {
                    playWrongKeySound(); // Add this line to play the wrong character sound
                    setErrorCount((prev) => prev + 1);
                }
            }
        };

        if (!startTime && userInput.length === 0) {
            setStartTime(Date.now());
        }

        document.addEventListener("keydown", handleKeyDown);

        if (isTypingComplete) {
            // Call handleLessonCompletion with the required parameters.
            handleLessonCompletion(
                netWPM.toFixed(2),
                accuracy.toFixed(2),
                elapsedTime,
                starsEarned
            );
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [userInput, screen.content, currentCharacterIndex, isTypingComplete]);

    // Calculate Net WPM and Accuracy
    const elapsedTime = endTime && startTime ? (endTime - startTime) / 1000 : 0; // Prevent division by zero
    const wordsTyped = Math.ceil(userInput.length / 5); // Every 5 characters is counted as a word
    const netWPM = elapsedTime
        ? Math.max((wordsTyped - errorCount) / elapsedTime, 0) * 100
        : 0;

    // Calculate accuracy as a percentage
    const charactersTyped = userInput.length;
    const accuracy = Math.max(
        ((charactersTyped - errorCount) / charactersTyped) * 100,
        0
    );

    const starsEarned = Math.round((accuracy / 100) * 3);

    // Get the current character to be typed
    const currentCharacter = screen.content[currentCharacterIndex];

    //save user progress in the database
    const handleLessonCompletion = async () => {
        const timeout = setTimeout(() => {
            router.get("/lesson/" + nextScreen.url);
        }, 100);
    };

    return (
        <div className="hidden md:flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
            <p className="w-full p-4 text-2xl text-center">
                Put both of your hands on the keyboard and use the highlighted
                finger
            </p>
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
                            <span className={`text-2xl font-naskh ${color}`}>
                                {char}
                            </span>
                        </span>
                    );
                })}
            </p>

            {/* start images */}
            {user_settings.show_hands === true ? (
                <div className="flex flex-row justify-center relative w-full opacity-75">
                    {screen.content.split("").map((char, i) => {
                        let fingerClass = "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                        let shiftFingerClass =
                            "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                        let shiftImage = "/img/fingers/left-resting-hand.webp";

                        if (macLeftKeys.includes(char.toLowerCase())) {
                            fingerClass = "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                            shiftFingerClass =
                                "absolute -right-28 -top-7 w-4/5";
                            shiftImage = "/img/fingers/right-resting-hand.webp";
                        } else if (macRightKeys.includes(char.toLowerCase())) {
                            fingerClass = "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
                            shiftFingerClass =
                                "absolute -left-44 -top-14 w-4/5";
                            shiftImage = "/img/fingers/left-resting-hand.webp";
                        }

                        if (char === " ") {
                            const fingerImage = macFingerMapping[char] || ""; // Get the finger image
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

                        const fingerImage = macFingerMapping[char] || ""; // Get the finger image

                        // Handle characters that require the Shift key
                        if (macRightShiftKeys.includes(char)) {
                            shiftImage = "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
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
            )}
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
}
