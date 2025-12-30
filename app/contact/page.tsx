import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Ebox Pro",
  description:
    "Get in touch with Ebox Pro for 3PL warehousing and e-commerce fulfillment services in Dubai, UAE. We respond within 24 hours.",
  keywords: [
    "contact",
    "3PL",
    "fulfillment",
    "Dubai",
    "UAE",
    "e-commerce",
    "warehousing",
  ],
};

export default function ContactPage() {
  return <ContactContent />;
}
