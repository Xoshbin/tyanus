import React from "react";
import ReactMarkdown from "react-markdown";
import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import MarkdownRenderer from "../../Components/Typing/MarkdownRenderer";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Typing/Footer";
import { __ } from "@/Libs/Lang";

const PrivacyPolicy = ({ markdownContent }) => {
    const { auth } = usePage().props;
    return (
        <AppLayout user={auth ? auth.user : undefined}>
            <Head title={__("Privacy Policy")} footer={<Footer />} />

            <MarkdownRenderer
                markdownContent={markdownContent}
                className="p-20"
            />
        </AppLayout>
    );
};

export default PrivacyPolicy;
