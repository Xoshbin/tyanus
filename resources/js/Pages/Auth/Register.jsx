import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import { __ } from "@/Libs/Lang";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const { locale } = usePage().props;

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title={__("Register")} />

            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                        {__("Create your account")}
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        {__(
                            "Join Tyanus to track your typing progress and improve your skills."
                        )}
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    <div className="space-y-1">
                        <InputLabel htmlFor="name" value={__("Name")} />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full border-subtle bg-surface-muted/50 focus:border-primary-500 focus:ring-primary-500"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="space-y-1">
                        <InputLabel htmlFor="email" value={__("Email")} />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border-subtle bg-surface-muted/50 focus:border-primary-500 focus:ring-primary-500"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="space-y-1">
                        <InputLabel htmlFor="password" value={__("Password")} />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full border-subtle bg-surface-muted/50 focus:border-primary-500 focus:ring-primary-500"
                            autoComplete="new-password"
                            onChange={(e) => setData("password", e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="space-y-1">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value={__("Confirm Password")}
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full border-subtle bg-surface-muted/50 focus:border-primary-500 focus:ring-primary-500"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="pt-2 text-xs text-gray-500">
                        {__(
                            "By creating an account, you agree to our terms of service and privacy policy."
                        )}
                    </div>

                    <PrimaryButton
                        className="mt-4 inline-flex w-full justify-center rounded-md bg-primary-600 text-sm font-semibold text-white shadow-soft hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500"
                        disabled={processing}
                    >
                        {__("Create account")}
                    </PrimaryButton>
                </form>

                <p className="text-center text-sm text-gray-600">
                    {__("Already have an account?")}{" "}
                    <Link
                        href={route("login")}
                        className="font-medium text-primary-600 hover:text-primary-700"
                    >
                        {__("Log in")}
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
