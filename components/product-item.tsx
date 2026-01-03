import Image, { StaticImageData } from "next/image";

interface ProductItemProps {
    id: number | string;
    cover: StaticImageData;
    name: string;
    price: number;
}

const ProductItem = ({ id, cover, name, price }: ProductItemProps) => {
    return (
        <div key={id} className="flex flex-col items-center">
            <Image src={cover} alt={name} />
            <p className="mt-3 text-lg font-medium capitalize">{name}</p>
            <p className="text-brand-orange text-sm font-medium">
                {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </p>
        </div>
    );
};

export default ProductItem;
