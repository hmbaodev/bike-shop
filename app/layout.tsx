import type { Metadata } from "next";
import { ReactNode } from "react";
import { Sora, Jost } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
    title: "Bike Shop | Home",
    description: "Built by Hua Minh Bao",
};

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

const jost = Jost({
    subsets: ["latin"],
    variable: "--font-jost",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={`${sora.variable} ${jost.variable}`}>
            <body className="antialiased">{children}</body>
            <GoogleAnalytics gaId="G-YEVLHMZ287" />
        </html>
    );
}
