import React from 'react';
import Hero from "./hero";
import Media from "./companies media";
import Contact from "./sponsorcontact";
import SEO from "../common/SEO";

function MediaPage() {
    return (
        <div>
            <SEO
                title="Media Partners | Launchpad 2026"
                description="Explore the media coverage and partnerships for Launchpad 2026. Stay updated with the latest news from BITS Pilani Hyderabad's flagship event."
                keywords={['Launchpad Media Partners', 'Event Coverage', 'E-Cell BITS Hyderabad News', 'Startup Media']}
                url="https://ecellbphc.in/launchpad/media"
            />
            <Hero />
            <Media />
            <Contact />
        </div>
    );
}

export default MediaPage;
