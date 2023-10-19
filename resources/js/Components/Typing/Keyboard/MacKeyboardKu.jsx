import KeyboardKey from "@/Components/Typing/Keyboard/KeyboardKey";
import { useEffect } from "react";

export default function MacKeyboardKu({ currentCharacter }) {
    return (
        <div
            className="bg-zinc-200 px-2 py-4 rounded-lg shadow-md w-full max-w-3xl select-none"
            dir="rtl"
        >
            <div className="keyboard-layout flex flex-col">
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        mainKey="Delete"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end px-2 grow text-xs"
                    />
                    <KeyboardKey
                        mainKey="="
                        secondKey="+"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="-"
                        secondKey="_"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٠"
                        secondKey="("
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٩"
                        secondKey=")"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٨"
                        secondKey="ى"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٧"
                        secondKey="&"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٦"
                        secondKey="^"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٥"
                        secondKey="%"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٤"
                        secondKey="$"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٣"
                        secondKey="#"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="٢"
                        secondKey="@"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="١"
                        secondKey="!"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="`"
                        secondKey="~"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        mainKey="\"
                        secondKey="|"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="["
                        secondKey="{"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="]"
                        secondKey="}"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="پ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ۆ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey=""
                        secondKey="ى"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey=""
                        secondKey="وو"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ی"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ت"
                        secondKey="ث"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ر"
                        secondKey="ڕ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ە"
                        secondKey="ێ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="و"
                        secondKey="ّّ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ق"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="Tab"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end justify-end px-2 grow text-xs"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        mainKey="↩"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end px-2 grow text-xs"
                    />
                    <KeyboardKey
                        mainKey="ع"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="؛"
                        secondKey=":"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ل"
                        secondKey="ڵ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ک"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ژ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ه"
                        secondKey="ح"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="گ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ف"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="د"
                        secondKey="ذ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="س"
                        secondKey="ش"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ا"
                        secondKey="ئ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="Caps Lock"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end justify-end px-2 grow text-xs"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        mainKey="Shift"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end px-2 grow text-xs"
                    />
                    <KeyboardKey
                        mainKey=""
                        secondKey="؟"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="."
                        secondKey="<"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="،"
                        secondKey=">"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="م"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ن"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ب"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ڤ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ج"
                        secondKey="چ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="خ"
                        secondKey="غ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="ز"
                        secondKey="ض"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        mainKey="Shift"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end justify-end px-2 grow text-xs"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        mainKey="Ctrl"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        mainKey="Option"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        mainKey="CMD"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        mainKey=" "
                        className="w-12 h-10 items-end text-xs px-2 flex-none grow"
                        currentCharacter={currentCharacter}
                        data-key="Space"
                    />
                    <KeyboardKey
                        mainKey="CMD"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        mainKey="Option"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        mainKey="Ctrl"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                </div>
            </div>
        </div>
    );
}
