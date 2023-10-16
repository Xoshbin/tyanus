import { useEffect, useState, useRef } from "react";

export default function Lesson({ typingText }) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

            // Check if user has reached the end of the text
            if (userInput.length < typingText.length) {
                // Only capture character keys
                if (key.length === 1) {
                    setUserInput((prev) => prev + key);
                }
                // Check if typing is complete
                if (userInput.length + 1 === typingText.length) {
                    setIsTypingComplete(true);
                    setEndTime(Date.now());
                    //? calculate the typing speed and accuracy
                    //? send the data back to the server in here
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
        endTime && startTime ? (endTime - startTime) / 1000 : null;
    const correctKeystrokes = userInput
        .split("")
        .filter((char, i) => char === typingText[i]).length;

    // Typing speed in characters per second
    const speed = elapsedTime ? correctKeystrokes / elapsedTime : 0;

    // Accuracy in percentage
    const accuracy =
        userInput.length > 0 ? (correctKeystrokes / userInput.length) * 100 : 0;

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
                    <p>
                        Typing Speed: {speed.toFixed(2)} CPS (Characters per
                        Second)
                    </p>
                    <p>Accuracy: {accuracy.toFixed(2)}%</p>
                </div>
            )}
        </div>
    );
}
