import React from "react";

import Container from "../ui/container";
import FounderCard from "./FounderCard";
import SectionHeader from "./SectionHeader";

const Teams = () => {
  return (
    <section className="border-b border-dashed border-black/50">
      <Container className="py-16 md:py-24 px-4! sm:px-20!">
        <SectionHeader badge="Team" title="Meet Our Founders" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FounderCard
            role="CEO"
            name="Anoy Roy Chowdhury"
            img="/founders/anoy.jpeg"
            linkedin="https://www.linkedin.com/in/anoyroyc3545/"
          />

          <FounderCard
            role="CTO"
            name="Shamba Chowdhury"
            img="/founders/shamba.jpeg"
            linkedin="https://www.linkedin.com/in/shambac/"
          />

          <FounderCard
            role="CMO"
            name="Gautam Raj"
            img="/founders/gautam.jpeg"
            linkedin="https://www.linkedin.com/in/-gautam-raj/"
          />
        </div>
      </Container>
    </section>
  );
};

export default Teams;
