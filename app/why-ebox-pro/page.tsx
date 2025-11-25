import Header from "@/components/Header";
import WhyEboxPro from "@/components/WhyEboxPro";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import Footer from "@/components/Footer";
import HeroSection from "@/components/why-ebox-pro/HeroSection";
import ExperiencePromisesSection from "@/components/why-ebox-pro/ExperiencePromisesSection";
import ServiceCoverageSection from "@/components/why-ebox-pro/ServiceCoverageSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiencePromises, serviceCoverage } from "@/content/why-ebox-pro";

export const metadata = {
  title:
    "Why Choose Ebox Pro Logistics | Seamless E-Commerce Fulfillment in the GCC",
  description:
    "Discover how Ebox Pro Logistics provides reliable, scalable fulfillment solutions with 99.9% accuracy, transparent pricing, and complete end-to-end services across the GCC region.",
};

export default function WhyChooseEboxProPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ScrollReveal direction="up" threshold={0.2}>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal direction="up" threshold={0.2} delay={0.1}>
          <WhyEboxPro />
        </ScrollReveal>
        <ScrollReveal direction="up" threshold={0.2} delay={0.2}>
          <ExperiencePromisesSection promises={experiencePromises} />
        </ScrollReveal>
        <ScrollReveal direction="up" threshold={0.2} delay={0.3}>
          <ServiceCoverageSection services={serviceCoverage} />
        </ScrollReveal>
        <ContactFormWrapper />
        <Footer />
      </main>
    </div>
  );
}
