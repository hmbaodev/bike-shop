"use client";

import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        // Validate terms acceptance
        if (!formData.agreeToTerms) {
            alert("Please agree to the terms and conditions");
            return;
        }

        console.log("Sign up with:", formData);
        // Add your sign-up logic here
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
                            Create Account
                        </h1>
                        <p className="text-gray-600">Sign up to get started</p>
                    </div>

                    {/* Sign Up Form */}
                    <div className="rounded-lg bg-white p-8 shadow-lg">
                        <div className="space-y-6">
                            {/* Full Name Field */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>

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
                                        className="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                                        className="block w-full rounded-lg border border-gray-300 py-3 pr-10 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

                            {/* Confirm Password Field */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-gray-300 py-3 pr-10 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword,
                                            )
                                        }
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-black"
                                />
                                <label
                                    htmlFor="agreeToTerms"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    I agree to the{" "}
                                    <Link
                                        href="#"
                                        className="text-black hover:text-black/80"
                                    >
                                        Terms and Conditions
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="#"
                                        className="text-black hover:text-black/80"
                                    >
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            {/* Sign Up Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full rounded-lg bg-black py-3 font-semibold text-white transition-colors hover:bg-black/80"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/sign-in"
                                    className="font-medium text-black hover:text-black/80"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
