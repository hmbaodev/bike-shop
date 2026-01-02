"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { sliders } from "@/constants";

// Types
interface CarouselItemProps {
    slide: {
        img: string | StaticImageData;
        title: string;
        description: string;
        cta: string;
    };
    isActive: boolean;
    onCtaClick: () => void;
}

const CarouselItem = ({ slide, isActive, onCtaClick }: CarouselItemProps) => {
    return (
        <div
            className={`absolute inset-0 transition-opacity duration-700 ${
                isActive ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={slide.img}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative flex h-full items-center lg:items-end lg:pb-32">
                <div className="w-full max-w-8xl mx-auto px-8 md:px-16 lg:px-24">
                    <div className="max-w-2xl text-white flex flex-col gap-4 items-center lg:items-start">
                        <h1 className="text-4xl leading-tight font-semibold md:text-5xl">
                            {slide.title}
                        </h1>
                        <p className="text-lg font-medium md:text-xl">
                            {slide.description}
                        </p>
                        <button
                            className="rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-wider text-black uppercase transition-colors duration-300 hover:bg-gray-100 cursor-pointer"
                            onClick={onCtaClick}
                        >
                            {slide.cta}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliders.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlaying]);

    return (
        <div className="group relative h-120 md:h-150 lg:h-screen w-full overflow-hidden">
            {/* Slides */}
            {sliders.map((slide, index) => (
                <CarouselItem
                    key={index}
                    slide={slide}
                    isActive={index === currentSlide}
                    onCtaClick={() => setIsAutoPlaying(false)}
                />
            ))}
            <button
                onClick={() => {
                    prevSlide();
                    setIsAutoPlaying(false);
                }}
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white/30 md:left-8 cursor-pointer"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={() => {
                    nextSlide();
                    setIsAutoPlaying(false);
                }}
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white/30 md:right-8 cursor-pointer"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    );
};

export default Hero;
