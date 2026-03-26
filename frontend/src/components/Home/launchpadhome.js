import React from "react";
import Hero from "./lhero";
import GradientBackground from "../GradientBackground";
import Sponsor from "./sponsor";
import Past from "./past";
import Feature from "./feature";
import Partners from "./partner";
import Media from "./mediapartners";

import About from "./labout";
import ProgramsSection from "./ProgramsSection";
import SponsorshipSectionHome from "./SponsorshipSectionHome";
import SEO from "../common/SEO";
import CABlock from "./CABlock";
import HackathonSection from "./HackathonSection";

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Launchpad 2026",
    "startDate": "2026-03-15T09:00:00+05:30",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "BITS Pilani Hyderabad Campus",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jawahar Nagar, Shameerpet",
        "addressLocality": "Hyderabad",
        "postalCode": "500078",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    "description": "Annual flagship startup competition of E-Cell BITS Hyderabad.",
    "organizer": {
      "@type": "Organization",
      "name": "E-Cell BITS Hyderabad",
      "url": "https://ecellbphc.in"
    }
  };

  return (
    <>
      <SEO
        title="Launchpad 2026"
        description="The premier startup stage for student entrepreneurs. Pitch to VCs like Speciale Invest and win equity-free grants."
        keywords={['Startup', 'BITS Pilani', 'Entrepreneurship', 'Venture Capital', 'Hyderabad']}
        image="https://ecellbphc.in/og-launchpad.jpg"
        url="https://ecellbphc.in/launchpad"
        schemaData={jsonLd}
      />

      {/* First loading screen - only LP part visible with big scroll animation */}
      <Hero />

      <GradientBackground>
        {/* Next section: Secure Your Spot (Feature) */}
        <Feature />

        {/* Brand/CABlock */}
        <CABlock />

        {/* Hackathon Section */}
        <HackathonSection />

        {/* Then Events (ProgramsSection) */}
        <ProgramsSection />

        {/* Sponsorship Interactive Section */}
        <SponsorshipSectionHome />

        {/* Other sections */}
        <About />

        <Past />

        <div className="relative">
          <div id="sponsor">
            <Sponsor />
          </div>
          <div id="partner">
            <Partners />
          </div>
          <Media />
        </div>
      </GradientBackground>
    </>
  );
}

export default Home;
