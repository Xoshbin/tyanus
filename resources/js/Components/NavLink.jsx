import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out " +
                (active
                    ? "border-indigo-400 text-gray-900 "
                    : "border-transparent text-gray-500 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
