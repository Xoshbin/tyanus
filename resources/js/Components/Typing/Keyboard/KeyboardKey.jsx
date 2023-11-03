export default function KeyboardKey({
    mainKey,
    secondKey,
    currentCharacter,
    className = "",
}) {
    return (
        <div
            className={`flex keyboard-key inline-block bg-neutral-100 outline outline-1 outline-stone-300 border-b-2 border-b-stone-400 rounded-md mx-0.5 ${className} ${
                currentCharacter &&
                ((mainKey && mainKey.toLowerCase()) ===
                    currentCharacter.toLowerCase() ||
                    (secondKey && secondKey.toLowerCase()) ===
                        currentCharacter.toLowerCase())
                    ? "bg-green-400"
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
