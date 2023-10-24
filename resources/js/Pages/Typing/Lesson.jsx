import { useEffect, useState, router } from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";
import {
    macFingerMapping,
    macLeftKeys,
    macRightKeys,
    macRightShiftKeys,
    macLeftShiftKeys,
} from "@/data/keyMappings/macKeyMapping";
import axios from "axios";
import Modal from "@/Components/Modal";
import ExerciseSummary from "@/Components/Typing/ExerciseSummary";

export default function Lesson({ screen, auth }) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [errorCount, setErrorCount] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    // Define a function to update the current character
    const updateCurrentCharacter = () => {
        if (currentCharacterIndex < screen.content.length) {
            setCurrentCharacterIndex(currentCharacterIndex + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

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

            // Check for errors (exclude Shift key)
            if (
                currentCharacterIndex < screen.content.length &&
                key !== screen.content[currentCharacterIndex]
            ) {
                // Exclude Shift key from errors
                if (key !== "Shift") {
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
    const elapsedTime =
        endTime && startTime ? (endTime - startTime) / 60000 : 0; // Prevent division by zero
    const wordsTyped = Math.ceil(userInput.length / 5); // Every 5 characters is counted as a word
    const netWPM = elapsedTime
        ? Math.max((wordsTyped - errorCount) / elapsedTime, 0)
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
    const handleLessonCompletion = async (
        typingSpeed,
        accuracy,
        time,
        starsEarned
    ) => {
        try {
            const response = await axios.post("/api/saveprogress", {
                user_id: auth.id,
                lesson_id: screen.lesson_id,
                exercise_id: screen.exercise_id,
                screen_id: screen.id,
                locale: screen.locale,
                typing_speed: typingSpeed,
                accuracy_percentage: accuracy,
                stars_earned: starsEarned,
                time: time,
            });
            console.log(response.status);
            if (response.status === 201) {
                setModalOpen(true);
            }

            // Handle the response as needed
        } catch (error) {
            console.error(error);
            // Handle errors
        }
    };

    const closeModal = () => {
        setModalOpen(false);

        reset();
    };

    return (
        <div className="flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
            <p className="w-full py-4 px-4 text-2xl text-center">
                {screen.content.split("").map((char, i) => {
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
            <div className="flex flex-row justify-center relative w-full">
                {screen.content.split("").map((char, i) => {
                    let fingerClass = "absolute -right-28 -top-7 w-4/5"; // Initialize hand class

                    if (macLeftKeys.includes(char.toLowerCase())) {
                        fingerClass = "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                    } else if (macRightKeys.includes(char.toLowerCase())) {
                        fingerClass = "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
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
                    let shiftImage = null;
                    let shiftFingerClass = "absolute -right-28 -top-7 w-4/5"; // Initialize hand class

                    // Handle characters that require the Shift key
                    if (macRightShiftKeys.includes(char)) {
                        shiftImage = "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                        shiftFingerClass = "absolute -right-28 -top-7 w-4/5";
                    } else if (macLeftShiftKeys.includes(char)) {
                        shiftImage = "/img/fingers/left-shift.webp"; // Set the image for the left Shift key
                        shiftFingerClass = "absolute -left-44 -top-14 w-4/5";
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
                                <img
                                    src={fingerImage}
                                    alt=""
                                    className={fingerClass} // Apply your styling for the finger image here
                                />
                            )}
                        </span>
                    );
                })}
            </div>
            <MacKeyboardKu currentCharacter={currentCharacter} />

            <Modal show={modalOpen} onClose={closeModal}>
                <ExerciseSummary
                    authid={auth.id}
                    starsEarned={starsEarned.toFixed(2)}
                    finishedTyping={isTypingComplete}
                    speed={netWPM.toFixed(2)}
                    accuracy={accuracy.toFixed(2)}
                    time={elapsedTime.toFixed(2)}
                ></ExerciseSummary>
            </Modal>
        </div>
    );
}
