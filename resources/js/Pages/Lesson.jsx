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
                if (/^[a-zA-Z ]$/.test(key) || key === " ") {
                    setUserInput((prev) => prev + key);

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

    const elapsedTime =
        endTime && startTime ? (endTime - startTime) / 60000 : null; // Convert to minutes
    const wordsTyped = Math.ceil(userInput.length / 5); // Every 5 characters is counted as a word
    const netWPM = elapsedTime ? (wordsTyped - errorCount) / elapsedTime : 0;

    // Calculate accuracy as a percentage
    const charactersTyped = userInput.length;
    const accuracy = ((charactersTyped - errorCount) / charactersTyped) * 100;

    return (
        <div>
            <p>
                {typingText.split("").map((char, i) => {
                    let color = "black";
                    if (i < userInput.length) {
                        color = char === userInput[i] ? "green" : "red";
                    }
                    return (
                        <span key={i} style={{ color }}>
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
