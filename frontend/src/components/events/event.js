import React from 'react';
import Hero from "./hero";
import List from "./list";
import SEO from "../common/SEO";

function Gr() {
  return (
    <div>
      <SEO
        title="Events | Launchpad 2026"
        description="Discover the exciting lineup of events at Launchpad 2026 - from Ground Reality to Teen Tycoons and internship drives."
        keywords={['Launchpad Events', 'Ground Reality', 'Teen Tycoons', 'Internship Drive', 'Startup Expo']}
        url="https://ecellbphc.in/launchpad/events"
      />
      <Hero />
      <List />
    </div>
  );
}

export default Gr;