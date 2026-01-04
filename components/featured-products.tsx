import { featuredProducts } from "@/constants";
import SectionHeading from "./section-heading";
import ProductItem from "./product-item";

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
                            <ProductItem
                                key={product.id}
                                slug={product.slug}
                                id={product.id}
                                cover={product.cover}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
