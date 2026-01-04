import { links } from "@/constants";
import { redirect } from "next/navigation";

import PageBanner from "@/components/page-banner";
import ProductFilter from "@/components/product-filter";
import ProductListings from "@/components/product-listings";

export default async function Collections({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const currentLink = links.find(
        (link) => link.path === `/collections/${slug}`,
    );

    if (!currentLink && slug !== "all") {
        redirect("/collections/all");
    }

    return (
        <>
            <PageBanner title={currentLink?.label || "Collections"} />
            <section className="section-padding">
                <div className="container">
                    {/* Filter */}
                    <ProductFilter />
                    {/* Product Listing */}
                    <ProductListings />
                </div>
            </section>
        </>
    );
}
