import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { usePage, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import humanizeDuration from "humanize-duration";
import Footer from "@/Components/Typing/Footer";
import MarkdownRenderer from "../../Components/Typing/MarkdownRenderer";
import moment from "moment";
import "moment/locale/ku"; // Import the Kurdish locale

const PostsPage = ({ posts, title }) => {
    const { auth } = usePage().props;
    const { locale } = usePage().props;

    return (
        <AppLayout user={auth ? auth.user : undefined} footer={<Footer />}>
            <Head title={title} />
            <>
                <div className="space-y-4 w-7/12 mx-auto">
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                                {title}
                            </h1>
                            {/* <div className="relative max-w-lg">
                                <label>
                                    <span className="sr-only">
                                        Search articles
                                    </span>
                                    <input
                                        aria-label="Search articles"
                                        type="text"
                                        onChange={(e) =>
                                            setSearchValue(e.target.value)
                                        }
                                        placeholder="Search articles"
                                        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                                    />
                                </label>
                                <svg
                                    className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div> */}
                        </div>
                        <ul>
                            {posts.map((post) => {
                                const { slug, created_at, title, body } = post;
                                return (
                                    <li key={slug} className="py-4">
                                        <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                            <dl>
                                                <dt className="sr-only">
                                                    Published on
                                                </dt>
                                                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                    <time dateTime={created_at}>
                                                        {new Date(
                                                            created_at
                                                        ).toLocaleDateString(
                                                            locale
                                                        )}
                                                    </time>
                                                </dd>
                                            </dl>
                                            <div className="space-y-3 xl:col-span-3">
                                                <div>
                                                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                                        <Link
                                                            href={route(
                                                                "blog.show",
                                                                post.slug
                                                            )}
                                                            className="text-gray-900 dark:text-gray-100"
                                                        >
                                                            {post.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <img
                                                    src={
                                                        post.media[0]
                                                            .preview_url
                                                    }
                                                    alt=""
                                                />
                                                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                    <MarkdownRenderer
                                                        markdownContent={
                                                            body.substring(
                                                                0,
                                                                300
                                                            ) + "..."
                                                        }
                                                        className="pt-2"
                                                    />{" "}
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {/* {pagination && pagination.totalPages > 1 && !searchValue && (
                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                />
            )} */}
            </>
        </AppLayout>
    );
};

export default PostsPage;
