import { ReactNode } from "react";

import Topbar from "@/components/topbar";
import Header from "@/components/header";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Topbar />
            <Header />
            {children}
        </>
    );
}
