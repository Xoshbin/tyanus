import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    const baseClasses =
        "w-full flex items-start pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out";
    const activeClasses =
        " border-primary-500 text-primary-700 bg-primary-50 focus:text-primary-800 focus:bg-primary-100 focus:border-primary-700";
    const inactiveClasses =
        " border-transparent text-gray-700 hover:text-gray-900 hover:bg-surface-muted hover:border-subtle focus:text-gray-900 focus:bg-surface-muted focus:border-subtle";

    return (
        <Link
            {...props}
            className={`${baseClasses}${
                active ? activeClasses : inactiveClasses
            } ${className}`}
        >
            {children}
        </Link>
    );
}
