import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import Hero from "@/Components/Typing/HomePage/Hero";
import StatsStrip from "@/Components/Typing/HomePage/StatsStrip.jsx";
import Show from "@/Components/Typing/HomePage/Show";
import Quote from "@/Components/Typing/HomePage/Quote";
import HomeKeyboardSection from "@/Components/Typing/HomePage/HomeKeyboardSection";
import FAQ from "@/Components/Typing/HomePage/FAQ";
import { Head } from "@inertiajs/react";
import { __ } from "@/Libs/Lang";
import Footer from "@/Components/Typing/Footer";
import WhatIs from "@/Components/Typing/HomePage/WhatIs";

export default function Welcome() {
    const { auth } = usePage().props;
    const { locale, stats } = usePage().props;

    return (
        <AppLayout locale={locale} user={auth.user} footer={<Footer />}>
            <Head title={__("Page title")} />
            <Hero locale={locale} />
            {stats && <StatsStrip stats={stats} />}
            <Show locale={locale} />
            <Quote locale={locale} />
            <WhatIs locale={locale} />
            <HomeKeyboardSection locale={locale} />
            <FAQ locale={locale} />
        </AppLayout>
    );
}
