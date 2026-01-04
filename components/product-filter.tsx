import { filters } from "@/constants";

const ProductFilter = () => {
    return (
        <div className="mb-10 flex items-center gap-2">
            <p className="font-semibold">Filter by:</p>
            <div className="flex gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter.query}
                        className="cursor-pointer rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductFilter;
