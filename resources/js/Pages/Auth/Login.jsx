import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import { __ } from "@/Libs/Lang";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const { locale } = usePage().props;

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title={__("Log in")} />

            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                        {__("Welcome back")}
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        {__("Sign in to continue to Tyanus.")}
                    </p>
                </div>

                {status && (
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4">
                    <div className="space-y-1">
                        <InputLabel htmlFor="email" value={__("Email")} />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border-subtle bg-surface-muted/50 focus:border-primary-500 focus:ring-primary-500"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
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
                            autoComplete="current-password"
                            onChange={(e) => setData("password", e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                {__("Remember me")}
                            </span>
                        </label>

                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm font-medium text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                                {__("Forgot your password?")}
                            </Link>
                        )}
                    </div>

                    <PrimaryButton
                        className="mt-6 inline-flex w-full justify-center rounded-md bg-primary-600 text-sm font-semibold text-white shadow-soft hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500"
                        disabled={processing}
                    >
                        {__("Log in")}
                    </PrimaryButton>
                </form>

                <p className="text-center text-sm text-gray-600">
                    {__("Don't have an account?")}{" "}
                    <Link
                        href={route("register")}
                        className="font-medium text-primary-600 hover:text-primary-700"
                    >
                        {__("Create an account")}
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
