import { SlashIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { featuredProducts } from "@/constants";
import ProductImagesGallery from "@/components/product-images-gallery";
import ProductListings from "@/components/product-listings";
import SectionHeading from "@/components/section-heading";
import AddToCart from "@/components/add-to-cart";

export default async function Product({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const currentProduct = featuredProducts.find(
        (product) => product.slug === `${slug}`,
    );

    if (!currentProduct) return <h1>Product not found</h1>;

    return (
        <section className="section-padding">
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                {currentProduct.name}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="container mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Images */}
                    <div className="w-full">
                        <ProductImagesGallery
                            images={currentProduct.images}
                            productName={currentProduct.name}
                        />
                    </div>

                    {/* Information */}
                    <div>
                        <h1 className="mb-4 text-3xl font-bold">
                            {currentProduct.name}
                        </h1>
                        <p className="mb-6 text-2xl font-semibold text-gray-700">
                            ${currentProduct.price}
                        </p>
                        <p className="mb-6 text-gray-600">
                            {currentProduct.description}
                        </p>
                        {/* Add more product details, add to cart button, etc. */}
                        <AddToCart product={currentProduct} />
                    </div>
                </div>
            </div>
            <div className="container mt-10 lg:mt-20">
                <SectionHeading heading="Similar Products" dark center />
                <ProductListings />
            </div>
        </section>
    );
}
