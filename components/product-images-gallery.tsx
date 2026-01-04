"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImagesGalleryProps {
    images: StaticImageData[];
    productName: string;
}

const ProductImagesGallery = ({
    images,
    productName,
}: ProductImagesGalleryProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        // Scroll the active thumbnail into view
        if (thumbnailRefs.current[currentImage]) {
            thumbnailRefs.current[currentImage]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    }, [currentImage]);

    const goToPrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className="relative mb-4 aspect-4/3 overflow-hidden rounded-lg bg-gray-100">
                <Image
                    src={images[currentImage]}
                    alt={`${productName} image ${currentImage + 1}`}
                    className="h-full w-full object-contain"
                />

                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
            </div>

            <div className="scrollbar-hide flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                    <button
                        key={index}
                        ref={(el) => {
                            thumbnailRefs.current[index] = el;
                        }}
                        onClick={() => setCurrentImage(index)}
                        className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                            currentImage === index
                                ? "border-blue-500 ring-2 ring-blue-200"
                                : "border-gray-200 hover:border-gray-400"
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`${productName} thumbnail ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </button>
                ))}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
};

export default ProductImagesGallery;