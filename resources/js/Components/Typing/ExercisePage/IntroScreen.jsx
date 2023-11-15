import React from "react";
import MacKeyboardEn from "@/Components/Typing/Keyboard/MacKeyboardEn";
import MacKeyboardKu from "@/Components/Typing/Keyboard/MacKeyboardKu";
import WindowsKeyboardKu from "@/Components/Typing/Keyboard/WindowsKeyboardKu";
import { __ } from "@/Libs/Lang";
import "moment/locale/ku"; // Import the Kurdish locale
import {
    macFingerMapping,
    macLeftKeys,
    macRightKeys,
    macRightShiftKeys,
    macLeftShiftKeys,
} from "@/data/keyMappings/macKeyMapping";
import {
    windowsFingerMapping,
    windowsLeftKeys,
    windowsRightKeys,
    windowsRightShiftKeys,
    windowsLeftShiftKeys,
} from "@/data/keyMappings/windowsKeyMapping";
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
    Spinner,
} from "@material-tailwind/react";
const IntroScreen = ({
    screen,
    showFoundKeyMessage,
    user_settings,
    userInput,
    currentCharacter,
}) => {
    const [open, setOpen] = React.useState(false);

    const spaceIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-space"
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
            <path d="M4 10v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-3" />
        </svg>
    );

    const toggleOpen = () => setOpen((cur) => !cur);
    return (
        <>
            <Collapse open={showFoundKeyMessage}>
                <Card className="my-4 mx-auto w-6/12">
                    <CardBody>
                        <Typography className="justify-center items-center flex space-x-2">
                            {__(
                                "Great, you found it. Now, let's start practicing."
                            )}
                            <Spinner color="blue" className="h-8 w-8" />
                        </Typography>
                    </CardBody>
                </Card>
            </Collapse>
            <div className="hidden md:flex flex-col w-full max-w-3xl justify-center items-center mx-auto mt-6">
                {showFoundKeyMessage ? (
                    <></>
                ) : (
                    <p className="w-full p-4 text-2xl text-center">
                        {__(screen.extra)}
                    </p>
                )}

                {showFoundKeyMessage === false && (
                    <div className="text-center bg-kblue-600 rounded-md">
                        {screen.content.split("").map((char, i) => {
                            let color = "bg-white";

                            if (i < userInput.length) {
                                color =
                                    char === userInput[i]
                                        ? "bg-green-400"
                                        : "bg-red-400"; // Remove underline when user types correctly
                            }

                            return (
                                <div key={i} className=" space-y-4">
                                    <div
                                        className={`mx-1 text-5xl text-center text-white font-naskh py-4 px-2`}
                                    >
                                        {char === " " ? spaceIcon : char}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* start images */}
                <div className="flex flex-row justify-center relative w-full opacity-75">
                    {screen.content.split("").map((char, i) => {
                        let fingerClass = "absolute -right-28 -top-7 w-4/5"; // Initialize hand class

                        //Attention:: we use these shift variables for rest hands
                        //Rest hands are the two hands that stay on the keyboard when have no jabos
                        let shiftFingerClass =
                            "absolute -right-28 -top-7 w-4/5"; // Initialize hand class
                        let shiftImage = "/img/fingers/left-resting-hand.webp";

                        if (
                            user_settings.keyboard_type === "mac"
                                ? macLeftKeys.includes(char.toLowerCase())
                                : windowsLeftKeys.includes(char.toLowerCase())
                        ) {
                            fingerClass = "absolute -left-44 -top-14 w-4/5"; // Assign left-hand class
                            shiftFingerClass =
                                "absolute -right-28 -top-7 w-4/5";
                            shiftImage = "/img/fingers/right-resting-hand.webp";
                        } else if (
                            user_settings.keyboard_type === "mac"
                                ? macRightKeys.includes(char.toLowerCase())
                                : windowsRightKeys.includes(char.toLowerCase())
                        ) {
                            fingerClass = "absolute -right-28 -top-7 w-4/5"; // Assign right-hand class
                            shiftFingerClass =
                                "absolute -left-44 -top-14 w-4/5";
                            shiftImage = "/img/fingers/left-resting-hand.webp";
                        }

                        if (char === " ") {
                            const fingerImage =
                                user_settings.keyboard_type === "mac"
                                    ? macFingerMapping[char] || ""
                                    : windowsFingerMapping[char] || ""; // Get the finger image
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
                            user_settings.keyboard_type === "mac"
                                ? macFingerMapping[char] || ""
                                : windowsFingerMapping[char] || ""; // Get the finger image

                        // Handle characters that require the Shift key
                        if (
                            user_settings.keyboard_type === "mac"
                                ? macRightShiftKeys.includes(char)
                                : windowsRightShiftKeys.includes(char)
                        ) {
                            shiftImage = "/img/fingers/right-shift.webp"; // Set the image for the right Shift key
                            shiftFingerClass =
                                "absolute -right-28 -top-7 w-4/5";
                        } else if (
                            macRightShiftKeys.includes(char)
                                ? macLeftShiftKeys.includes(char)
                                : windowsLeftShiftKeys.includes(char)
                        ) {
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

                {screen.locale === "ckb" ? (
                    user_settings.keyboard_type === "windows" ? (
                        <WindowsKeyboardKu
                            screenType={screen.content_type}
                            currentCharacter={currentCharacter}
                        />
                    ) : (
                        <MacKeyboardKu
                            screenType={screen.content_type}
                            currentCharacter={currentCharacter}
                        />
                    )
                ) : (
                    <MacKeyboardEn
                        screenType={screen.content_type}
                        currentCharacter={currentCharacter}
                    />
                )}
            </div>
        </>
    );
};

export default IntroScreen;
