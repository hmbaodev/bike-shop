import Topbar from "@/components/topbar";
import Header from "@/components/header";
import Hero from "@/components/hero"
import TrustFeatures from "@/components/trust-features";
import FeaturedCategories from "@/components/featured-categories";
import FeaturedProducts from "@/components/featured-products";
import Services from "@/components/services";
import Footer from "@/components/footer";
import { featured1, featured2 } from "@/constants";

export default function Home() {
    return (
        <>
            <Topbar />
            <Header />
            <Hero />
            <TrustFeatures />
            <FeaturedCategories featuredCategories={featured1} />
            <FeaturedProducts />
            <Services />
            <FeaturedCategories featuredCategories={featured2} />
            <Footer />
        </>
    );
}
