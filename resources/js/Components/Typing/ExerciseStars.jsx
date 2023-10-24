import React from "react";

const ExerciseStars = ({ exerciseTotalStars, totalStarsEarned }) => {
    const stars = [];
    for (let i = 1; i <= exerciseTotalStars; i++) {
        const isFilled = i <= totalStarsEarned;
        stars.push(
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`icon icon-tabler icon-tabler-star-filled ${
                    isFilled ? "text-yellow-300" : ""
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                key={i}
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                    strokeWidth="0"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <div className="grid grid-cols-12 gap-2 justify-center items-center text-gray-300 mt-1">
            {stars}
        </div>
    );
};

export default ExerciseStars;
