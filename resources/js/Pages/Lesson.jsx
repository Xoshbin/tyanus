import { useEffect, useState, useRef } from "react";

export default function Lesson({ typingText }) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [errorCount, setErrorCount] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

            // Check if the user has reached the end of the text
            if (userInput.length < typingText.length) {
                // Only capture character keys (letters and spaces)
                if (
                    !e.ctrlKey &&
                    !e.metaKey &&
                    !e.altKey &&
                    !e.getModifierState("CapsLock") &&
                    e.key !== "Shift" &&
                    e.key !== "Tab" &&
                    !e.key.startsWith("Arrow")
                ) {
                    const characterToType = e.key === "Enter" ? "↩" : e.key;

                    // Check if the character at the current position should match the Enter symbol
                    if (
                        typingText.charAt(userInput.length) === characterToType
                    ) {
                        setUserInput((prev) => prev + characterToType);
                    } else {
                        setUserInput((prev) => prev + e.key);
                    }

                    // Check if typing is complete
                    if (userInput.length + 1 === typingText.length) {
                        setEndTime(Date.now());
                        setIsTypingComplete(true);
                    }
                }
            }

            // Check for errors (exclude Shift key)
            if (
                userInput.length < typingText.length &&
                key !== typingText[userInput.length]
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
    }, [userInput, typingText]);

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

    return (
        <div className="text-center">
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
