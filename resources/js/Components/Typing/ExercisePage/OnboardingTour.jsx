import React, { useState } from "react";
import Joyride, { STATUS } from "react-joyride";
import { __ } from "@/Libs/Lang";

const OnboardingTour = ({ locale, onComplete }) => {
    const [run, setRun] = useState(true);

    const steps = [
        {
            target: "#step-restart",
            title: __("Restart Lesson"),
            content: __("If you want to start over, you can quickly restart the lesson here."),
            disableBeacon: true,
        },
        {
            target: "#step-sound",
            title: __("Sound Settings"),
            content: __("Toggle typing sounds on or off to suit your style."),
        },
        {
            target: "#step-keyboard",
            title: __("Keyboard Layout"),
            content: __("Change your keyboard layout and visualization settings here."),
        },
        {
            target: "#step-help",
            title: __("Help & Support"),
            content: __("Need help setting up your keyboard? Detailed guides are available here."),
        }
    ];

    const handleJoyrideCallback = (data) => {
        const { status } = data;
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            setRun(false);
            if (onComplete) onComplete();
        }
    };

    return (
        <Joyride
            callback={handleJoyrideCallback}
            continuous
            hideCloseButton
            run={run}
            scrollToFirstStep
            showProgress
            showSkipButton
            steps={steps}
            locale={{
                back: __("Back"),
                close: __("Close"),
                last: __("Finish"),
                next: __("Next"),
                skip: __("Skip"),
            }}
            styles={{
                options: {
                    arrowColor: "#fff",
                    backgroundColor: "#fff",
                    overlayColor: "rgba(0, 0, 0, 0.5)",
                    primaryColor: "#2769e9",
                    textColor: "#1f2937",
                    zIndex: 10000,
                },
                tooltip: {
                    borderRadius: "1rem",
                    padding: "1.25rem",
                },
                tooltipTitle: {
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                },
                tooltipContent: {
                    fontSize: "0.875rem",
                    color: "#4b5563",
                    padding: "0",
                },
                buttonNext: {
                    borderRadius: "0.75rem",
                    padding: "0.625rem 1.25rem",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                },
                buttonBack: {
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginRight: "0.75rem",
                    color: "#6b7280",
                },
                buttonSkip: {
                    fontSize: "0.875rem",
                    color: "#9ca3af",
                },
                spotlight: {
                    borderRadius: "100%",
                }
            }}
            floaterProps={{
                disableAnimation: false,
            }}
        />
    );
};

export default OnboardingTour;
