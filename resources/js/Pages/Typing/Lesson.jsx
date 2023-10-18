import { useEffect, useState } from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";
import WindwosKeyboardKu from "@/Components/Typing/Keyboard/WindowsKeyboardKu";

export default function Lesson({ typingText }) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [errorCount, setErrorCount] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    // Define a function to update the current character
    const updateCurrentCharacter = () => {
        if (currentCharacterIndex < typingText.length) {
            setCurrentCharacterIndex(currentCharacterIndex + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

            // Check if the user has reached the end of the text
            if (currentCharacterIndex < typingText.length) {
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
                        typingText.charAt(currentCharacterIndex) ===
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
                    if (currentCharacterIndex + 1 === typingText.length) {
                        setEndTime(Date.now());
                        setIsTypingComplete(true);
                    }

                    // Update the current character
                    updateCurrentCharacter();
                }
            }

            // Check for errors (exclude Shift key)
            if (
                currentCharacterIndex < typingText.length &&
                key !== typingText[currentCharacterIndex]
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

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [userInput, typingText, currentCharacterIndex]);

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

    // Get the current character to be typed
    const currentCharacter = typingText[currentCharacterIndex];
    console.log("currentCharacter" + currentCharacter);

    return (
        <div className="flex flex-col justify-center text-center">
            <p>
                {typingText.split("").map((char, i) => {
                    let color = "text-black";

                    if (i < userInput.length) {
                        color =
                            char === userInput[i]
                                ? "text-green-400"
                                : "text-red-400"; // Remove underline when user types correctly
                    }

                    if (char === " ") {
                        return (
                            <span
                                key={i}
                                className={`text-2xl font-naskh underline ${color}`}
                            >
                                &nbsp; {/* Non-breaking space */}
                            </span>
                        );
                    }

                    return (
                        <span
                            key={i}
                            className={`text-2xl font-naskh ${color}`}
                        >
                            {char}
                        </span>
                    );
                })}
            </p>
            <MacKeyboardEn currentCharacter={currentCharacter} />

            {isTypingComplete && (
                <div>
                    <p>Typing Complete! Congratulations!</p>
                    <p>Net WPM: {netWPM.toFixed(2)} WPM (Words per Minute)</p>
                    <p>Accuracy: {accuracy.toFixed(2)}%</p>
                </div>
            )}
        </div>
    );
}
