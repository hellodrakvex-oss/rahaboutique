import { Hero } from "@/components/home/hero";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { EditorialCollections } from "@/components/home/editorial-collections";
import { BestSellers } from "@/components/home/best-sellers";
import { EditorialBanner } from "@/components/home/editorial-banner";
import { WeddingCollection } from "@/components/home/wedding-collection";
import { HorizontalScroll } from "@/components/home/horizontal-scroll";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CustomerReviews } from "@/components/home/customer-reviews";
import { InstagramGallery } from "@/components/home/instagram-gallery";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <FeaturedCollections />
      <EditorialCollections />
      <BestSellers />
      <EditorialBanner />
      <WeddingCollection />
      <HorizontalScroll />
      <WhyChooseUs />
      <CustomerReviews />
      <InstagramGallery />
      <Newsletter />
    </div>
  );
}
