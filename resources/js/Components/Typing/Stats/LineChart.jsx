import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { __ } from "@/Libs/Lang";
import { Select, Option, Typography } from "@material-tailwind/react";
import { format, startOfDay, endOfDay } from "date-fns";

const LineChart = ({ stats }) => {
    const [selectedFilter, setSelectedFilter] = useState("month");

    // Function to filter data based on the selected filter
    const filterData = () => {
        const currentDate = new Date();
        switch (selectedFilter) {
            case "date":
                const startDate = startOfDay(currentDate);
                const endDate = endOfDay(currentDate);
                return stats.filter((item) => {
                    const itemDate = new Date(item.completed_at);
                    return startDate <= itemDate && itemDate <= endDate;
                });
            case "month":
                return stats.filter(
                    (item) =>
                        format(new Date(item.completed_at), "yyyy-MM") ===
                        format(currentDate, "yyyy-MM")
                );
            case "year":
                return stats.filter(
                    (item) =>
                        format(new Date(item.completed_at), "yyyy") ===
                        format(currentDate, "yyyy")
                );
            default:
                return stats;
        }
    };

    const filteredStats = filterData();

    // Create an object to store the first data point for each date
    const uniqueDates = {};

    // Iterate through the filteredStats to find the first data point for each date
    filteredStats.forEach((item) => {
        const date =
            selectedFilter === "date"
                ? format(new Date(item.completed_at), "yyyy-MM-dd HH:mm:ss")
                : format(new Date(item.completed_at), "yyyy-MM-dd");

        // If the date is not already in the uniqueDates object, add it
        if (!uniqueDates[date]) {
            uniqueDates[date] = item;
        }
    });

    // Extract labels and data from the uniqueDates object
    const labels = Object.keys(uniqueDates);
    const speedData = labels.map((date) => uniqueDates[date].typing_speed);
    const accuracyData = labels.map(
        (date) => uniqueDates[date].accuracy_percentage
    );

    const data = {
        labels: labels,
        datasets: [
            {
                label: __("Speed"),
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: speedData,
            },
            {
                label: __("Accuracy"),
                backgroundColor: "rgb(155, 99, 132)",
                borderColor: "rgb(155, 99, 132)",
                data: accuracyData,
            },
        ],
    };

    const handleFilterChange = (newValue) => {
        setSelectedFilter(newValue);
    };

    return (
        <div className="flex flex-col text-right">
            <Typography variant="h6" color="blue-gray" className="mb-2">
                {__("Progress Overview")}
            </Typography>
            {/* Dropdown for selecting the filter */}
            <div class="flex flex-col items-center space-y-4">
                <div className="w-72">
                    <Select
                        value={selectedFilter}
                        label={__("Select Time Range")}
                        color="blue"
                        onChange={(value) => handleFilterChange(value)}
                    >
                        <Option value="date">{__("Date")}</Option>
                        <Option value="month">{__("Month")}</Option>
                        <Option value="year">{__("Year")}</Option>
                    </Select>
                </div>
                {/* Render the Line chart */}
                <Line data={data} />
            </div>
        </div>
    );
};

export default LineChart;
