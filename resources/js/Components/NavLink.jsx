import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    const baseClasses =
        "inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150 ease-out";
    const activeClasses = " bg-primary-50 text-primary-700";
    const inactiveClasses =
        " text-gray-600 hover:text-gray-900 hover:bg-surface-muted";

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
