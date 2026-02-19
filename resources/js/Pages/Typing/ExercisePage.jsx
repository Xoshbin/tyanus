import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
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
import { __ } from "@/Libs/Lang";

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

    // Pre-create audio objects for better performance
    const keySoundRef = useRef(null);
    const wrongKeySoundRef = useRef(null);

    // Initialize audio objects once
    useEffect(() => {
        keySoundRef.current = new Audio(keySound);
        wrongKeySoundRef.current = new Audio(wrongKeySound);

        // Preload audio files
        keySoundRef.current.load();
        wrongKeySoundRef.current.load();
    }, []);
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

    const playKeySound = useCallback(() => {
        if (user_settings.enable_sound && keySoundRef.current) {
            // Reset audio to beginning and play
            keySoundRef.current.currentTime = 0;
            keySoundRef.current.play().catch(() => {
                // Ignore errors if audio can't play
            });
        }
    }, [user_settings.enable_sound]);

    const playWrongKeySound = useCallback(() => {
        if (user_settings.enable_sound && wrongKeySoundRef.current) {
            // Reset audio to beginning and play
            wrongKeySoundRef.current.currentTime = 0;
            wrongKeySoundRef.current.play().catch(() => {
                // Ignore errors if audio can't play
            });
        }
    }, [user_settings.enable_sound]);

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
                    const characterToType = e.key === "Enter" ? "↵" : e.key;
                    const isCorrect = screen.content.charAt(currentCharacterIndex) === characterToType;
                    const isEnterKey = characterToType === "↵";

                    // Play sound asynchronously (non-blocking)
                    if (isCorrect || isEnterKey) {
                        playKeySound();
                    } else {
                        playWrongKeySound();
                    }

                    // Batch all state updates together
                    if (!startTime) {
                        setStartTime(Date.now());
                    }

                    // Check if the character at the current position should match the Enter symbol
                    if (isCorrect) {
                        setUserInput((prev) => prev + characterToType);
                        setUserInputForHighlight(
                            (prev) => prev + characterToType
                        );
                    } else if (isEnterKey) {
                        // Allow Enter key even if it does not match the expected character
                        setUserInput((prev) => prev + characterToType);
                        setUserInputForHighlight(
                            (prev) => prev + characterToType
                        );
                    } else {
                        // Wrong character typed - record the error
                        setUserInput((prev) => prev + e.key);
                        setUserInputForHighlight((prev) => prev + e.key);
                        setErrors((prevErrors) => [
                            ...prevErrors,
                            screen.content[currentCharacterIndex],
                        ]);
                    }

                    // Update the current character index
                    setCurrentCharacterIndex(currentCharacterIndex + 1);

                    // Check if typing is complete
                    const nextIndex = currentCharacterIndex + 1;
                    let isComplete = false;

                    if (currentScreen === "intro") {
                        isComplete = nextIndex === prevScreen.content.length;
                    } else if (currentScreen === "letters" || currentScreen === "badge") {
                        isComplete = nextIndex === screen.content.length;
                    } else {
                        isComplete = nextIndex === screen.content.length;
                    }

                    if (isComplete) {
                        setEndTime(Date.now());
                        setIsTypingComplete(true);
                    }
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

    // Calculate timing and typing metrics using a shared helper - memoized for performance
    const {
        elapsedSeconds,
        grossWPM,
        netWPM,
        accuracy,
        starsEarned,
    } = useMemo(() => calculateTypingMetrics({
        startTime,
        endTime,
        totalCharactersTyped: userInput.length,
        errorCharactersCount: errors.length,
    }), [startTime, endTime, userInput.length, errors.length]);

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
                    isFirstLesson={screen.lesson_id === 1}
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
                        {/* Kurdish Keyboard Help Message - Only on first lesson first screen */}
                        {screen.lesson_id === 1 && screen.order === 1 && screen.locale === 'ckb' && (
                            <div className="mb-8 p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl flex items-start gap-4">
                                <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-xl">
                                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-2">
                                        {__("Kurdish Keyboard Setup")}
                                    </h4>
                                    <div className="space-y-2 text-primary-800 dark:text-primary-300">
                                        <p className="leading-relaxed">
                                            {__("Please change your keyboard to Kurdish on your operating system (Windows, macOS, or Linux).")}
                                        </p>
                                        <p className="font-medium">
                                            {__("You should use the official Unicode keyboard from the operating system.")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

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
