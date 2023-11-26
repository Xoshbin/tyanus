export default function ApplicationLogo({ className = "", ...props }) {
    return (
        <span
            className={
                "self-center text-5xl font-thin whitespace-nowrap font-feelfree subpixel-antialiased text-kblue-600 " +
                className
            }
        >
            Tyanus
        </span>
    );
}
