import { SlashIcon } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageBannerProps {
    title: string;
}

const PageBanner = ({ title }: PageBannerProps) => {
    return (
        <section className="section-padding bg-[url('/page-bg.jpg')] bg-cover bg-position-[50%_-68.2826px] bg-no-repeat">
            <div className="flex flex-col items-center gap-2 py-20">
                <h1 className="text-center text-4xl font-semibold text-white">
                    {title}
                </h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href="/"
                                className="text-base text-white"
                            >
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white">
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-base text-white">
                                {title}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </section>
    );
};

export default PageBanner;
