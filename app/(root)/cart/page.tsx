import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cartItems } from "@/constants";
import SectionHeading from "@/components/section-heading";

export default function Cart() {
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
    const shipping = 0; // Free shipping
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    return (
        <section className="section-padding">
            <div className="container">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <SectionHeading heading="Shopping Cart" dark />
                        <p className="text-gray-600 mt-4">
                            {cartItems.length} items in your cart
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-black hover:text-black/80"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Continue Shopping
                    </Link>
                </div>

                {/* Cart Content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="rounded-lg bg-white shadow">
                            {cartItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex gap-4 p-6 ${index !== cartItems.length - 1 ? "border-b" : ""}`}
                                >
                                    {/* Product Image */}
                                    <div className="h-24 w-24 shrink-0">
                                        <Image
                                            src={item.cover}
                                            alt={item.name}
                                            className="h-full w-full rounded-lg object-cover"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <h3 className="mb-1 text-lg font-semibold">
                                            {item.name}
                                        </h3>
                                        <p className="mb-3 text-gray-600">
                                            ${item.price.toFixed(2)}
                                        </p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-3">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-gray-300 transition-all hover:border-gray-400">
                                                <Minus className="h-4 w-4" />
                                            </button>

                                            <span className="w-12 text-center font-medium">
                                                {item.quantity}
                                            </span>

                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-gray-300 transition-all hover:border-gray-400">
                                                <Plus className="h-4 w-4" />
                                            </button>

                                            <button className="ml-auto text-red-500 transition-colors hover:text-red-700">
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Item Total */}
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">
                                            $
                                            {(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Clear Cart Button */}
                        <div className="mt-4">
                            <button className="font-medium text-red-600 hover:text-red-700">
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4 rounded-lg bg-white p-6 shadow">
                            <h2 className="mb-6 text-xl font-bold">
                                Order Summary
                            </h2>

                            <div className="mb-6 space-y-3">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-medium text-green-600">
                                        Free
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (10%)</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-t pt-3 text-lg font-bold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Promo Code
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter code"
                                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none"
                                    />
                                    <button className="rounded-lg bg-gray-200 px-4 py-2 font-medium transition-colors hover:bg-gray-300">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 font-semibold text-white transition-all hover:bg-black/80">
                                <ShoppingBag className="h-5 w-5" />
                                Proceed to Checkout
                            </button>

                            {/* Continue Shopping */}
                            <Link
                                href="/"
                                className="block text-center text-gray-600 hover:text-gray-800"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
