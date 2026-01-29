import React from "react";

import PricingCard from "./PricingCard";
import SectionHeader from "./SectionHeader";

import Container from "../ui/container";

const Pricing = () => {
  return (
    <section className="border-b border-dashed border-black/50">
      <Container className="py-16 md:py-24 px-4! sm:px-20!">
        <SectionHeader badge="Pricing" title="Our Pricing Strategy" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Subscription Plans"
            price="Monthly"
            colorClass="text-black"
            items={[
              "Free Plan: $0/month",
              "Pro Plan: $29/month",
              "Enterprise Plan: Custom",
            ]}
          />

          <PricingCard
            title="Credit System"
            price="Top-ups"
            colorClass="text-blue-600"
            items={[
              "500 Credits: $3",
              "1,000 Credits: $5",
              "2,000 Credits: $8",
              "Free plan includes 500 credits",
              "Pro plan includes 10,000 credits",
            ]}
          />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
