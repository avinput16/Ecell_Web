import React from 'react';
import Hero from "./hero";
import Por from "./por";
import SEO from "../common/SEO";

function Team() {
  return (
    <div>
      <SEO
        title="Our Team | Launchpad 2026"
        description="Meet the core organizing team behind Launchpad 2026, the biggest startup event at BITS Pilani Hyderabad Campus."
        keywords={['Launchpad Team', 'E-Cell BITS Hyderabad', 'Event Organizers', 'Entrepreneurship Core Team']}
        url="https://ecellbphc.in/launchpad/team"
      />
      <Hero />
      <Por />
    </div>
  );
}

export default Team;