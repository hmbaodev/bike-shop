import { trustFeatures } from "@/constants";
import { ComponentType } from "react";

interface TrustItemFeatureProps {
    id: number;
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
}

const TrustFeatureItem = ({
    id,
    title,
    description,
    icon: Icon,
}: TrustItemFeatureProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 rounded-md border px-4 py-6 text-center md:py-10">
            <Icon className="size-12" />
            <p className="text-xl font-bold uppercase">{title}</p>
            <p className="text-sm font-medium text-gray-600">{description}</p>
        </div>
    );
};

const TrustFeatures = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {trustFeatures.map(({ id, title, description, icon }) => (
                        <TrustFeatureItem
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustFeatures;
