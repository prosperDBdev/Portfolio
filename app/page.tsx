import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Thinking from "@/components/Thinking";
import Stack from "@/components/Stack";
import Record from "@/components/Record";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

// Structured data so search engines can connect the name, role and profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: `${site.role} (${site.focus})`,
  worksFor: { "@type": "Organization", name: "Deexon Solutions" },
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["Java", "Spring Boot", "WebSocket", "REST APIs", "React", "Next.js", "TypeScript", "MongoDB", "PostgreSQL"],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Intro />
        <Work />
        <Thinking />
        <Stack />
        <Record />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
