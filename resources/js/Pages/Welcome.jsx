import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import Hero from "@/Components/Typing/HomePage/Hero";
import Show from "@/Components/Typing/HomePage/Show";
import Quote from "@/Components/Typing/HomePage/Quote";
import HomeKeyboardSection from "@/Components/Typing/HomePage/HomeKeyboardSection";
import FAQ from "@/Components/Typing/HomePage/FAQ";

export default function Welcome() {
    const { auth } = usePage().props;
    const { locale } = usePage().props;

    return (
        <AppLayout locale={locale} user={auth.user}>
            <Hero locale={locale} />
            <Show locale={locale} />
            <Quote locale={locale} />
            <HomeKeyboardSection locale={locale} />
            <FAQ locale={locale} />
        </AppLayout>
    );
}
