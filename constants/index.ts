import {
    Truck,
    ShieldCheck,
    RefreshCcw,
    Headset,
    Phone,
    Mail,
    Clock3,
} from "lucide-react";

import slider1 from "@/app/assets/images/slide-1.jpg";
import slider2 from "@/app/assets/images/slide-2.jpg";
import slider3 from "@/app/assets/images/slide-3.jpg";
import featuredImg1 from "@/app/assets/images/featured-1.jpg";
import featuredImg2 from "@/app/assets/images/featured-2.jpg";
import featuredImg3 from "@/app/assets/images/featured-3.jpg";
import featuredImg4 from "@/app/assets/images/featured-4.jpg";
import featProd1 from "@/app/assets/images/feat-prod-1.webp";
import featProd2 from "@/app/assets/images/feat-prod-2.webp";
import featProd3 from "@/app/assets/images/feat-prod-3.webp";
import featProd4 from "@/app/assets/images/feat-prod-4.webp";
import featProd5 from "@/app/assets/images/feat-prod-5.webp";
import featProd6 from "@/app/assets/images/feat-prod-6.webp";
import featProd7 from "@/app/assets/images/feat-prod-7.webp";
import featProd8 from "@/app/assets/images/feat-prod-8.webp";
import avatar01 from "@/app/assets/images/avatar_01.jpg";
import avatar02 from "@/app/assets/images/avatar_02.jpg";

export const links = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/about",
        label: "About",
    },
    {
        path: "/contact",
        label: "Contact",
    },
    {
        path: "/collections/all",
        label: "Collections",
    },
    {
        path: "/collections/bikes",
        label: "Bikes",
    },
    {
        path: "/collections/accessories",
        label: "Accessories",
    },
];

export const sliders = [
    {
        img: slider1,
        title: "Adventure Starts Here",
        description: "Bikes designed for those who live to ride",
        cta: "shop now",
    },
    {
        img: slider2,
        title: "Explore On Two Wheels",
        description: "Bikes designed for those who live to ride",
        cta: "shop now",
    },
    {
        img: slider3,
        title: "Most Popular Bike",
        description:
            "Stylish, fun and powerful, with the ultimate in safety, get it now!",
        cta: "shop now",
    },
];

export const trustFeatures = [
    {
        id: 1,
        icon: Truck,
        title: "Fast Delivery",
        description:
            "Free shipping on all orders over $500 with real-time tracking.",
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: "Lifetime Guarantee",
        description:
            "Every frame we sell is backed by a limited lifetime warranty.",
    },
    {
        id: 3,
        icon: RefreshCcw,
        title: "Easy Returns",
        description:
            "Not the right fit? Return your bike within 30 days, no questions asked.",
    },
    {
        id: 4,
        icon: Headset,
        title: "Expert Support",
        description:
            "Our professional mechanics are available 24/7 for technical advice.",
    },
];

export const featured1 = [
    {
        id: 1,
        title: "Safe For Every Long Journey",
        cta: "shop now",
        img: featuredImg1,
    },
    {
        id: 2,
        title: "Bike Durable Over Time",
        cta: "shop now",
        img: featuredImg2,
    },
];

export const featured2 = [
    {
        id: 1,
        eyebrow: "Spring savings!",
        title: "Accessories",
        cta: "shop now",
        img: featuredImg3,
    },
    {
        id: 2,
        eyebrow: "summer saving!",
        title: "Kids Bikes",
        cta: "shop now",
        img: featuredImg4,
    },
];

export const featuredProducts = [
    {
        id: 1,
        cover: featProd1,
        name: "Kandro Max",
        price: 80.0,
        slug: "product-1",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
    {
        id: 2,
        cover: featProd2,
        name: "Velto Ride",
        price: 72.0,
        slug: "product-2",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
    {
        id: 3,
        cover: featProd3,
        name: "Cylix Pro",
        price: 80.0,
        slug: "product-3",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
    {
        id: 4,
        cover: featProd4,
        name: "Kravo X",
        price: 120.0,
        slug: "product-4",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
    {
        id: 5,
        cover: featProd5,
        name: "Kandro Max",
        price: 60.0,
        slug: "product-5",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
    {
        id: 6,
        cover: featProd6,
        name: "Fyzen Bike",
        price: 77.0,
        slug: "product-6",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
    {
        id: 7,
        cover: featProd7,
        name: "Frenzo GT",
        price: 100.0,
        slug: "product-7",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
    {
        id: 8,
        cover: featProd8,
        name: "Droven Max",
        price: 80.0,
        slug: "product-8",
        images: [featProd1, featProd2, featProd3, featProd4, featProd5, featProd6, featProd7, featProd8],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec."
    },
];

export const services = [
    {
        id: "01.",
        title: "Tunner - up & Builds",
        description:
            "Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit",
    },
    {
        id: "02.",
        title: "Personal Bike Fit",
        description:
            "Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit",
    },
    {
        id: "03.",
        title: "Adjust and install",
        description:
            "Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit",
    },
    {
        id: "04.",
        title: "Free Delivery",
        description:
            "Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit",
    },
];

export const behindTheBrand = [
    {
        img: avatar01,
        name: "Adrian Stone",
        position: "Founder",
    },
    {
        img: avatar02,
        name: "Karen Ryan",
        position: "Co-founder",
    },
];

export const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        description: "0932 600 233",
    },
    {
        icon: Mail,
        title: "Email",
        description: "hello@example.com",
    },
    {
        icon: Clock3,
        title: "Open Hours",
        description: "Monday to Friday 09:30 - 17:30",
    },
];

export const filters = [
    { query: "low-to-high", label: "price, low to high" },
    { query: "high-to-low", label: "price, high to low" },
    { query: "a-z", label: "A-Z" },
    { query: "z-a", label: "Z-A" },
];

export const cartItems = [
    {
        id: 1,
        cover: featProd1,
        name: "Kandro Max",
        price: 80.0,
        slug: "product-1",
        quantity: 1,
        images: [
            featProd1,
            featProd2,
            featProd3,
            featProd4,
            featProd5,
            featProd6,
            featProd7,
            featProd8,
        ],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec.",
    },
    {
        id: 2,
        cover: featProd2,
        name: "Velto Ride",
        price: 72.0,
        slug: "product-2",
        quantity: 1,
        images: [
            featProd1,
            featProd2,
            featProd3,
            featProd4,
            featProd5,
            featProd6,
            featProd7,
            featProd8,
        ],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec.",
    },
    {
        id: 3,
        cover: featProd3,
        name: "Cylix Pro",
        price: 80.0,
        slug: "product-3",
        quantity: 1,
        images: [
            featProd1,
            featProd2,
            featProd3,
            featProd4,
            featProd5,
            featProd6,
            featProd7,
            featProd8,
        ],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sem in mauris volutpat aliquet. Proin fringilla commodo hendrerit. Cras luctus varius dolor, in porta mi maximus nec. Cras molestie ex sed turpis venenatis, pellentesque tincidunt tortor tempus. Sed blandit ipsum ac velit ullamcorper sagittis. In semper egestas mi. Donec.",
    },
];