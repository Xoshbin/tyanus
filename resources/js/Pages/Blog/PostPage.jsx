import { usePage, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Footer from "@/Components/Typing/Footer";
import MarkdownRenderer from "../../Components/Typing/MarkdownRenderer";

const PostPage = ({ post }) => {
    const { auth } = usePage().props;
    const { locale } = usePage().props;

    return (
        <AppLayout user={auth ? auth.user : undefined} footer={<Footer />}>
            <Head>
                <title>{post.title}</title>
                <meta
                    name="description"
                    content={post.body.substring(0, 300)}
                />
            </Head>
            <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <article>
                    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                        <header className="pt-6 xl:pb-6">
                            <div className="space-y-1 text-center">
                                <dl className="space-y-10">
                                    <div>
                                        <dt className="sr-only">
                                            Published on
                                        </dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={post.created_at}>
                                                {new Date(
                                                    post.created_at
                                                ).toLocaleDateString(locale)}
                                            </time>
                                        </dd>
                                    </div>
                                </dl>
                                <div>
                                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                        {post.title}
                                    </h1>
                                </div>
                            </div>
                        </header>
                        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
                            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                                <dt className="sr-only">Authors</dt>
                                <dd>
                                    <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                        <li
                                            className="flex items-center space-x-2"
                                            key={post.user.name}
                                        >
                                            <img
                                                src="https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png"
                                                width={38}
                                                height={38}
                                                alt="avatar"
                                                className="h-10 w-10 rounded-full"
                                            />
                                            <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                                <dt className="sr-only">
                                                    Name
                                                </dt>
                                                <dd className="text-gray-900 dark:text-gray-100">
                                                    {post.user.name}
                                                </dd>
                                                <dt className="sr-only">
                                                    Twitter
                                                </dt>
                                                <dd>
                                                    {post.user.twitter && (
                                                        <Link
                                                            href={
                                                                post.user
                                                                    .twitter
                                                            }
                                                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                        >
                                                            {post.user.twitter.replace(
                                                                "https://twitter.com/",
                                                                "@"
                                                            )}
                                                        </Link>
                                                    )}
                                                </dd>
                                            </dl>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                                <img
                                    src={post.media[0].original_url}
                                    alt={post.title}
                                    className="h-72 max-w-full mt-8"
                                />
                                <div className="prose lg:prose-xl max-w-none pb-8 pt-10 dark:prose-invert">
                                    <MarkdownRenderer
                                        markdownContent={post.body}
                                        className="pt-2 text-xl"
                                    />
                                </div>
                                {/* <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                                    <Link
                                        href={discussUrl(path)}
                                        rel="nofollow"
                                    >
                                        Discuss on Twitter
                                    </Link>
                                    {` • `}
                                    <Link href={editUrl(filePath)}>
                                        View on GitHub
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </AppLayout>
    );
};

export default PostPage;
