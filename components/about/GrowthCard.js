import React from "react";
import { TrendingUp, Users } from "lucide-react";

import Container from "../ui/container";
import SectionHeader from "./SectionHeader";

const GrowthCard = () => {
  return (
    <section className="border-b border-dashed border-black/50 bg-secondary/30">
      <Container className="py-16 px-4! sm:px-20!" showGlow={false}>
        <SectionHeader badge="Growth" title="Our Impact" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center p-8 bg-background border border-black/50 rounded-xl text-center gap-2 shadow-sm">
            <div className="p-3 rounded-full bg-green-100 mb-2">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>

            <h3 className="text-4xl font-bold">2400+</h3>

            <p className="text-muted-foreground">
              Unique visitors on launch day
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-background border border-black/50 rounded-xl text-center gap-2 shadow-sm">
            <div className="p-3 rounded-full bg-blue-100 mb-2">
              <Users className="h-8 w-8 text-blue-600" />
            </div>

            <h3 className="text-4xl font-bold">240+</h3>

            <p className="text-muted-foreground">Sign ups on launch</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrowthCard;
