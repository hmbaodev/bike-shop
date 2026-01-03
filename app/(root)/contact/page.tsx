import { Metadata } from "next";
import Link from "next/link";
import { SendHorizontal } from "lucide-react";

import PageBanner from "@/components/page-banner";
import { contactInfo } from "@/constants";

export const metadata: Metadata = {
    title: "Bikeo | Contact Us",
};

const Contact = () => {
    return (
        <>
            <PageBanner title="Contact Us" />
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-semibold lg:text-3xl">
                                Contact Us
                            </h2>
                            <p className="max-w-md">
                                If you would like to know more about our
                                policies, you can consult our Terms and
                                Conditions. You will also be able to follow your
                                order (tracking number will be provided in an
                                e-mail after ordering). You wish to return some
                                items? <Link href="#">Click here</Link>
                            </p>
                            <div className="flex flex-col gap-5">
                                {contactInfo.map(
                                    ({ icon: Icon, title, description }) => (
                                        <div key={title} className="flex gap-4">
                                            <Icon className="mt-1 size-8" />
                                            <div>
                                                <p className="mb-2 text-lg font-semibold uppercase">
                                                    {title}
                                                </p>
                                                <p className="text-base">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-semibold lg:text-3xl">
                                Send us a message
                            </h2>
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Your name..."
                                    className="w-full rounded-full border p-2"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email..."
                                    className="w-full rounded-full border p-2"
                                />
                                <textarea
                                    placeholder="Your message..."
                                    className="h-50 w-full rounded-xl border p-2"
                                ></textarea>
                                <button className="flex items-center justify-center gap-3 p-3 text-white bg-black rounded-full cursor-pointer hover:bg-black/85">
                                    <span>SEND</span>
                                    <SendHorizontal />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
