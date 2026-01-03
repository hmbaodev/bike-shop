import Link from "next/link";
import { Mail } from "lucide-react";

import Logo from "./logo";

const Footer = () => {
    return (
        <>
            <footer className="section-padding border-t border-b">
                <div className="container">
                    <div className="grid gap-10 md:grid-cols-6 lg:grid-cols-12">
                        <div className="flex flex-col items-start gap-4 md:col-span-6 lg:col-span-3">
                            <Logo />
                            <p className="text-lg font-medium">
                                Praesent nec nisl a purus blandit viverra.
                                Pellentesque habitant morbi tristique senectuse.
                            </p>
                            <div className="flex flex-col gap-1">
                                <p>
                                    <span className="font-medium">
                                        Address:
                                    </span>{" "}
                                    1234 Heaven Stress, USA
                                </p>
                                <p>
                                    <span className="font-medium">Email:</span>{" "}
                                    huaminhbao74@gmail.com
                                </p>
                                <p>
                                    <span className="font-medium">Phone:</span>{" "}
                                    0932 611 774
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 md:col-span-2 lg:col-span-2">
                            <div className="flex flex-col gap-1 text-black!">
                                <p className="font-medium uppercase">
                                    About Us
                                </p>
                                <div className="h-0.5 w-10 bg-black/80" />
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href="#">Sitemap</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Your Account</Link>
                                </li>
                                <li>
                                    <Link href="#">Advanced Search</Link>
                                </li>
                                <li>
                                    <Link href="#">Term & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 md:col-span-2 lg:col-span-2">
                            <div className="flex flex-col gap-1 text-black!">
                                <p className="font-medium uppercase">
                                    Categories
                                </p>
                                <div className="h-0.5 w-10 bg-black/80" />
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href="#">Customer Service</Link>
                                </li>
                                <li>
                                    <Link href="#">FAQ&apos;s</Link>
                                </li>
                                <li>
                                    <Link href="#">Order Tracking</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Events</Link>
                                </li>
                                <li>
                                    <Link href="#">Popular</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 md:col-span-2 lg:col-span-2">
                            <div className="flex flex-col gap-1 text-black!">
                                <p className="font-medium uppercase">
                                    Information
                                </p>
                                <div className="h-0.5 w-10 bg-black/80" />
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href="#">Customer Service</Link>
                                </li>
                                <li>
                                    <Link href="#">FAQ&apos;s</Link>
                                </li>
                                <li>
                                    <Link href="#">Order Tracking</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Events</Link>
                                </li>
                                <li>
                                    <Link href="#">Popular</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 md:col-span-4 lg:col-span-3">
                            <div className="flex flex-col gap-1 text-black!">
                                <p className="font-medium uppercase">
                                    newsletter
                                </p>
                                <div className="h-0.5 w-10 bg-black/80" />
                            </div>
                            <p>
                                Join 40.00+ Subscribers and get a new discount
                                coupon
                            </p>
                            <form className="flex items-stretch">
                                <input
                                    type="text"
                                    placeholder="Enter your email..."
                                    className="border-r-none rounded-tl-lg rounded-bl-lg border px-4 py-2 outline-none"
                                />
                                <button className="rounded-tr-lg rounded-br-lg bg-black p-3">
                                    <Mail className="text-white" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <p className="text-center py-3 font-medium">Built by Hua Minh Bao</p>
        </>
    );
};

export default Footer;
