import assert from "assert";
import { calculateTypingMetrics } from "../Libs/typingMetrics.js";

function approxEqual(actual, expected, tolerance = 1e-6) {
    assert.ok(
        Math.abs(actual - expected) <= tolerance,
        `Expected ${actual} to be approximately ${expected} (tolerance ${tolerance})`
    );
}

function testOneMinuteTypicalCase() {
    const oneMinuteMs = 60_000;

    const { elapsedSeconds, grossWPM, netWPM, accuracy } =
        calculateTypingMetrics({
            startTime: 0,
            endTime: oneMinuteMs,
            totalCharactersTyped: 250,
            errorCharactersCount: 10,
        });

    approxEqual(elapsedSeconds, 60);
    approxEqual(grossWPM, 50); // 250 / 5 / 1 minute
    approxEqual(netWPM, 40); // (250 / 5 - 10) / 1 minute
    approxEqual(accuracy, 96); // (250 - 10) / 250 * 100
}

function testZeroTimeNoTyping() {
    const { elapsedSeconds, grossWPM, netWPM, accuracy } =
        calculateTypingMetrics({
            startTime: 0,
            endTime: 0,
            totalCharactersTyped: 0,
            errorCharactersCount: 0,
        });

    approxEqual(elapsedSeconds, 0);
    approxEqual(grossWPM, 0);
    approxEqual(netWPM, 0);
    approxEqual(accuracy, 0);
}

function testZeroTimeWithTyping() {
    const { elapsedSeconds, grossWPM, netWPM, accuracy } =
        calculateTypingMetrics({
            startTime: 0,
            endTime: 0,
            totalCharactersTyped: 100,
            errorCharactersCount: 0,
        });

    approxEqual(elapsedSeconds, 0);
    approxEqual(grossWPM, 0);
    approxEqual(netWPM, 0);
    approxEqual(accuracy, 100);
}

function testAllErrorsClampNetWPMToZero() {
    const oneMinuteMs = 60_000;

    const { grossWPM, netWPM, accuracy } = calculateTypingMetrics({
        startTime: 0,
        endTime: oneMinuteMs,
        totalCharactersTyped: 250,
        errorCharactersCount: 250,
    });

    approxEqual(grossWPM, 50);
    approxEqual(netWPM, 0); // clamped, would be negative otherwise
    approxEqual(accuracy, 0);
}

function run() {
    testOneMinuteTypicalCase();
    testZeroTimeNoTyping();
    testZeroTimeWithTyping();
    testAllErrorsClampNetWPMToZero();

    console.log("All typingMetrics tests passed");
}

run();

