import KeyboardKey from "@/Components/Typing/Keyboard/KeyboardKey";
import { useEffect } from "react";

export default function WindowsKeyboardKu({ currentCharacter, screenType }) {
    const windowsIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-windows"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z" />
            <path d="M12 5l0 14" />
            <path d="M4 12l16 0" />
        </svg>
    );
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
                        mainKey="0"
                        secondKey=")"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="9"
                        secondKey="("
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="8"
                        secondKey="*"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="7"
                        secondKey="&"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="6"
                        secondKey="^"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="5"
                        secondKey="٪"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="4"
                        secondKey="$"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="3"
                        secondKey="#"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="2"
                        secondKey="@"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="1"
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
                        mainKey="]"
                        secondKey="}"
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
                        mainKey="پ"
                        secondKey="ث"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ۆ"
                        secondKey="ؤ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ح"
                        secondKey="ع"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ئ"
                        secondKey="ء"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ی"
                        secondKey="ێ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ت"
                        secondKey="ط"
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
                        secondKey="ي"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="و"
                        secondKey="وو"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ق"
                        secondKey="`"
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
                        mainKey="Enter"
                        secondKey="↵"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-end px-2 grow text-xs"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="'"
                        secondKey='"'
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
                        secondKey="ك"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ژ"
                        secondKey="أ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ه"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="گ"
                        secondKey="غ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ف"
                        secondKey="إ"
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
                        secondKey="آ"
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
                        mainKey="/"
                        secondKey="؟"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="."
                        secondKey=">"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="،"
                        secondKey="<"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="م"
                        secondKey="ـ"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ن"
                        secondKey="ة"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ب"
                        secondKey="ى"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="ڤ"
                        secondKey="ظ"
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
                        secondKey="ص"
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
                        mainKey=""
                        secondKey={windowsIcon}
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Alt"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey=" "
                        className="w-12 h-10 items-end text-xs px-2 flex-none grow"
                        data-key="Space"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Alt"
                        className="w-12 h-10 items-end text-xs px-2 flex-none"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey=""
                        secondKey={windowsIcon}
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
