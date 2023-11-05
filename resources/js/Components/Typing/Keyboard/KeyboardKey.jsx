export default function KeyboardKey({
    mainKey,
    secondKey,
    currentCharacter,
    className = "",
    screenType,
}) {
    return (
        <div
            className={`flex keyboard-key bg-neutral-100 outline outline-1 outline-stone-300 border-b-2 border-b-stone-400 rounded-md mx-0.5 ${className} ${
                currentCharacter &&
                ((mainKey && mainKey.toLowerCase()) ===
                    currentCharacter.toLowerCase() ||
                    (secondKey && secondKey.toLowerCase()) ===
                        currentCharacter.toLowerCase())
                    ? screenType === "intro"
                        ? "bg-green-400 animate-bounce"
                        : "bg-green-400"
                    : ""
            }`}
        >
            <div className="flex flex-col">
                <div className="flex text-xs">{secondKey}</div>
                <div className="main-key flex" with="VK_SHIFT">
                    {mainKey}
                </div>
            </div>
        </div>
    );
}
