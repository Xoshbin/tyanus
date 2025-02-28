import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { __ } from "@/Libs/Lang";

export default function Navbar({ locale }) {
    const { auth } = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" dir="ltr">
                <div className="flex justify-between h-16">
                    {/* Auth */}
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <div className="ml-3 relative">
                            {auth.user ? (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            {__("Profile")}
                                        </Dropdown.Link>
                                        <Dropdown.Link href={route("badges")}>
                                            {__("badges")}
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("certificates")}
                                        >
                                            {__("certificates")}
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            {__("Log Out")}
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-xl border-2 border-transparent rounded-full transition text-kblue-600"
                                    >
                                        {__("Login")}
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="mx-4 text-xl border-2 border-transparent rounded-full transition text-kblue-600"
                                    >
                                        {__("Register")}
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex sm:items-center sm:ml-6 sm:space-x-10">
                        {/* Menus */}
                        <div className="hidden space-x-4 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink
                                className="flex text-xl border-2 border-transparent rounded-full transition text-kblue-600"
                                href={route("stats")}
                                active={route().current("stats")}
                            >
                                {__("Stats")}
                            </NavLink>
                            <NavLink
                                className="flex text-xl border-2 border-transparent rounded-full transition text-kblue-600"
                                href={route("test")}
                                active={route().current("test")}
                            >
                                {__("Test")}
                            </NavLink>
                            <NavLink
                                className="flex text-xl border-2 border-transparent rounded-full transition text-kblue-600"
                                href={route("lessons")}
                                active={route().current("lessons")}
                            >
                                {__("Lessons")}
                            </NavLink>

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {locale}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("setlocale", "ckb")}
                                    >
                                        {__("KU")}
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("setlocale", "en")}
                                    >
                                        {__("EN")}
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                        {/* Logo */}
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                {auth.user ? (
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                {__("Profile")}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                {__("Log Out")}
                            </ResponsiveNavLink>
                        </div>
                    </div>
                ) : (
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("login")}
                            active={route().current("login")}
                        >
                            {__("Login")}
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("register")}
                            active={route().current("register")}
                        >
                            {__("Register")}
                        </ResponsiveNavLink>
                    </div>
                )}
                <ResponsiveNavLink
                    href={route("lessons")}
                    active={route().current("lessons")}
                >
                    {__("lessons")}
                </ResponsiveNavLink>
                <ResponsiveNavLink
                    href={route("test")}
                    active={route().current("test")}
                >
                    {__("Test")}
                </ResponsiveNavLink>
            </div>
        </nav>
    );
}
