import { useEffect, useState } from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";

// Define the mapping between keyboard keys and finger images
const macFingerMapping = {
    //English characters
    a: "/img/fingers/a.webp",
    A: "/img/fingers/a.webp",
    b: "/img/fingers/b.webp",
    B: "/img/fingers/b.webp",
    c: "/img/fingers/c.webp",
    C: "/img/fingers/c.webp",
    d: "/img/fingers/d.webp",
    D: "/img/fingers/d.webp",
    e: "/img/fingers/e.webp",
    E: "/img/fingers/e.webp",
    f: "/img/fingers/f.webp",
    F: "/img/fingers/f.webp",
    g: "/img/fingers/g.webp",
    G: "/img/fingers/g.webp",
    h: "/img/fingers/h.webp",
    H: "/img/fingers/h.webp",
    i: "/img/fingers/i.webp",
    I: "/img/fingers/i.webp",
    j: "/img/fingers/j.webp",
    J: "/img/fingers/j.webp",
    k: "/img/fingers/k.webp",
    K: "/img/fingers/k.webp",
    l: "/img/fingers/l.webp",
    L: "/img/fingers/l.webp",
    m: "/img/fingers/m.webp",
    M: "/img/fingers/m.webp",
    n: "/img/fingers/n.webp",
    N: "/img/fingers/n.webp",
    o: "/img/fingers/o.webp",
    O: "/img/fingers/o.webp",
    p: "/img/fingers/p.webp",
    P: "/img/fingers/p.webp",
    q: "/img/fingers/q.webp",
    Q: "/img/fingers/q.webp",
    r: "/img/fingers/r.webp",
    R: "/img/fingers/r.webp",
    s: "/img/fingers/s.webp",
    S: "/img/fingers/s.webp",
    t: "/img/fingers/t.webp",
    T: "/img/fingers/t.webp",
    u: "/img/fingers/u.webp",
    U: "/img/fingers/u.webp",
    v: "/img/fingers/v.webp",
    V: "/img/fingers/v.webp",
    w: "/img/fingers/w.webp",
    W: "/img/fingers/w.webp",
    x: "/img/fingers/x.webp",
    X: "/img/fingers/x.webp",
    y: "/img/fingers/y.webp",
    Y: "/img/fingers/y.webp",
    z: "/img/fingers/z.webp",
    Z: "/img/fingers/z.webp",

    //Kurdish characters
    ا: "/img/fingers/a.webp",
    ئ: "/img/fingers/a.webp",
    ب: "/img/fingers/b.webp",
    ج: "/img/fingers/c.webp",
    چ: "/img/fingers/c.webp",
    د: "/img/fingers/d.webp",
    ذ: "/img/fingers/d.webp",
    ە: "/img/fingers/e.webp",
    ێ: "/img/fingers/e.webp",
    ف: "/img/fingers/f.webp",
    گ: "/img/fingers/g.webp",
    ه: "/img/fingers/h.webp",
    ح: "/img/fingers/h.webp",
    ی: "/img/fingers/i.webp",
    ى: "/img/fingers/i.webp",
    ژ: "/img/fingers/j.webp",
    ک: "/img/fingers/k.webp",
    ل: "/img/fingers/l.webp",
    ڵ: "/img/fingers/l.webp",
    م: "/img/fingers/m.webp",
    ن: "/img/fingers/n.webp",
    ۆ: "/img/fingers/o.webp",
    پ: "/img/fingers/p.webp",
    ق: "/img/fingers/q.webp",
    ر: "/img/fingers/r.webp",
    ڕ: "/img/fingers/r.webp",
    س: "/img/fingers/s.webp",
    ش: "/img/fingers/s.webp",
    ت: "/img/fingers/t.webp",
    ث: "/img/fingers/t.webp",
    ڤ: "/img/fingers/v.webp",
    و: "/img/fingers/w.webp",
    خ: "/img/fingers/x.webp",
    غ: "/img/fingers/x.webp",
    ی: "/img/fingers/y.webp",
    ز: "/img/fingers/z.webp",
    ض: "/img/fingers/z.webp",

    "\\": "/img/fingers/j.webp",
    "|": "/img/fingers/j.webp",
    '"': "/img/fingers/f.webp",
    "'": "/img/fingers/F.webp",
    ";": "/img/fingers/j.webp",
    ":": "/img/fingers/j.webp",
    "/": "/img/fingers/j.webp",
    "?": "/img/fingers/j.webp",
    ",": "/img/fingers/f.webp",
    ">": "/img/fingers/F.webp",
    "<": "/img/fingers/j.webp",
    "`": "/img/fingers/j.webp",
    "!": "/img/fingers/j.webp",
    "@": "/img/fingers/f.webp",
    "#": "/img/fingers/F.webp",
    $: "/img/fingers/j.webp",
    "%": "/img/fingers/j.webp",
    "^": "/img/fingers/j.webp",
    "&": "/img/fingers/j.webp",
    "*": "/img/fingers/f.webp",
    "(": "/img/fingers/F.webp",
    ")": "/img/fingers/j.webp",
    "-": "/img/fingers/j.webp",
    _: "/img/fingers/j.webp",
    "=": "/img/fingers/j.webp",
    "+": "/img/fingers/f.webp",
    enter: "/img/fingers/enter.webp",
    " ": "/img/fingers/space.webp",
    Shift: ["/img/fingers/left-shift.webp", "/img/fingers/right-shift.webp"],
    // Add more mappings for other keys as needed
};

