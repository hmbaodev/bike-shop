"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface AddToCartProps {
    product: {
        id: number;
        name: string;
        price: number;
    };
}

const AddToCart = ({ product }: AddToCartProps) => {
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = async () => {
        setIsAdding(true);

        // Add your cart logic here
        // Example: await addToCart(product.id, quantity);

        console.log(`Adding ${quantity} of ${product.name} to cart`);

        // Show feedback
        setTimeout(() => {
            setIsAdding(false);
            alert(`Added ${quantity} ${product.name} to cart!`);
        }, 500);
    };

    return (
        <div className="space-y-4">
            {/* Quantity Selector */}
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    Quantity
                </label>
                <div className="flex items-center gap-3">
                    <button
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-300 transition-all hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Decrease quantity"
                    >
                        <Minus className="h-4 w-4" />
                    </button>

                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (value > 0) setQuantity(value);
                        }}
                        className="h-10 w-16 rounded-lg border-2 border-gray-300 text-center focus:border-blue-500 focus:outline-none"
                        min="1"
                    />

                    <button
                        onClick={increaseQuantity}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-300 transition-all hover:border-gray-400"
                        aria-label="Increase quantity"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition-all hover:bg-black/80 cursor-pointer"
            >
                <ShoppingCart className="h-5 w-5" />
                {isAdding ? "Adding..." : "Add to Cart"}
            </button>

            {/* Total Price */}
            <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-2xl font-bold text-gray-900">
                        ${(product.price * quantity).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AddToCart