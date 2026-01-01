"use client";

import Link from "next/link";
import { X, ChevronRight, User, Heart } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { label: string; path: string }[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
    return (
        <>
            <div
                className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
                onClick={onClose}
            />
            <div
                className={`fixed top-0 bottom-0 left-0 z-70 flex w-[85%] max-w-[400px] flex-col bg-white transition-transform duration-500 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between border-b px-6 py-5">
                    <span className="font-heading text-xl font-black tracking-tighter uppercase italic">
                        Bike<span className="text-orange-500">o</span>
                    </span>
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