const windowsFingerMapping = {
    //English characters
    a: "/img/fingers/a.webp",
    A: "/img/fingers/a.webp",
    b: "/img/fingers/b.webp",
    B: "/img/fingers/b.webp",
    c: "/img/fingers/c.webp",
    C: "/img/fingers/c.webp",
    d: "/img/fingers/d.webp",
    D: "/img/fingers/d.webp",
    e: "/img/fingers/e.webp",
    E: "/img/fingers/e.webp",
    f: "/img/fingers/f.webp",
    F: "/img/fingers/f.webp",
    g: "/img/fingers/g.webp",
    G: "/img/fingers/g.webp",
    h: "/img/fingers/h.webp",
    H: "/img/fingers/h.webp",
    i: "/img/fingers/i.webp",
    I: "/img/fingers/i.webp",
    j: "/img/fingers/j.webp",
    J: "/img/fingers/j.webp",
    k: "/img/fingers/k.webp",
    K: "/img/fingers/k.webp",
    l: "/img/fingers/l.webp",
    L: "/img/fingers/l.webp",
    m: "/img/fingers/m.webp",
    M: "/img/fingers/m.webp",
    n: "/img/fingers/n.webp",
    N: "/img/fingers/n.webp",
    o: "/img/fingers/o.webp",
    O: "/img/fingers/o.webp",
    p: "/img/fingers/p.webp",
    P: "/img/fingers/p.webp",
    q: "/img/fingers/q.webp",
    Q: "/img/fingers/q.webp",
    r: "/img/fingers/r.webp",
    R: "/img/fingers/r.webp",
    s: "/img/fingers/s.webp",
    S: "/img/fingers/s.webp",
    t: "/img/fingers/t.webp",
    T: "/img/fingers/t.webp",
    u: "/img/fingers/u.webp",
    U: "/img/fingers/u.webp",
    v: "/img/fingers/v.webp",
    V: "/img/fingers/v.webp",
    w: "/img/fingers/w.webp",
    W: "/img/fingers/w.webp",
    x: "/img/fingers/x.webp",
    X: "/img/fingers/x.webp",
    y: "/img/fingers/y.webp",
    Y: "/img/fingers/y.webp",
    z: "/img/fingers/z.webp",
    Z: "/img/fingers/z.webp",

    //Kurdish characters
    ا: "/img/fingers/a.webp",
    آ: "/img/fingers/a.webp",
    ب: "/img/fingers/b.webp",
    ى: "/img/fingers/b.webp",
    ج: "/img/fingers/c.webp",
    چ: "/img/fingers/c.webp",
    د: "/img/fingers/d.webp",
    ذ: "/img/fingers/d.webp",
    ە: "/img/fingers/e.webp",
    ي: "/img/fingers/e.webp",
    ف: "/img/fingers/f.webp",
    إ: "/img/fingers/f.webp",
    گ: "/img/fingers/g.webp",
    غ: "/img/fingers/g.webp",
    ه: "/img/fingers/h.webp",
    ح: "/img/fingers/i.webp",
    ع: "/img/fingers/i.webp",
    ژ: "/img/fingers/j.webp",
    أ: "/img/fingers/j.webp",
    ک: "/img/fingers/k.webp",
    ك: "/img/fingers/k.webp",
    ل: "/img/fingers/l.webp",
    ڵ: "/img/fingers/l.webp",
    م: "/img/fingers/m.webp",
    ـ: "/img/fingers/m.webp",
    ن: "/img/fingers/n.webp",
    ة: "/img/fingers/n.webp",
    ۆ: "/img/fingers/o.webp",
    ؤ: "/img/fingers/o.webp",
    پ: "/img/fingers/p.webp",
    ث: "/img/fingers/p.webp",
    ق: "/img/fingers/q.webp",
    ر: "/img/fingers/r.webp",
    ڕ: "/img/fingers/r.webp",
    س: "/img/fingers/s.webp",
    ش: "/img/fingers/s.webp",
    ت: "/img/fingers/t.webp",
    ط: "/img/fingers/t.webp",
    ڤ: "/img/fingers/v.webp",
    ظ: "/img/fingers/v.webp",
    و: "/img/fingers/w.webp",
    وو: "/img/fingers/w.webp",
    خ: "/img/fingers/x.webp",
    ص: "/img/fingers/x.webp",
    ی: "/img/fingers/y.webp",
    ێ: "/img/fingers/y.webp",
    ز: "/img/fingers/z.webp",
    ض: "/img/fingers/z.webp",

    "\\": "/img/fingers/j.webp",
    "|": "/img/fingers/j.webp",
    '"': "/img/fingers/f.webp",
    "'": "/img/fingers/F.webp",
    ";": "/img/fingers/j.webp",
    ":": "/img/fingers/j.webp",
    "/": "/img/fingers/j.webp",
    "?": "/img/fingers/j.webp",
    ",": "/img/fingers/f.webp",
    ">": "/img/fingers/F.webp",
    "<": "/img/fingers/j.webp",
    "`": "/img/fingers/j.webp",
    "!": "/img/fingers/j.webp",
    "@": "/img/fingers/f.webp",
    "#": "/img/fingers/F.webp",
    $: "/img/fingers/j.webp",
    "%": "/img/fingers/j.webp",
    "^": "/img/fingers/j.webp",
    "&": "/img/fingers/j.webp",
    "*": "/img/fingers/f.webp",
    "(": "/img/fingers/F.webp",
    ")": "/img/fingers/j.webp",
    "-": "/img/fingers/j.webp",
    _: "/img/fingers/j.webp",
    "=": "/img/fingers/j.webp",
    "+": "/img/fingers/f.webp",
    enter: "/img/fingers/enter.webp",
    " ": "/img/fingers/space.webp",
    // Add more mappings for other keys as needed
};

