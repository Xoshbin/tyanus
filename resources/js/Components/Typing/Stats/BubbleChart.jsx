import React from "react";
import { Bubble } from "react-chartjs-2";
import Chart from "chart.js/auto"; // don't delete it it gives error
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { __ } from "@/Libs/Lang";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const BubbleChart = ({ stats }) => {
    ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
    // Process the error_characters field to count occurrences of each character
    const characterCounts = stats.reduce((acc, stat) => {
        const characters = stat.error_characters
            ? stat.error_characters.split("")
            : [];
        characters.forEach((char) => {
            acc[char] = (acc[char] || 0) + 1;
        });
        return acc;
    }, {});

    // Prepare the data for the bubble chart
    const bubbleData = {
        datasets: [
            {
                label: "Error characters",
                data: Object.entries(characterCounts).map(([char, count]) => ({
                    x: Math.random(), // Adjust x and y values as needed
                    y: Math.random(),
                    r: count * 5, // Adjust the multiplier to control bubble size
                })),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    // Configure the datalabels plugin
    const options = {
        plugins: {
            tooltip: {
                bodyFont: {
                    size: 36,
                },
                callbacks: {
                    label: function (context, data) {
                        const char =
                            Object.keys(characterCounts)[context.dataIndex];
                        return `${char}`;
                    },
                },
            },
            datalabels: {
                display: true,
                font: {
                    size: 28,
                    weight: "bold",
                },
                formatter: function (value, context) {
                    const char =
                        Object.keys(characterCounts)[context.dataIndex];
                    return char;
                },
            },
        },
    };
    return (
        <div className="flex flex-col">
            <Typography variant="h4" color="blue-gray" className="mb-2">
                {__("badges")}
            </Typography>{" "}
            <Bubble data={bubbleData} options={options} />
        </div>
    );
};

export default BubbleChart;
