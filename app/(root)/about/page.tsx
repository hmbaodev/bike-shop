import Image from "next/image";
import { Metadata } from "next";
import { Gem } from "lucide-react";

import PageBanner from "@/components/page-banner";
import aboutBikeo from "@/app/assets/images/about-bikeo.webp";
import { behindTheBrand } from "@/constants";
import TrustFeatures from "@/components/trust-features";

export const metadata: Metadata = {
    title: "Bikeo | About Us",
    description: "Conquer your next climbing",
};

const About = () => {
    return (
        <>
            <PageBanner title="About BikeO" />
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                        <div className="row-start-2 lg:row-start-1">
                            <Image src={aboutBikeo} alt="About Bikeo" />
                        </div>
                        <div className="row-start-1 flex flex-col justify-center gap-4 lg:row-start-1">
                            <h2 className="heading-2">Our Story</h2>
                            <h3 className="heading-3">
                                Cenean imperdiet. Fusce vel dui Praesent
                                adipiscing.
                            </h3>
                            <p className="text-base">
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum.Maecenas egestas arcu quis ligula mattis
                                placerat. Quisque id mi. Sed a libero.
                                Vestibulum ullamcorper mauris at ligula. Aenean
                                posuere, tortor sed cursus feugiat, nunc augue
                                blandit nunc, eu sollicitudin urna dolor
                                sagittis lacus. Suspendisse non nisl sit amet
                                velit hendrerit rutrum. Nulla porta dolor. Nunc
                                interdum lacus sit amet orci
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-[url('/about-bikeo-2.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="container md:my-5 lg:py-10">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                        <div className="flex flex-col gap-4 text-white">
                            <h2 className="heading-2">Behind The Brand</h2>
                            <p className="text-base">
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {behindTheBrand.map((item, index) => (
                                <div key={index}>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        className="border-b"
                                    />
                                    <div className="bg-white p-4">
                                        <p className="mt-2 mb-1 text-lg font-semibold">
                                            {item.name}
                                        </p>
                                        <p className="text-base">
                                            {item.position}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="flex flex-col items-center gap-5">
                        <Gem size={60} />
                        <h2 className="heading-2 max-w-xl text-center">
                            We&apos;re committing to create the change we want
                            to see in the world
                        </h2>
                    </div>
                    <TrustFeatures />
                </div>
            </section>
        </>
    );
};

export default About;
