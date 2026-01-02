"use client";

import { useState } from "react";
import Link from "next/link";
import { User, ShoppingBag, Search, Menu, X } from "lucide-react";

import { links } from "@/constants";
import MobileMenu from "@/components/mobile-menu";
import Logo from "./logo";

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white py-3 transition-all duration-500 ease-in-out">
                <div className="container flex items-center justify-between">
                    {/* LEFT ON MOBILE, HIDDEN ON DESKTOP */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="transition-all"
                        >
                            {isMobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                    {/* LEFT ON DESKTOP, CENTER IN MOBILE */}
                    <Logo />
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
                    <div className="flex items-center gap-2">
                        <button>
                            <Search size={20} />
                        </button>
                        <Link href="/profile">
                            <User size={20} />
                        </Link>
                        <Link href="/cart">
                            <ShoppingBag size={20} />
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
