"use client";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Sign in with:", formData);
        // Add your sign-in logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <section className="section-padding">
            <div className="container">
                <div className="mx-auto max-w-md">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="mb-2 text-3xl font-bold">
                            Welcome Back
                        </h1>
                        <p className="text-gray-600">
                            Sign in to your account to continue
                        </p>
                    </div>

                    {/* Sign In Form */}
                    <div className="rounded-lg bg-white p-8 shadow-lg">
                        <div className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-gray-300 py-3 pr-10 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-gray-300"
                                    />
                                    <label
                                        htmlFor="rememberMe"
                                        className="ml-2 block text-sm text-gray-700"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    href="#"
                                    className="text-sm text-black hover:text-black/80"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Sign In Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full rounded-lg bg-black py-3 font-semibold text-white transition-colors hover:bg-black/80"
                            >
                                Sign In
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don&apos;t have an account?{" "}
                                <Link
                                    href="/sign-up"
                                    className="font-medium text-black hover:text-black/80"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
