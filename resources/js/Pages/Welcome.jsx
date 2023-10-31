import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import Hero from "@/Components/Typing/HomePage/Hero";
import Show from "@/Components/Typing/HomePage/Show";

export default function Welcome({ locale }) {
    const { auth } = usePage().props;

    return (
        <AppLayout user={auth.user}>
            <Hero locale={locale} />
            <Show locale={locale} />
        </AppLayout>
    );
}