export default function Lesson({ typingText }) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [errorCount, setErrorCount] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    // Define your left and right key arrays
    const macLeftKeys = [
        //English keys
        "`",
        "1",
        "q",
        "a",
        "z",
        "2",
        "w",
        "s",
        "x",
        "3",
        "e",
        "d",
        "c",
        "4",
        "r",
        "f",
        "v",
        "5",
        "t",
        "g",
        "b",
        "6",
        " ",

        //English Shift keys
        "~",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",

        //Kurdish keys
        "١",
        "ق",
        "ا",
        "ز",
        "٢",
        "و",
        "س",
        "خ",
        "٣",
        "ە",
        "د",
        "ج",
        "٤",
        "ر",
        "ف",
        "ڤ",
        "٥",
        "ت",
        "گ",
        "ب",
        "٦",

        //Kurdish shift keys
        "ئ",
        "ض",
        "ش",
        "غ",
        "ێ",
        "ذ",
        "چ",
        "ڕ",
        "ث",
    ];
    const macRightKeys = [
        //English keys
        "\\",
        "]",
        "'",
        "/",
        "=",
        "[",
        ";",
        ".",
        "-",
        "p",
        "l",
        ",",
        "0",
        "o",
        "k",
        "m",
        "9",
        "i",
        "j",
        "n",
        "8",
        "u",
        "h",
        "b",
        "y",
        "g",

        //English Shift keys
        "|",
        "}",
        '"',
        "?",
        "+",
        "{",
        ":",
        ">",
        "_",
        "<",
        ")",
        "(",
        "*",

        //Kurdish keys
        "ع",
        "\\",
        "؛",
        "پ",
        "ل",
        "،",
        "٠",
        "ۆ",
        "ک",
        "م",
        "٩",
        "ی",
        "ژ",
        "ن",
        "٨",
        "و",
        "ه",
        "ب",
        "ی",
        "گ",

        //Kurdish Shift keys
        "غ",
        "؟",
        "ڵ",
        "ى",
        "ى",
        "ح",
    ];

    const windowsLeftKeys = [
        //English keys
        "`",
        "1",
        "q",
        "a",
        "z",
        "2",
        "w",
        "s",
        "x",
        "3",
        "e",
        "d",
        "c",
        "4",
        "r",
        "f",
        "v",
        "5",
        "t",
        "g",
        "b",
        "6",
        " ",

        //English Shift keys
        "~",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",

        //Kurdish keys
        "١",
        "ق",
        "ا",
        "ز",
        "٢",
        "و",
        "س",
        "خ",
        "٣",
        "ە",
        "د",
        "ج",
        "٤",
        "ر",
        "ف",
        "ڤ",
        "٥",
        "ت",
        "گ",
        "ب",
        "٦",

        //Kurdish shift keys
        "آ",
        "ض",
        "ش",
        "ص",
        "ي",
        "ذ",
        "چ",
        "ڕ",
        "إ",
        "ظ",
        "ط",
        "غ",
        "ى",
    ];
    const windowsRightKeys = [
        //English keys
        "\\",
        "]",
        "'",
        "/",
        "=",
        "[",
        ";",
        ".",
        "-",
        "p",
        "l",
        ",",
        "0",
        "o",
        "k",
        "m",
        "9",
        "i",
        "j",
        "n",
        "8",
        "u",
        "h",
        "b",
        "y",
        "g",

        //English Shift keys
        "|",
        "}",
        '"',
        "?",
        "+",
        "{",
        ":",
        ">",
        "_",
        "<",
        ")",
        "(",
        "*",

        //Kurdish keys
        "؛",
        "پ",
        "ل",
        "،",
        "٠",
        "ۆ",
        "ک",
        "م",
        "٩",
        "ح",
        "ژ",
        "ن",
        "٨",
        "ئ",
        "ه",

        //Kurdish Shift keys
        "؟",
        "ث",
        "ڵ",
        "ؤ",
        "ك",
        "ـ",
        "ع",
        "أ",
        "ة",
        "ء",
    ];

    // Utilize the $macShiftKeyCombinationsEN array
    const macRightShiftKeys = [
        "~",
        "!",
        "@",
        "Q",
        "A",
        "Z",
        "#",
        "W",
        "S",
        "X",
        "$",
        "E",
        "D",
        "C",
        "%",
        "R",
        "F",
        "V",
        "^",
        "T",
        "G",
        "B",
        "~",
        "!",
        "@",
        "`",
        "آ",
        "ض",
        "#",
        "وو",
        "ش",
        "ص",
        "$",
        "ي",
        "ذ",
        "چ",
        "%",
        "^",
        "ڕ",
        "ط",
        "إ",
        "غ",
        "ظ",
        "ى",
        "ئ",
    ];
    const macLeftShiftKeys = [
        "+",
        "_",
        "P",
        "{",
        "}",
        "|",
        '"',
        "?",
        ">",
        "L",
        "O",
        ")",
        "(",
        "I",
        "K",
        "<",
        "M",
        "J",
        "U",
        "*",
        "&",
        "Y",
        "H",
        "N",
        "+",
        "_",
        "ث",
        "}",
        "{",
        ":",
        '"',
        "؟",
        "ڵ",
        "(",
        "ؤ",
        "ڵ",
        "ح",
        ")",
        "ع",
        "ك",
        ">",
        "*",
        "&",
        "ء",
        "ێ",
        "أ",
        "ـ",
        "ة",
    ];

    const windowsRightShiftKeys = [
        "آ",
        "ض",
        "ش",
        "ص",
        "ي",
        "ذ",
        "چ",
        "ڕ",
        "إ",
        "ظ",
        "ط",
        "غ",
        "ى",
        "~",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
    ];
    const windowsLeftShiftKeys = [
        "؟",
        "ث",
        "ڵ",
        "ؤ",
        "ك",
        "ـ",
        "ع",
        "أ",
        "ة",
        "ء",
        "|",
        "}",
        '"',
        "?",
        "+",
        "{",
        ":",
        ">",
        "_",
        "<",
        ")",
        "(",
        "*",
    ];

    // Define a function to update the current character
    const updateCurrentCharacter = () => {
        if (currentCharacterIndex < typingText.length) {
            setCurrentCharacterIndex(currentCharacterIndex + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

            // Check if the user has reached the end of the text
            if (currentCharacterIndex < typingText.length) {
                // Only capture character keys (letters and spaces)
                if (
                    !e.ctrlKey &&
                    !e.metaKey &&
                    !e.altKey &&
                    !e.getModifierState("CapsLock") &&
                    e.key !== "Shift" &&
                    e.key !== "Tab" &&
                    !e.key.startsWith("Arrow") &&
                    e.key !== "Backspace" // Exclude the Backspace key
                ) {
                    const characterToType = e.key === "Enter" ? "↩" : e.key;

                    // Check if the character at the current position should match the Enter symbol
                    if (
                        typingText.charAt(currentCharacterIndex) ===
                        characterToType
                    ) {
                        setUserInput((prev) => prev + characterToType);
                    } else if (characterToType === "↩") {
                        // Check if the entered character is not "↩"
                        setUserInput((prev) => prev + characterToType);
                    } else {
                        setUserInput((prev) => prev + e.key);
                    }

                    // Check if typing is complete
                    if (currentCharacterIndex + 1 === typingText.length) {
                        setEndTime(Date.now());
                        setIsTypingComplete(true);
                    }

                    // Update the current character
                    updateCurrentCharacter();
                }
            }

            // Check for errors (exclude Shift key)
            if (
                currentCharacterIndex < typingText.length &&
                key !== typingText[currentCharacterIndex]
            ) {
                // Exclude Shift key from errors
                if (key !== "Shift") {
                    setErrorCount((prev) => prev + 1);
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
    }, [userInput, typingText, currentCharacterIndex]);

    // Calculate Net WPM and Accuracy
    const elapsedTime =
        endTime && startTime ? (endTime - startTime) / 60000 : 0; // Prevent division by zero
    const wordsTyped = Math.ceil(userInput.length / 5); // Every 5 characters is counted as a word
    const netWPM = elapsedTime
        ? Math.max((wordsTyped - errorCount) / elapsedTime, 0)
        : 0;

    // Calculate accuracy as a percentage
    const charactersTyped = userInput.length;
    const accuracy = Math.max(
        ((charactersTyped - errorCount) / charactersTyped) * 100,
        0
    );

    // Get the current character to be typed
    const currentCharacter = typingText[currentCharacterIndex];

    return (
        <div className="flex flex-col justify-center text-center">
            <p>
                {typingText.split("").map((char, i) => {
                    let color = "text-black";
                    let fingerClass = "absolute -right-28 -top-7 w-4/5"; // Initialize hand class

                    if (windowsLeftKeys.includes(char.toLowerCase())) {
                        fingerClass = "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                    } else if (windowsRightKeys.includes(char.toLowerCase())) {
                        fingerClass = "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
                    }

                    if (i < userInput.length) {
                        color =
                            char === userInput[i]
                                ? "text-green-400"
                                : "text-red-400"; // Remove underline when user types correctly
                    }

                    if (char === " ") {
                        const fingerImage = windowsFingerMapping[char] || ""; // Get the finger image
                        return (
                            <span key={i}>
                                {char === currentCharacter && (
                                    <img
                                        src={fingerImage}
                                        alt=""
                                        className={fingerClass} // Apply your styling for the finger image here
                                    />
                                )}
                                <span
                                    className={`text-2xl font-naskh underline ${color}`}
                                >
                                    {char}
                                </span>
                            </span>
                        );
                    }

                    const fingerImage = windowsFingerMapping[char] || ""; // Get the finger image
                    let shiftImage = null;

                    // Handle characters that require the Shift key
                    if (windowsRightShiftKeys.includes(char)) {
                        shiftImage = "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                    } else if (windowsLeftShiftKeys.includes(char)) {
                        shiftImage = "/img/fingers/left-shift.webp"; // Set the image for the left Shift key
                    }

                    // Determine if the shiftImage should be shown
                    const shouldDisplayShiftImage =
                        shiftImage && char === currentCharacter;

                    return (
                        <span key={i}>
                            {shouldDisplayShiftImage && (
                                <img
                                    src={shiftImage}
                                    alt=""
                                    className={fingerClass} // Apply your styling for the finger image here
                                />
                            )}
                            {char === currentCharacter && (
                                <img
                                    src={fingerImage}
                                    alt=""
                                    className={fingerClass} // Apply your styling for the finger image here
                                />
                            )}
                            <span className={`text-2xl font-naskh ${color}`}>
                                {char}
                            </span>
                        </span>
                    );
                })}
            </p>
            <MacKeyboardEn currentCharacter={currentCharacter} />

            {isTypingComplete && (
                <div>
                    <p>Typing Complete! Congratulations!</p>
                    <p>Net WPM: {netWPM.toFixed(2)} WPM (Words per Minute)</p>
                    <p>Accuracy: {accuracy.toFixed(2)}%</p>
                </div>
            )}
        </div>
    );
}
