import { usePage, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Footer from "@/Components/Typing/Footer";
import MarkdownRenderer from "../../Components/Typing/MarkdownRenderer";
import { __ } from "@/Libs/Lang";

const PostPage = ({ post }) => {
    const { auth } = usePage().props;
    const { locale } = usePage().props;

    const descriptionSource = post?.body ?? "";
    const metaDescription =
        typeof descriptionSource === "string"
            ? descriptionSource.substring(0, 300)
            : "";

    const heroImage = post?.media?.[0]?.original_url ?? null;

    return (
        <AppLayout
            locale={locale}
            user={auth ? auth.user : undefined}
            footer={<Footer />}
        >
            <Head>
                <title>{post.title}</title>
                {metaDescription && (
                    <meta name="description" content={metaDescription} />
                )}
            </Head>

            <article
                className="max-w-4xl mx-auto rounded-2xl bg-surface border border-subtle shadow-soft p-6 sm:p-8"
                dir={locale === "ckb" ? "rtl" : "ltr"}
            >
                <div className="mb-4">
                    <Link
                        href={route("blog.index")}
                        className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                        {__("Back to blog")}
                    </Link>
                </div>

                <header className="space-y-4 border-b border-subtle pb-6">
                    <p className="text-xs font-medium text-dolphin">
                        <span className="sr-only">{__("Published on")}</span>
                        <time dateTime={post.created_at}>
                            {new Date(post.created_at).toLocaleDateString(
                                locale
                            )}
                        </time>
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-primary-700 sm:text-4xl">
                        {post.title}
                    </h1>

                    {post?.user && (
                        <div className="flex items-center gap-3 text-sm text-dolphin">
                            <img
                                src="https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png"
                                width={38}
                                height={38}
                                alt={__("Author avatar")}
                                className="h-9 w-9 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-gray-900">
                                    {post.user.name}
                                </p>
                                {post.user.twitter && (
                                    <Link
                                        href={post.user.twitter}
                                        className="text-primary-600 hover:text-primary-700"
                                    >
                                        {post.user.twitter.replace(
                                            "https://twitter.com/",
                                            "@"
                                        )}
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </header>

                {heroImage && (
                    <div className="mt-6">
                        <img
                            src={heroImage}
                            alt={post.title}
                            className="h-72 w-full rounded-xl object-cover"
                        />
                    </div>
                )}

                <div className="prose lg:prose-xl max-w-none pt-8 dark:prose-invert">
                    <MarkdownRenderer
                        markdownContent={post.body}
                        className="pt-2 text-xl"
                    />
                </div>
            </article>
        </AppLayout>
    );
};

export default PostPage;
