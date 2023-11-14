import React from "react";
import ReactMarkdown from "react-markdown";
import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import MarkdownRenderer from "../../Components/Typing/MarkdownRenderer";
import { Head } from "@inertiajs/react";

const PrivacyPolicy = ({ markdownContent }) => {
    const { auth } = usePage().props;
    return (
        <AppLayout user={auth ? auth.user : undefined}>
            <Head title={__("Privacy Policy")} />
            <MarkdownRenderer
                markdownContent={markdownContent}
                className="p-20"
            />
        </AppLayout>
    );
};

export default PrivacyPolicy;
