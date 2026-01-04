import { featuredProducts } from "@/constants";
import ProductItem from "./product-item";

const ProductListings = () => {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8 mt-10">
            {featuredProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    cover={product.cover}
                    name={product.name}
                    price={product.price}
                    slug={product.slug}
                />
            ))}
        </div>
    );
};

export default ProductListings;
