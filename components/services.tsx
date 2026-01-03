import SectionHeading from "./section-heading";
import { services } from "@/constants";

const Services = () => {
    return (
        <section className="section-padding bg-[url('/services-bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container py-5 md:py-10">
                <div className="flex flex-col items-start gap-10 md:gap-15">
                    <SectionHeading
                        eyebrow="Let's start the journey"
                        heading="Bike Services & Repair"
                        center={false}
                    />
                    <div className="grid grid-cols-3">
                        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:gap-x-15 md:gap-y-10 md:grid-cols-2 col-span-3 md:col-span-2">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="flex flex-col gap-2"
                                >
                                    <p className="text-xl font-semibold">
                                        <span className="text-brand-orange">
                                            {service.id}
                                        </span>{" "}
                                        <span className="text-white">
                                            {service.title}
                                        </span>
                                    </p>
                                    <p className="text-base font-medium text-white/80">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="btn-brand">Shop now</button>
                </div>
            </div>
        </section>
    );
};

export default Services;
