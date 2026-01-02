"use client";

import Link from "next/link";
import { X, User, Heart } from "lucide-react";

import Logo from "./logo";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { label: string; path: string }[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
    return (
        <>
            <div
                className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
                onClick={onClose}
            />
            <div
                className={`fixed top-0 bottom-0 left-0 z-70 flex w-[85%] max-w-100 flex-col bg-white transition-transform duration-500 ease-in-out lg:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between border-b px-6 py-5">
                    <Logo />
                    <button onClick={onClose} className="hover:text-orange-500">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex-1 overflow-y-auto font-sans">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.path}
                            onClick={onClose}
                            className="flex items-center justify-between border-b border-zinc-50 px-6 py-5 text-sm font-medium uppercase transition-colors hover:bg-zinc-50"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="p-4">
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-md border px-4 py-2">
                            <User size={14} />
                            <span className="text-xs">Login</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-md border px-4 py-2">
                            <Heart size={14} />
                            <span className="text-xs">Wishlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
