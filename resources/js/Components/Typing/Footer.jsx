import { __ } from "@/Libs/Lang";
import { Link } from "@inertiajs/react";

export default function Footer(props) {
    return (
        <footer className=" mt-20">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-6xl font-thin whitespace-nowrap font-feelfree subpixel-antialiased text-kblue-600">
                                Tyanus
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                {__("Blog")}
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href={route("blog.index")}
                                        className="hover:underline"
                                    >
                                        {__("Blog")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                {__("Resources")}
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href={route("lessons")}
                                        className="hover:underline"
                                    >
                                        {__("Lessons")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("test")}
                                        className="hover:underline"
                                    >
                                        {__("Typing Test")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                {__("Legal")}
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href={route("policy")}
                                        className="hover:underline"
                                    >
                                        {__("Privacy Policy")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("terms")}
                                        className="hover:underline"
                                    >
                                        {__("Terms & Conditions")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023{" "}
                        <Link
                            href="https://Tyanus.com/"
                            className="hover:underline"
                        >
                            Tyanus™
                        </Link>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
