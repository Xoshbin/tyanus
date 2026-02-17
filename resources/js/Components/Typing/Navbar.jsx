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
    const isAuthenticated = Boolean(auth.user);

    return (
        <nav className="bg-surface border-b border-subtle">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href={route("home")} className="flex items-center">
                        <ApplicationLogo className="text-primary-700" />
                    </Link>
                </div>

                {/* Primary navigation - desktop */}
                <div className="hidden sm:flex sm:items-center sm:space-x-4">
                    <NavLink href={route("home")} active={route().current("home")}>
                        {__("Home")}
                    </NavLink>
                    <NavLink
                        href={route("lessons")}
                        active={route().current("lessons")}
                    >
                        {__("Learn")}
                    </NavLink>
                    <NavLink
                        href={route("test")}
                        active={route().current("test")}
                    >
                        {__("Practice")}
                    </NavLink>
                    <NavLink
                        href={route("stats")}
                        active={
                            route().current("stats") ||
                            route().current("badges") ||
                            route().current("certificates")
                        }
                    >
                        {__("Progress")}
                    </NavLink>
                    <NavLink
                        href={route("blog.index")}
                        active={
                            route().current("blog.index") ||
                            route().current("blog.show")
                        }
                    >
                        {__("Blog")}
                    </NavLink>
                </div>

                {/* Right side: language + auth + mobile toggle */}
                <div className="flex items-center space-x-3">
                    {/* Language switcher - desktop */}
                    <div className="hidden sm:flex sm:items-center">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-full shadow-sm">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
                                <Dropdown.Link href={route("setlocale", "ckb")}>
                                    {__("KU")}
                                </Dropdown.Link>
                                <Dropdown.Link href={route("setlocale", "en")}>
                                    {__("EN")}
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>

                    {/* Auth - desktop */}
                    <div className="hidden sm:flex sm:items-center">
                        {isAuthenticated && auth.user.streak && (
                            <div className="flex items-center gap-1 text-orange-500 font-bold mr-4" title={__("Daily Streak")}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177c-.129 1.016.281 2.049.915 2.971a1 1 0 101.697-1.019c-.318-.461-.516-.964-.473-1.428a.75.75 0 01.385-.63c.271-.146.574-.241.895-.27.886-.08 1.701.218 2.296.852a3.003 3.003 0 01.761 2.203l-.116.862c-.105.787-.768 1.543-1.638 1.543h-2.1c-1.373 0-2.486 1.114-2.486 2.486v.214a3.003 3.003 0 003.003 3.003h.214a2.486 2.486 0 002.486-2.486v-.214a1.5 1.5 0 00-1.5-1.5h-1.286c-.53 0-.937-.506-.827-1.02l.116-.862a4.504 4.504 0 00-1.141-3.303 5.973 5.973 0 00-3.444-1.28c-1.688.15-3.084 1.41-3.315 3.093a6.004 6.004 0 003.623 6.643c1.765.688 3.737.388 5.253-.787 1.516 1.175 3.488 1.475 5.253.787a6.004 6.004 0 003.623-6.643c-.231-1.683-1.627-2.943-3.315-3.093a5.973 5.973 0 00-3.444 1.28 4.504 4.504 0 00-1.141 3.303l.116.862c.11.514-.297 1.02-.827 1.02h-1.286a1.5 1.5 0 00-1.5 1.5v.214a2.486 2.486 0 002.486 2.486h.214a3.003 3.003 0 003.003-3.003v-.214c0-1.372-1.113-2.486-2.486-2.486h-2.1c-.87 0-1.533-.756-1.638-1.543l-.116-.862a3.003 3.003 0 01.761-2.203c.595-.634 1.41-.932 2.296-.852.32.029.624.124.895.27a.75.75 0 01.385.63c.043.464-.155.967-.473 1.428a1 1 0 101.697 1.019c.634-.922 1.044-1.955.915-2.971a9.742 9.742 0 00-3.539-6.177.75.75 0 00-1.071.136z" clipRule="evenodd" />
                                </svg>
                                <span>{auth.user.streak.current_streak}</span>
                            </div>
                        )}
                        {isAuthenticated ? (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-full shadow-sm">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
                                    <Dropdown.Link href={route("profile.edit")}>
                                        {__("Profile")}
                                    </Dropdown.Link>
                                    <Dropdown.Link href={route("badges")}>
                                        {__("badges")}
                                    </Dropdown.Link>
                                    <Dropdown.Link href={route("certificates")}>
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
                            <div className="flex items-center gap-3">
                                <Link
                                    href={route("login")}
                                    className="inline-flex items-center rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-surface-muted hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                >
                                    {__("Login")}
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1.5 text-sm font-medium text-white shadow-soft hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                >
                                    {__("Register")}
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-surface-muted hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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

            {/* Mobile navigation */}
            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="space-y-1 border-t border-subtle bg-surface py-3">
                    {isAuthenticated ? (
                        <div className="px-4 pb-3">
                            <div className="text-base font-medium text-gray-900">
                                {auth.user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>
                    ) : null}

                    {/* Primary nav - mobile */}
                    <ResponsiveNavLink
                        href={route("home")}
                        active={route().current("home")}
                    >
                        {__("Home")}
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("lessons")}
                        active={route().current("lessons")}
                    >
                        {__("Learn")}
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("test")}
                        active={route().current("test")}
                    >
                        {__("Practice")}
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("stats")}
                        active={route().current("stats")}
                    >
                        {__("Progress")}
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("blog.index")}
                        active={
                            route().current("blog.index") ||
                            route().current("blog.show")
                        }
                    >
                        {__("Blog")}
                    </ResponsiveNavLink>

                    {/* Language switcher - mobile */}
                    <ResponsiveNavLink href={route("setlocale", "ckb")}>
                        {__("KU")}
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("setlocale", "en")}>
                        {__("EN")}
                    </ResponsiveNavLink>

                    {/* Auth actions - mobile */}
                    {isAuthenticated ? (
                        <>
                            <ResponsiveNavLink href={route("profile.edit")}>
                                {__("Profile")}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route("badges")}>
                                {__("badges")}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route("certificates")}>
                                {__("certificates")}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                {__("Log Out")}
                            </ResponsiveNavLink>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
