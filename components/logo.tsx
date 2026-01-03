import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex justify-center">
            <Link
                href="/"
                className="font-heading text-2xl leading-none font-bold tracking-tighter md:text-4xl text-black!"
            >
                Bike<span className="text-orange-500">O</span>
            </Link> 
        </div>
    );
};

export default Logo;
