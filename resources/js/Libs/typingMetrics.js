export function calculateTypingMetrics({
    startTime,
    endTime,
    totalCharactersTyped,
    errorCharactersCount,
}) {
    const hasTimestamps =
        typeof startTime === "number" &&
        typeof endTime === "number" &&
        !Number.isNaN(startTime) &&
        !Number.isNaN(endTime);

    const elapsedSeconds = hasTimestamps
        ? (endTime - startTime) / 1000
        : 0;
    const elapsedMinutes = elapsedSeconds / 60;

    const grossWPM =
        elapsedMinutes > 0
            ? (totalCharactersTyped / 5) / elapsedMinutes
            : 0;

    const netWPM =
        elapsedMinutes > 0
            ? Math.max(
                  (totalCharactersTyped / 5 - errorCharactersCount) /
                      elapsedMinutes,
                  0
              )
            : 0;

    const accuracy =
        totalCharactersTyped > 0
            ? Math.max(
                  ((totalCharactersTyped - errorCharactersCount) /
                      totalCharactersTyped) *
                      100,
                  0
              )
            : 0;

    const starsEarned = Math.round((accuracy / 100) * 3);

    return {
        elapsedSeconds,
        elapsedMinutes,
        grossWPM,
        netWPM,
        accuracy,
        starsEarned,
    };
}

