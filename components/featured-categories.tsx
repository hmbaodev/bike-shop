import Image, { StaticImageData } from "next/image";

interface IFeaturedCategory {
    id: number;
    eyebrow?: string;
    title: string;
    cta: string;
    img: StaticImageData;
}

interface FeaturedCategoriesProps {
    featuredCategories: IFeaturedCategory[];
}

interface FeaturedCategoryItemProps {
    featuredCategoryItem: IFeaturedCategory;
}

const FeaturedCategoryItem = ({
    featuredCategoryItem,
}: FeaturedCategoryItemProps) => {
    return (
        <div className="relative overflow-hidden rounded-2xl group">
            <Image
                src={featuredCategoryItem.img}
                alt={featuredCategoryItem.title}
                className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute top-0 left-0 z-2 flex h-full w-full flex-col items-start justify-end gap-1 lg:gap-3 pl-5 pb-5 lg:pb-10 lg:pl-10">
                <p className="text-sm lg:text-base font-medium text-white/80 uppercase">
                    {featuredCategoryItem?.eyebrow}
                </p>
                <h2 className="text-xl lg:text-3xl font-semibold text-white capitalize">
                    {featuredCategoryItem.title}
                </h2>
                <button className="btn">{featuredCategoryItem.cta}</button>
            </div>
        </div>
    );
};

const FeaturedCategories = ({
    featuredCategories,
}: FeaturedCategoriesProps) => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2">
                    {featuredCategories.map((item) => (
                        <FeaturedCategoryItem
                            key={item.id}
                            featuredCategoryItem={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
