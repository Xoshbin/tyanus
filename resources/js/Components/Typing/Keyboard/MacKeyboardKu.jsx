import KeyboardKey from "@/Components/Typing/Keyboard/KeyboardKey";
import { useEffect } from "react";

export default function MacKeyboardKu({ currentCharacter, screenType }) {
    return (
        <div
            className="bg-zinc-200 px-2 py-4 rounded-lg shadow-md w-full max-w-3xl select-none"
            dir="rtl"
        >
            <div className="keyboard-layout flex flex-col">
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Delete"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end px-2 grow text-xs"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="="
                        secondKey="+"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="-"
                        secondKey="_"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٠"
                        secondKey="("
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٩"
                        secondKey=")"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٨"
                        secondKey="ى"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٧"
                        secondKey="&"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٦"
                        secondKey="^"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٥"
                        secondKey="%"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٤"
                        secondKey="$"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٣"
                        secondKey="#"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="٢"
                        secondKey="@"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="١"
                        secondKey="!"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="`"
                        secondKey="~"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="\"
                        secondKey="|"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="["
                        secondKey="{"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="]"
                        secondKey="}"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="پ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ۆ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey=""
                        secondKey="ى"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey=""
                        secondKey="وو"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ی"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ت"
                        secondKey="ث"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ر"
                        secondKey="ڕ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ە"
                        secondKey="ێ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="و"
                        secondKey="ّّ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ق"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Tab"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end justify-end px-2 grow text-xs"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="↩"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end px-2 grow text-xs"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ع"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="؛"
                        secondKey=":"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ل"
                        secondKey="ڵ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ک"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ژ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ه"
                        secondKey="ح"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="گ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ف"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="د"
                        secondKey="ذ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="س"
                        secondKey="ش"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ا"
                        secondKey="ئ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Caps Lock"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end justify-end px-2 grow text-xs"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Shift"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end px-2 grow text-xs"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey=""
                        secondKey="؟"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="."
                        secondKey="<"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="،"
                        secondKey=">"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="م"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ن"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ب"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ڤ"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ج"
                        secondKey="چ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="خ"
                        secondKey="غ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ز"
                        secondKey="ض"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Shift"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end justify-end px-2 grow text-xs"
                    />
                </div>
                <div className="keyboard-row justify-center mb-3 flex">
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Ctrl"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Option"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="CMD"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey=" "
                        className="w-12 h-10 items-end text-xs px-2 flex-none grow"
                        currentCharacter={currentCharacter}
                        data-key="Space"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="CMD"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Option"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Ctrl"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                </div>
            </div>
        </div>
    );
}
