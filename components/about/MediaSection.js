import React from "react";

import VideoCard from "./VideoCard";
import Container from "../ui/container";
import SectionHeader from "./SectionHeader";

const MediaSection = () => {
  return (
    <section className="border-b border-dashed border-black/50">
      <Container className="py-16 md:py-24 px-4! sm:px-20!">
        <SectionHeader badge="Media" title="See Deforge in Action" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <VideoCard
            title="Demo"
            src="https://www.youtube.com/embed/a_MlMoJ_5EE"
          />

          <VideoCard
            title="Product Reveal"
            src="https://www.youtube.com/embed/22NL6FSSBT4"
          />
        </div>
      </Container>
    </section>
  );
};

export default MediaSection;
