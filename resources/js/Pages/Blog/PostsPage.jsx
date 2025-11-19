import { usePage, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Footer from "@/Components/Typing/Footer";
import MarkdownRenderer from "../../Components/Typing/MarkdownRenderer";
import { __ } from "@/Libs/Lang";

const PostsPage = ({ posts, title }) => {
    const { auth } = usePage().props;
    const { locale } = usePage().props;

    const hasPosts = Array.isArray(posts) && posts.length > 0;

    return (
        <AppLayout
            locale={locale}
            user={auth ? auth.user : undefined}
            footer={<Footer />}
        >
            <Head title={title} />
            <div className="max-w-5xl mx-auto space-y-6">
                <header className="space-y-2">
                    <p className="text-sm font-medium text-dolphin uppercase tracking-wide">
                        {__("Blog")}
                    </p>
                    <h1 className="text-3xl font-semibold text-primary-700 sm:text-4xl md:text-5xl">
                        {title}
                    </h1>
                </header>

                {hasPosts ? (
                    <ul className="space-y-4">
                        {posts.map((post) => {
                            const {
                                slug,
                                created_at,
                                title: postTitle,
                                body,
                                media = [],
                            } = post;

                            const previewSource = body ?? "";
                            const preview =
                                previewSource.length > 0
                                    ? `${previewSource.substring(0, 300)}…`
                                    : "";

                            const hasPreviewImage = media.length > 0;

                            return (
                                <li key={slug}>
                                    <article className="flex flex-col gap-4 rounded-2xl bg-surface border border-subtle shadow-soft p-4 sm:flex-row sm:p-6">
                                        {hasPreviewImage && (
                                            <div className="sm:w-1/3">
                                                <img
                                                    src={media[0].preview_url}
                                                    alt={postTitle}
                                                    className="h-40 w-full rounded-xl object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1 space-y-3">
                                            <p className="text-xs font-medium text-dolphin">
                                                <span className="sr-only">
                                                    {__("Published on")}
                                                </span>
                                                <time dateTime={created_at}>
                                                    {new Date(
                                                        created_at
                                                    ).toLocaleDateString(
                                                        locale
                                                    )}
                                                </time>
                                            </p>

                                            <h3 className="text-xl font-semibold leading-7 text-primary-700">
                                                <Link
                                                    href={route(
                                                        "blog.show",
                                                        slug
                                                    )}
                                                    className="hover:text-primary-600"
                                                >
                                                    {postTitle}
                                                </Link>
                                            </h3>

                                            {preview && (
                                                <div className="text-sm text-dolphin">
                                                    <MarkdownRenderer
                                                        markdownContent={preview}
                                                        className="pt-2"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-sm text-dolphin">
                        {__("No blog posts have been published yet.")}
                    </p>
                )}
            </div>
        </AppLayout>
    );
};

export default PostsPage;
