import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bike Shop | Home",
    description: "Built by Hua Minh Bao",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
