import { ReactNode } from "react";

import Topbar from "@/components/topbar";
import Header from "@/components/header";
import Footer from "@/components/footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Topbar />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default RootLayout;
