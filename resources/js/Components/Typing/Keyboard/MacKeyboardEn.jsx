import KeyboardKey from "@/Components/Typing/Keyboard/KeyboardKey";

export default function MacKeyboardEn({ currentCharacter, screenType }) {
    const cmdIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-command"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
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
                        mainKey="P"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="O"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="I"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="U"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Y"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="T"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="R"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="E"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="W"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Q"
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
                        mainKey=";"
                        secondKey=":"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="L"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="K"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="J"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="H"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="G"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="F"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="D"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="S"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="A"
                        secondKey=""
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
                        secondKey="?"
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
                        mainKey=","
                        secondKey="<"
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="M"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="N"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="B"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="V"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="C"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="X"
                        secondKey=""
                        currentCharacter={currentCharacter}
                        className="w-12 h-10 items-center justify-center text-sm"
                    />
                    <KeyboardKey
                        screenType={screenType}
                        mainKey="Z"
                        secondKey=""
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
                        secondKey={cmdIcon}
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
                        secondKey={cmdIcon}
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
