import Image from "next/image";

import { featuredProducts } from "@/constants";
import SectionHeading from "./section-heading";

const FeaturedProducts = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div>
                    <SectionHeading
                        eyebrow="Bikeo Collections"
                        heading="Featured Products"
                        dark
                        center
                    />
                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                        {featuredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col items-center"
                            >
                                <Image src={product.cover} alt={product.name} />
                                <p className="mt-3 text-lg font-medium capitalize">
                                    {product.name}
                                </p>
                                <p className="text-brand-orange text-sm font-medium">
                                    {product.price.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
