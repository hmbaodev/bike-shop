import { twMerge } from "tailwind-merge";

const SectionHeading = ({
    eyebrow,
    heading,
    center,
    dark
}: {
    eyebrow?: string;
    heading: string;
    center?: boolean;
    dark?: boolean;
}) => {
    return (
        <div
            className={twMerge(
                "flex flex-col items-center gap-2",
                !center && "items-start"
            )}
        >
            <p className={twMerge("text-base font-medium capitalize", dark ? "text-black/40": "text-white")}>
                {eyebrow}
            </p>
            <h2 className={twMerge("text-2xl lg:text-4xl font-semibold uppercase", dark ? "text-black" : "text-white")}>{heading}</h2>
            <div className="bg-brand-orange mt-2 h-0.5 w-20" />
        </div>
    );
};

export default SectionHeading;
