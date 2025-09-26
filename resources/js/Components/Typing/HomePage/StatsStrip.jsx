import React, { useEffect, useRef, useState } from "react";
import { usePage } from "@inertiajs/react";

function formatNumber(n) {
    return new Intl.NumberFormat().format(n ?? 0);
}

function CountUp({ value, duration = 800 }) {
    const [display, setDisplay] = useState(0);
    const start = useRef(0);
    const startTime = useRef(null);

    useEffect(() => {
        start.current = 0;
        startTime.current = null;
        const target = Number(value || 0);
        const step = (ts) => {
            if (!startTime.current) startTime.current = ts;
            const p = Math.min((ts - startTime.current) / duration, 1);
            setDisplay(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
        };
        const raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [value, duration]);

    return <span>{formatNumber(display)}</span>;
}

const StatCard = ({ label, desc, value }) => (
    <div className="group relative rounded-xl bg-white/90 border border-kblue-100/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
        <div className="absolute inset-0 rounded-xl ring-1 ring-black/0 group-hover:ring-black/5"></div>
        <div className="p-5 sm:p-6 flex flex-col items-center text-center">
            <div className="text-[0.8rem] sm:text-sm font-semibold text-dolphin">{label}</div>
            {desc && (
                <p className="mt-1 text-[0.72rem] sm:text-xs text-dolphin/80 max-w-[16rem]">{desc}</p>
            )}
            <div className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-kblue-700">
                <CountUp value={value} />
            </div>
        </div>
    </div>
);

export default function StatsStrip({ stats }) {
    // Grab language once to avoid multiple hook calls and keep order stable
    const { language } = usePage().props;
    const t = (key, replace = {}) => {
        let translation = language[key] ? language[key] : key;
        Object.keys(replace).forEach((k) => {
            translation = translation.replace(":" + k, replace[k]);
        });
        return translation;
    };

    const cards = [
        { label: t("Screens played"), desc: t("Screens played description"), value: stats?.screensPlayed },
        { label: t("Exercises"), desc: t("Exercises description"), value: stats?.exercises },
        { label: t("Screens"), desc: t("Screens description"), value: stats?.screens },
        { label: t("Users"), desc: t("Users description"), value: stats?.users },
    ];

    return (
        <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-5 -mt-4">
            <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                {cards.map((c, i) => (
                    <StatCard key={i} {...c} />
                ))}
            </div>
        </div>
    );
}

