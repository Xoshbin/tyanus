export function detectKeyboardTypeFromNavigator() {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
        return null;
    }

    const ua = navigator.userAgent || "";
    const platform = navigator.platform || "";
    const userAgentData = navigator.userAgentData;

    const platformHint =
        (userAgentData && userAgentData.platform) || platform || ua;

    const isMac = /macintosh|macintel|macppc|mac68k|mac os x/i.test(
        platformHint
    );
    const isWindows = /win32|win64|windows|wince/i.test(platformHint);

    if (isMac) {
        return "mac";
    }

    if (isWindows) {
        return "windows";
    }

    return null;
}

