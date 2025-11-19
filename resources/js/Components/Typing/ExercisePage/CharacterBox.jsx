import React, { memo } from "react";

/**
 * Memoized character box component to prevent unnecessary re-renders
 * Only re-renders when the character's color or flip state changes
 */
const CharacterBox = memo(({ char, color, flipped }) => {
    return (
        <div className="space-y-4">
            <div
                className={`w-20 h-16 mx-1 py-2 px-2 text-5xl text-center border border-subtle rounded-xl font-naskh ${color} ${
                    flipped ? "flip" : ""
                }`}
            >
                {char}
            </div>
        </div>
    );
});

CharacterBox.displayName = "CharacterBox";

export default CharacterBox;

