"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User, ShoppingBag, Search, Menu, X } from "lucide-react";

import { links } from "@/constants";
import MobileMenu from "@/components/mobile-menu";

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`z-50 w-full border-b border-zinc-100 bg-white transition-all duration-500 ease-in-out ${
                    isScrolled ? "fixed top-0 py-3 shadow-sm" : "relative py-4"
                }`}
            >
                <div className="container flex items-center justify-between">
                    {/* LEFT ON MOBILE, HIDDEN ON DESKTOP */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="transition-all"
                        >
                            {isMobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                    {/* LEFT ON DESKTOP, CENTER IN MOBILE */}
                    <div className="flex justify-center">
                        <Link
                            href="/"
                            className="text-2xl leading-none font-black tracking-tighter uppercase italic md:text-4xl"
                        >
                            Bike<span className="text-orange-500">o</span>
                        </Link>
                    </div>
                    {/* CENTER */}
                    <nav className="hidden items-center gap-10 lg:flex">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.path}
                                className="text-sm font-medium uppercase"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    {/* RIGHT */}
                    <div className="flex items-center gap-3">
                        <button>
                            <Search />
                        </button>
                        <Link href="/profile">
                            <User />
                        </Link>
                        <Link href="/cart">
                            <ShoppingBag />
                        </Link>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={isMobileOpen}
                onClose={() => setIsMobileOpen(false)}
                links={links}
            />
        </>
    );
};

export default Header;
