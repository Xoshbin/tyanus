import React, { useEffect, useState } from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";
import WindowsKeyboardKu from "@/Components/Typing/Keyboard/WindowsKeyboardKu";
import {
    macFingerMapping,
    macLeftKeys,
    macRightKeys,
    macRightShiftKeys,
    macLeftShiftKeys,
} from "@/data/keyMappings/macKeyMapping";
import Modal from "@/Components/Modal";
import ExerciseSummary from "@/Components/Typing/ExercisePage/ExerciseSummary";
import AppLayout from "@/Layouts/AppLayout";
import LessonSettings from "@/Components/Typing/ExercisePage/LessonSettings";
import { router, usePage } from "@inertiajs/react";
import { Alert, Typography } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";
import { Spinner } from "@material-tailwind/react";

export default function Lesson({
    screen,
    exerciseTotalStars,
    prevScreen,
    nextScreen,
}) {
    const [userInput, setUserInput] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [errorCount, setErrorCount] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const { auth } = usePage().props;
    const { user_settings } = usePage().props;
    const { locale } = usePage().props;
    const keySound = "/sound/soft-key.mp3";
    const wrongKeySound = "/sound/wrong.mp3";
    const [errors, setErrors] = useState([]);
    //start setting current screen by prev screen content type
    const [currentScreen, setCurrentScreen] = useState(prevScreen.content_type);
    const [showFoundKeyMessage, setShowFoundKeyMessage] = useState(false);

    // this function is changing the current screen to letters if it's intro screen
    // by changing I mean the interface below not the data
    const handleScreenTransition = () => {
        // Reset the variables and states
        setCurrentScreen("letters");
        setCurrentCharacterIndex(0); // Reset the character index
        setUserInput(""); // Reset the user input
        setErrors([]); // Reset the errors
        setIsTypingComplete(false); // Reset typing completion status
        setStartTime(null); // Reset the start time
        setEndTime(null); // Reset the end time
        setErrorCount(0); // Reset the error count
    };

    const playKeySound = () => {
        if (user_settings.enable_sound) {
            const audio = new Audio(keySound);
            audio.play();
        }
    };

    const playWrongKeySound = () => {
        if (user_settings.enable_sound) {
            const audio = new Audio(wrongKeySound);
            audio.play();
        }
    };

    // Define a function to update the current character
    const updateCurrentCharacter = () => {
        if (currentCharacterIndex < screen.content.length) {
            setCurrentCharacterIndex(currentCharacterIndex + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

            playKeySound(); // Add this line to play the sound

            // Check if the user has reached the end of the text
            if (currentCharacterIndex < screen.content.length) {
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
                        screen.content.charAt(currentCharacterIndex) ===
                        characterToType
                    ) {
                        setUserInput((prev) => prev + characterToType);
                    } else if (characterToType === "↩") {
                        // Check if the entered character is not "↩"
                        setUserInput((prev) => prev + characterToType);
                    } else {
                        setUserInput((prev) => prev + e.key);

                        // Check for errors and store them in the 'errors' array
                        if (e.key !== screen.content[currentCharacterIndex]) {
                            setErrors((prevErrors) => [
                                ...prevErrors,
                                screen.content[currentCharacterIndex],
                            ]);
                        }
                    }

                    // Check if typing is complete
                    // check the complete based on the content of the shown screen (intro, letters)
                    // otherwise it's counting the characters length with different text on the screen
                    if (currentScreen === "intro") {
                        // Check if typing is complete
                        if (
                            currentCharacterIndex + 1 ===
                            prevScreen.content.length
                        ) {
                            setIsTypingComplete(true);
                        }
                    } else {
                        // Check if typing is complete
                        if (
                            currentCharacterIndex + 1 ===
                            screen.content.length
                        ) {
                            setEndTime(Date.now());
                            setIsTypingComplete(true);
                        }
                    }

                    // Update the current character
                    updateCurrentCharacter();
                }
            }

            // Check for space key
            if (key === " ") {
                e.preventDefault(); // Prevent scrolling when the space key is pressed
            }

            // Check for errors (exclude Shift key)
            if (
                currentCharacterIndex < screen.content.length &&
                key !== screen.content[currentCharacterIndex]
            ) {
                // Exclude Shift key from errors
                if (key !== "Shift") {
                    playWrongKeySound(); // Add this line to play the wrong character sound
                    setErrorCount((prev) => prev + 1);
                }
            }
        };

        if (!startTime && userInput.length === 0) {
            setStartTime(Date.now());
        }

        document.addEventListener("keydown", handleKeyDown);

        if (isTypingComplete) {
            // Call handleLessonCompletion with the required parameters.
            handleLessonCompletion(
                netWPM.toFixed(2),
                accuracy.toFixed(2),
                elapsedTime,
                starsEarned
            );
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [userInput, screen.content, currentCharacterIndex, isTypingComplete]);

    // Calculate Net WPM and Accuracy
    const elapsedTime = endTime && startTime ? (endTime - startTime) / 1000 : 0; // Prevent division by zero
    const wordsTyped = Math.ceil(userInput.length / 5); // Every 5 characters is counted as a word
    const netWPM = elapsedTime
        ? Math.max((wordsTyped - errorCount) / elapsedTime, 0) * 100
        : 0;

    // Calculate accuracy as a percentage
    const charactersTyped = userInput.length;
    const accuracy = Math.max(
        ((charactersTyped - errorCount) / charactersTyped) * 100,
        0
    );

    const starsEarned = Math.round((accuracy / 100) * 3);

    // Get the current character to be typed
    const currentCharacter = screen.content[currentCharacterIndex];

    //save user progress in the database
    const handleLessonCompletion = async (
        typingSpeed,
        accuracy,
        time,
        starsEarned
    ) => {
        //if current screen is intro
        //change it to letters after typing the intro letter
        if (currentScreen === "intro") {
            setShowFoundKeyMessage(true);
            const timeout = setTimeout(() => {
                handleScreenTransition();
            }, 5000);
        } else {
            router.post(
                "/saveprogress",
                {
                    user_id: auth.id,
                    lesson_id: screen.lesson_id,
                    exercise_id: screen.exercise_id,
                    screen_id: screen.id,
                    locale: screen.locale,
                    typing_speed: typingSpeed,
                    accuracy_percentage: accuracy,
                    stars_earned: starsEarned,
                    time: time,
                    error_characters: errors.join(""), // Join errors into a string
                },
                { preserveState: true }
            );
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <AppLayout
            user={auth ? auth.user : undefined}
            header={
                <LessonSettings
                    locale={locale}
                    screenlocale={screen.locale}
                ></LessonSettings>
            }
        >
            {/* show different interface based on the screen type */}
            {currentScreen === "intro" ? (
                <div className="hidden md:flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
                    {showFoundKeyMessage ? (
                        <div className="flex flex-col justify-center items-center">
                            <p className="w-full p-4 text-2xl text-center">
                                {__(
                                    "Great, you found it. Now, let's start practicing."
                                )}
                            </p>
                            <Spinner color="blue" className="h-12 w-12" />
                        </div>
                    ) : (
                        <p className="w-full p-4 text-2xl text-center">
                            {__(
                                "Put both of your hands on the keyboard and use the highlighted finger"
                            )}
                        </p>
                    )}

                    {showFoundKeyMessage === false && (
                        <p className="p-4 text-center bg-kblue-600 rounded-md">
                            {prevScreen.content.split("").map((char, i) => {
                                let color =
                                    "text-white text-5xl font-extrabold";

                                if (i < userInput.length) {
                                    color =
                                        char === userInput[i]
                                            ? "text-green-400"
                                            : "text-red-400"; // Remove underline when user types correctly
                                }

                                if (char === " ") {
                                    return (
                                        <span key={i}>
                                            <span
                                                className={`text-2xl font-naskh underline ${color}`}
                                            >
                                                {char}
                                            </span>
                                        </span>
                                    );
                                }

                                return (
                                    <span key={i}>
                                        <span
                                            className={`text-2xl font-naskh ${color}`}
                                        >
                                            {char}
                                        </span>
                                    </span>
                                );
                            })}
                        </p>
                    )}

                    {/* start images */}
                    {/* commenting for now */}
                    {/* {user_settings.show_hands === true ? (
                        <div className="flex flex-row justify-center relative w-full opacity-75">
                            {prevScreen.content.split("").map((char, i) => {
                                let fingerClass =
                                    "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                                let shiftFingerClass =
                                    "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                                let shiftImage =
                                    "/img/fingers/left-resting-hand.webp";

                                if (macLeftKeys.includes(char.toLowerCase())) {
                                    fingerClass =
                                        "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                                    shiftFingerClass =
                                        "absolute -right-28 -top-7 w-4/5";
                                    shiftImage =
                                        "/img/fingers/right-resting-hand.webp";
                                } else if (
                                    macRightKeys.includes(char.toLowerCase())
                                ) {
                                    fingerClass =
                                        "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
                                    shiftFingerClass =
                                        "absolute -left-44 -top-14 w-4/5";
                                    shiftImage =
                                        "/img/fingers/left-resting-hand.webp";
                                }

                                if (char === " ") {
                                    const fingerImage =
                                        macFingerMapping[char] || ""; // Get the finger image
                                    return (
                                        <span key={i}>
                                            {char === currentCharacter && (
                                                <img
                                                    src={fingerImage}
                                                    alt=""
                                                    className={fingerClass} // Apply your styling for the finger image here
                                                />
                                            )}
                                        </span>
                                    );
                                }

                                const fingerImage =
                                    macFingerMapping[char] || ""; // Get the finger image

                                // Handle characters that require the Shift key
                                if (macRightShiftKeys.includes(char)) {
                                    shiftImage =
                                        "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                                    shiftFingerClass =
                                        "absolute -right-28 -top-7 w-4/5";
                                } else if (macLeftShiftKeys.includes(char)) {
                                    shiftImage = "/img/fingers/left-shift.webp"; // Set the image for the left Shift key
                                    shiftFingerClass =
                                        "absolute -left-44 -top-14 w-4/5";
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
                                                className={shiftFingerClass} // Apply your styling for the finger image here
                                            />
                                        )}
                                        {char === currentCharacter && (
                                            <div>
                                                <img
                                                    src={fingerImage}
                                                    alt=""
                                                    className={fingerClass} // Apply your styling for the finger image here
                                                />
                                                <img
                                                    src={shiftImage}
                                                    alt=""
                                                    className={shiftFingerClass} // Apply your styling for the finger image here
                                                />
                                            </div>
                                        )}
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )} */}

                    {user_settings.show_keyboard === true ? (
                        prevScreen.locale === "ckb" ? (
                            user_settings.keyboard_type === "windows" ? (
                                <WindowsKeyboardKu
                                    screenType={prevScreen.content_type}
                                    currentCharacter={currentCharacter}
                                />
                            ) : (
                                <MacKeyboardKu
                                    screenType={prevScreen.content_type}
                                    currentCharacter={currentCharacter}
                                />
                            )
                        ) : (
                            <MacKeyboardEn
                                screenType={prevScreen.content_type}
                                currentCharacter={currentCharacter}
                            />
                        )
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <div className="hidden md:flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
                    <p className="w-full py-4 px-4 text-2xl text-center">
                        {screen.content.split("").map((char, i) => {
                            let color = "text-black";

                            if (i < userInput.length) {
                                color =
                                    char === userInput[i]
                                        ? "text-green-400"
                                        : "text-red-400"; // Remove underline when user types correctly
                            }

                            if (char === " ") {
                                return (
                                    <span key={i}>
                                        <span
                                            className={`text-2xl font-naskh underline ${color}`}
                                        >
                                            {char}
                                        </span>
                                    </span>
                                );
                            }

                            return (
                                <span key={i}>
                                    <span
                                        className={`text-2xl font-naskh ${color}`}
                                    >
                                        {char}
                                    </span>
                                </span>
                            );
                        })}
                    </p>

                    {/* start images */}
                    {/* {user_settings.show_hands === true ? (
                        <div className="flex flex-row justify-center relative w-full opacity-75">
                            {screen.content.split("").map((char, i) => {
                                let fingerClass =
                                    "absolute -right-28 -top-7 w-4/5"; // Initialize hand class

                                //Attention:: we use these shift variables for rest hands
                                //Rest hands are the two hands that stay on the keyboard when have no jabos
                                let shiftFingerClass =
                                    "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                                let shiftImage =
                                    "/img/fingers/left-resting-hand.webp";

                                if (macLeftKeys.includes(char.toLowerCase())) {
                                    fingerClass =
                                        "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                                    shiftFingerClass =
                                        "absolute -right-28 -top-7 w-4/5";
                                    shiftImage =
                                        "/img/fingers/right-resting-hand.webp";
                                } else if (
                                    macRightKeys.includes(char.toLowerCase())
                                ) {
                                    fingerClass =
                                        "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
                                    shiftFingerClass =
                                        "absolute -left-44 -top-14 w-4/5";
                                    shiftImage =
                                        "/img/fingers/left-resting-hand.webp";
                                }

                                if (char === " ") {
                                    const fingerImage =
                                        macFingerMapping[char] || ""; // Get the finger image
                                    return (
                                        <span key={i}>
                                            {char === currentCharacter && (
                                                <img
                                                    src={fingerImage}
                                                    alt=""
                                                    className={fingerClass} // Apply your styling for the finger image here
                                                />
                                            )}
                                        </span>
                                    );
                                }

                                const fingerImage =
                                    macFingerMapping[char] || ""; // Get the finger image

                                // Handle characters that require the Shift key
                                if (macRightShiftKeys.includes(char)) {
                                    shiftImage =
                                        "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                                    shiftFingerClass =
                                        "absolute -right-28 -top-7 w-4/5";
                                } else if (macLeftShiftKeys.includes(char)) {
                                    shiftImage = "/img/fingers/left-shift.webp"; // Set the image for the left Shift key
                                    shiftFingerClass =
                                        "absolute -left-44 -top-14 w-4/5";
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
                                                className={shiftFingerClass} // Apply your styling for the finger image here
                                            />
                                        )}
                                        {char === currentCharacter && (
                                            <div>
                                                <img
                                                    src={fingerImage}
                                                    alt=""
                                                    className={fingerClass} // Apply your styling for the finger image here
                                                />
                                                <img
                                                    src={shiftImage}
                                                    alt=""
                                                    className={shiftFingerClass} // Apply your styling for the finger image here
                                                />
                                            </div>
                                        )}
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )} */}

                    {user_settings.show_keyboard === true ? (
                        screen.locale === "ckb" ? (
                            user_settings.keyboard_type === "windows" ? (
                                <WindowsKeyboardKu
                                    currentCharacter={currentCharacter}
                                />
                            ) : (
                                <MacKeyboardKu
                                    currentCharacter={currentCharacter}
                                />
                            )
                        ) : (
                            <MacKeyboardEn
                                currentCharacter={currentCharacter}
                            />
                        )
                    ) : (
                        <></>
                    )}

                    <Modal show={modalOpen} onClose={closeModal}>
                        <ExerciseSummary
                            totalStars={exerciseTotalStars}
                            starsEarned={starsEarned.toFixed(2)}
                            finishedTyping={isTypingComplete}
                            speed={netWPM.toFixed(2)}
                            accuracy={accuracy.toFixed(2)}
                            time={elapsedTime.toFixed(2)}
                            screen={screen}
                            nextScreen={nextScreen}
                        />
                    </Modal>
                </div>
            )}

            <div className="flex mx-auto px-1 md:hidden items-center justify-center">
                <Alert color="blue" className="max-w-screen-md m-0 p-0 py-2">
                    <Typography color="white" className="font-normal">
                        {__(
                            "Sorry, our web app is currently optimized for desktop use and may not work properly on mobile devices. We recommend accessing it on a computer for the best experience."
                        )}
                    </Typography>
                </Alert>
            </div>
        </AppLayout>
    );
}
