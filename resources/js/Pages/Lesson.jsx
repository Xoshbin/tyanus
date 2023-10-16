import { useEffect, useState } from "react";

export default function Lesson({ typingText }) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);

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
                    //? calculate the typing speed and accuracy
                    //? send the data back to the server in here
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [userInput, typingText]);

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
            {isTypingComplete && <div>Typing Complete! Congratulations!</div>}
        </div>
    );
}
