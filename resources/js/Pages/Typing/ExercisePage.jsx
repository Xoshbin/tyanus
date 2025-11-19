import React, { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import ExerciseSummary from "@/Components/Typing/ExercisePage/ExerciseSummary";
import AppLayout from "@/Layouts/AppLayout";
import LessonSettings from "@/Components/Typing/ExercisePage/LessonSettings";
import { router, usePage } from "@inertiajs/react";
import { calculateTypingMetrics } from "@/Libs/typingMetrics";
import { detectKeyboardTypeFromNavigator } from "@/Libs/keyboardDetection";

import IntroScreen from "@/Components/Typing/ExercisePage/IntroScreen";
import LettersScreen from "@/Components/Typing/ExercisePage/LettersScreen";
import SentencesScreen from "@/Components/Typing/ExercisePage/SentencesScreen";
import { Head } from "@inertiajs/react";

export default function Lesson({
    screen,
    exerciseTotalStars,
    prevScreen,
    nextScreen,
}) {
    const [userInput, setUserInput] = useState("");
    const [userInputForHighlight, setUserInputForHighlight] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const { auth } = usePage().props;
    const { user_settings } = usePage().props;
    const { locale } = usePage().props;
    const keySound = "/sound/soft-key.mp3";
    const wrongKeySound = "/sound/wrong.mp3";
    const [errors, setErrors] = useState([]);
    //start setting current screen by prev screen content type
    const [currentScreen, setCurrentScreen] = useState(
        prevScreen && prevScreen.content_type == "intro"
            ? prevScreen.content_type
            : screen.content_type
    );
    const [showFoundKeyMessage, setShowFoundKeyMessage] = useState(false);
    const [visibleCharacterCount, setVisibleCharacterCount] = useState(
        currentScreen === "letters" || currentScreen === "badge" ? 8 : 75
    );
    const [startVisibleCharacterCount, setstartVisibleCharacterCount] =
        useState(0);
    const [flipped, setFlipped] = useState(false);
    const [effectiveKeyboardType, setEffectiveKeyboardType] = useState(
        user_settings.keyboard_type || null
    );

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const hasManualOverride =
            window.localStorage.getItem("tyanus_keyboard_layout_manual") ===
            "1";

        const detectedType = detectKeyboardTypeFromNavigator();

        if (hasManualOverride) {
            setEffectiveKeyboardType(
                user_settings.keyboard_type || detectedType || "windows"
            );
            return;
        }

        if (detectedType && user_settings.keyboard_type !== detectedType) {
            setEffectiveKeyboardType(detectedType);

            router.post(
                "/update-user-settings",
                {
                    setting: "keyboard_type",
                    value: detectedType,
                },
                { preserveState: true }
            );
        } else {
            setEffectiveKeyboardType(
                user_settings.keyboard_type || detectedType || "windows"
            );
        }
    }, [user_settings.keyboard_type]);

    const resolvedUserSettings = {
        ...user_settings,
        keyboard_type:
            effectiveKeyboardType || user_settings.keyboard_type || "windows",
    };

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
        setVisibleCharacterCount(8);
        setUserInputForHighlight("");
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

    const resetHighlightColor = () => {
        setUserInputForHighlight("");
        setFlipped(!flipped);
    };

    useEffect(() => {
        setFlipped(true);
        // Trigger flip on visibleChars change
        if (!isTypingComplete) {
            if (currentScreen === "letters" || currentScreen === "badge") {
                if (currentCharacterIndex >= visibleCharacterCount) {
                    const chunkSize = 8;

                    for (
                        let i = chunkSize;
                        i < screen.content.length;
                        i += chunkSize
                    ) {
                        if (visibleCharacterCount >= i) {
                            setFlipped(!flipped);
                            setVisibleCharacterCount(
                                visibleCharacterCount + chunkSize
                            );
                            setstartVisibleCharacterCount(i);
                            resetHighlightColor();
                        }
                    }
                }
            } else {
                if (currentCharacterIndex >= visibleCharacterCount - 8) {
                    setVisibleCharacterCount(visibleCharacterCount + 75);
                }
            }
        }

        const handleKeyDown = (e) => {
            const key = e.key;

            playKeySound();

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
                    if (!startTime) {
                        setStartTime(Date.now());
                    }

                    const characterToType = e.key === "Enter" ? "↵" : e.key;

                    // Check if the character at the current position should match the Enter symbol
                    if (
                        screen.content.charAt(currentCharacterIndex) ===
                        characterToType
                    ) {
                        setUserInput((prev) => prev + characterToType);
                        setUserInputForHighlight(
                            (prev) => prev + characterToType
                        );
                    } else if (characterToType === "↵") {
                        // Allow Enter key even if it does not match the expected character
                        setUserInput((prev) => prev + characterToType);
                        setUserInputForHighlight(
                            (prev) => prev + characterToType
                        );
                    } else {
                        // Wrong character typed - record the error and play the wrong key sound
                        setUserInput((prev) => prev + e.key);
                        setUserInputForHighlight((prev) => prev + e.key);
                        playWrongKeySound();
                        setErrors((prevErrors) => [
                            ...prevErrors,
                            screen.content[currentCharacterIndex],
                        ]);
                    }

                    // Check if typing is complete
                    // check the complete based on the content of the shown screen (intro, letters)
                    // otherwise it's counting the characters length with different text on the screen
                    if (currentScreen === "intro") {
                        if (
                            currentCharacterIndex + 1 ===
                            prevScreen.content.length
                        ) {
                            setIsTypingComplete(true);
                        }
                    }
                    if (
                        currentScreen === "letters" ||
                        currentScreen === "badge"
                    ) {
                        if (
                            currentCharacterIndex + 1 ===
                            screen.content.length
                        ) {
                            setEndTime(Date.now());
                            setIsTypingComplete(true);
                        }
                    } else {
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
        };

        document.addEventListener("keydown", handleKeyDown);

        let timeoutId;

        if (isTypingComplete) {
            if (currentScreen === "intro") {
                setShowFoundKeyMessage(true);
                timeoutId = setTimeout(() => {
                    handleScreenTransition();
                }, 5000);
            } else {
                // Call handleLessonCompletion with standardized Net WPM and accuracy values.
                const roundedNetWPM = Math.round(netWPM);
                const accuracyToStore = Number(accuracy.toFixed(2));
                const timeToStore = Number(elapsedSeconds.toFixed(2));

                handleLessonCompletion(
                    roundedNetWPM,
                    accuracyToStore,
                    timeToStore,
                    starsEarned
                );
            }
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [
        userInput,
        userInputForHighlight,
        screen.content,
        currentCharacterIndex,
        isTypingComplete,
    ]);

    let visibleCharacters;

    if (currentScreen === "sentences" || currentScreen === "test") {
        // Find the last space within the visible character range
        let lastSpaceIndex = startVisibleCharacterCount + visibleCharacterCount;
        while (
            lastSpaceIndex < screen.content.length &&
            screen.content[lastSpaceIndex] !== " "
        ) {
            lastSpaceIndex--;
        }

        // If a space was found, set the endpoint to the space, otherwise, keep the original endpoint
        let endPoint =
            lastSpaceIndex !== -1
                ? lastSpaceIndex
                : startVisibleCharacterCount + visibleCharacterCount;

        visibleCharacters = screen.content.slice(
            startVisibleCharacterCount,
            endPoint
        );
    } else {
        // Create a subarray of characters to display based on the visibleCharacterCount.
        visibleCharacters = screen.content.slice(
            startVisibleCharacterCount,
            visibleCharacterCount
        );
    }

    // Calculate timing and typing metrics using a shared helper
    const {
        elapsedSeconds,
        grossWPM,
        netWPM,
        accuracy,
        starsEarned,
    } = calculateTypingMetrics({
        startTime,
        endTime,
        totalCharactersTyped: userInput.length,
        errorCharactersCount: errors.length,
    });

    let currentCharacter = screen.content[currentCharacterIndex];

    // Get the current character to be typed
    if (currentScreen === "intro") {
        currentCharacter = prevScreen.content[currentCharacterIndex];
    }

    //save user progress in the database
    const handleLessonCompletion = async (
        typingSpeed,
        accuracy,
        time,
        starsEarned
    ) => {
        //if current screen is intro
        //change it to letters after typing the intro letter
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
            <Head
                title={
                    currentScreen === "letters"
                        ? prevScreen.title
                        : screen.title
                }
            />
            <div className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-surface border border-subtle shadow-soft p-4 sm:p-6">
                        {/* show different interface based on the screen type */}
                        {currentScreen === "intro" ? (
                            <IntroScreen
                                screen={prevScreen}
                                showFoundKeyMessage={showFoundKeyMessage}
                                user_settings={resolvedUserSettings}
                                userInput={userInput}
                                currentCharacter={currentCharacter}
                            />
                        ) : currentScreen === "letters" || currentScreen === "badge" ? (
                            <LettersScreen
                                screen={
                                    currentScreen === "letters" ? screen : prevScreen
                                }
                                visibleCharacters={visibleCharacters}
                                user_settings={resolvedUserSettings}
                                currentCharacter={currentCharacter}
                                userInputForHighlight={userInputForHighlight}
                                flipped={flipped}
                            />
                        ) : currentScreen === "test" ? (
                            <SentencesScreen
                                screen={screen}
                                visibleCharacters={visibleCharacters}
                                user_settings={resolvedUserSettings}
                                currentCharacter={currentCharacter}
                                userInput={userInput}
                            />
                        ) : (
                            <SentencesScreen
                                screen={prevScreen}
                                visibleCharacters={visibleCharacters}
                                user_settings={resolvedUserSettings}
                                currentCharacter={currentCharacter}
                                userInput={userInput}
                            />
                        )}
                    </div>
                </div>
            </div>

            <Modal show={modalOpen} onClose={closeModal}>
                <ExerciseSummary
                    totalStars={exerciseTotalStars}
                    starsEarned={starsEarned}
                    finishedTyping={isTypingComplete}
                    speed={Math.round(netWPM)}
                    grossSpeed={Math.round(grossWPM)}
                    accuracy={Math.round(accuracy)}
                    time={elapsedSeconds}
                    screen={screen}
                    nextScreen={nextScreen}
                />
            </Modal>
        </AppLayout>
    );
}
