import React, { memo } from "react";

/**
 * Memoized sentence character component to prevent unnecessary re-renders
 * Only re-renders when the character's color or animation state changes
 */
const SentenceCharacter = memo(({ char, color, isNextChar }) => {
    if (char === " ") {
        return (
            <span>
                <span
                    className={`text-2xl font-naskh underline ${
                        color === "text-primary-800"
                            ? "text-transparent"
                            : color
                    }`}
                >
                    {char}
                </span>
            </span>
        );
    }

    if (isNextChar) {
        return (
            <span>
                <span className="animate-pulse text-2xl font-naskh font-black">
                    {char}
                </span>
            </span>
        );
    }

    return (
        <span>
            <span className={`text-2xl font-naskh ${color}`}>
                {char}
            </span>
        </span>
    );
});

SentenceCharacter.displayName = "SentenceCharacter";

export default SentenceCharacter;

