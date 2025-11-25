import Header from "@/components/Header";
import AboutHighlights from "@/components/AboutHighlights";
import StoryCards from "@/components/StoryCards";
import AboutUs from "@/components/AboutUs";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import Footer from "@/components/Footer";
import MissionCard from "@/components/MissionCard";
import VisionCard from "@/components/VisionCard";
import AboutFeatureCards from "@/components/AboutFeatureCards";

export const metadata = {
  title: "About Ebox Pro Logistics | Built by Sellers, for Sellers",
  description:
    "Learn how Ebox Pro Logistics delivers world-class fulfillment, technology, and support for ambitious e-commerce brands across the GCC.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHighlights />
      <AboutFeatureCards />
      <StoryCards />
      <section className="section-padding bg-white">
        <div className="container-wide pt-10 grid gap-8 md:grid-cols-2">
          <MissionCard />
          <VisionCard />
        </div>
      </section>
      <AboutUs />
      <ContactFormWrapper />
      <Footer />
    </div>
  );
}
