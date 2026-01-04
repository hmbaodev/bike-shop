import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductItemProps {
    id: number | string;
    cover: StaticImageData;
    name: string;
    price: number;
    slug: string;
}

const ProductItem = ({ id, cover, name, price, slug }: ProductItemProps) => {
    return (
        <Link href={`/product/${slug}`} className="flex flex-col items-center">
            <Image src={cover} alt={name} />
            <p className="mt-3 text-lg font-medium capitalize">{name}</p>
            <p className="text-brand-orange text-sm font-medium">
                {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </p>
        </Link>
    );
};

export default ProductItem;
