import React, { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import ExerciseSummary from "@/Components/Typing/ExercisePage/ExerciseSummary";
import AppLayout from "@/Layouts/AppLayout";
import LessonSettings from "@/Components/Typing/ExercisePage/LessonSettings";
import { router, usePage } from "@inertiajs/react";
import { Alert, Typography } from "@material-tailwind/react";
import { __ } from "@/Libs/Lang";
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
    const [errorCount, setErrorCount] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const { auth } = usePage().props;
    const { user_settings } = usePage().props;
    const { locale } = usePage().props;
    const keySound = "/sound/soft-key.mp3";
    const wrongKeySound = "/sound/wrong.mp3";
    const [errors, setErrors] = useState([]);
    //start setting current screen by prev screen content type
    const [currentScreen, setCurrentScreen] = useState(
        prevScreen && prevScreen.content_type
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
                        setUserInputForHighlight(
                            (prev) => prev + characterToType
                        );
                    } else if (characterToType === "↩") {
                        // Check if the entered character is not "↩"
                        setUserInput((prev) => prev + characterToType);
                        setUserInputForHighlight(
                            (prev) => prev + characterToType
                        );
                    } else {
                        setUserInput((prev) => prev + e.key);
                        setUserInputForHighlight((prev) => prev + e.key);

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
    }, [
        userInput,
        userInputForHighlight,
        screen.content,
        currentCharacterIndex,
        isTypingComplete,
    ]);

    let visibleCharacters;

    if (currentScreen === "sentences" || currentScreen === "test") {
        const extractVisibleCharacters = (content, start, count) => {
            visibleCharacters = content.slice(start, start + count);
            const lastSpaceIndex = visibleCharacters.lastIndexOf(" ");

            if (lastSpaceIndex !== -1) {
                // Adjust count to the last space
                count = lastSpaceIndex;
            }

            return content.slice(start, start + count);
        };

        // Usage
        visibleCharacters = extractVisibleCharacters(
            screen.content,
            startVisibleCharacterCount,
            visibleCharacterCount
        );
    } else {
        // Create a subarray of characters to display based on the visibleCharacterCount.
        visibleCharacters = screen.content.slice(
            startVisibleCharacterCount,
            visibleCharacterCount
        );
    }

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
            <Head
                title={
                    currentScreen === "letters"
                        ? prevScreen.title
                        : screen.title
                }
            />
            {/* show different interface based on the screen type */}
            {currentScreen === "intro" ? (
                <IntroScreen
                    screen={prevScreen}
                    showFoundKeyMessage={showFoundKeyMessage}
                    user_settings={user_settings}
                    userInput={userInput}
                    currentCharacter={currentCharacter}
                />
            ) : currentScreen === "letters" || currentScreen === "badge" ? (
                <LettersScreen
                    screen={currentScreen === "letters" ? prevScreen : screen}
                    visibleCharacters={visibleCharacters}
                    user_settings={user_settings}
                    currentCharacter={currentCharacter}
                    userInputForHighlight={userInputForHighlight}
                    flipped={flipped}
                />
            ) : currentScreen === "test" ? (
                <SentencesScreen
                    screen={screen}
                    visibleCharacters={visibleCharacters}
                    user_settings={user_settings}
                    currentCharacter={currentCharacter}
                    userInput={userInput}
                />
            ) : (
                <SentencesScreen
                    screen={prevScreen}
                    visibleCharacters={visibleCharacters}
                    user_settings={user_settings}
                    currentCharacter={currentCharacter}
                    userInput={userInput}
                />
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
