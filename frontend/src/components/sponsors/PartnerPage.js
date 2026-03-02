import React from 'react';
import Hero from "./hero";
import Partners from "./companies partners";
import Contact from "./sponsorcontact";
import SEO from "../common/SEO";

function PartnerPage() {
    return (
        <div>
            <SEO
                title="Our Partners | Launchpad 2026"
                description="Meet the official partners of Launchpad 2026. Strategic partnerships that drive BITS Pilani Hyderabad's startup ecosystem."
                keywords={['Launchpad Partners', 'E-Cell BITS Hyderabad Partners', 'Strategic Partnerships', 'Startup Support']}
                url="https://ecellbphc.in/launchpad/partner"
            />
            <Hero />
            <Partners />
            <Contact />
        </div>
    );
}

export default PartnerPage;
