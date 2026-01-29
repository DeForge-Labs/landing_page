import React from "react";

import { Badge } from "../ui/badge";

const SectionHeader = ({ badge, title }) => (
  <div className="text-center space-y-2 mb-12">
    <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
      {badge}
    </Badge>

    <h2 className="text-2xl lg:text-4xl font-bold mt-2">{title}</h2>
  </div>
);

export default SectionHeader;
