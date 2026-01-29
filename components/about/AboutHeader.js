import React from "react";

import Container from "../ui/container";

const AboutHeader = () => {
  return (
    <section className="border-b border-dashed border-black/50 relative overflow-hidden">
      <Container
        showGlow={true}
        className="py-20 flex flex-col items-center text-center gap-8 px-4! sm:px-20!"
      >
        <a
          target="_blank"
          href="https://www.producthunt.com/products/deforge-open-beta?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-deforge"
        >
          <img
            style={{ width: "250px", height: "54px" }}
            alt="Deforge - Canva for AI Agents | Product Hunt"
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1007944&theme=dark&period=daily&t=1756041023938"
          />
        </a>

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            About Deforge
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Build AI Agents Visually, No Code Required.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutHeader;
